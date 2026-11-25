# Team Portfolio Website (Kelompok 5 — UI Lanjut)

Website portofolio tim yang menampilkan profil 5 anggota kelompok dan 1 project unggulan dari masing-masing anggota. Pengunjung (masyarakat umum, calon kolaborator, maupun dosen penilai) dapat melihat identitas tim, menjelajahi daftar project dengan fitur pencarian dan filter kategori, melihat detail lengkap setiap project, serta menghubungi tim melalui halaman kontak.

---

## Tautan Penting

- **Repository GitHub**: https://github.com/Kel5-UILanjut/TUBES_UI-LANJUTAN_KEL-5
- **Board GitHub Projects**: `[TBD — tambahkan link GitHub Projects tim]` (lihat juga daftar backlog di [docs/github-projects-backlog.md](docs/github-projects-backlog.md))
- **Live Deployment (Vercel)**: `[TBD — tambahkan URL production Vercel]`

---

## Anggota Tim & Peran

| Anggota | Skema | Peran | Fokus Tanggung Jawab |
|---|---|---|---|
| **Rico** | Programming | Scrum Master + Frontend Lead | Setup repo, Vue Router, Pinia, halaman Project Showcase (search/filter), review & merge PR |
| **Rey** | Programming | API + Deployment | MockAPI.io, Axios service layer, state loading/error/empty, Project Detail, Vercel, Vitest |
| **Faiz** | IT Governance | Home + QA Automation | Halaman Home, Navbar, Footer, dokumentasi test case, script E2E Selenium |
| **Aldinda** | IT Governance | About + Contact + Docs | Halaman About Team (`ProfileCard`), halaman Contact (`ContactForm` + validasi), README, `docs/` |
| **Shafa** | UI/UX | Design System | Wireframe, design token, komponen reusable (`BaseButton`, `BaseModal`, `ProjectCard`, `ImageGallery`), responsif, heuristic evaluation |

---

## Fitur & Halaman Utama

1. **Home (`/`)** — Identitas tim, ringkasan fokus kolaborasi, dan highlight project tim.
2. **About Team (`/about`)** — Daftar kartu profil 5 anggota tim beserta peran, skema, skills, dan tautan ke project/kontak.
3. **Project Showcase (`/projects`)** — Daftar seluruh project tim dengan pencarian dan filter kategori dinamis.
4. **Project Detail (`/projects/:id`)** — Informasi lengkap project (latar belakang, tujuan, fitur, teknologi, galeri screenshot dengan modal preview, kontribusi anggota, serta tautan repo/demo).
5. **Contact (`/contact`)** — Informasi kontak tim (email, GitHub, LinkedIn) dan formulir kontak dengan validasi input.

---

## Tech Stack

- **Frontend Framework**: Vue 3 (`^3.5.13`, Composition API `<script setup>`)
- **Build Tool**: Vite (`^6.1.0`)
- **Routing**: Vue Router (`^4.5.0`, HTML5 History Mode)
- **State Management**: Pinia (`^2.3.1`)
- **HTTP Client**: Axios (`^1.7.9`)
- **Styling**: Tailwind CSS (`^3.4.17`) + PostCSS + Autoprefixer
- **Unit Testing**: Vitest (`^2.1.8`)
- **E2E / Functional Testing**: Selenium WebDriver (`^4.51.0`)
- **Mock Backend API**: MockAPI.io (2 resource: `members` dan `projects`)
- **Deployment**: Vercel (dengan konfigurasi SPA rewrite pada `vercel.json`)

---

## Cara Menjalankan Proyek

### Prasyarat
- **Node.js** versi 18 atau lebih baru
- **npm**

### Langkah Instalasi & Menjalankan Lokal

1. **Clone repository**
   ```bash
   git clone https://github.com/Kel5-UILanjut/TUBES_UI-LANJUTAN_KEL-5.git
   cd TUBES_UI-LANJUTAN_KEL-5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi environment**
   Salin file `.env.example` menjadi `.env`, lalu sesuaikan nilai `VITE_API_BASE_URL` (lihat panduan API di [docs/api.md](docs/api.md)):
   ```bash
   cp .env.example .env
   ```
   > **Catatan:** File `.env` tidak di-commit ke repository (terdaftar di `.gitignore`).

4. **Jalankan server development**
   ```bash
   npm run dev
   ```
   Buka URL lokal yang ditampilkan oleh Vite di browser (umumnya `http://localhost:5173`).

5. **Build & preview produksi**
   ```bash
   npm run build
   npm run preview
   ```

6. **Menjalankan pengujian**
   - **Unit test (Vitest):**
     ```bash
     npm run test
     ```
   - **E2E smoke test (Selenium WebDriver):**
     ```bash
     npm run test:e2e
     ```
     Detail panduan E2E dapat dilihat di [tests/e2e/README.md](tests/e2e/README.md).

---

## Struktur Folder

```text
├── docs/                  # Dokumentasi proyek (API, user flow, test case, backlog, data JSON)
│   └── project-data/      # Sumber data member & project tiap anggota (*.json)
├── public/
│   └── images/
│       ├── members/       # Foto profil anggota (*.webp)
│       └── projects/      # Screenshot project anggota (*.webp)
├── src/
│   ├── assets/            # CSS utama & aset statis
│   ├── components/        # Komponen Vue reusable
│   ├── router/            # Konfigurasi Vue Router
│   ├── services/          # Konfigurasi Axios & service API
│   ├── stores/            # Store Pinia
│   ├── utils/             # Fungsi helper/validasi murni
│   └── views/             # Komponen halaman utama
├── tests/
│   ├── e2e/               # Pengujian end-to-end (Selenium)
│   └── unit/              # Unit test (Vitest)
├── .env.example           # Contoh variabel environment
├── package.json
├── tailwind.config.js
├── vercel.json            # Konfigurasi rewrite SPA untuk Vercel
└── vite.config.js
```

---

## Kesepakatan Ritme Kerja & Sprint (Scrum)

Proyek dikerjakan dalam **4 minggu (4 Sprint)** menggunakan metodologi Scrum:

| Minggu | Milestone | Fokus Utama |
|---|---|---|
| **Minggu 1** | Fondasi | Inisialisasi repo, router + placeholder halaman, board backlog, setup MockAPI & Vercel, design token, wireframe, template test, README awal, user flow, dan data project pribadi |
| **Minggu 2** | Komponen Inti & API Awal | Layout utama, Pinia store, service layer API, Navbar/Footer/Home, About + `ProfileCard`, komponen UI dasar (`BaseButton`, `BaseModal`, `ProjectCard`), serta seed 5 data ke MockAPI |
| **Minggu 3** | Fitur Utama, State & Testing | Project Showcase (search/filter), Project Detail, halaman Contact + validasi form, galeri modal, state handling final, eksekusi test & pencatatan bug |
| **Minggu 4** | Finalisasi | Perbaikan bug, regression test, heuristic evaluation, polish aksesibilitas/UI, deploy final, ringkasan kontribusi, dan pitch deck |

### Ritme Mingguan Tim
- **Senin** — *Sprint Planning*: menyepakati target issue dan memindahkannya ke kolom sprint aktif.
- **Setiap Hari** — *Daily Standup* (dapat dilakukan secara asinkron): melaporkan progres, rencana hari ini, dan kendala (*blocker*).
- **Jumat** — *Sprint Review & Retrospective*: mendemokan hasil sprint, mengevaluasi proses kerja, dan menyiapkan perbaikan untuk sprint berikutnya.

### Alur Papan Tugas (GitHub Projects)
- **Todo**: Task yang siap dikerjakan pada sprint aktif.
- **In Progress (Doing)**: Task yang sedang dikerjakan oleh PIC terkait.
- **In Review**: Pull Request telah dibuka dan menunggu review tim.
- **Done**: PR telah direview, di-merge, dan memenuhi *Definition of Done*.

---

## Aturan Branch, Commit, dan Pull Request

1. **Struktur Branch**
   - `main` (protected) ← `develop` ← `feature/<id-task>-<slug>` (atau branch fitur masing-masing anggota sesuai alur PR ke `develop`/`main`).
   - Merge dari `develop` ke `main` dilakukan oleh **Rico (Scrum Master)** di akhir sprint setelah stabil.

2. **Konvensi Pesan Commit**
   Gunakan prefix standar berikut agar riwayat perubahan mudah dilacak:
   - `feat:` penambahan fitur baru
   - `fix:` perbaikan bug
   - `docs:` penambahan atau pembaruan dokumentasi
   - `test:` penambahan atau pembaruan test
   - `refactor:` perbaikan struktur kode tanpa mengubah perilaku
   - `style:` perubahan styling / formatting
   - `chore:` konfigurasi build, dependencies, atau tugas pemeliharaan

   Contoh: `docs(readme): add initial README and sprint workflow`

3. **Aturan Pull Request (PR)**
   - **Satu issue = satu PR**, dan cantumkan ID/nomor issue pada judul atau deskripsi PR.
   - Setiap PR wajib direview oleh **minimal 1 anggota tim** sebelum di-merge.
   - Semua anggota wajib memiliki kontribusi commit kode sendiri di repository.
   - Jangan melakukan commit file sensitif atau file lokal konteks seperti `.env` dan `PRD.md`.
