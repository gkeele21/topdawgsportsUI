import Vue from "vue";
import store from "./store.js";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";

import AdminDashboard from "./views/admin/AdminDashboard.vue";
import AdminUsers from "./views/admin/Users.vue";
import AdminSeasons from "./views/admin/Seasons.vue";
import AdminSeasonInfo from "./views/admin/SeasonInfo.vue";
import AdminLeagueInfo from "./views/admin/LeagueInfo.vue";
import SalaryCapStandings from "./views/salarycap/Standings.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/admin",
      name: "admindashboard",
      component: AdminDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin/seasons",
      name: "adminseasons",
      component: AdminSeasons,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin/users",
      name: "adminusers",
      component: AdminUsers,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "seasoninfo",
      path: "/admin/seasons/:seasonid",
      component: AdminSeasonInfo,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "leagueinfo",
      path: "/admin/league/:leagueid",
      component: AdminLeagueInfo,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/salarycap/standings",
      name: "salarycapstandings",
      component: SalaryCapStandings
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
