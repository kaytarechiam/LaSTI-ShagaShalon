# Status integrasi Neon dan Vercel

Saat `DATABASE_URL` tersedia, server menggunakan backend PostgreSQL di `backend/postgres/`. Tanpa variabel tersebut, `npm run serve` tetap menggunakan database SQLite lokal untuk demo. Vercel menggunakan `api/index.js` dan memerlukan `DATABASE_URL` serta skema PostgreSQL yang telah disiapkan. Pengujian preview harus selesai sebelum sistem dipakai untuk pelanggan nyata.

## Menyiapkan database pengembangan

Gunakan database Neon baru yang kosong dan terpisah dari data penting. Skema ini belum memindahkan data SQLite dan belum merupakan migrasi produksi. Perintah berikut membuat tabel dan ekstensi `btree_gist`; jalankan hanya sekali pada database tersebut. Jangan menyimpan atau membagikan connection string di repositori.

```powershell
Set-Location -LiteralPath 'D:\LaSTI-ShagaShalon-repo\prototype'
npm ci
$env:DATABASE_URL = Read-Host 'Connection string database Neon pengembangan' -MaskInput
npm run db:init:dev
npm run db:smoke:dev
Remove-Item Env:DATABASE_URL
```

Smoke test menggunakan transaksi yang dibatalkan dan menguji penyimpanan akun/sesi serta penolakan jadwal yang bertabrakan. Tes ini belum menguji API aplikasi terhadap Neon.

## Akun demo pengembangan

Setelah skema tersedia, kedua akun contoh dapat dibuat bersama di database pengembangan. Pilih email fiktif yang berbeda dan dua kata sandi 12–128 karakter. Skrip tidak menimpa akun yang ada; jika salah satu email sudah terpakai, seluruh transaksi dibatalkan. Jangan jalankan terhadap database production.

```powershell
$env:SHAGA_DEMO_SEED = 'yes'
$env:SHAGA_DEMO_CUSTOMER_EMAIL = 'pelanggan@example.test'
$env:SHAGA_DEMO_STAFF_EMAIL = 'resepsionis@example.test'
$env:SHAGA_DEMO_CUSTOMER_PASSWORD = Read-Host 'Kata sandi pelanggan demo' -MaskInput
$env:SHAGA_DEMO_STAFF_PASSWORD = Read-Host 'Kata sandi resepsionis demo' -MaskInput
# DATABASE_URL harus menunjuk ke branch pengembangan sebelum menjalankan ini.
npm run db:seed:demo
Remove-Item Env:SHAGA_DEMO_SEED, Env:SHAGA_DEMO_CUSTOMER_PASSWORD, Env:SHAGA_DEMO_STAFF_PASSWORD
```

Akun dapat dipakai ketika aplikasi berjalan dengan `DATABASE_URL` yang menunjuk ke branch database yang sama.

## Pekerjaan sebelum deployment

- Terapkan skema dan migrasi pada database target sebelum deployment; untuk database dengan skema awal yang sudah ada, `002-auth-attempts.sql` menambahkan tabel pembatasan login.
- Skema ini tidak mengimpor data SQLite. Jika data lama diperlukan, siapkan dan uji prosedur pemindahan terpisah.
- Uji seluruh alur terhadap database Neon pengembangan dan deployment pratinjau sebelum memakai database produksi. Simpan `DATABASE_URL` sebagai environment variable rahasia di Vercel, bukan di kode frontend.
