import { Router } from 'express';

import { createManager } from '../controllers/manager.controller.js';
import {
  authenticateToken,
  requireAdmin,
} from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authenticateToken, requireAdmin, createManager);

export default router;