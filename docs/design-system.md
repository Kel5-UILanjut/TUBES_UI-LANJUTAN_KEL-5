# Design System – Team Portfolio Website

> Pemilik: Shafa (UI/UX)  
> Versi: 1.0 (W1-SHAFA-02)  
> Terakhir diperbarui: 2026-11-25

---

## 1. Prinsip Desain

| Prinsip | Penerapan |
|---|---|
| **Konsistensi** | Semua warna, tipografi, dan spacing berasal dari satu sumber — `tailwind.config.js`. Tidak ada nilai hardfixed di komponen. |
| **Hierarki visual** | Warna `primary-600` mendominasi CTA; `secondary-500` hanya untuk aksen/badge. Heading Plus Jakarta Sans, body Inter. |
| **Keterbacaan** | Rasio kontras minimal 4.5:1 (WCAG AA). Teks kecil (`neutral-500`) di atas latar `neutral-50`. Teks judul `neutral-900`. |
| **Responsivitas** | Mobile-first. Breakpoint utama: 360px (mobile), 768px (tablet), 1280px (desktop). Lebar konten maks 1200px. |
| **Aksesibilitas** | Alt text wajib, focus ring terlihat (`primary-500`), navigasi keyboard berfungsi. |
| **Feedback jelas** | State loading/error/empty selalu ditampilkan; tombol disabled saat proses. |

---

## 2. Design Token

Semua token dideklarasikan di `tailwind.config.js` → `theme.extend`.  
Gunakan kelas Tailwind; jangan hardcode warna di style inline.

### 2.1 Warna

#### Primary (Biru Indigo) — tombol utama, link, menu aktif

| Token | Hex | Kegunaan |
|---|---|---|
| `primary-50` | `#EEF2FF` | Latar hover ringan |
| `primary-100` | `#E0E7FF` | Background chip aktif |
| `primary-200` | `#C3CEFD` | Border fokus ringan |
| `primary-300` | `#9AABFA` | — |
| `primary-400` | `#6E82F4` | — |
| `primary-500` | `#4A5DEB` | Focus ring |
| `primary-600` | `#3644D6` | **Default button/link** |
| `primary-700` | `#2C36B0` | Hover button/link |
| `primary-800` | `#272F8C` | Active/pressed |
| `primary-900` | `#232A6E` | Teks on primary bg terang |

#### Secondary (Amber) — badge kategori, aksen

| Token | Hex | Teks yang dipakai |
|---|---|---|
| `secondary-50` | `#FFF8EB` | `neutral-900` |
| `secondary-100` | `#FEEBC8` | `neutral-900` |
| `secondary-200` | `#FDD48B` | `neutral-900` |
| `secondary-300` | `#FCB84E` | `neutral-900` |
| `secondary-400` | `#FA9F25` | `neutral-900` ⚠️ |
| `secondary-500` | `#F2810D` | `neutral-900` ⚠️ |
| `secondary-600` | `#D66208` | putih |
| `secondary-700` | `#B1470B` | putih |
| `secondary-800` | `#8F3810` | putih |
| `secondary-900` | `#752F11` | putih |

> ⚠️ `secondary-400` ke atas (ke arah lebih muda) pakai teks gelap `neutral-900`. Di `secondary-600` dan lebih gelap, teks putih boleh dipakai.

#### Neutral (Slate)

| Token | Hex | Kegunaan |
|---|---|---|
| `neutral-50` | `#F8FAFC` | Warna background halaman |
| `neutral-200` | `#E2E8F0` | Border/divider |
| `neutral-500` | `#64748B` | Teks kecil/caption |
| `neutral-600` | `#475569` | Teks isi/body |
| `neutral-900` | `#0F172A` | Judul |

#### Status

| Token | Hex | Kegunaan |
|---|---|---|
| `status-success` | `#15803D` | Pesan sukses |
| `status-warning` | `#B45309` | Peringatan |
| `status-error` | `#DC2626` | Error/validasi gagal |
| `status-info` | `#2563EB` | Informasi netral |

---

### 2.2 Tipografi

| Peran | Font | Fallback | Kelas Tailwind |
|---|---|---|---|
| Heading (h1–h6) | **Plus Jakarta Sans** | `system-ui`, `sans-serif` | `font-heading` |
| Body / isi | **Inter** | `system-ui`, `sans-serif` | `font-body` |

Dimuat via Google Fonts di `src/assets/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
```

**Skala ukuran yang disarankan:**

| Elemen | Class | Size |
|---|---|---|
| Hero title | `text-4xl md:text-5xl font-heading font-bold` | 36–48px |
| Section title | `text-2xl md:text-3xl font-heading font-bold` | 24–30px |
| Card title | `text-xl font-heading font-semibold` | 20px |
| Body | `text-base font-body` | 16px |
| Body small | `text-sm font-body` | 14px |
| Caption / label | `text-xs font-body text-neutral-500` | 12px |

---

### 2.3 Spacing & Layout

- **Skala spacing:** default Tailwind (4px base unit).
- **Section padding:** `py-section-mobile` (3rem/48px) di mobile, `md:py-section-desktop` (5rem/80px) di desktop.
- **Lebar konten maks:** 1200px → kelas `.content-wrapper` di `main.css`.
- **Padding horizontal halaman:** `px-4` (mobile) → `px-6` (tablet) → auto (desktop via `.content-wrapper`).

---

### 2.4 Border Radius

| Elemen | Nilai | Kelas Tailwind |
|---|---|---|
| Badge kategori | 6px | `rounded-badge` |
| Button / Input | 10px | `rounded-button` / `rounded-input` |
| Card | 16px | `rounded-card` |
| Modal | 24px | `rounded-modal` |

---

### 2.5 Shadow (rekomendasi)

```
Card (resting):  box-shadow: 0 1px 3px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.06)
Card (hover):    box-shadow: 0 10px 25px rgba(54,68,214,0.12)
Modal:           box-shadow: 0 20px 60px rgba(15,23,42,0.18)
```

Gunakan class Tailwind: `shadow-sm` (resting), `shadow-lg` (hover/modal), atau custom lewat `theme.extend.boxShadow`.

---

## 3. Komponen UI (Design Decisions)

### 3.1 BaseButton

Varian:
- **primary** – `bg-primary-600 hover:bg-primary-700 text-white rounded-button`
- **secondary** – `bg-secondary-500 hover:bg-secondary-600 text-neutral-900 rounded-button`
- **ghost** – `border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-button`

State: `disabled:opacity-50 disabled:cursor-not-allowed`, `loading` (spinner + disabled).

Ukuran: `sm` (px-3 py-1.5 text-sm), `md` (px-5 py-2.5 text-base), `lg` (px-7 py-3 text-lg).

### 3.2 BaseModal

- Overlay: `bg-neutral-900/50 backdrop-blur-sm`
- Container: `rounded-modal bg-white shadow-2xl max-w-2xl w-full mx-4`
- Tutup: klik overlay, tombol Esc, tombol ✕ di sudut kanan atas
- Animasi masuk: `transition-opacity duration-200`

### 3.3 ProjectCard

- Wrapper: `rounded-card shadow-sm hover:shadow-lg transition-shadow bg-white`
- Thumbnail: rasio `aspect-video`, fallback placeholder abu-abu
- Badge kategori: `.badge-category` (secondary-100, text neutral-900, rounded-badge)
- CTA: teks `primary-600`, panah →

### 3.4 ImageGallery

- Grid thumbnail: `grid-cols-2 md:grid-cols-3` dengan `gap-2`
- Klik thumbnail → BaseModal dengan gambar penuh
- Navigasi prev/next dalam modal
- Fallback: placeholder abu-abu + ikon gambar

---

## 4. Responsivitas

Breakpoint Tailwind yang digunakan:

| Label | Min-width | Contoh perangkat |
|---|---|---|
| (default) | 0px | Ponsel kecil (360px) |
| `md` | 768px | Tablet / ponsel besar |
| `lg` | 1024px | Laptop kecil |
| `xl` | 1280px | Desktop |

**Pola grid yang disepakati:**

| Halaman | Mobile | Desktop |
|---|---|---|
| Project Showcase | 1 kolom | 3 kolom |
| About Team | 1 kolom | 2–3 kolom (ProfileCard) |
| Home highlight | 1 kolom | 3 kolom |
| ImageGallery | 2 kolom | 3 kolom |

---

## 5. Aksesibilitas

- Semua `<img>` wajib `alt`. Gambar dekoratif: `alt=""`.
- Kontras warna: minimal WCAG AA (4.5:1 untuk teks normal, 3:1 untuk teks besar).
- Focus ring: `outline: 2px solid primary-500; outline-offset: 2px` (didefinisikan di `main.css`).
- Interaksi modal: fokus tertrap di dalam, dikembalikan ke pemicu saat tutup.
- Form: label eksplisit, pesan error terhubung via `aria-describedby`.

---

## 6. Referensi

- Tailwind config: [`tailwind.config.js`](../tailwind.config.js)
- CSS global: [`src/assets/main.css`](../src/assets/main.css)
- Wireframe: [`docs/wireframes/`](./wireframes/)
- Heuristic evaluation: [`docs/heuristic-evaluation.md`](./heuristic-evaluation.md)
