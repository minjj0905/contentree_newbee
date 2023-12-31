import { createRouter, createWebHistory } from 'vue-router';
import SidebarLayoutVue from '@/components/Sidebar/SidebarLayout.vue';
import SearchVue from '@/components/Sidebar/Content/Search.vue';
import PopupVue from '@/components/Sidebar/Content/Popup.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: SidebarLayoutVue,
      children: [
        {
          path: '/search',
          component: SearchVue,
        },
        {
          name: 'popup',
          path: '/popup/:name',
          component: PopupVue,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
