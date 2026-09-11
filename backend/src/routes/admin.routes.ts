import { Router } from 'express';
import { getDashboard } from '../controllers/admin.controller.js';
import {
  authenticateToken,
  requireAdmin,
} from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authenticateToken, requireAdmin, getDashboard);

export default router;
