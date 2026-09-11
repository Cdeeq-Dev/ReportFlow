import { Router } from 'express';
import { getDepartmentDashboard } from '../controllers/department.controller.js';
import {
  authenticateToken,
  requireAdmin,
} from '../middleware/auth.middleware.js';

const router = Router();

router.get('/:departmentId/dashboard', authenticateToken, requireAdmin, getDepartmentDashboard);

export default router;
