// PostgreSQL account/session storage. Passwords and session tokens must be
// hashed by the caller before these functions are invoked.
export function createAccountStore(db) {
  return {
    async findByEmail(email) {
      const { rows } = await db.query('SELECT id,email,name,phone,password,role FROM accounts WHERE email=$1', [email]);
      return rows[0] || null;
    },
    async register({ email, name, phone, password }) {
      const { rows } = await db.query(
        `INSERT INTO accounts(email,name,phone,password,role) VALUES($1,$2,$3,$4,'customer')
         ON CONFLICT (email) DO NOTHING RETURNING id`, [email, name, phone, password]);
      return rows[0]?.id ?? null;
    },
    async findSession(tokenHash, now = Date.now()) {
      const { rows } = await db.query(
        `SELECT a.id,a.name,a.email,a.phone,a.role FROM sessions s
         JOIN accounts a ON a.id=s.account WHERE s.token=$1 AND s.expires>$2`, [tokenHash, now]);
      return rows[0] || null;
    },
    async replaceSession(oldHash, tokenHash, accountId, expires, now = Date.now()) {
      await db.transaction(async client => {
        if (oldHash) await client.query('DELETE FROM sessions WHERE token=$1', [oldHash]);
        await client.query('DELETE FROM sessions WHERE expires<=$1', [now]);
        await client.query('INSERT INTO sessions(token,account,expires) VALUES($1,$2,$3)', [tokenHash, accountId, expires]);
      });
    },
    async removeSession(tokenHash) {
      await db.query('DELETE FROM sessions WHERE token=$1', [tokenHash]);
    },
    async updateProfile(accountId, name, phone) {
      const { rows } = await db.query(
        'UPDATE accounts SET name=$2,phone=$3 WHERE id=$1 RETURNING id,name,email,phone,role', [accountId, name, phone]);
      return rows[0] || null;
    },
  };
}
