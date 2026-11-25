# GitHub Projects Setup & Backlog Manajemen

> Dikelola oleh: **Rico (Scrum Master)**  
> Mata Kuliah: UI Lanjut  
> Sprint Duration: 4 Minggu  
> Metodologi: Scrum  

---

## 1. Konfigurasi Board GitHub Projects

Board dibuat dengan tipe **Projects (Beta / Kanban)** dengan kolom standar alur kerja tim:

| Kolom | Definisi |
|---|---|
| **📋 Todo** | Task yang telah disepakati untuk sprint aktif namun belum mulai dikerjakan. |
| **🚀 In Progress (Doing)** | Task yang sedang dikerjakan secara aktif oleh PIC di branch `feature/*`. |
| **🔍 In Review** | PR telah dibuat dan sedang menunggu review minimal 1 rekan tim sebelum merge. |
| **✅ Done** | PR sudah direview dan di-merge ke branch `develop`, kriteria penerimaan terpenuhi. |

### Label yang Digunakan
- **Sprint**: `sprint-1`, `sprint-2`, `sprint-3`, `sprint-4`
- **PIC**: `pic:rico`, `pic:rey`, `pic:faiz`, `pic:aldinda`, `pic:shafa`
- **Tipe**: `type:feature`, `type:docs`, `type:test`, `type:bug`, `type:chore`
- **Prioritas**: `priority:high`, `priority:medium`, `priority:low`

---

## 2. Status Sprint Saat Ini

- **Sprint 1 (Minggu 1: Fondasi)**: **STARTED (Active)**
- **Sprint 2 (Minggu 2: Komponen Inti dan API Awal)**: Planned
- **Sprint 3 (Minggu 3: Fitur Utama, State, dan Testing)**: Planned
- **Sprint 4 (Minggu 4: Finalisasi & Polishing)**: Planned

---

## 3. Daftar Backlog Issue Lengkap (Sprint 1 - 4)

### Sprint 1: Fondasi (Minggu 1)
| ID | Judul Issue | PIC | FR/NFR | File Terkait | Status |
|---|---|---|---|---|---|
| `W1-RICO-01` | Inisialisasi repo dan struktur proyek Vue | Rico | NFR-03 | `package.json`, `vite.config.js`, `.gitignore`, `src/main.js`, `src/App.vue`, folder structure | ✅ Done |
| `W1-RICO-02` | Setup Vue Router dan placeholder 5 halaman | Rico | FR-01, FR-10 | `src/router/index.js`, `src/views/*View.vue` | ✅ Done |
| `W1-RICO-03` | Setup Tailwind dan Pinia | Rico | NFR-04 | `tailwind.config.js`, `postcss.config.js`, `src/assets/main.css`, `src/main.js` | ✅ Done |
| `W1-RICO-04` | Siapkan board dan backlog GitHub Projects | Rico | NFR-05 | `docs/github-projects-backlog.md` | ✅ Done |
| `W1-RICO-05` | Siapkan data project pribadi Rico | Rico | FR-04 | `docs/project-data/rico.json`, `public/images/members/rico.webp`, `public/images/projects/rico-project-*.webp` | ✅ Done |
| `W1-REY-01` | Setup MockAPI resource members dan projects | Rey | FR-09 | `docs/api.md` | 📋 Todo |
| `W1-REY-02` | Konfigurasi deploy Vercel dan environment | Rey | NFR-02, NFR-08 | `vercel.json`, `.env.example` | 📋 Todo |
| `W1-REY-03` | Buat instance Axios terpusat | Rey | FR-09 | `src/services/api.js` | 📋 Todo |
| `W1-REY-04` | Siapkan data project pribadi Rey | Rey | FR-04 | `docs/project-data/rey.json`, aset gambar | 📋 Todo |
| `W1-FAIZ-01` | Template test case dan strategi pengujian | Faiz | NFR-05 | `docs/test-cases.md` | 📋 Todo |
| `W1-FAIZ-02` | Setup Selenium/Katalon dan smoke test | Faiz | NFR-02 | `tests/e2e/*` | 📋 Todo |
| `W1-FAIZ-03` | Siapkan data project pribadi Faiz | Faiz | FR-04 | `docs/project-data/faiz.json`, aset gambar | 📋 Todo |
| `W1-ALDINDA-01` | README awal dan kesepakatan ritme kerja | Aldinda | NFR-05 | `README.md` | 📋 Todo |
| `W1-ALDINDA-02` | Dokumentasi user flow | Aldinda | FR-10 | `docs/user-flow.md` | 📋 Todo |
| `W1-ALDINDA-03` | Siapkan data project pribadi Aldinda | Aldinda | FR-04 | `docs/project-data/aldinda.json`, aset gambar | 📋 Todo |
| `W1-SHAFA-01` | Design token (warna, font, spacing) | Shafa | NFR-04 | `tailwind.config.js`, `src/assets/main.css` | 📋 Todo |
| `W1-SHAFA-02` | Wireframe 5 halaman desktop dan mobile | Shafa | NFR-01 | `docs/wireframes/`, `docs/design-system.md` | 📋 Todo |
| `W1-SHAFA-03` | Siapkan data project pribadi Shafa | Shafa | FR-04 | `docs/project-data/shafa.json`, aset gambar | 📋 Todo |

### Sprint 2: Komponen Inti dan API Awal (Minggu 2)
| ID | Judul Issue | PIC | FR/NFR | File Terkait |
|---|---|---|---|---|
| `W2-RICO-01` | Layout App dengan Navbar, Footer, router-view | Rico | FR-01 | `src/App.vue` |
| `W2-RICO-02` | Fungsi murni filter dan search project | Rico | FR-05 | `src/utils/filterProjects.js` |
| `W2-RICO-03` | Store Pinia untuk state filter | Rico | FR-05 | `src/stores/filter.js` |
| `W2-REY-01` | Service members dan projects | Rey | FR-09 | `src/services/membersService.js`, `projectsService.js` |
| `W2-REY-02` | Store members dan projects dengan status data | Rey | FR-09 | `src/stores/members.js`, `src/stores/projects.js` |
| `W2-REY-03` | Komponen StateMessage (loading/error/empty) | Rey | FR-09 | `src/components/StateMessage.vue` |
| `W2-REY-04` | Input 5 data anggota dan project ke MockAPI | Rey | FR-03, FR-04 | `docs/api.md` |
| `W2-FAIZ-01` | Komponen NavBar dan FooterBar | Faiz | FR-01 | `src/components/NavBar.vue`, `FooterBar.vue` |
| `W2-FAIZ-02` | Halaman Home (hero, fokus tim, highlight project) | Faiz | FR-02 | `src/views/HomeView.vue` |
| `W2-FAIZ-03` | Test case sprint 2 dan e2e navigasi | Faiz | NFR-05 | `docs/test-cases.md`, `tests/e2e/*` |
| `W2-ALDINDA-01` | Implementasi Component Kartu Anggota (ProfileCard) | Aldinda | FR-03 | `src/components/ProfileCard.vue` |
| `W2-ALDINDA-02` | Halaman About Team | Aldinda | FR-03 | `src/views/AboutView.vue` |
| `W2-ALDINDA-03` | Dokumentasi komponen sprint 2 | Aldinda | NFR-03 | `docs/components.md` |
| `W2-SHAFA-01` | Komponen BaseButton dan BaseModal | Shafa | NFR-03, NFR-05 | `src/components/BaseButton.vue`, `BaseModal.vue` |
| `W2-SHAFA-02` | Komponen ProjectCard | Shafa | FR-04 | `src/components/ProjectCard.vue` |
| `W2-SHAFA-03` | Draft checklist heuristic evaluation | Shafa | NFR-05 | `docs/heuristic-evaluation.md` |

### Sprint 3: Fitur Utama, State, dan Testing (Minggu 3)
| ID | Judul Issue | PIC | FR/NFR | File Terkait |
|---|---|---|---|---|
| `W3-RICO-01` | Halaman Project Showcase | Rico | FR-04 | `src/views/ProjectsView.vue` |
| `W3-RICO-02` | SearchBar dan CategoryFilter terhubung state | Rico | FR-05 | `src/components/SearchBar.vue`, `CategoryFilter.vue` |
| `W3-RICO-03` | Pertahankan filter saat kembali dari Detail | Rico | FR-10 | `src/stores/filter.js`, `src/views/ProjectsView.vue` |
| `W3-REY-01` | Halaman Project Detail | Rey | FR-06, FR-10 | `src/views/ProjectDetailView.vue` |
| `W3-REY-02` | Unit test fungsi filter dan store | Rey | NFR-05 | `tests/unit/filterProjects.spec.js` |
| `W3-REY-03` | Penyempurnaan error handling API | Rey | FR-09 | `src/services/api.js`, `src/stores/*` |
| `W3-FAIZ-01` | E2E alur utama Home sampai Contact | Faiz | FR-10 | `tests/e2e/*` |
| `W3-FAIZ-02` | E2E search, filter, dan state | Faiz | FR-05, FR-09 | `tests/e2e/*` |
| `W3-FAIZ-03` | Eksekusi test dan catat hasil | Faiz | NFR-05 | `docs/test-cases.md` |
| `W3-ALDINDA-01` | Komponen ContactForm dan validasi | Aldinda | FR-08 | `src/components/ContactForm.vue`, `src/utils/validateContact.js` |
| `W3-ALDINDA-02` | Halaman Contact | Aldinda | FR-08 | `src/views/ContactView.vue` |
| `W3-ALDINDA-03` | Unit test validasi kontak dan update docs | Aldinda | NFR-05 | `tests/unit/validateContact.spec.js`, `docs/components.md` |
| `W3-SHAFA-01` | Komponen ImageGallery dengan modal preview | Shafa | FR-07 | `src/components/ImageGallery.vue` |
| `W3-SHAFA-02` | Pengecekan responsif semua halaman | Shafa | NFR-01 | `docs/responsive-check.md` |
| `W3-SHAFA-03` | Heuristic evaluation draft | Shafa | NFR-05 | `docs/heuristic-evaluation.md` |

### Sprint 4: Finalisasi (Minggu 4)
| ID | Judul Issue | PIC | FR/NFR | File Terkait |
|---|---|---|---|---|
| `W4-RICO-01` | Perbaikan bug prioritas tinggi | Rico | NFR-05 | Sesuai temuan bug |
| `W4-RICO-02` | Merge final ke main dan rilis | Rico | NFR-02 | `git merge develop -> main`, tag `v1.0.0` |
| `W4-RICO-03` | Kerangka pitch deck dan pembagian bicara | Rico | - | `docs/pitch-outline.md` |
| `W4-REY-01` | Finalisasi dokumentasi API dan bukti request-response | Rey | FR-09 | `docs/api.md`, `docs/api-evidence/` |
| `W4-REY-02` | Optimasi gambar dan cek produksi | Rey | NFR-07 | `public/images/*`, `vercel.json` |
| `W4-REY-03` | Perbaikan bug dan regresi unit test | Rey | NFR-05 | Sesuai temuan bug |
| `W4-FAIZ-01` | Regression test pada URL production | Faiz | NFR-02 | `tests/e2e/*`, `docs/test-cases.md` |
| `W4-FAIZ-02` | Laporan hasil pengujian akhir | Faiz | NFR-05 | `docs/test-report.md` |
| `W4-ALDINDA-01` | Ringkasan kontribusi tiap anggota | Aldinda | - | `docs/contributions.md` |
| `W4-ALDINDA-02` | Finalisasi README dan dokumentasi komponen | Aldinda | NFR-03 | `README.md`, `docs/components.md` |
| `W4-ALDINDA-03` | Checklist deliverables akhir | Aldinda | - | `docs/deliverables-checklist.md` |
| `W4-SHAFA-01` | Finalisasi heuristic evaluation dan perbaikan UI | Shafa | NFR-05 | `docs/heuristic-evaluation.md` |
| `W4-SHAFA-02` | Polish konsistensi dan aksesibilitas visual | Shafa | NFR-04, NFR-06 | `docs/design-system.md` |
| `W4-SHAFA-03` | Aset visual pitch deck | Shafa | - | `docs/pitch-assets/` |
