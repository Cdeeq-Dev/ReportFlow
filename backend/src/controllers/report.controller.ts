import type { Request, Response } from 'express';
import { db } from '../prisma/db.js';

type ReviewStatus = 'APPROVED' | 'REJECTED' | 'CHANGES_REQUESTED';

const allowedReviewStatuses: ReviewStatus[] = [
  'APPROVED',
  'REJECTED',
  'CHANGES_REQUESTED',
];

export const submitReport = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { title, description } = req.body as {
    title?: unknown;
    description?: unknown;
  };

  if (typeof title !== 'string' || typeof description !== 'string') {
    res.status(400).json({
      message: 'Title and description are required',
    });
    return;
  }

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();

  if (!trimmedTitle || !trimmedDescription) {
    res.status(400).json({
      message: 'Title and description are required',
    });
    return;
  }

  const managerId = req.user?.userId;
  const departmentId = req.user?.departmentId;

  if (!managerId || !departmentId) {
    res.status(400).json({
      message: 'Manager department is required',
    });
    return;
  }

  try {
    const report = await db.orm.public.Report.create({
      title: trimmedTitle,
      description: trimmedDescription,
      managerId,
      departmentId,
      status: 'PENDING',
    });

    res.status(201).json({
      message: 'Report submitted successfully',
      report: {
        id: report.id,
        title: report.title,
        description: report.description,
        status: report.status,
        managerId: report.managerId,
        departmentId: report.departmentId,
        createdAt: report.createdAt,
      },
    });
  } catch (error) {
    console.error('Report submission failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getMyReports = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const managerId = req.user?.userId;

  if (!managerId) {
    res.status(401).json({
      message: 'Authentication required',
    });
    return;
  }

  try {
    const reports = await db.orm.public.Report.where({
      managerId,
    }).all();

    res.status(200).json(reports);
  } catch (error) {
    console.error('Failed to fetch manager reports:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getAllReports = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const reports = await db.orm.public.Report.all();

    res.status(200).json(reports);
  } catch (error) {
    console.error('Failed to fetch all reports:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const reviewReport = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const reportId = Number(req.params.reportId);

  if (!Number.isInteger(reportId) || reportId <= 0) {
    res.status(400).json({
      message: 'Invalid reportId',
    });
    return;
  }

  const { status, adminFeedback } = req.body as {
    status?: string;
    adminFeedback?: string;
  };

  if (!status || !allowedReviewStatuses.includes(status as ReviewStatus)) {
    res.status(400).json({
      message: 'Invalid status',
    });
    return;
  }

  if (adminFeedback !== undefined && typeof adminFeedback !== 'string') {
    res.status(400).json({
      message: 'adminFeedback must be a string when provided',
    });
    return;
  }

  const normalizedStatus = status as ReviewStatus;

  try {
    const existingReport = await db.orm.public.Report.where({
      id: reportId,
    }).first();

    if (!existingReport) {
      res.status(404).json({
        message: 'Report not found',
      });
      return;
    }

    const updatedReport = await db.orm.public.Report.where({
      id: reportId,
    }).update({
      status: normalizedStatus,
      adminFeedback: adminFeedback ?? existingReport.adminFeedback,
    });

    if (!updatedReport) {
      res.status(404).json({
        message: 'Report not found',
      });
      return;
    }

    res.status(200).json({
      message: 'Report reviewed successfully',
      report: {
        id: updatedReport.id,
        status: updatedReport.status,
        adminFeedback: updatedReport.adminFeedback,
        managerId: updatedReport.managerId,
        departmentId: updatedReport.departmentId,
        updatedAt: updatedReport.updatedAt,
      },
    });
  } catch (error) {
    console.error('Report review failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
