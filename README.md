# Shaga Salon

Aplikasi web terpadu untuk **reservasi layanan salon, manajemen antrean kunjungan, penjadwalan tim, penyelesaian kasir, dan pelaporan operasional** pada **Shaga Salon**.

- **Aplikasi Live (Vercel):** [shaga-salon.vercel.app](https://shaga-salon.vercel.app/)
- **Database Produksi:** Neon PostgreSQL (`Asia/Jakarta` / WIB)
- **Branch Utama:** `main`

---

## Akun Demo Sistem

Semua peran masuk melalui halaman login yang sama ([shaga-salon.vercel.app/login](https://shaga-salon.vercel.app/login)). Gunakan akun demo berikut untuk meninjau setiap alur:

| Kelompok | Peran | Email | Kata Sandi | Akses Utama |
| --- | --- | --- | --- | --- |
| Pelanggan | Pelanggan | `pelanggan.demo@shaga.example` | `Pelanggan123!` | `/beranda`, `/reservasi`, `/akun`, `/profil` |
| Tim Salon | Resepsionis & Kasir | `resepsionis.demo@shaga.example` | `Resepsionis123!` | `/resepsionis`, `/resepsionis#kalender`, `/reservasi` |
| Tim Salon | Capster | `capster.demo@shaga.example` | `Capster123!` | `/capster`, `/capster#kalender`, `/profil` |
| Tim Salon | Manajer | `manajer.demo@shaga.example` | `Manajer123!` | `/manajemen`, `/manajemen#kalender`, `/manajemen#pengaturan` |

> Akun di atas ditujukan untuk demonstrasi sistem. Hindari memasukkan data pribadi atau transaksi sensitif nyata.

---

## Fitur Utama

### 1. Pelanggan (`/beranda`, `/reservasi`, `/akun`, `/profil`)
- **Landing Page & Pemesanan Terhubung**: Jelajahi katalog layanan langsung dari halaman utama dan lanjutkan ke pemesanan sambil mempertahankan pilihan layanan sebelumnya.
- **Reservasi Multi-Layanan**: Pencarian layanan, filter durasi (`≤ 45 menit` / `> 45 menit`), penjumlahan total harga dan durasi otomatis, pilihan tanggal cepat, serta pilihan capster yang kompeten.
- **Pemeriksaan Slot & Konfirmasi Anti-Bentrok**: Ketersediaan jam WIB dihitung real-time berdasarkan shift capster, jam istirahat salon, blok waktu tim, jeda antarlayanan (*buffer*), dan reservasi aktif. Slot baru dikunci secara atomik saat tahap konfirmasi.
- **Pemantauan Kunjungan, Tagihan & Ulasan**: Kartu progres reservasi 4 tahap, status antrean aktif, rincian tagihan lunas, serta pengisian rating dan komentar setelah layanan selesai dan dibayar lunas.

### 2. Resepsionis & Kasir (`/resepsionis`, `#antrean`, `#kalender`)
- **Meja Resepsionis & Antrean Harian**: Ringkasan KPI hari berjalan, grafik kepadatan jam operasional dan beban capster, pencarian berdasarkan nama/kode/telepon, check-in reservasi terkonfirmasi, serta penerimaan **walk-in** idempoten.
- **Penyelesaian Kasir**: Pembuatan tagihan dari rincian layanan, pencatatan koreksi nominal disertai alasan, dan konfirmasi pencatatan pembayaran (`Tunai`, `Transfer`, `Lainnya`) setelah dana diverifikasi petugas.
- **Kalender Salon (`#kalender`)**: Tampilan kalender harian multi-capster dan matriks mingguan 7 hari lengkap dengan status shift/libur serta pengelolaan blok waktu tim.

### 3. Capster (`/capster`, `#kalender`)
- **Ruang Kerja Pelayanan**: Pengaturan status kesiapan melayani (*Ready / Paused*), kartu sorotan sesi aktif, serta tombol `Mulai sesi`, `Selesaikan sesi`, dan penyesuaian layanan hasil konsultasi pelanggan.
- **Kalender Saya (`#kalender`)**: Timeline jadwal harian personal per jam (WIB) untuk memantau siapa yang dilayani hari ini, melihat jam istirahat, menambah blok waktu pribadi, serta memperbarui **waktu ekstra layanan** (`+10 / +15 / +30 menit`) secara langsung.

### 4. Manajer & Penjadwalan Cerdas (`/manajemen`, `#kalender`, `#pengaturan`)
- **Ringkasan & Laporan Operasional**: Filter periode `Hari ini`, `7 hari`, `30 hari`, dan rentang kustom hingga `90 hari`. Dilengkapi grafik SVG interaktif (tren kunjungan harian, komposisi status jadwal, beban layanan per capster, layanan paling diminati, pembayaran lunas per hari, metode pembayaran) beserta tabel data aksesibel dan tindak lanjut ulasan pelanggan.
- **Kalender & Penjadwalan Cerdas (`#kalender`)**:
  - **Jadwalkan Shift**: Atur jam mulai, jam selesai, hari libur mingguan, dan status aktif capster dengan validasi bentrok otomatis.
  - **Blok Waktu & Jam Istirahat**: Tambahkan istirahat tambahan, pelatihan tim, izin khusus, atau waktu terpesan agar slot tertutup otomatis bagi pemesanan pelanggan.
  - **Waktu Ekstra Layanan**: Konfigurasikan jeda persiapan antarlayanan (*buffer*) dan jam istirahat harian salon.
- **Pengaturan Salon (`#pengaturan`)**: Pengubahan jam operasional, katalog layanan, dan kompetensi capster melalui alur 3 langkah *Simpan Draf → Periksa Konflik → Terapkan*.

---

## Teknologi & Arsitektur

- **Frontend Aplikasi:** React 19, TypeScript, Vite 8, Tailwind CSS 4, Radix UI (`@radix-ui/react-dialog`), Lucide React, Motion, dan komponen grafik SVG kustom.
- **Landing Page & Halaman Publik:** HTML/CSS/JS statis teroptimasi dengan navigasi dan CTA yang terhubung langsung ke alur reservasi.
- **Backend & API:** Node.js ES Modules, Vercel Serverless Function (`prototype/api/index.js`), PostgreSQL (`pg`) pada **Neon**, serta dukungan SQLite lokal bawaan Node (`node:sqlite`) untuk pengembangan tanpa koneksi database eksternal.
- **Keamanan & Konsistensi Data:** Cookie sesi `HttpOnly`, proteksi brute-force `auth_attempts`, hashing kata sandi `scrypt` per-pengguna, serta PostgreSQL `EXCLUDE USING gist` pada tabel `allocations` untuk mencegah double-booking secara konkuren.

---

## Struktur Folder

```text
LaSTI-ShagaShalon/
├── README.md
├── docs/                                # Dokumen kebutuhan, SOAML, dan referensi UI/UX
├── prototype/
│   ├── api/
│   │   └── index.js                     # Entry point serverless Vercel (/api/*)
│   ├── assets/                          # Font (Inter Variable), ilustrasi, gambar, video
│   ├── backend/
│   │   ├── catalog.js                   # Definisi katalog awal, capster, & generator slot WIB
│   │   ├── operations.js                # Logika operasional & penjadwalan (SQLite lokal)
│   │   ├── reservation-api.js           # HTTP handler & autentikasi (SQLite lokal)
│   │   └── postgres/                    # Backend produksi PostgreSQL / Neon
│   │       ├── 001-schema.sql           # Skema inti (accounts, reservations, allocations, visits)
│   │       ├── 002-auth-attempts.sql    # Tabel pembatasan percobaan login
│   │       ├── 003-settlement.sql       # Skema tagihan, pembayaran, & feedback
│   │       ├── 004-report-indexes.sql   # Indeks query laporan periode
│   │       ├── operations.js            # Operasional & penjadwalan PostgreSQL
│   │       ├── reservation-api.js       # Router API PostgreSQL
│   │       ├── scheduling.js            # Validasi slot, buffer, & blok waktu
│   │       └── settlement.js            # Tagihan, pembayaran, ulasan, & laporan manajer
│   ├── reservation-react/               # Sumber kode frontend pasca-login & autentikasi (React + TS)
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── api.ts                   # Klien API, tipe TypeScript, & helper format WIB
│   │       ├── main.tsx                 # Router per peran & layar autentikasi
│   │       ├── style.css                # Token visual Shaga Salon, komponen UI, & gaya kalender
│   │       ├── CustomerViews.tsx        # Beranda, alur reservasi, riwayat, detail, & profil
│   │       ├── StaffDeskView.tsx        # Meja resepsionis, walk-in, kasir, & kalender salon
│   │       ├── CapsterView.tsx          # Ruang kerja capster & kalender saya
│   │       ├── ManagerView.tsx          # Ringkasan laporan, penjadwalan cerdas, & pengaturan
│   │       └── components/
│   │           ├── ui.tsx               # Shell navigasi, modal dialog, badge, & kartu metrik
│   │           ├── Charts.tsx           # Grafik SVG operasional & laporan + tabel aksesibel
│   │           └── TeamCalendar.tsx     # Timeline harian, matriks mingguan, & modal blok waktu
│   ├── reservation-ui/                  # Entry HTML shell & hasil build Vite (`modern/`)
│   ├── subpages/                        # Halaman detail layanan, kondisi, praktisi, & jurnal
│   ├── index.html                       # Landing page publik Shaga Salon
│   ├── serve.js                         # Server lokal untuk pengembangan & pratinjau
│   ├── vercel.json                      # Konfigurasi routing & header keamanan Vercel
│   ├── package.json
│   ├── NEON-VERCEL.md                   # Panduan setup & migrasi database Neon + Vercel
│   └── OPERASIONAL.md                   # Catatan alur operasional & pembuatan akun tim
└── tests/
    ├── unit/                            # Pengujian unit API, akun, rute Vercel, & blok waktu
    └── integration/                     # Pengujian integrasi reservasi & PostgreSQL
```

---

## Menjalankan Secara Lokal

### Prasyarat
- Node.js versi 22+ dan `npm`.
- (Opsional) Connection string PostgreSQL / Neon terpisah bila ingin menguji fitur tagihan kasir, pembayaran, dan laporan PostgreSQL penuh secara lokal. Tanpa `DATABASE_URL`, server otomatis memakai database SQLite lokal di `$env:LOCALAPPDATA\ShagaSalonPrototype`.

### Instalasi & Build

```powershell
cd prototype
npm ci
npm run build:app
```

### Menjalankan Server Pratinjau

```powershell
cd prototype
# Opsional: hubungkan ke branch PostgreSQL / Neon pengembangan
# $env:DATABASE_URL = Read-Host 'Connection string Neon pengembangan' -MaskInput
npm run serve
```

Aplikasi akan berjalan di [http://127.0.0.1:3000](http://127.0.0.1:3000).

### Menjalankan Pengujian

```powershell
cd prototype
npm test
```

Untuk menyertakan pengujian integrasi dan konkurensi PostgreSQL:

```powershell
$env:TEST_DATABASE_URL = Read-Host 'Connection string database pengujian' -MaskInput
$env:SHAGA_TEST_DISPOSABLE = 'yes'
npm test
Remove-Item Env:TEST_DATABASE_URL, Env:SHAGA_TEST_DISPOSABLE
```

---

## Aturan Operasional & Catatan Teknis

- **Zona Waktu & Periode:** Seluruh jadwal slot, check-in, transaksi, dan laporan memakai zona waktu **Asia/Jakarta (WIB)**.
- **Pembayaran Kasir:** Pencatatan pembayaran hanya merekam dana yang telah diverifikasi dan diterima petugas (`CASH`, `TRANSFER`, `OTHER`); sistem tidak memotong saldo bank atau gateway eksternal secara otomatis.
- **Lisensi Font:** Font antarmuka memakai *Inter Variable* ([`prototype/assets/fonts/INTER-LICENSE.txt`](prototype/assets/fonts/INTER-LICENSE.txt)).
- **Dokumentasi Pendukung:** Lihat [`prototype/NEON-VERCEL.md`](prototype/NEON-VERCEL.md) untuk inisialisasi skema Neon & lingkungan preview, serta [`prototype/OPERASIONAL.md`](prototype/OPERASIONAL.md) untuk panduan pengelolaan akun tim.
