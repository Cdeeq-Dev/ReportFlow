import 'dotenv/config';
import { db } from './db.js';

const departments = [
  'Water / Cleaners',
  'Electrical Department',
  'Recycling',
  'Extruder 1',
  'Extruder 2',
  'Twin',
  'Mat Finishing / Store',
  'Weaving',
];

async function seed() {
  console.log('Seeding ReportFlow database...');

  const existingDepartments = await db.orm.public.Department.all();

  if (existingDepartments.length === 0) {
    await db.orm.public.Department.createAll(
      departments.map((name) => ({ name }))
    );

    console.log('Departments created.');
  } else {
    console.log('Departments already exist. Skipping department seed.');
  }

  const existingAdmin = await db.orm.public.User
    .where({ staffId: 'C1234' })
    .first();

  if (!existingAdmin) {
    await db.orm.public.User.create({
      name: 'Abubakar',
      staffId: 'C1234',
      role: 'ADMIN',
      departmentId: null,
      passwordHash: null,
    });

    console.log('Initial admin created.');
  } else {
    console.log('Initial admin already exists. Skipping admin seed.');
  }

  console.log('Seed complete.');
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});