<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = route.params.id
</script>

<template>
  <div class="project-detail-view">
    <div class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
      <h2 class="text-2xl font-bold text-amber-900 mb-2">Detail Project #{{ projectId }}</h2>
      <p class="text-amber-700">
        Menampilkan latar belakang, tujuan, fitur, teknologi, galeri screenshot, dan kontribusi pembuat.
      </p>
    </div>
    <div class="p-6 bg-white shadow rounded-lg border border-gray-100">
      <p class="text-gray-600">Konten lengkap detail project akan dimuat secara dinamis melalui API.</p>
      <div class="mt-4">
        <router-link to="/projects" class="text-blue-600 hover:underline text-sm font-medium">
          &larr; Kembali ke Project Showcase
        </router-link>
      </div>
    </div>
  </div>
</template>
