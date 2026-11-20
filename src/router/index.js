import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home - Team Portfolio' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About Team - Team Portfolio' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: { title: 'Project Showcase - Team Portfolio' }
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    props: true,
    meta: { title: 'Project Detail - Team Portfolio' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact - Team Portfolio' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { title: '404 - Halaman Tidak Ditemukan' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
