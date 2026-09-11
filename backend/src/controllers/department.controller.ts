import type { Request, Response } from 'express';
import { db } from '../prisma/db.js';

export const getDepartmentDashboard = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const rawDepartmentId = req.params.departmentId;
  const departmentId = Number(rawDepartmentId);

  if (!Number.isInteger(departmentId) || departmentId <= 0) {
    res.status(400).json({ message: 'Invalid departmentId' });
    return;
  }

  try {
    const department = await db.orm.public.Department.where({
      id: departmentId,
    }).first();

    if (!department) {
      res.status(404).json({ message: 'Department not found' });
      return;
    }

    const managers = await db.orm.public.User.where({
      departmentId,
      role: 'MANAGER',
    }).all();

    const reports = await db.orm.public.Report.where({
      departmentId,
    }).all();

    const requests = await db.orm.public.Request.where({
      departmentId,
    }).all();

    const summary = {
      totalManagers: managers.length,
      totalReports: reports.length,
      pendingReports: reports.filter((report) => report.status === 'PENDING')
        .length,
      totalRequests: requests.length,
      pendingRequests: requests.filter((request) => request.status === 'PENDING')
        .length,
    };

    res.status(200).json({
      department: {
        id: department.id,
        name: department.name,
      },
      summary,
      managers: managers.map((manager) => ({
        id: manager.id,
        name: manager.name,
        staffId: manager.staffId,
        role: manager.role,
        isActive: manager.isActive,
      })),
      reports: reports.map((report) => ({
        id: report.id,
        title: report.title,
        description: report.description,
        status: report.status,
        adminFeedback: report.adminFeedback,
        managerId: report.managerId,
        createdAt: report.createdAt,
        updatedAt: report.updatedAt,
      })),
      requests: requests.map((request) => ({
        id: request.id,
        title: request.title,
        description: request.description,
        priority: request.priority,
        status: request.status,
        adminFeedback: request.adminFeedback,
        managerId: request.managerId,
        createdAt: request.createdAt,
        updatedAt: request.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Failed to fetch department dashboard:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
