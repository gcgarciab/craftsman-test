import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BookDetailView from '@/views/BookDetailView.vue';
import FavoritesView from '@/views/FavoritesView.vue';

import HomeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesView,
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
