# Dokumentasi Test Case & Strategi Pengujian

> PIC QA Automation: **Faiz**  
> Referensi: NFR-05 (Heuristik usability & keandalan alur utama), FR-01 s/d FR-10

## Strategi Pengujian

Pengujian aplikasi Team Portfolio dilakukan secara berlapis dengan menggabungkan pengujian fungsional otomatis *end-to-end* (E2E) menggunakan Selenium WebDriver untuk memverifikasi alur utama pengguna (`Home -> Project Showcase -> Project Detail -> Contact`), navigasi antarhalaman, fitur pencarian dan filter kategori, validasi form kontak, serta penanganan state data (`loading`, `error`, dan `empty`), yang dilengkapi dengan *unit test* ringan menggunakan Vitest untuk fungsi murni pada `src/utils/` dan state store Pinia. Eksekusi pengujian dimulai dari *smoke test* lokal pada Sprint 1, dilanjutkan pengujian fitur inti pada Sprint 2 dan Sprint 3 di lingkungan lokal, serta diakhiri dengan *regression test* lintas browser modern (Chrome, Firefox, dan Microsoft Edge) dan pemeriksaan responsivitas (360px, 768px, dan 1280px) pada URL produksi Vercel di Sprint 4, di mana setiap ketidaksesuaian yang ditemukan dicatat pada kolom temuan untuk ditindaklanjuti sebagai *issue bug* sesuai prioritas.

## Daftar Test Case

| ID | Skenario | Langkah | Expected | Actual | Pass/Fail | Temuan |
|---|---|---|---|---|---|---|
| TC-001 | Smoke test halaman Home terbuka | 1. Jalankan server aplikasi lokal<br>2. Buka URL `/` melalui Selenium WebDriver | Halaman `/` terbuka tanpa error, judul halaman memuat `Home - Team Portfolio`, dan konten utama tampil | - | Pending | - |
| TC-002 | Navigasi Navbar antar 5 halaman | 1. Buka `/` <br>2. Klik menu `About Team`, `Project Showcase`, `Contact`, dan kembali ke `Home` | Setiap link mengarah ke route yang sesuai, menu aktif ditandai jelas, dan tidak ada error konsol | - | Pending | - |
| TC-003 | Daftar project tampil di Showcase | 1. Buka `/projects`<br>2. Tunggu data selesai dimuat | Kartu project tampil memuat judul, ringkasan, badge kategori, tag teknologi, dan gambar | - | Pending | - |
| TC-004 | Pencarian & filter kategori di Showcase | 1. Buka `/projects`<br>2. Ketik kata kunci pada kolom pencarian dan pilih kategori<br>3. Klik tombol reset | Daftar project terfilter sesuai input, *empty state* muncul bila hasil kosong, dan reset mengembalikan daftar awal | - | Pending | - |
| TC-005 | Halaman Project Detail & galeri modal | 1. Klik salah satu kartu di `/projects`<br>2. Buka modal preview gambar dan tekan tombol `Esc` | Detail project tampil lengkap (latar belakang, tujuan, fitur, kontribusi, link repo), modal preview terbuka dan tertutup dengan `Esc` | - | Pending | - |
| TC-006 | Validasi dan pengiriman form Contact | 1. Buka `/contact`<br>2. Kirim form kosong lalu isi data valid dan kirim ulang | Pesan error inline tampil saat field tidak valid, dan umpan balik sukses tampil setelah data valid dikirim | - | Pending | - |

## Aturan Pengisian

- **ID**: Kode unik test case (`TC-XXX`).
- **Skenario**: Nama ringkas fitur atau alur yang diuji.
- **Langkah**: Urutan aksi yang dilakukan penguji atau skrip otomatis.
- **Expected**: Hasil yang diharapkan sesuai FR/NFR pada PRD.
- **Actual**: Hasil aktual yang diamati saat eksekusi pengujian.
- **Pass/Fail**: Status hasil uji (`Pass`, `Fail`, atau `Pending`).
- **Temuan**: Ringkasan bug/catatan beserta referensi nomor *issue* jika status `Fail`.
