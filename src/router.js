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
import AdminSeasonEdit from "./views/admin/SeasonEdit.vue";
import AdminSeasonCreate from "./views/admin/SeasonCreate.vue";
import AdminLeagueInfo from "./views/admin/LeagueInfo.vue";
import AdminLeagueEdit from "./views/admin/LeagueEdit.vue";
import AdminLeagueCreate from "./views/admin/LeagueCreate.vue";
import AdminTeamInfo from "./views/admin/TeamInfo.vue";
import AdminTeamEdit from "./views/admin/TeamEdit.vue";
import AdminTeamCreate from "./views/admin/TeamCreate.vue";
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
      name: "adminseasoninfo",
      path: "/admin/seasons/:seasonid",
      component: AdminSeasonInfo,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminseasonedit",
      path: "/admin/seasons/:seasonid/edit",
      component: AdminSeasonEdit,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminseasoncreate",
      path: "/admin/seasons/create",
      component: AdminSeasonCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminleagueinfo",
      path: "/admin/league/:leagueid",
      component: AdminLeagueInfo,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminleagueedit",
      path: "/admin/league/:leagueid/edit",
      component: AdminLeagueEdit,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminleaguecreate",
      path: "/admin/league/create",
      component: AdminLeagueCreate,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminteaminfo",
      path: "/admin/team/:teamid",
      component: AdminTeamInfo,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminteamedit",
      path: "/admin/team/:teamid/edit",
      component: AdminTeamEdit,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "adminteamcreate",
      path: "/admin/team/create",
      component: AdminTeamCreate,
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
