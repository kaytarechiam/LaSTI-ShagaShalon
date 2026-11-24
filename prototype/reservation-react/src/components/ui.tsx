import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  History,
  Home,
  LogOut,
  Menu,
  Settings,
  UserRound,
  Users,
  X,
} from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'motion/react';
import { api, PAYMENT_STATUS_LABELS, ROLE_LABELS, STATUS_LABELS, type Account } from '../api';

export function go(url: string) {
  location.assign(url);
}

export function Notice({ text, tone = 'error' }: { text: string; tone?: 'error' | 'info' | 'success' }) {
  if (!text) return null;
  const cls =
    tone === 'success'
      ? 'm-notice m-notice-success'
      : tone === 'info'
        ? 'm-notice m-notice-info'
        : 'm-notice';
  return (
    <p className={cls} role={tone === 'error' ? 'alert' : 'status'}>
      {text}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="m-page-heading">
      <div>
        <span className="m-eyebrow">{eyebrow}</span>
        <h1 tabIndex={-1}>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="m-page-actions">{actions}</div>}
    </div>
  );
}

export function StatusBadge({
  status,
  variant = 'reservation',
}: {
  status: string;
  variant?: 'reservation' | 'payment' | 'channel';
}) {
  if (variant === 'payment') {
    const label = PAYMENT_STATUS_LABELS[status] || status;
    const tone =
      status === 'PAID'
        ? 'is-success'
        : status === 'UNPAID' || status === 'READY'
          ? 'is-warning'
          : 'is-muted';
    return (
      <span className={`m-pill ${tone}`}>
        <span className="m-pill-dot" aria-hidden="true" />
        {label}
      </span>
    );
  }
  if (variant === 'channel') {
    const isWalkIn = status === 'WALK_IN';
    return (
      <span className={`m-pill ${isWalkIn ? 'is-clay' : 'is-neutral'}`}>
        {isWalkIn ? 'Walk-in' : 'Reservasi'}
      </span>
    );
  }
  const label = STATUS_LABELS[status] || status;
  const tone =
    status === 'CONFIRMED' || status === 'DONE'
      ? 'is-success'
      : status === 'ACTIVE'
        ? 'is-active'
        : status === 'WAITING'
          ? 'is-clay'
          : 'is-warning';
  return (
    <span className={`m-pill ${tone}`}>
      <span className="m-pill-dot" aria-hidden="true" />
      {label}
    </span>
  );
}

export function MetricCard({
  label,
  value,
  hint,
  tone = 'default',
  icon,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  tone?: 'default' | 'accent' | 'success' | 'warning';
  icon?: ReactNode;
}) {
  return (
    <div className={`m-metric-card tone-${tone}`}>
      <div className="m-metric-top">
        <span className="m-metric-label">{label}</span>
        {icon && (
          <span className="m-metric-icon" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
      <strong className="m-metric-value">{value}</strong>
      {hint && <small className="m-metric-hint">{hint}</small>}
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="m-empty">
      {icon && <div className="m-empty-icon">{icon}</div>}
      <div className="m-empty-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
}: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="m-overlay" />
        <Dialog.Content className="m-modal" asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
          >
            <div className="m-modal-head">
              <div>
                <Dialog.Title className="m-modal-title">{title}</Dialog.Title>
                {description && <Dialog.Description className="m-modal-desc">{description}</Dialog.Description>}
              </div>
              <Dialog.Close className="m-icon-button" aria-label="Tutup dialog">
                <X size={20} />
              </Dialog.Close>
            </div>
            <div className="m-modal-body">{children}</div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
  match?: (pathname: string, hash: string) => boolean;
}

function getNavItems(account: Account): NavItem[] {
  switch (account.role) {
    case 'staff':
      return [
        {
          label: 'Meja Resepsionis',
          href: '/resepsionis',
          icon: <ClipboardList size={18} />,
          match: (p, h) => p === '/resepsionis' && h !== '#antrean',
        },
        {
          label: 'Antrean Harian',
          href: '/resepsionis#antrean',
          icon: <Users size={18} />,
          match: (p, h) => p === '/resepsionis' && h === '#antrean',
        },
        {
          label: 'Buat Reservasi',
          href: '/reservasi',
          icon: <CalendarDays size={18} />,
          match: (p) => p === '/reservasi',
        },
        {
          label: 'Profil',
          href: '/profil',
          icon: <UserRound size={18} />,
          match: (p) => p === '/profil',
        },
      ];
    case 'capster':
      return [
        {
          label: 'Jadwal Pelayanan',
          href: '/capster',
          icon: <CalendarDays size={18} />,
          match: (p) => p === '/capster',
        },
        {
          label: 'Profil',
          href: '/profil',
          icon: <UserRound size={18} />,
          match: (p) => p === '/profil',
        },
      ];
    case 'manager':
      return [
        {
          label: 'Ringkasan & Laporan',
          href: '/manajemen',
          icon: <BarChart3 size={18} />,
          match: (p, h) => p === '/manajemen' && h !== '#pengaturan',
        },
        {
          label: 'Pengaturan Salon',
          href: '/manajemen#pengaturan',
          icon: <Settings size={18} />,
          match: (p, h) => p === '/manajemen' && h === '#pengaturan',
        },
        {
          label: 'Profil',
          href: '/profil',
          icon: <UserRound size={18} />,
          match: (p) => p === '/profil',
        },
      ];
    default:
      return [
        {
          label: 'Beranda',
          href: '/beranda',
          icon: <Home size={18} />,
          match: (p) => p === '/beranda',
        },
        {
          label: 'Reservasi',
          href: '/reservasi',
          icon: <CalendarDays size={18} />,
          match: (p) => p === '/reservasi',
        },
        {
          label: 'Riwayat',
          href: '/akun',
          icon: <History size={18} />,
          match: (p) => p === '/akun',
        },
        {
          label: 'Profil',
          href: '/profil',
          icon: <UserRound size={18} />,
          match: (p) => p === '/profil',
        },
      ];
  }
}

export function Shell({
  account,
  path,
  children,
}: {
  account: Account | null;
  path: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() => location.hash);
  const [logoutError, setLogoutError] = useState('');

  useEffect(() => {
    const syncHash = () => setHash(location.hash);
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    if (account) return;
    let active = true;
    document.body.classList.add('m-public-auth');
    const entry = '/reservation-ui/shared-nav.js';
    void import(/* @vite-ignore */ entry).then(({ mountNav }) => {
      const host = document.querySelector('#shared-nav');
      if (active && host) void mountNav(host, null, () => api('/logout', {}));
    });
    return () => {
      active = false;
      document.body.classList.remove('m-public-auth');
    };
  }, [account]);

  useEffect(() => {
    const mainEl = document.querySelector('#app');
    if (mainEl && account) {
      mainEl.setAttribute('aria-label', `${ROLE_LABELS[account.role]} · Shaga Salon`);
    }
  }, [account]);

  const logout = async () => {
    try {
      await api('/logout', {});
      go('/');
    } catch {
      setOpen(false);
      setLogoutError('Belum berhasil keluar. Silakan coba lagi.');
    }
  };

  if (!account) {
    return (
      <div className="m-app">
        <div className="m-main">
          {logoutError && <Notice text={logoutError} />}
          {children}
        </div>
        <footer className="m-footer">
          <span>SHAGA SALON · SURABAYA</span>
          <a href="/">
            Kembali ke website salon <ArrowRight size={15} />
          </a>
        </footer>
      </div>
    );
  }

  const isTeam = account.role !== 'customer';
  const navItems = getNavItems(account);
  const homeUrl =
    account.role === 'staff'
      ? '/resepsionis'
      : account.role === 'capster'
        ? '/capster'
        : account.role === 'manager'
          ? '/manajemen'
          : '/beranda';

  const isActive = (item: NavItem) => (item.match ? item.match(path, hash) : path === item.href);

  if (isTeam) {
    return (
      <div className="m-app m-app-team">
        <aside className="m-sidebar" aria-label="Navigasi tim salon">
          <div className="m-sidebar-top">
            <a className="m-brand m-brand-light" href={homeUrl}>
              <span>Shaga</span>
              <small>SALON · OPERASIONAL</small>
            </a>
            <div className="m-user-chip is-sidebar">
              <span className="m-user-avatar" aria-hidden="true">
                {account.name.trim().charAt(0).toUpperCase()}
              </span>
              <div className="m-user-meta">
                <strong>{account.name}</strong>
                <small>{ROLE_LABELS[account.role]}</small>
              </div>
            </div>
            <nav className="m-sidebar-nav" aria-label="Menu utama tim">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`m-sidebar-link ${active ? 'is-active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="m-sidebar-bottom">
            <a href="/" className="m-sidebar-secondary">
              <ExternalLink size={16} />
              <span>Website publik</span>
            </a>
            <button type="button" className="m-sidebar-logout" onClick={logout}>
              <LogOut size={16} />
              <span>Keluar</span>
            </button>
          </div>
        </aside>

        <div className="m-team-frame">
          <header className="m-team-mobile-bar">
            <a className="m-brand m-brand-dark" href={homeUrl}>
              <span>Shaga</span>
              <small>{ROLE_LABELS[account.role]}</small>
            </a>
            <div className="m-team-mobile-actions">
              <span className="m-role-tag">{account.name.split(' ')[0]}</span>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button type="button" className="m-icon-button" aria-label="Buka menu navigasi">
                    <Menu size={22} />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="m-overlay" />
                  <Dialog.Content className="m-mobile-menu">
                    <div className="m-menu-top">
                      <Dialog.Title>Menu Operasional</Dialog.Title>
                      <Dialog.Close className="m-icon-button" aria-label="Tutup menu">
                        <X size={22} />
                      </Dialog.Close>
                    </div>
                    <Dialog.Description className="m-muted">
                      {account.name} · {ROLE_LABELS[account.role]}
                    </Dialog.Description>
                    <div className="m-mobile-links">
                      {navItems.map((item) => {
                        const active = isActive(item);
                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            className={active ? 'is-active' : undefined}
                            onClick={() => setOpen(false)}
                          >
                            <span>
                              {item.icon} {item.label}
                            </span>
                            <ArrowRight size={17} />
                          </a>
                        );
                      })}
                      <a href="/" onClick={() => setOpen(false)}>
                        <span>
                          <ExternalLink size={17} /> Website publik
                        </span>
                        <ArrowRight size={17} />
                      </a>
                      <button type="button" onClick={logout}>
                        <span>
                          <LogOut size={17} /> Keluar
                        </span>
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </header>

          <motion.div
            key={path}
            className="m-main m-main-team"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
          >
            <Notice text={logoutError} />
            {children}
          </motion.div>

          <footer className="m-footer m-footer-team">
            <span>SHAGA SALON · SURABAYA · ZONA WAKTU WIB</span>
            <a href="/">
              Lihat website publik <ArrowRight size={15} />
            </a>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="m-app">
      <header className="m-header">
        <a className="m-brand m-brand-dark" href={homeUrl}>
          <span>Shaga</span>
          <small>SALON · SURABAYA</small>
        </a>
        <nav className="m-desktop m-header-nav" aria-label="Navigasi utama">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <a key={item.href} href={item.href} aria-current={active ? 'page' : undefined}>
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="m-header-right m-desktop">
          <a href="/profil" className="m-user-pill" title={`${account.name} (${ROLE_LABELS[account.role]})`}>
            <CheckCircle2 size={14} aria-hidden="true" />
            <span>{account.name.split(' ')[0]}</span>
          </a>
          <button type="button" className="m-logout" onClick={logout}>
            Keluar <ArrowRight size={15} />
          </button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button type="button" className="m-mobile m-icon-button" aria-label="Buka menu">
              <Menu size={22} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="m-overlay" />
            <Dialog.Content className="m-mobile-menu">
              <div className="m-menu-top">
                <Dialog.Title>Menu Shaga</Dialog.Title>
                <Dialog.Close className="m-icon-button" aria-label="Tutup menu">
                  <X size={22} />
                </Dialog.Close>
              </div>
              <Dialog.Description className="m-muted">
                Masuk sebagai {account.name} ({ROLE_LABELS[account.role]})
              </Dialog.Description>
              <div className="m-mobile-links">
                {navItems.map((item) => {
                  const active = isActive(item);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={active ? 'is-active' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      <span>
                        {item.icon} {item.label}
                      </span>
                      <ArrowRight size={17} />
                    </a>
                  );
                })}
                <a href="/" onClick={() => setOpen(false)}>
                  <span>
                    <ExternalLink size={17} /> Website publik
                  </span>
                  <ArrowRight size={17} />
                </a>
                <button type="button" onClick={logout}>
                  <span>
                    <LogOut size={17} /> Keluar
                  </span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </header>

      <motion.div
        key={path}
        className="m-main"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
      >
        <Notice text={logoutError} />
        {children}
      </motion.div>

      <footer className="m-footer">
        <span>SHAGA SALON · SURABAYA</span>
        <a href="/">
          Kembali ke website salon <ArrowRight size={15} />
        </a>
      </footer>
    </div>
  );
}
