import { useEffect, useState, type FormEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import { api, errorMessage, type Account, type Catalog, type Role } from './api';
import { go, Notice, Shell } from './components/ui';
import {
  BookingFlow,
  CustomerHome,
  ProfileView,
  ReservationDetail,
  ReservationHistory,
} from './CustomerViews';
import { StaffDeskView } from './StaffDeskView';
import { CapsterView } from './CapsterView';
import { ManagerView } from './ManagerView';
import './style.css';

const path = location.pathname.replace(/\/$/, '') || '/reservasi';
const query = new URLSearchParams(location.search);
const teamHome: Record<Role, string> = {
  customer: '/beranda',
  staff: '/resepsionis',
  capster: '/capster',
  manager: '/manajemen',
};

function Auth() {
  const register = path === '/daftar';
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const carry = query.toString() ? '?' + query.toString() : '';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError('');
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    try {
      await api(register ? '/register' : '/login', values);
      const { account } = await api<{ account: Account }>('/session');
      if (account.role !== 'customer') {
        go(teamHome[account.role]);
      } else {
        go(query.size ? '/reservasi' + carry : '/beranda');
      }
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell account={null} path={path}>
      <section className="m-auth-layout">
        <div className="m-auth-art">
          <div className="m-art-caption">
            <span>WAKTU UNTUK DIRIMU</span>
            <h1>
              Perawatan yang
              <br />
              <em>dimulai dari sini.</em>
            </h1>
            <p>Rencanakan waktumu, kami siapkan ruangnya.</p>
          </div>
        </div>
        <motion.div
          className="m-auth-form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="m-eyebrow">SHAGA SALON / AKUN</span>
          <h2>{register ? 'Buat akun' : 'Selamat datang kembali.'}</h2>
          <p className="m-muted">
            {register
              ? 'Mulai dengan membuat akun untuk menyimpan reservasi.'
              : 'Masuk untuk mengatur jadwal perawatanmu.'}
          </p>
          <form onSubmit={submit} className="m-form">
            {register && (
              <>
                <label>
                  Nama lengkap
                  <input name="name" autoComplete="name" required minLength={2} maxLength={100} />
                </label>
                <label>
                  Nomor telepon
                  <input name="phone" type="tel" autoComplete="tel" required maxLength={22} />
                </label>
              </>
            )}
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nama@email.com"
                required
                maxLength={254}
              />
            </label>
            <label>
              Kata sandi
              <input
                name="password"
                type="password"
                autoComplete={register ? 'new-password' : 'current-password'}
                required
                minLength={register ? 8 : undefined}
                maxLength={128}
              />
            </label>
            {register && (
              <>
                <small>Minimal 8 karakter.</small>
                <label>
                  Konfirmasi kata sandi
                  <input
                    name="confirmation"
                    type="password"
                    autoComplete="new-password"
                    required
                    maxLength={128}
                  />
                </label>
              </>
            )}
            <Notice text={error} />
            <button className="m-primary" disabled={busy}>
              {busy ? 'Memproses…' : register ? 'Buat akun' : 'Masuk'} <ArrowRight size={18} />
            </button>
          </form>
          <p className="m-auth-switch">
            {register ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
            <a href={(register ? '/login' : '/daftar') + carry}>
              {register ? 'Masuk' : 'Daftar sekarang'}
            </a>
          </p>
        </motion.div>
      </section>
    </Shell>
  );
}

function App() {
  const [session, setSession] = useState<Account | null | undefined>();
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const titles: Record<string, string> = {
      '/login': 'Masuk',
      '/daftar': 'Daftar',
      '/beranda': 'Beranda',
      '/akun': 'Reservasi saya',
      '/profil': 'Profil saya',
      '/reservasi': 'Reservasi',
      '/resepsionis': 'Meja Resepsionis',
      '/capster': 'Jadwal Capster',
      '/manajemen': 'Ringkasan & Operasional',
    };
    document.title = (titles[path] || 'Shaga Salon') + ' · Shaga Salon';
  }, []);

  useEffect(() => {
    api<{ account: Account | null }>('/session')
      .then(async ({ account }) => {
        if (!account && path !== '/login' && path !== '/daftar') {
          go('/login' + (location.search || (path === '/reservasi' ? '?lanjut=reservasi' : '')));
          return;
        }
        if (account && (path === '/login' || path === '/daftar')) {
          if (account.role !== 'customer') {
            go(teamHome[account.role]);
          } else {
            go(query.size ? '/reservasi' + location.search : '/beranda');
          }
          return;
        }
        if (account) {
          const isAllowed =
            path === '/profil' ||
            (account.role === 'customer' && ['/beranda', '/reservasi', '/akun'].includes(path)) ||
            (account.role === 'staff' && ['/resepsionis', '/reservasi'].includes(path)) ||
            (account.role === 'capster' && path === '/capster') ||
            (account.role === 'manager' && path === '/manajemen');

          if (!isAllowed) {
            go(teamHome[account.role]);
            return;
          }

          const needsCatalog =
            (account.role === 'customer' && ['/beranda', '/reservasi', '/akun'].includes(path)) ||
            (account.role === 'staff' && path === '/reservasi');

          if (needsCatalog) {
            setCatalog(await api<Catalog>('/catalog'));
          }
        }
        setSession(account);
      })
      .catch((e) => setError(errorMessage(e)));
  }, []);

  if (error) {
    return (
      <Shell account={null} path={path}>
        <Notice text={error} />
      </Shell>
    );
  }
  if (session === undefined) {
    return (
      <p className="m-boot" role="status">
        Menyiapkan Shaga Salon…
      </p>
    );
  }
  if (!session) {
    return <Auth />;
  }

  const needsCatalog =
    (session.role === 'customer' && ['/beranda', '/reservasi', '/akun'].includes(path)) ||
    (session.role === 'staff' && path === '/reservasi');

  if (needsCatalog && !catalog) {
    return (
      <Shell account={session} path={path}>
        <div className="m-loading-box" role="status">
          Memuat katalog layanan…
        </div>
      </Shell>
    );
  }

  let view = null;
  if (path === '/profil') {
    view = <ProfileView account={session} onAccountUpdate={setSession} />;
  } else if (session.role === 'staff' && path === '/resepsionis') {
    view = <StaffDeskView />;
  } else if (session.role === 'capster' && path === '/capster') {
    view = <CapsterView />;
  } else if (session.role === 'manager' && path === '/manajemen') {
    view = <ManagerView />;
  } else if (path === '/reservasi' && query.has('id') && catalog) {
    view = <ReservationDetail id={query.get('id') || ''} catalog={catalog} account={session} />;
  } else if (path === '/reservasi' && catalog) {
    view = <BookingFlow account={session} catalog={catalog} query={query} />;
  } else if (path === '/akun' && catalog) {
    view = <ReservationHistory account={session} catalog={catalog} />;
  } else if (catalog) {
    view = <CustomerHome account={session} catalog={catalog} />;
  }

  return (
    <Shell account={session} path={path}>
      {view}
    </Shell>
  );
}

document.body.classList.add('m-root');
const container = document.querySelector('#app');
if (container) {
  createRoot(container).render(
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  );
}
