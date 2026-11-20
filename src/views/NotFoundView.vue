<script setup>
// 404 Not Found Page
</script>

<template>
  <div class="not-found-view text-center py-16">
    <div class="inline-block p-4 bg-red-100 text-red-700 rounded-full mb-4">
      <span class="text-4xl font-extrabold">404</span>
    </div>
    <h2 class="text-3xl font-bold text-gray-800 mb-2">Halaman Tidak Ditemukan</h2>
    <p class="text-gray-600 mb-6">
      Maaf, tautan atau halaman yang Anda cari tidak tersedia di portofolio ini.
    </p>
    <router-link
      to="/"
      class="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Kembali ke Beranda
    </router-link>
  </div>
</template>
