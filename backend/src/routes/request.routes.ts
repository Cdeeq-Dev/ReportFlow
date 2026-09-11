import { Router } from 'express';
import {
  createRequest,
  getAllRequests,
  getMyRequests,
  updateRequestStatus,
} from '../controllers/request.controller.js';
import {
  authenticateToken,
  requireAdmin,
  requireManager,
} from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authenticateToken, requireManager, createRequest);
router.get('/mine', authenticateToken, requireManager, getMyRequests);
router.get('/', authenticateToken, requireAdmin, getAllRequests);
router.patch('/:requestId/status', authenticateToken, requireAdmin, updateRequestStatus);

export default router;
