# Shaga Salon

Shaga Salon adalah prototype sistem reservasi dan pengelolaan kunjungan salon.
Pelanggan dapat memilih layanan, capster, dan jadwal; resepsionis membantu
reservasi serta kedatangan; capster memperbarui pelayanan; dan manajemen
memantau operasional.

**Aplikasi yang sudah tersedia:** [shaga-salon.vercel.app](https://shaga-salon.vercel.app/)

Situs tersebut menampilkan versi yang sudah di-deploy. Perubahan pada komputer
tidak otomatis muncul di sana sebelum di-deploy.

## Fitur

- Katalog layanan, pencarian ketersediaan, reservasi, dan konfirmasi jadwal.
- Check-in, antrean, penerimaan walk-in, dan pencatatan sesi pelayanan.
- Pencatatan tagihan, koreksi, pembayaran, feedback, dan laporan operasional
  pada versi pengembangan PostgreSQL terbaru.
- Antrean diperbarui secara berkala saat halaman terbuka. Estimasi dapat berubah.

Pembayaran dicatat setelah penerimaannya dipastikan petugas; aplikasi tidak
memproses dana melalui bank atau payment gateway. Notifikasi reservasi masih
berupa simulasi. Fitur tambahan terbaru memerlukan migrasi database dan belum
tentu tersedia di situs yang sudah di-deploy.

## Menjalankan secara lokal

Persyaratan: Node.js, npm, dan database PostgreSQL pengembangan terpisah
untuk mencoba semua fitur terbaru. Gunakan connection string milik sendiri,
jangan memasukkannya ke Git.

```powershell
cd prototype
npm ci
$env:DATABASE_URL = Read-Host 'Connection string PostgreSQL pengembangan'
npm run serve
```

Buka alamat lokal yang ditampilkan di terminal, biasanya
[http://127.0.0.1:3000](http://127.0.0.1:3000). Untuk menghentikan server,
tekan `Ctrl+C`. Tanpa `DATABASE_URL`, server memakai SQLite untuk demo
reservasi lama; fitur tagihan, feedback, laporan, dan antrean terbaru
memerlukan PostgreSQL.

Untuk database pengembangan baru yang masih kosong, siapkan `DATABASE_URL`
lalu jalankan `npm run db:init:dev` sekali sebelum menjalankan server.
Untuk database yang sudah memiliki skema sebelumnya, terapkan migrasi
`prototype/backend/postgres/003-settlement.sql` sebelum menjalankan versi
baru. Jangan menjalankan ulang skema awal pada database yang berisi data.
Petunjuk lengkap ada di [panduan Neon dan Vercel](prototype/NEON-VERCEL.md).

## Pengujian

```powershell
cd prototype
npm test
```

Pengujian PostgreSQL membutuhkan database pengujian terpisah dan variabel
lingkungan tambahan sebagaimana dijelaskan dalam panduan Neon dan Vercel.
Tanpa konfigurasi itu, pengujian integrasi PostgreSQL akan dilewati.

## Peran dan batasan

Pelanggan dapat memberikan feedback setelah kunjungan yang terhubung ke
akunnya selesai. Reservasi atau walk-in yang dibuat melalui akun staf belum
otomatis terhubung ke akun pelanggan; pencocokan nama atau telepon tidak
digunakan sebagai bukti kepemilikan. Resepsionis merangkap kasir dalam
prototype ini.

Rancangan proses bisnis yang lebih luas dijelaskan dalam
[laporan Delivery 2](https://docs.google.com/document/d/1dqlcNDuBCY4aRa1RYe-p2kPp_U5ttwUdygrirpaqWwg/edit?tab=t.siyltlcmt1c1).
Bab VI laporan membatasi prototype awal pada konfirmasi reservasi; fitur
operasional dan penyelesaian transaksi merupakan perluasan dari cakupan itu.
