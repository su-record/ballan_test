import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/sign-up",
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/registration-complete",
      name: "registrationComplete",
      component: () => import("../views/RegistrationCompleteView.vue"),
    },
  ],
});

export default router;
