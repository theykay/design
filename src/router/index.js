import { createRouter, createWebHistory } from 'vue-router';
import {
  About,
  Apps,
  Handmade,
  Home,
  Resume,
  UX
} from '../views';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'about me'
    },
    children: [
      {
        path: '/resume',
        name: 'Resume',
        component: Resume,
        meta: {
          title: 'resume'
        }
      },
    ]
  },
  {
    path: '/apps',
    name: 'Apps',
    component: Apps,
    meta: {
      title: 'apps'
    }
  },
  {
    path: '/handmade',
    name: 'Handmade',
    component: Handmade,
    meta: {
      title: 'handmade'
    }
  },
  {
    path: '/ux',
    name: 'UX',
    component: UX,
    meta: {
      title: 'ux'
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
})

export default router;