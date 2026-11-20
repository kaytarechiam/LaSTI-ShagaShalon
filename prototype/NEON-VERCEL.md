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

Smoke test menggunakan transaksi yang dibatalkan dan menguji penyimpanan akun/sesi serta penolakan jadwal yang bertabrakan.

Untuk menjalankan semua tes, termasuk integrasi API PostgreSQL dan dua transaksi yang berebut jadwal yang sama, gunakan database pengembangan yang boleh dipakai untuk tes. Tes konkurensi membuat baris dengan ID acak lalu membersihkannya; tes API lainnya dibatalkan melalui rollback. Jangan arahkan ke production.

```powershell
$env:TEST_DATABASE_URL = Read-Host 'Connection string database Neon pengujian' -MaskInput
$env:SHAGA_TEST_DISPOSABLE = 'yes'
npm test
Remove-Item Env:TEST_DATABASE_URL, Env:SHAGA_TEST_DISPOSABLE
```

Tanpa kedua variabel tersebut, `npm test` melewati dua tes PostgreSQL dan tetap menjalankan tes lokal. Akun capster dan manajer dapat disiapkan dengan `npm run db:create:team` seperti dijelaskan di [panduan operasional](OPERASIONAL.md).

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
- Terapkan `003-settlement.sql` pada database yang sudah ada sebelum menjalankan kode tagihan, pembayaran, feedback, dan laporan. Migrasi ini hanya menambahkan tabel; jangan menjalankan ulang skema awal pada database yang berisi data. Inisialisasi database pengembangan baru sudah mencakup migrasi tersebut.
- Skema ini tidak mengimpor data SQLite. Jika data lama diperlukan, siapkan dan uji prosedur pemindahan terpisah.
- Uji seluruh alur terhadap database Neon pengembangan dan deployment pratinjau sebelum memakai database produksi. Simpan `DATABASE_URL` sebagai environment variable rahasia di Vercel, bukan di kode frontend.
