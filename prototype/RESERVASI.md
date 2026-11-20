# Prototipe reservasi Shaga Salon

Jalankan dari PowerShell. Prototipe memakai Node.js dengan modul bawaan `node:sqlite` (diuji pada Node.js 26).

```powershell
Set-Location -LiteralPath 'D:\LaSTI-ShagaSalon'
npm run serve -- -p 4319 --no-ui
```

Buka <http://127.0.0.1:4319/>. Pilih **Masuk**, lalu **Daftar** untuk membuat akun dan langsung masuk. Pilih satu atau beberapa layanan, lalu pilih tanggal, capster, dan jam dalam WIB. Harga dan durasi muncul per layanan dan dijumlahkan. Satu capster mengerjakan semua layanan berurutan dengan satu buffer setelah kunjungan. Ajukan permintaan, tinjau detail, lalu konfirmasi. Kode muncul setelah jadwal berhasil diamankan. Jika harga atau durasi berubah saat peninjauan, tinjau rincian terbaru dan konfirmasi lagi. Reservasi yang sudah diajukan dapat dibuka dari **Akun saya**. Gunakan kontak fiktif untuk demo.

Untuk mencoba resepsionis, atur variabel berikut sebelum menjalankan server. Gunakan email demo yang belum didaftarkan dan kata sandi demo 12–128 karakter. Masuk dari halaman Login yang sama. Akun resepsionis mengisi nama dan nomor telepon pelanggan, lalu mengikuti pemeriksaan kapasitas yang sama. Dashboard menampilkan reservasi salon. Lihat [panduan operasional](OPERASIONAL.md) untuk akses capster dan manajer.

```powershell
$env:SHAGA_STAFF_EMAIL = 'resepsionis@example.test'
$env:SHAGA_STAFF_PASSWORD = Read-Host 'Masukkan kata sandi demo' -MaskInput
npm run serve -- -p 4319 --no-ui
```

Akun resepsionis dibuat saat pertama dijalankan dengan email tersebut. Setelah server berhenti, hapus kedua variabel dari sesi PowerShell dengan `Remove-Item Env:SHAGA_STAFF_EMAIL, Env:SHAGA_STAFF_PASSWORD`.

Data tersimpan di folder `ShagaSalonPrototype` di dalam `LOCALAPPDATA`. Durasi, kompetensi, jam, jeda istirahat, dan buffer 15 menit adalah data demo. Notifikasi dicatat di basis data sebagai simulasi. Autentikasi ditujukan untuk demo di localhost. Fitur pemulihan kata sandi, pengiriman notifikasi, dan pengelolaan antrean operasional berada di luar prototipe ini.
