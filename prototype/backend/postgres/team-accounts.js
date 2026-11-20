import { randomBytes, scryptSync } from 'node:crypto';
import { capsters } from '../catalog.js';

// Create one new team account, never changing an existing account or mapping.
export async function createTeamAccount(db, { email, password, role, capsterId }) {
  email = typeof email === 'string' ? email.trim().toLowerCase() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
      typeof password !== 'string' || password.length < 12 || password.length > 128 ||
      !['staff','capster','manager'].includes(role) ||
      (role === 'capster' && !capsters.some(capster => capster.id === capsterId))) {
    throw new Error('Email, kata sandi, peran, atau ID capster tidak valid.');
  }
  const salt = randomBytes(16).toString('hex');
  const hash = salt + ':' + scryptSync(password, salt, 64).toString('hex');
  const name = { staff:'Resepsionis', capster:'Capster', manager:'Manajer' }[role];
  return db.transaction(async tx => {
    const result = await tx.query(`INSERT INTO accounts(email,name,phone,password,role) VALUES($1,$2,'',$3,$4)
      ON CONFLICT(email) DO NOTHING RETURNING id`, [email,name,hash,role]);
    if (!result.rows.length) throw new Error('Email sudah digunakan; akun tidak diubah.');
    if (role === 'capster') {
      const mapping = await tx.query(`INSERT INTO capster_accounts(account,capster) VALUES($1,$2)
        ON CONFLICT(capster) DO NOTHING RETURNING account`, [result.rows[0].id, capsterId]);
      if (!mapping.rows.length) throw new Error('Capster sudah terhubung ke akun lain; akun tidak dibuat.');
    }
    return {email,role,capsterId: role === 'capster' ? capsterId : undefined};
  });
}
