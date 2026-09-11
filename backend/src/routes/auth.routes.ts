import { Router } from 'express';
import {
  adminLogin,
  getCurrentUser,
  managerLogin,
} from '../controllers/auth.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/admin/login', adminLogin);
router.post('/manager/login', managerLogin);
router.get('/me', authenticateToken, getCurrentUser);

export default router;
