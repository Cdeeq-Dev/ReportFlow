import { Router } from 'express';

import {
  createManager,
  getAllManagers,
  getManagerDashboard,
  updateManagerStatus,
} from '../controllers/manager.controller.js';
import {
  authenticateToken,
  requireAdmin,
  requireManager,
} from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authenticateToken, requireAdmin, createManager);
router.get('/', authenticateToken, requireAdmin, getAllManagers);
router.get('/dashboard', authenticateToken, requireManager, getManagerDashboard);
router.patch('/:managerId/status', authenticateToken, requireAdmin, updateManagerStatus);

export default router;