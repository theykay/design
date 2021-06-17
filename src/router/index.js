import { createRouter, createWebHistory } from 'vue-router';
import { About, Apps, Handmade, Home, Resume, UX } from '../views';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Me'
    }
  },
  {
    path: '/apps',
    name: 'Apps',
    component: Apps,
    meta: {
      title: 'Apps'
    }
  },
  {
    path: '/handmade',
    name: 'Handmade',
    component: Handmade,
    meta: {
      title: 'Handmade'
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'Resume'
    }
  },
  {
    path: '/ux',
    name: 'UX',
    component: UX,
    meta: {
      title: 'UX'
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;