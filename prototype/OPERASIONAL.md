# Demo operasional Shaga Salon

BAB VI memfokuskan prototipe pada konfirmasi reservasi. Pengembangan ini menambahkan penerimaan pelanggan, antrean, sesi capster, dan pengaturan manajemen. Jalankan dengan Node.js 26 menggunakan `npm run serve -- -p 4320 --no-ui`. Buka http://127.0.0.1:4320/ dan pilih **Masuk** di navbar.

## Menyiapkan akun

Untuk **SQLite lokal**, siapkan variabel di PowerShell sebelum membuka server. Gunakan email demo berbeda untuk setiap peran dan kata sandi 12–128 karakter. Siapkan hanya pasangan variabel untuk akun yang ingin dibuat. Jika `DATABASE_URL` diatur, server memakai PostgreSQL dan akun tim dibuat dengan perintah Neon di bawah, bukan dengan variabel SQLite ini.

```powershell
Set-Location -LiteralPath 'D:\LaSTI-ShagaShalon-repo\prototype'
$env:SHAGA_STAFF_EMAIL = 'resepsionis@example.test'
$env:SHAGA_STAFF_PASSWORD = Read-Host 'Kata sandi demo resepsionis' -MaskInput
$env:SHAGA_CAPSTER_EMAIL = 'capster-a@example.test'
$env:SHAGA_CAPSTER_PASSWORD = Read-Host 'Kata sandi demo capster' -MaskInput
$env:SHAGA_CAPSTER_ID = 'a'
$env:SHAGA_MANAGER_EMAIL = 'manajer@example.test'
$env:SHAGA_MANAGER_PASSWORD = Read-Host 'Kata sandi demo manajer' -MaskInput
npm run serve -- -p 4320 --no-ui
```

Akun dibuat sekali. Gunakan ID `a`, `b`, atau `c` dengan email yang berbeda untuk tiap capster. Saat akun sudah terbentuk, jalankan ulang tanpa variabel pembuatan akun. Akun pelanggan dibuat lewat **Daftar**. Seluruh peran masuk dari halaman yang sama.

Untuk **PostgreSQL/Neon**, atur `DATABASE_URL` untuk database target yang skemanya sudah disiapkan. Jalankan perintah berikut untuk satu akun; ulangi dengan email dan peran lain sesuai kebutuhan. Peran yang didukung adalah `staff`, `capster`, dan `manager`. ID capster diperlukan hanya untuk peran capster. Akun atau pemetaan capster yang sudah ada tidak akan ditimpa.

```powershell
$env:SHAGA_CREATE_TEAM = 'yes'
$env:SHAGA_TEAM_EMAIL = 'manajer@example.test'
$env:SHAGA_TEAM_ROLE = 'manager'
$env:SHAGA_TEAM_PASSWORD = Read-Host 'Kata sandi akun tim' -MaskInput
# Untuk capster: $env:SHAGA_TEAM_ROLE = 'capster'; $env:SHAGA_CAPSTER_ID = 'a'
npm run db:create:team
Remove-Item Env:SHAGA_CREATE_TEAM, Env:SHAGA_TEAM_PASSWORD
```

| Peran | Halaman | Yang bisa dicoba |
| --- | --- | --- |
| Pelanggan | `/akun`, `/reservasi` | Buat dan konfirmasi reservasi, lihat kode dan status kunjungan sendiri. |
| Resepsionis | `/resepsionis` | Cari reservasi salon, buat untuk pelanggan, check-in, terima walk-in, lihat antrean. |
| Capster | `/capster` | Lihat jadwal sendiri, tandai siap, sesuaikan layanan yang disetujui pelanggan, mulai, perbarui estimasi, dan selesaikan sesi. |
| Manajer | `/manajemen` | Filter ringkasan, ubah katalog contoh dan pengaturan, simpan draf, periksa konflik, dan terapkan konfigurasi. |
| Kasir (rencana) | Belum tersedia | Nantinya lihat tagihan layanan aktual dan catat pelunasan setelah dana diterima. Manajer membaca ringkasannya. |

## Skenario demo

1. Reservasi layanan yang dikuasai Capster A pada hari ini. Pilih slot yang dekat dengan waktu kini bila akan mencoba check-in. Jendela awal demo adalah satu jam sebelum hingga satu jam sesudah jadwal.
2. Masuk sebagai resepsionis dan lakukan check-in. Tiket muncul di antrean dan akun pelanggan. Walk-in hanya menawarkan jadwal hari ini yang cukup untuk layanan dan buffer.
3. Masuk sebagai Capster A dan tandai siap. Pada atau setelah jam reservasi, mulai sesi, perbarui sisa waktu, lalu selesaikan sesi. Muat ulang daftar resepsionis untuk melihat perubahan. Perkiraan antrean dapat berubah.
4. Masuk sebagai manajer dan simpan draf yang menonaktifkan layanan dengan reservasi aktif atau menutup jam yang sudah terpesan. Periksa konflik dan lihat kode terdampak. Jika draf aman, terapkan dan cek versi aktif bertambah.

Harga dan durasi lama disimpan untuk reservasi yang sudah ada. Reservasi yang dibuat resepsionis atas nama tamu dapat dilihat tim salon. Reservasi mandiri terikat ke akun pelanggan yang membuatnya. Jadwal, katalog dan data capster awal berasal dari data contoh. Manajemen dapat mengubah entri contoh, menonaktifkan layanan/capster, serta mengatur satu shift dan satu hari libur mingguan per capster. Alokasi terkonfirmasi dipertahankan hingga interval semula berakhir. Penjadwalan saat sesi berjalan juga mempertimbangkan perkiraan selesai dan jeda.

Tanpa `DATABASE_URL`, data lokal memakai SQLite dalam `LOCALAPPDATA\ShagaSalonPrototype`; dengan `DATABASE_URL`, data memakai database PostgreSQL yang ditunjuk. Notifikasi reservasi dicatat sebagai simulasi. Pembayaran, tanggapan pelanggan dan ringkasannya masih rencana lanjutan. Feedback nantinya bersifat sukarela dan hanya untuk kunjungan selesai milik akun pelanggan.
