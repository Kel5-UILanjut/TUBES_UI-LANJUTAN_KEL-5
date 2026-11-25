# Wireframes – Team Portfolio Website

> Pemilik: Shafa (UI/UX) | W1-SHAFA-02  
> Versi: 1.0 | 2026-11-25

---

## Overview

Wireframe mencakup **5 halaman × 2 ukuran layar** (mobile 360px dan desktop 1280px).  
Setiap halaman divisualisasikan sebagai **ASCII wireframe** di bawah, dilengkapi keputusan desain.

Setelah Figma/alat desain tersedia, ekspor gambar ke folder ini dengan nama:  
`<halaman>-mobile.png` dan `<halaman>-desktop.png`

---

## 1. Home (`/`)

### Desktop (1280px)
```
┌─────────────────────────────────────────────────────────────────┐
│  NAVBAR: Logo   Home  About  Projects  Contact     [CTA button] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│           ██████ HERO SECTION ██████                            │
│    "Halo, kami adalah Tim Kelompok 5"                           │
│    Sub-judul singkat tentang fokus tim                          │
│    [Lihat Proyek Kami →]  [Tentang Tim]                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOKUS TIM (3 kartu ikon + teks, grid 3 kolom)                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                         │
│  │  🎨 UI  │  │ 💻 Dev  │  │ 📊 Data │                         │
│  │  Desain │  │ Fullstk │  │ Analisis│                         │
│  └─────────┘  └─────────┘  └─────────┘                         │
├─────────────────────────────────────────────────────────────────┤
│  HIGHLIGHT PROYEK (3 ProjectCard, grid 3 kolom)                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ [thumbnail]  │ │ [thumbnail]  │ │ [thumbnail]  │            │
│  │ Judul        │ │ Judul        │ │ Judul        │            │
│  │ [badge]      │ │ [badge]      │ │ [badge]      │            │
│  │ Ringkasan... │ │ Ringkasan... │ │ Ringkasan... │            │
│  │ Lihat →      │ │ Lihat →      │ │ Lihat →      │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER: © Tim 5 | Link GitHub | Vercel                         │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (360px)
```
┌───────────────────────┐
│  Logo          [☰]    │  ← Hamburger menu
├───────────────────────┤
│  HERO                 │
│  Halo, kami adalah    │
│  Tim Kelompok 5       │
│  Sub-judul singkat    │
│  [Lihat Proyek Kami]  │
│  [Tentang Tim]        │
├───────────────────────┤
│  FOKUS TIM (1 kolom)  │
│  ┌───────────────────┐│
│  │ 🎨 UI Desain      ││
│  └───────────────────┘│
│  ┌───────────────────┐│
│  │ 💻 Dev Fullstack  ││
│  └───────────────────┘│
│  ┌───────────────────┐│
│  │ 📊 Data Analisis  ││
│  └───────────────────┘│
├───────────────────────┤
│  HIGHLIGHT (1 kolom)  │
│  ┌───────────────────┐│
│  │   [thumbnail]     ││
│  │   Judul [badge]   ││
│  │   Ringkasan...    ││
│  │   Lihat →         ││
│  └───────────────────┘│
│  ... (card 2 & 3)     │
├───────────────────────┤
│  FOOTER (stack)       │
└───────────────────────┘
```

---

## 2. About Team (`/about`)

### Desktop (1280px)
```
┌─────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                         │
├─────────────────────────────────────────────────────────────────┤
│  HEADER SECTION                                                 │
│  "Kenali Tim Kami"  Sub-judul                                   │
├─────────────────────────────────────────────────────────────────┤
│  GRID ANGGOTA (2–3 kolom, 5 ProfileCard)                        │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                  │
│  │ [avatar]   │ │ [avatar]   │ │ [avatar]   │                  │
│  │ Nama       │ │ Nama       │ │ Nama       │                  │
│  │ Peran      │ │ Peran      │ │ Peran      │                  │
│  │ [skills…]  │ │ [skills…]  │ │ [skills…]  │                  │
│  │ [GH][LI]   │ │ [GH][LI]   │ │ [GH][LI]   │                  │
│  │ Lihat Proj │ │ Lihat Proj │ │ Lihat Proj │                  │
│  └────────────┘ └────────────┘ └────────────┘                  │
│  ┌────────────┐ ┌────────────┐                                  │
│  │ [avatar]   │ │ [avatar]   │                                  │
│  │ ...        │ │ ...        │                                  │
│  └────────────┘ └────────────┘                                  │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (360px)
```
┌───────────────────────┐
│  NAVBAR [☰]           │
├───────────────────────┤
│  "Kenali Tim Kami"    │
│  Sub-judul            │
├───────────────────────┤
│  ProfileCard (1 kol)  │
│  ┌───────────────────┐│
│  │  [avatar]  Nama   ││
│  │  Peran            ││
│  │  [skill] [skill]  ││
│  │  [GH] [LI]        ││
│  │  [Lihat Project]  ││
│  └───────────────────┘│
│  ... (×5)             │
├───────────────────────┤
│  FOOTER               │
└───────────────────────┘
```

---

## 3. Project Showcase (`/projects`)

### Desktop (1280px)
```
┌─────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                         │
├─────────────────────────────────────────────────────────────────┤
│  "Semua Proyek"  Sub-judul                                      │
├─────────────────────────────────────────────────────────────────┤
│  [🔍 Cari proyek...              ]  [Web ▼] [Data ▼] [Reset]   │
│                              Menampilkan 5 proyek               │
├─────────────────────────────────────────────────────────────────┤
│  GRID PROYEK (3 kolom, ProjectCard)                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ [thumbnail]  │ │ [thumbnail]  │ │ [thumbnail]  │            │
│  │ Judul        │ │ Judul        │ │ Judul        │            │
│  │ [badge Web]  │ │ [badge Data] │ │ [badge Web]  │            │
│  │ Ringkasan... │ │ Ringkasan... │ │ Ringkasan... │            │
│  │ [Vue][TW]    │ │ [Laravel]    │ │ [React]      │            │
│  │ Lihat Detail │ │ Lihat Detail │ │ Lihat Detail │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│  ... (baris berikutnya)                                         │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (360px)
```
┌───────────────────────┐
│  NAVBAR [☰]           │
├───────────────────────┤
│  "Semua Proyek"       │
├───────────────────────┤
│ [🔍 Cari proyek...  ] │
│ [Semua ▼]  [Reset]   │
│ 5 proyek ditemukan    │
├───────────────────────┤
│  ProjectCard (1 kol)  │
│  ┌───────────────────┐│
│  │   [thumbnail]     ││
│  │   Judul [badge]   ││
│  │   Ringkasan...    ││
│  │   [Vue][TW]       ││
│  │   Lihat Detail    ││
│  └───────────────────┘│
│  ... (×n)             │
├───────────────────────┤
│  FOOTER               │
└───────────────────────┘
```

---

## 4. Project Detail (`/projects/:id`)

### Desktop (1280px)
```
┌─────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                         │
├─────────────────────────────────────────────────────────────────┤
│  ← Kembali ke Showcase                                          │
├─────────────────────────────────────────────────────────────────┤
│  JUDUL PROYEK             [badge kategori]                      │
│  ─────────────────────────────────────────                      │
│  ┌─────────────────────────────────┐  ┌──────────────────────┐  │
│  │                                 │  │ Teknologi            │  │
│  │  Latar Belakang                 │  │ [Vue] [TW] [Laravel] │  │
│  │  Lorem ipsum...                 │  │                      │  │
│  │                                 │  │ Kategori             │  │
│  │  Tujuan                         │  │ Web                  │  │
│  │  Lorem ipsum...                 │  │                      │  │
│  │                                 │  │ Anggota              │  │
│  │  Fitur Utama                    │  │ [avatar] Nama        │  │
│  │  • Fitur 1                      │  │ [Lihat Profil]       │  │
│  │  • Fitur 2                      │  │                      │  │
│  │  • Fitur 3                      │  │ Link                 │  │
│  │                                 │  │ [GitHub Repo] [Demo] │  │
│  │  Kontribusi Anggota             │  └──────────────────────┘  │
│  │  Deskripsi kontribusi...        │                            │
│  └─────────────────────────────────┘                            │
│                                                                 │
│  GALERI SCREENSHOT (ImageGallery, grid 3 kolom)                 │
│  ┌────────┐ ┌────────┐ ┌────────┐                              │
│  │  img1  │ │  img2  │ │  img3  │  ← klik → modal             │
│  └────────┘ └────────┘ └────────┘                              │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (360px)
```
┌───────────────────────┐
│  NAVBAR [☰]           │
├───────────────────────┤
│  ← Kembali            │
│  Judul [badge]        │
│  Latar Belakang       │
│  ...                  │
│  Tujuan               │
│  ...                  │
│  Fitur Utama          │
│  • Fitur 1            │
│  • Fitur 2            │
│  Teknologi            │
│  [Vue] [TW]           │
│  Anggota              │
│  [avatar] Nama        │
│  [Lihat Profil]       │
│  Link                 │
│  [GitHub] [Demo]      │
│  Kontribusi           │
│  ...                  │
│  GALERI (2 kolom)     │
│  ┌──────┐ ┌──────┐    │
│  │ img1 │ │ img2 │    │
│  └──────┘ └──────┘    │
├───────────────────────┤
│  FOOTER               │
└───────────────────────┘
```

---

## 5. Contact (`/contact`)

### Desktop (1280px)
```
┌─────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                         │
├─────────────────────────────────────────────────────────────────┤
│  "Hubungi Kami"  Sub-judul                                      │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────┐  ┌──────────────────────────┐  │
│  │                             │  │  FORM KONTAK             │  │
│  │  INFO KONTAK TIM            │  │  ┌────────────────────┐  │  │
│  │                             │  │  │ Nama *             │  │  │
│  │  📧 email@tim.com           │  │  └────────────────────┘  │  │
│  │  🔗 github.com/tim          │  │  ┌────────────────────┐  │  │
│  │  🔗 linkedin.com/in/tim     │  │  │ Email *            │  │  │
│  │                             │  │  └────────────────────┘  │  │
│  │  Anggota Tim:               │  │  ┌────────────────────┐  │  │
│  │  [avatar] Rico  → GH / LI  │  │  │ Pesan *            │  │  │
│  │  [avatar] Rey   → GH / LI  │  │  │ (min 10 char)      │  │  │
│  │  [avatar] Faiz  → GH / LI  │  │  └────────────────────┘  │  │
│  │  [avatar] Aldi  → GH / LI  │  │  [Kirim Pesan]           │  │
│  │  [avatar] Shafa → GH / LI  │  │                          │  │
│  │                             │  │  ✅ Pesan terkirim!      │  │
│  └─────────────────────────────┘  └──────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile (360px)
```
┌───────────────────────┐
│  NAVBAR [☰]           │
├───────────────────────┤
│  "Hubungi Kami"       │
│  Sub-judul            │
├───────────────────────┤
│  INFO KONTAK          │
│  📧 email@tim.com     │
│  🔗 GitHub tim        │
│  🔗 LinkedIn tim      │
│  Anggota:             │
│  [avatar] Rico  GH LI │
│  ... (×5)             │
├───────────────────────┤
│  FORM KONTAK          │
│  ┌───────────────────┐│
│  │ Nama *            ││
│  └───────────────────┘│
│  ┌───────────────────┐│
│  │ Email *           ││
│  └───────────────────┘│
│  ┌───────────────────┐│
│  │ Pesan *           ││
│  │                   ││
│  └───────────────────┘│
│  [Kirim Pesan]        │
│  ✅ Terkirim!         │
├───────────────────────┤
│  FOOTER               │
└───────────────────────┘
```

---

## Keputusan Desain

| Keputusan | Alasan |
|---|---|
| Plus Jakarta Sans untuk heading | Modern, geometric, mudah dibaca, mendukung Bahasa Indonesia |
| Inter untuk body | Sangat terbaca di layar digital, lebar karakter optimal |
| Primary biru indigo (bukan biru murni) | Lebih premium dan profesional untuk portofolio akademik |
| Secondary amber hanya untuk badge | Kontras tinggi → mudah ditemukan, tidak mendominasi layout |
| Radius card 16px | Terasa ramah, tidak terlalu bulat, modern |
| Modal radius 24px | Menonjol dari konten, terasa "floating" |
| Grid 3 kolom desktop, 1 kolom mobile | Optimalkan ruang tanpa memaksa scroll horizontal |
| Maks konten 1200px | Mencegah baris teks terlalu panjang di monitor lebar |
| Section padding 5rem desktop | Breathing room, tidak terasa penuh |
