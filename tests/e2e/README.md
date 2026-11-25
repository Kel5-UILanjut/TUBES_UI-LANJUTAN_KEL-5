# E2E Testing (Selenium WebDriver)

Folder ini berisi automated functional / end-to-end (E2E) test menggunakan **Selenium WebDriver (Node.js)**.

## Prasyarat

1. **Node.js 18+** terpasang.
2. Browser **Google Chrome** (default) atau **Microsoft Edge** terpasang di perangkat.
   > Selenium WebDriver v4 menggunakan **Selenium Manager** bawaan, sehingga driver browser (`chromedriver` / `msedgedriver`) akan dikelola secara otomatis tanpa instalasi manual.
3. Dependensi proyek sudah terpasang:
   ```bash
   npm install
   ```

## Cara Menjalankan Smoke Test ("Home terbuka")

### Opsi 1: Otomatis (langsung jalankan script)
Script akan mendeteksi apakah Vite dev server sudah aktif di `http://localhost:5173`. Jika belum, script menyalakan server sementara lalu mematikannya kembali setelah test selesai.

```bash
npm run test:e2e
```

Atau jalankan langsung dengan Node:
```bash
node tests/e2e/smoke.home.test.js
```

### Opsi 2: Menggunakan server yang sudah berjalan
1. Jalankan aplikasi di terminal pertama:
   ```bash
   npm run dev
   ```
2. Jalankan smoke test di terminal kedua:
   ```bash
   npm run test:e2e
   ```

## Opsi Environment Variable

| Variabel | Default | Keterangan |
|---|---|---|
| `E2E_BASE_URL` | `http://localhost:5173` | URL target pengujian (mis. URL preview lokal atau URL Vercel) |
| `E2E_BROWSER` | `chrome` | Pilihan browser: `chrome` atau `edge` |
| `E2E_HEADLESS` | `true` | Set `false` jika ingin melihat jendela browser terbuka saat test berjalan |

Contoh menjalankan di Edge dengan jendela browser terlihat (PowerShell):
```powershell
$env:E2E_BROWSER="edge"; $env:E2E_HEADLESS="false"; npm run test:e2e
```

## Cakupan Saat Ini (Minggu 1 - `W1-FAIZ-02`)

- `smoke.home.test.js`: Memverifikasi halaman Home (`/`) terbuka, elemen `<main>` dan heading tampil, serta `<title>` halaman sesuai.
