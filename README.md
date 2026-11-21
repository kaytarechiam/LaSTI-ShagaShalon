# Shaga Salon

Shaga Salon adalah prototype sistem reservasi dan pengelolaan kunjungan salon.
Pelanggan dapat memilih layanan, capster, dan jadwal; resepsionis membantu
reservasi serta kedatangan; capster memperbarui pelayanan; dan manajemen
memantau operasional.

Antarmuka pelanggan sedang dimigrasikan secara bertahap ke React dan
TypeScript dengan Vite, Tailwind CSS, Radix UI, Lucide, dan Motion. Halaman
operasional tim masih menggunakan JavaScript sebelumnya. Landing page lokal
menggunakan adaptasi ekspor Ixolyn/Webflow, dengan navigasi dan tautan yang
terhubung ke reservasi Shaga Salon.

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

`npm run serve` membangun antarmuka React terlebih dahulu. Untuk memeriksa
tipe atau membangun ulang secara terpisah, jalankan `npm run typecheck`
atau `npm run build:app` dari folder `prototype`. Hasil build dibuat
secara lokal dan tidak disimpan dalam Git; Vercel menjalankan build saat deploy.

Untuk database pengembangan baru yang masih kosong, siapkan `DATABASE_URL`
lalu jalankan `npm run db:init:dev` sekali sebelum menjalankan server.
Untuk database yang sudah memiliki skema sebelumnya, terapkan migrasi
`prototype/backend/postgres/003-settlement.sql` dan kemudian
`prototype/backend/postgres/004-report-indexes.sql` sebelum menjalankan versi
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
akunnya selesai dan pembayaran telah dicatat lunas oleh petugas. Feedback lama
yang dibuat sebelum aturan ini tetap tersimpan dan dapat ditampilkan. Reservasi atau walk-in yang dibuat melalui akun staf belum
otomatis terhubung ke akun pelanggan; pencocokan nama atau telepon tidak
digunakan sebagai bukti kepemilikan. Resepsionis merangkap kasir dalam
prototype ini.

Dashboard manajemen otomatis memuat hari ini dalam zona Asia/Jakarta; rentang
kustom dibatasi 90 hari. Reservasi dan kunjungan dihitung berdasarkan tanggal
kunjungan, pembayaran dan feedback menurut waktu pencatatannya, dan tagihan
menurut waktu dibuat. Jumlah tagihan belum lunas menunjukkan kondisi terkini
untuk tagihan yang dibuat pada periode itu. Total pembayaran hanya mencakup
pembayaran yang telah dicatat, bukan tagihan yang belum lunas. Grafik dan tabel
menggunakan data yang sama: jumlah kunjungan berdasarkan tanggal kunjungan,
total lunas berdasarkan waktu pencatatan, dan layanan terpopuler berdasarkan
kunjungan selesai pada tanggal kunjungan. Tidak ada perhitungan laba atau biaya.

Rancangan proses bisnis yang lebih luas dijelaskan dalam
[laporan Delivery 2](https://docs.google.com/document/d/1dqlcNDuBCY4aRa1RYe-p2kPp_U5ttwUdygrirpaqWwg/edit?tab=t.siyltlcmt1c1).
Bab VI laporan membatasi prototype awal pada konfirmasi reservasi; fitur
operasional dan penyelesaian transaksi merupakan perluasan dari cakupan itu.

Font antarmuka aplikasi menggunakan Inter Variable, mengikuti referensi UniSpot.
Berkas font disimpan lokal dari
[UniSpot](https://github.com/AthallaAnanda/UniSpot); lisensinya tersedia
di [INTER-LICENSE.txt](prototype/assets/fonts/INTER-LICENSE.txt).

## Landing page dan aset

Halaman utama lokal memakai ekspor halaman blog Ixolyn/Webflow, termasuk
navbar, footer, gambar, video, dan runtime interaksinya. Teks dan tautan
disesuaikan ke konteks Shaga Salon; font antarmuka memakai Inter. Logo teks
Shaga Salon baru digunakan pada landing dan halaman masuk. Aset pada
[`prototype/landing-webflow/`](prototype/landing-webflow/) adalah aset template,
bukan foto asli salon. Ketentuan lisensi template dan aset perlu diverifikasi sebelum
publikasi.

Salinan ekspor utuh tersimpan secara lokal di `prototype/landing-original/`
sebagai pembanding. Folder tersebut dikecualikan dari Git dan ditolak oleh
server aplikasi; tidak otomatis ikut ketika repository di-clone. Aset misc
export yang tidak diperlukan landing juga dikecualikan dan tidak disajikan.
Video hero memiliki kontrol bawaan template. Kartu merupakan pengantar;
layanan aktif dan harga yang berlaku ditampilkan saat membuka reservasi.

Sumber ekspor menyebutkan bahwa akun dan pemrosesan formulir server-side tidak
ikut diekspor; login dan reservasi menggunakan backend Shaga Salon. Tombol
reservasi menggantikan formulir newsletter template. Halaman lama di
`prototype/subpages/` masih menggunakan desain sebelumnya dan belum dimigrasi.

## Menyimpan perubahan ke GitHub

Periksa seluruh perubahan terlebih dahulu, terutama file baru dan konfigurasi.
Pastikan tidak ada `.env`, kata sandi, atau connection string yang ikut masuk.
Di terminal PowerShell, dari root repository:

```powershell
git status
git diff
git add .
git status
git commit -m "Update Shaga Salon frontend"
git push -u origin fitur/operasional-shaga
```

Perintah tersebut memakai branch `fitur/operasional-shaga` yang aktif saat
dokumentasi ini ditulis. Periksa `git branch --show-current` dan sesuaikan
nama branch sebelum push jika sudah berpindah branch.
