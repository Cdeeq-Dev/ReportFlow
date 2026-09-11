import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../prisma/db.js';

const createToken = (
  userId: number,
  role: 'ADMIN' | 'MANAGER',
  departmentId: number | null,
): string => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not configured');
  }

  return jwt.sign({ userId, role, departmentId }, jwtSecret, {
    expiresIn: '8h',
  });
};

export const adminLogin = async (req: Request, res: Response): Promise<void> => {
  const { name, staffId } = req.body as { name?: string; staffId?: string };

  if (!name || !staffId) {
    res.status(400).json({
      message: 'Name and staffId are required',
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

  try {
    const user = await db.orm.public.User.where({
      staffId: trimmedStaffId,
    }).first();

    if (!user) {
      res.status(401).json({
        message: 'Invalid admin credentials',
      });
      return;
    }

    if (user.role !== 'ADMIN') {
      res.status(403).json({
        message: 'Access denied. Admin account required',
      });
      return;
    }

    if (user.name !== trimmedName) {
      res.status(401).json({
        message: 'Invalid admin credentials',
      });
      return;
    }

    if (!user.isActive) {
      res.status(403).json({
        message: 'This admin account is inactive',
      });
      return;
    }

    const token = createToken(user.id, user.role, user.departmentId);

    res.status(200).json({
      message: 'Admin login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        staffId: user.staffId,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Admin login failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const managerLogin = async (req: Request, res: Response): Promise<void> => {
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
  const parsedDepartmentId = Number(departmentId);

  if (!trimmedName || !trimmedStaffId) {
    res.status(400).json({
      message: 'Name and staffId are required',
    });
    return;
  }

  if (!Number.isInteger(parsedDepartmentId) || parsedDepartmentId <= 0) {
    res.status(400).json({
      message: 'Invalid departmentId',
    });
    return;
  }

  try {
    const user = await db.orm.public.User.where({
      staffId: trimmedStaffId,
    }).first();

    if (!user) {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    if (user.role !== 'MANAGER') {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    if (!user.isActive) {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    if (user.name !== trimmedName) {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    if (user.departmentId !== parsedDepartmentId) {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    if (!user.passwordHash) {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      res.status(401).json({
        message: 'Invalid manager credentials',
      });
      return;
    }

    const token = createToken(user.id, user.role, user.departmentId);

    res.status(200).json({
      message: 'Manager login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        staffId: user.staffId,
        role: user.role,
        departmentId: user.departmentId,
      },
    });
  } catch (error) {
    console.error('Manager login failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
