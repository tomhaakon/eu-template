import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PartnerView from "../views/PartnerView.vue";
import InterestingView from "../views/InterestingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/interesting",
      name: "interesting",
      component: InterestingView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/partners",
      name: "partners",
      component: PartnerView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
