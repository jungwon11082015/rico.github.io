import { createWebHashHistory, createRouter } from "vue-router";
import { gsap, Expo } from 'gsap';

const tl = gsap.timeline();

const waveReset = (wave, tl, contents) => {
  tl.to(contents, 0, { opacity: 1 });
  wave.style.opacity = 0;
  tl.to(wave, 0.75, { y: "100%", ease: Expo.easeInOut });
};

const waveShow = (wave, tl, contents, next) => {
  tl.to(contents, 0, { opacity: 0 });
  wave.style.opacity = 1;
  tl.to(wave, 0.75, { y: 0, ease: Expo.easeInOut });
  tl.to(wave, 0.75, {
    y: "-110%",
    ease: Expo.easeInOut,
    onComplete: () => {
      waveReset(wave, tl, contents);
      next();
    },
  });
};

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/Work",
    name: "Work",
    component: () => import("@/views/Work/Index.vue"),
  },
  {
    path: "/WorkView:id",
    name: "WorkView",
    component: () => import("@/views/Work/View.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("@/views/Contact/Index.vue"),
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () => import("@/views/Blog/Index.vue"),
  },
  {
    path: "/BlogView:id",
    name: "BlogView",
    component: () => import("@/views/Blog/View.vue"),
    meta: { requiresAuth: true },
  },
];

// Create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const header = document.getElementsByTagName("header")[0];
  const wave = document.getElementById("wave");
  const contents = gsap.utils.toArray("header, nav, main, #work, footer");
  
  if (!header.classList.contains('open')) {
    // Show wave and hide contents before navigating
    waveShow(wave, tl, contents, next);
    // setTimeout(() => {
    //   next();
    // }, 1000);
  }
});

export default router;