import { db } from './prisma/db.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth.routes.js';
import managerRoutes from './routes/manager.routes.js';
import reportRoutes from './routes/report.routes.js';
import requestRoutes from './routes/request.routes.js';
import adminRoutes from './routes/admin.routes.js';
import departmentRoutes from './routes/department.routes.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/managers', managerRoutes);
app.use('/api/manager', managerRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/admin/dashboard', adminRoutes);
app.use('/api/departments', departmentRoutes);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'OK',
    message: 'ReportFlow API is running',
  });
});

app.get('/api/departments', async (_req, res) => {
  try {
    const departments = await db.orm.public.Department.all();

    res.json(departments);
  } catch (error) {
    console.error('Failed to fetch departments:', error);

    res.status(500).json({
      message: 'Failed to fetch departments',
    });
  }
});

app.get('/api/users', async (_req, res) => {
  try {
    const users = await db.orm.public.User.all();
    res.json(users);
  } catch (error) {
    console.error('Failed to fetch users:', error);

    res.status(500).json({
      message: 'Failed to fetch users',
    });
  }
});

app.use('/api/auth', authRoutes);

app.use('/api/managers', managerRoutes);

app.listen(PORT, () => {
  console.log(`ReportFlow server running on http://localhost:${PORT}`);
});