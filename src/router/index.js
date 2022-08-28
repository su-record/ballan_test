import { createRouter, createWebHistory } from 'vue-router';
import { useAccountStore } from '@/stores/account';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/sign-up',
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/registration-complete',
      name: 'RegistrationComplete',
      component: () => import('../views/RegistrationCompleteView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/registration-complete') {
    const account = useAccountStore();
    if (!account.info) next({ name: 'SignUp' });
  }

  next();
});

export default router;
