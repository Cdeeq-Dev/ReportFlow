import { Router } from 'express';
import {
  getAllReports,
  getMyReports,
  reviewReport,
  submitReport,
} from '../controllers/report.controller.js';
import {
  authenticateToken,
  requireAdmin,
  requireManager,
} from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authenticateToken, requireManager, submitReport);
router.get('/mine', authenticateToken, requireManager, getMyReports);
router.get('/', authenticateToken, requireAdmin, getAllReports);
router.patch('/:reportId/review', authenticateToken, requireAdmin, reviewReport);

export default router;
