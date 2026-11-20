import { createPostgresDatabase } from './database.js';
import { createTeamAccount } from './team-accounts.js';

if (!process.env.DATABASE_URL || process.env.SHAGA_CREATE_TEAM !== 'yes') {
  console.error('Tetapkan DATABASE_URL dan SHAGA_CREATE_TEAM=yes sebelum membuat akun tim.');
  process.exitCode = 1;
} else {
  const db = createPostgresDatabase(process.env.DATABASE_URL);
  try {
    const account = await createTeamAccount(db, { email:process.env.SHAGA_TEAM_EMAIL, password:process.env.SHAGA_TEAM_PASSWORD,
      role:process.env.SHAGA_TEAM_ROLE, capsterId:process.env.SHAGA_CAPSTER_ID });
    console.log('Akun tim dibuat:', account.email, account.role, account.capsterId || '');
  } catch (error) {
    console.error('Akun tim tidak dibuat:', /^[0-9A-Z]{5}$/.test(error.code || '') ? error.code : error.name);
    process.exitCode = 1;
  } finally { await db.close(); }
}
