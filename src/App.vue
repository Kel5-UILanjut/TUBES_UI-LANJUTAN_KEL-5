<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Team', path: '/about' },
  { name: 'Project Showcase', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <div id="app-container" class="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
    <!-- Navbar Placeholder -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2 font-bold text-lg text-blue-600">
          <span>&lt;TeamPortfolio /&gt;</span>
        </router-link>
        <nav class="flex items-center gap-1 sm:gap-4 text-sm font-medium">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-3 py-1.5 rounded-md transition"
            :class="route.path === link.path ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'"
          >
            {{ link.name }}
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content Routed -->
    <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
      <router-view />
    </main>

    <!-- Footer Placeholder -->
    <footer class="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>&copy; 2026 Team Portfolio - Tugas Besar UI Lanjut. Dikelola oleh Rico & Tim.</p>
    </footer>
  </div>
</template>
