/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── PRIMARY: Biru Indigo (tombol utama, link, menu aktif) ──────────
        primary: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C3CEFD',
          300: '#9AABFA',
          400: '#6E82F4',
          500: '#4A5DEB',
          600: '#3644D6', // default
          700: '#2C36B0', // hover
          800: '#272F8C',
          900: '#232A6E',
        },

        // ── SECONDARY: Amber (aksen – badge kategori) ──────────────────────
        // Di atas secondary-400/500 pakai teks gelap (neutral-900)
        secondary: {
          50:  '#FFF8EB',
          100: '#FEEBC8',
          200: '#FDD48B',
          300: '#FCB84E',
          400: '#FA9F25',
          500: '#F2810D', // default
          600: '#D66208',
          700: '#B1470B',
          800: '#8F3810',
          900: '#752F11',
        },

        // ── NEUTRAL: Slate ─────────────────────────────────────────────────
        neutral: {
          50:  '#F8FAFC', // background
          100: '#F1F5F9',
          200: '#E2E8F0', // border
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B', // teks kecil
          600: '#475569', // teks isi
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A', // judul
        },

        // ── STATUS ─────────────────────────────────────────────────────────
        status: {
          success: '#15803D',
          warning: '#B45309',
          error:   '#DC2626',
          info:    '#2563EB',
        },
      },

      // ── FONT FAMILIES ────────────────────────────────────────────────────
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },

      // ── BORDER RADIUS ────────────────────────────────────────────────────
      borderRadius: {
        badge:  '6px',
        button: '10px',
        input:  '10px',
        card:   '16px',
        modal:  '24px',
      },

      // ── MAX WIDTH ─────────────────────────────────────────────────────────
      maxWidth: {
        content: '1200px',
      },

      // ── SPACING: tambah section padding ──────────────────────────────────
      // section-desktop = 5rem, section-mobile = 3rem
      // (pakai py-section-desktop / py-section-mobile di komponen)
      spacing: {
        'section-desktop': '5rem',   // 80px
        'section-mobile':  '3rem',   // 48px
      },
    },
  },
  plugins: [],
}
