import { Router } from 'express';
import { adminLogin, managerLogin } from '../controllers/auth.controller.js';

const router = Router();

router.post('/admin/login', adminLogin);
router.post('/manager/login', managerLogin);

export default router;
