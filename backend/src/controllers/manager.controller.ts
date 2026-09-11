import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import { db } from '../prisma/db.js';

export const getAllManagers = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const managers = await db.orm.public.User.where({
      role: 'MANAGER',
    }).all();

    res.status(200).json({
      managers: managers.map((manager) => ({
        id: manager.id,
        name: manager.name,
        staffId: manager.staffId,
        role: manager.role,
        departmentId: manager.departmentId,
        isActive: manager.isActive,
        createdAt: manager.createdAt,
      })),
    });
  } catch (error) {
    console.error('Failed to fetch managers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateManagerStatus = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const managerId = Number(req.params.managerId);

  if (!Number.isInteger(managerId) || managerId <= 0) {
    res.status(400).json({ message: 'Invalid managerId' });
    return;
  }

  const { isActive } = req.body as { isActive?: unknown };

  if (typeof isActive !== 'boolean') {
    res.status(400).json({ message: 'isActive must be a boolean' });
    return;
  }

  try {
    const manager = await db.orm.public.User.where({
      id: managerId,
    }).first();

    if (!manager) {
      res.status(404).json({ message: 'Manager not found' });
      return;
    }

    if (manager.role !== 'MANAGER') {
      res.status(400).json({ message: 'Only manager accounts can be updated here' });
      return;
    }

    const updatedManager = await db.orm.public.User.where({
      id: managerId,
    }).update({
      isActive,
    });

    if (!updatedManager) {
      res.status(404).json({ message: 'Manager not found' });
      return;
    }

    res.status(200).json({
      message: 'Manager status updated successfully',
      manager: {
        id: updatedManager.id,
        name: updatedManager.name,
        staffId: updatedManager.staffId,
        role: updatedManager.role,
        departmentId: updatedManager.departmentId,
        isActive: updatedManager.isActive,
      },
    });
  } catch (error) {
    console.error('Failed to update manager status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getManagerDashboard = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const managerId = req.user?.userId;
  const departmentId = req.user?.departmentId;

  if (!managerId) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }

  if (!departmentId) {
    res.status(400).json({ message: 'Manager department is required' });
    return;
  }

  try {
    const manager = await db.orm.public.User.where({
      id: managerId,
      role: 'MANAGER',
    }).first();

    if (!manager) {
      res.status(404).json({ message: 'Manager not found' });
      return;
    }

    const department = await db.orm.public.Department.where({
      id: departmentId,
    }).first();

    if (!department) {
      res.status(404).json({ message: 'Department not found' });
      return;
    }

    const reports = await db.orm.public.Report.where({
      managerId,
      departmentId,
    }).all();

    const requests = await db.orm.public.Request.where({
      managerId,
      departmentId,
    }).all();

    res.status(200).json({
      manager: {
        id: manager.id,
        name: manager.name,
        staffId: manager.staffId,
        role: manager.role,
      },
      department: {
        id: department.id,
        name: department.name,
      },
      summary: {
        totalReports: reports.length,
        pendingReports: reports.filter((report) => report.status === 'PENDING')
          .length,
        totalRequests: requests.length,
        pendingRequests: requests.filter((request) => request.status === 'PENDING')
          .length,
      },
      reports,
      requests,
    });
  } catch (error) {
    console.error('Failed to fetch manager dashboard:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

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
