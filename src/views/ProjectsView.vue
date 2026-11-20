<script setup>
// Placeholder ProjectsView - UI Lanjut (FR-04, FR-05)
</script>

<template>
  <div class="projects-view">
    <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-bold text-emerald-900 mb-2">Project Showcase</h2>
      <p class="text-emerald-700">
        Jelajahi dan filter project yang dibangun oleh anggota tim kami.
      </p>
    </div>
    <div class="flex items-center gap-3 p-4 bg-white shadow rounded-lg border border-gray-100 mb-6">
      <input
        type="text"
        placeholder="Cari project berdasarkan nama, teknologi..."
        class="border border-gray-300 rounded px-3 py-2 flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        disabled
      />
      <button class="bg-emerald-600 text-white px-4 py-2 rounded text-sm hover:bg-emerald-700" disabled>
        Filter Kategori
      </button>
    </div>
    <p class="text-gray-600">Daftar kartu project (ProjectCard) akan ditampilkan di sini.</p>
  </div>
</template>
