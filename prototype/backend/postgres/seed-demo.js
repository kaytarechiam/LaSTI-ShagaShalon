import { createPostgresDatabase } from './database.js';
import { seedDemoAccounts } from './demo-accounts.js';

if (process.env.SHAGA_DEMO_SEED !== 'yes' || !process.env.DATABASE_URL) {
  console.error('Gunakan database pengembangan dan tetapkan SHAGA_DEMO_SEED=yes serta DATABASE_URL.');
  process.exitCode = 1;
} else {
  const db = createPostgresDatabase(process.env.DATABASE_URL);
  try {
    const accounts = await seedDemoAccounts(db, {
      customerEmail: process.env.SHAGA_DEMO_CUSTOMER_EMAIL,
      customerPassword: process.env.SHAGA_DEMO_CUSTOMER_PASSWORD,
      staffEmail: process.env.SHAGA_DEMO_STAFF_EMAIL,
      staffPassword: process.env.SHAGA_DEMO_STAFF_PASSWORD,
    });
    console.log('Akun demo dibuat:', accounts.map(account => account.role).join(', '));
  } catch (error) {
    // Avoid printing a connection error, which might contain a credential.
    console.error('Akun demo tidak dibuat.', /^[0-9A-Z]{5}$/.test(error.code || '') ? error.code : error.name);
    process.exitCode = 1;
  } finally {
    await db.close();
  }
}
