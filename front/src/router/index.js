import { createRouter, createWebHistory } from 'vue-router';
import SearchVue from '@/components/Sidebar/Search.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchVue,
    },
  ],
});

export default router;
