import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type JwtPayload = {
  userId: number;
  role: 'ADMIN' | 'MANAGER';
  departmentId: number | null;
};

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    console.error('JWT_SECRET is not configured');
    res.status(500).json({ message: 'Server configuration error' });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.user || req.user.role !== 'ADMIN') {
    res.status(403).json({ message: 'Admin access required' });
    return;
  }

  next();
};

export const requireManager = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.user || req.user.role !== 'MANAGER') {
    res.status(403).json({ message: 'Manager access required' });
    return;
  }

  next();
};
