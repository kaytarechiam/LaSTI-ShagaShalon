import { randomBytes, scryptSync } from 'node:crypto';

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}

// The user supplies passwords through the environment; existing accounts are
// never overwritten and both accounts are created in a single transaction.
export async function seedDemoAccounts(db, { customerEmail, customerPassword, staffEmail, staffPassword }) {
  const emails = [customerEmail, staffEmail].map(value => typeof value === 'string' ? value.trim().toLowerCase() : '');
  if (!emails.every(email => email.length <= 254 && validEmail.test(email)) || emails[0] === emails[1]) {
    throw new Error('Email demo harus valid dan berbeda.');
  }
  if (![customerPassword, staffPassword].every(password => typeof password === 'string' && password.length >= 12 && password.length <= 128)) {
    throw new Error('Kata sandi demo harus memiliki 12–128 karakter.');
  }
  const accounts = [
    [emails[0], 'Pelanggan Demo', '081234567890', hashPassword(customerPassword), 'customer'],
    [emails[1], 'Resepsionis Demo', '', hashPassword(staffPassword), 'staff'],
  ];
  return db.transaction(async client => {
    const result = [];
    for (const account of accounts) {
      const inserted = await client.query(
        `INSERT INTO accounts(email,name,phone,password,role) VALUES($1,$2,$3,$4,$5)
         ON CONFLICT (email) DO NOTHING RETURNING id`, account);
      if (!inserted.rows.length) {
        throw new Error('Email demo sudah digunakan; tidak ada akun yang diubah.');
      }
      result.push({ email: account[0], role: account[4] });
    }
    return result;
  });
}
