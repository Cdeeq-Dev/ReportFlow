import type { Request, Response } from 'express';
import { db } from '../prisma/db.js';

export const getDashboard = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const departments = await db.orm.public.Department.all();
    const allManagers = await db.orm.public.User.where({
      role: 'MANAGER',
    }).all();
    const pendingReports = await db.orm.public.Report.where({
      status: 'PENDING',
    }).all();
    const pendingRequests = await db.orm.public.Request.where({
      status: 'PENDING',
    }).all();

    const departmentSummaries = await Promise.all(
      departments.map(async (department) => {
        const departmentManagers = allManagers.filter(
          (user) => user.departmentId === department.id,
        );

        const departmentReports = await db.orm.public.Report.where({
          departmentId: department.id,
        }).all();

        const departmentRequests = await db.orm.public.Request.where({
          departmentId: department.id,
        }).all();

        const departmentPendingReports = departmentReports.filter(
          (report) => report.status === 'PENDING',
        );

        const departmentPendingRequests = departmentRequests.filter(
          (request) => request.status === 'PENDING',
        );

        return {
          id: department.id,
          name: department.name,
          managerCount: departmentManagers.length,
          reportCount: departmentReports.length,
          requestCount: departmentRequests.length,
          pendingReports: departmentPendingReports.length,
          pendingRequests: departmentPendingRequests.length,
        };
      }),
    );

    res.status(200).json({
      overview: {
        totalDepartments: departments.length,
        totalManagers: allManagers.length,
        pendingReports: pendingReports.length,
        pendingRequests: pendingRequests.length,
      },
      departments: departmentSummaries,
    });
  } catch (error) {
    console.error('Failed to fetch admin dashboard:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
