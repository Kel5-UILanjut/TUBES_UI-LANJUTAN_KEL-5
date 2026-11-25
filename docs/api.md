# Dokumentasi API (MockAPI.io)

Dokumen ini menjelaskan struktur resource, endpoint, dan konvensi penggunaan MockAPI.io untuk proyek **Team Portfolio Website**.

> **Catatan Free Plan MockAPI.io:**
> Batas maksimal adalah **2 resource** (`members` dan `projects`) dengan total maksimal **100 record**. Jangan membuat resource ketiga.

## 1. Base URL & Environment

Base URL disimpan di file `.env` (tidak di-commit ke Git) melalui variabel:

```env
VITE_API_BASE_URL=https://<project-id>.mockapi.io/api/v1
```

Seluruh request HTTP di aplikasi wajib melalui `src/services/api.js` (tidak boleh hardcode URL di komponen Vue).

## 2. Daftar Resource & Skema Field

### Resource 1: `members` (5 record)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | `string` | Otomatis dari MockAPI |
| `name` | `string` | Nama lengkap anggota |
| `role` | `string` | Peran di tim |
| `skema` | `string` | `Programming` / `IT Governance` / `UI/UX` |
| `skills` | `string[]` | Daftar keahlian |
| `avatar` | `string` | Path lokal di `public/`, mis. `/images/members/rey.webp` |
| `bio` | `string` | Deskripsi singkat anggota |
| `github` | `string` | URL profil GitHub |
| `linkedin` | `string` | URL profil LinkedIn |
| `email` | `string` | Alamat email |

### Resource 2: `projects` (5 record, 1 per anggota)

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | `string` | Otomatis dari MockAPI |
| `memberId` | `string` | Relasi ke `members.id` |
| `title` | `string` | Judul project |
| `summary` | `string` | Ringkasan singkat untuk kartu showcase |
| `category` | `string` | Kategori filter (`Web`, `Data`, `Security`, `Mobile`, `Other`) |
| `technologies` | `string[]` | Daftar teknologi yang digunakan |
| `background` | `string` | Latar belakang masalah project |
| `goal` | `string` | Tujuan project |
| `features` | `string[]` | Daftar fitur utama |
| `screenshots` | `string[]` | Path lokal di `public/`, mis. `/images/projects/rey-project-1.webp` |
| `contribution` | `string` | Kontribusi anggota pada project tersebut |
| `repoUrl` | `string` | URL repository GitHub |
| `demoUrl` | `string` | URL demo (opsional, boleh string kosong `""`) |

## 3. Daftar Endpoint

| Method | Endpoint | Deskripsi | Status Sukses |
|---|---|---|---|
| `GET` | `/members` | Mengambil semua data anggota tim | `200 OK` |
| `GET` | `/members/:id` | Mengambil detail 1 anggota berdasarkan `id` | `200 OK` |
| `POST` | `/members` | Menambahkan data anggota (digunakan oleh `scripts/seed.js`) | `201 Created` |
| `DELETE` | `/members/:id` | Menghapus data anggota (digunakan saat reset seed) | `200 OK` |
| `GET` | `/projects` | Mengambil semua data project | `200 OK` |
| `GET` | `/projects/:id` | Mengambil detail 1 project berdasarkan `id` | `200 OK` |
| `POST` | `/projects` | Menambahkan data project (digunakan oleh `scripts/seed.js`) | `201 Created` |
| `DELETE` | `/projects/:id` | Menghapus data project (digunakan saat reset seed) | `200 OK` |

### Contoh Respons `GET /members`

```json
[
  {
    "id": "1",
    "name": "Reynaldy",
    "role": "API + Deployment",
    "skema": "Programming",
    "skills": ["Vue 3", "Axios", "REST API", "Node.js", "Vercel", "Vitest"],
    "avatar": "/images/members/rey.webp",
    "bio": "Developer pada skema Programming...",
    "github": "https://github.com/reynaldy",
    "linkedin": "https://linkedin.com/in/reynaldy",
    "email": "reynaldy@example.com"
  }
]
```

## 4. Normalisasi Error (`src/services/api.js`)

Interceptor pada instance Axios menormalisasi seluruh error menjadi objek `Error` dengan pesan yang mudah dibaca oleh UI:

- **Timeout (`ECONNABORTED`)**: `"Koneksi ke server melebihi batas waktu. Silakan coba lagi."`
- **Network Error (tanpa respons)**: `"Tidak dapat terhubung ke server. Periksa koneksi internet atau konfigurasi API."`
- **HTTP 400**: `"Permintaan tidak valid."`
- **HTTP 404**: `"Data tidak ditemukan."`
- **HTTP 429**: `"Terlalu banyak permintaan ke server. Silakan tunggu sebentar."`
- **HTTP 500+**: `"Terjadi kesalahan pada server. Silakan coba lagi nanti."`

## 5. Panduan Setup Awal & Verifikasi

1. Buat project baru di [mockapi.io](https://mockapi.io/) dengan prefix `/api/v1`.
2. Buat resource `members` dan `projects` sesuai daftar field pada bagian 2 (data contoh bawaan MockAPI tidak masalah, karena akan otomatis dibersihkan saat `npm run seed` pertama dijalankan di Minggu 2).
3. Verifikasi kedua endpoint mengembalikan status `200 OK`:
   - `GET https://<project-id>.mockapi.io/api/v1/members`
   - `GET https://<project-id>.mockapi.io/api/v1/projects`
4. Salin `.env.example` menjadi `.env`, lalu isi `VITE_API_BASE_URL` dengan URL project MockAPI tersebut.
5. Tambahkan `VITE_API_BASE_URL` juga di Environment Variables pada dashboard Vercel.
