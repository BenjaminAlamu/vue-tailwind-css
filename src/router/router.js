import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/shared/home.vue";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new Router({
  routes,
  mode: "history",
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
});

export default router;
