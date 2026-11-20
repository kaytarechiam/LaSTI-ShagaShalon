# Prototipe reservasi Shaga Salon

Jalankan dari folder `prototype` dengan Node.js 26. Tanpa `DATABASE_URL`, server memakai SQLite lokal; dengan `DATABASE_URL`, server memakai PostgreSQL/Neon yang skemanya telah disiapkan. Lihat [panduan Neon dan Vercel](NEON-VERCEL.md).

```powershell
Set-Location -LiteralPath 'D:\LaSTI-ShagaShalon-repo\prototype'
npm run serve -- -p 4319 --no-ui
```

Buka <http://127.0.0.1:4319/>. Pilih **Masuk**, lalu **Daftar** untuk membuat akun dan langsung masuk. Pilih satu atau beberapa layanan, lalu pilih tanggal, capster, dan jam dalam WIB. Harga dan durasi muncul per layanan dan dijumlahkan. Satu capster mengerjakan semua layanan berurutan dengan satu buffer setelah kunjungan. Ajukan permintaan, tinjau detail, lalu konfirmasi. Kode muncul setelah jadwal berhasil diamankan. Jika harga atau durasi berubah saat peninjauan, tinjau rincian terbaru dan konfirmasi lagi. Reservasi yang sudah diajukan dapat dibuka dari **Akun saya**. Gunakan kontak fiktif untuk demo.

Untuk mencoba resepsionis dengan **SQLite lokal**, atur variabel berikut sebelum menjalankan server. Gunakan email demo yang belum didaftarkan dan kata sandi demo 12–128 karakter. Masuk dari halaman Login yang sama. Akun resepsionis mengisi nama dan nomor telepon pelanggan, lalu mengikuti pemeriksaan kapasitas yang sama. Dashboard menampilkan reservasi salon. Untuk Neon, lihat pembuatan akun tim di [panduan operasional](OPERASIONAL.md).

```powershell
$env:SHAGA_STAFF_EMAIL = 'resepsionis@example.test'
$env:SHAGA_STAFF_PASSWORD = Read-Host 'Masukkan kata sandi demo' -MaskInput
npm run serve -- -p 4319 --no-ui
```

Akun resepsionis dibuat saat pertama dijalankan dengan email tersebut. Setelah server berhenti, hapus kedua variabel dari sesi PowerShell dengan `Remove-Item Env:SHAGA_STAFF_EMAIL, Env:SHAGA_STAFF_PASSWORD`.

Pada SQLite, data tersimpan di folder `ShagaSalonPrototype` dalam `LOCALAPPDATA`; pada Neon, data tersimpan di branch yang ditunjuk `DATABASE_URL`. Durasi, kompetensi, jam, jeda istirahat, dan buffer 15 menit adalah data demo. Notifikasi dicatat sebagai simulasi; pengiriman notifikasi dan pemulihan kata sandi belum tersedia. Antrean dan check-in dijelaskan dalam [panduan operasional](OPERASIONAL.md).
