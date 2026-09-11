import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { db } from '../prisma/db.js';

export const createManager = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, staffId, departmentId, password } = req.body as {
    name?: string;
    staffId?: string;
    departmentId?: number | string;
    password?: string;
  };

  if (!name || !staffId || !departmentId || !password) {
    res.status(400).json({
      message: 'Name, staffId, departmentId, and password are required',
    });
    return;
  }

  const trimmedName = name.trim();
  const trimmedStaffId = staffId.trim();

  if (!trimmedName || !trimmedStaffId) {
    res.status(400).json({
      message: 'Name and staffId are required',
    });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({
      message: 'Password must be at least 6 characters long',
    });
    return;
  }

  const parsedDepartmentId = Number(departmentId);

  if (!Number.isInteger(parsedDepartmentId) || parsedDepartmentId <= 0) {
    res.status(400).json({
      message: 'Invalid departmentId',
    });
    return;
  }

  try {
    const existingUser = await db.orm.public.User.where({
      staffId: trimmedStaffId,
    }).first();

    if (existingUser) {
      res.status(409).json({
        message: 'A user with this staffId already exists',
      });
      return;
    }
    
    const department = await db.orm.public.Department.where({
      id: parsedDepartmentId,
    }).first();

    if (!department) {
      res.status(404).json({
        message: 'Department not found',
      });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const manager = await db.orm.public.User.create({
      name: trimmedName,
      staffId: trimmedStaffId,
      role: 'MANAGER',
      departmentId: parsedDepartmentId,
      isActive: true,
      passwordHash,
    });

    res.status(201).json({
      message: 'Manager created successfully',
      manager: {
        id: manager.id,
        name: manager.name,
        staffId: manager.staffId,
        role: manager.role,
        departmentId: manager.departmentId,
        isActive: manager.isActive,
      },
    });
  } catch (error) {
    console.error('Manager creation failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
