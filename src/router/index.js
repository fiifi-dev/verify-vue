import Vue from "vue";
import VueRouter from "vue-router";
import * as containers from "../views/containers/index";
import * as pages from "../views/pages/index";
import Store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: containers.Auth,
    children: [
      {
        path: "/login",
        name: "login",
        component: pages.Login,
      },
      {
        path: "/signup",
        name: "signup",
        component: pages.Signup,
      },
      {
        path: "/password-reset/:token",
        name: "password-reset",
        component: pages.PasswordReset,
      },
      {
        path: "/password-reset-email",
        name: "password-reset-email",
        component: pages.PasswordResetEmail,
      },
    ],
  },
  {
    path: "/",
    component: containers.Pages,
    meta: {
      requires_auth: true,
    },
    children: [
      {
        path: "/",
        name: "home",
        component: pages.Home,
      },
      {
        path: "/profile",
        name: "profile",
        component: pages.Profile,
      },
      {
        path: "/about",
        name: "about",
        component: pages.About,
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: pages.Dashboard,
      },
      {
        path: "/photos",
        name: "photos",
        component: pages.Photos,
      },
      {
        path: "/settings",
        name: "settings",
        component: pages.Settings,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  let next_route = to.query.next || to.fullPath || "/";

  const requires_auth = to.matched.some((record) => record.meta.requires_auth);
  let valid_token = await Store.dispatch("auth/inspectToken");
  if (requires_auth && !valid_token) {
    next({ name: "login", query: { next: next_route } });
  } else {
    next();
  }
});

export default router;
