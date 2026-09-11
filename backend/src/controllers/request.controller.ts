import type { Request, Response } from 'express';
import { db } from '../prisma/db.js';

type RequestStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'DELIVERED';

type RequestPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

const allowedPriorityValues: RequestPriority[] = [
  'LOW',
  'MEDIUM',
  'HIGH',
  'URGENT',
];

const allowedStatusValues: RequestStatus[] = [
  'PENDING',
  'PROCESSING',
  'ACCEPTED',
  'REJECTED',
  'DELIVERED',
];

export const createRequest = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { title, description, priority } = req.body as {
    title?: unknown;
    description?: unknown;
    priority?: unknown;
  };

  if (typeof title !== 'string' || typeof description !== 'string' || typeof priority !== 'string') {
    res.status(400).json({
      message: 'Title, description, and priority are required',
    });
    return;
  }

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();
  const normalizedPriority = priority.trim().toUpperCase();

  if (!trimmedTitle || !trimmedDescription || !normalizedPriority) {
    res.status(400).json({
      message: 'Title, description, and priority are required',
    });
    return;
  }

  if (!allowedPriorityValues.includes(normalizedPriority as RequestPriority)) {
    res.status(400).json({
      message: 'Invalid priority',
    });
    return;
  }

  const managerId = req.user?.userId;
  const departmentId = req.user?.departmentId;

  if (!managerId) {
    res.status(401).json({
      message: 'Authentication required',
    });
    return;
  }

  if (!departmentId) {
    res.status(400).json({
      message: 'Manager department is required',
    });
    return;
  }

  try {
    const request = await db.orm.public.Request.create({
      title: trimmedTitle,
      description: trimmedDescription,
      priority: normalizedPriority as RequestPriority,
      status: 'PENDING',
      managerId,
      departmentId,
    });

    res.status(201).json({
      message: 'Request created successfully',
      request: {
        id: request.id,
        title: request.title,
        description: request.description,
        priority: request.priority,
        status: request.status,
        managerId: request.managerId,
        departmentId: request.departmentId,
        createdAt: request.createdAt,
      },
    });
  } catch (error) {
    console.error('Request creation failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getMyRequests = async (
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
    const requests = await db.orm.public.Request.where({
      managerId,
    }).all();

    res.status(200).json(requests);
  } catch (error) {
    console.error('Failed to fetch manager requests:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getAllRequests = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const requests = await db.orm.public.Request.all();

    res.status(200).json(requests);
  } catch (error) {
    console.error('Failed to fetch all requests:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const updateRequestStatus = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const requestId = Number(req.params.requestId);

  if (!Number.isInteger(requestId) || requestId <= 0) {
    res.status(400).json({
      message: 'Invalid requestId',
    });
    return;
  }

  const { status, adminFeedback } = req.body as {
    status?: string;
    adminFeedback?: string;
  };

  if (!status || !allowedStatusValues.includes(status as RequestStatus)) {
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

  const normalizedStatus = status as RequestStatus;

  try {
    const existingRequest = await db.orm.public.Request.where({
      id: requestId,
    }).first();

    if (!existingRequest) {
      res.status(404).json({
        message: 'Request not found',
      });
      return;
    }

    const updatedRequest = await db.orm.public.Request.where({
      id: requestId,
    }).update({
      status: normalizedStatus,
      adminFeedback: adminFeedback ?? existingRequest.adminFeedback,
    });

    if (!updatedRequest) {
      res.status(404).json({
        message: 'Request not found',
      });
      return;
    }

    res.status(200).json({
      message: 'Request updated successfully',
      request: {
        id: updatedRequest.id,
        status: updatedRequest.status,
        adminFeedback: updatedRequest.adminFeedback,
        managerId: updatedRequest.managerId,
        departmentId: updatedRequest.departmentId,
        updatedAt: updatedRequest.updatedAt,
      },
    });
  } catch (error) {
    console.error('Request update failed:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
