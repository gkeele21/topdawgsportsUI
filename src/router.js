import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import AdminDashboard from './views/admin/Dashboard.vue'
import AdminUsers from './views/admin/Users.vue'
import AdminSeasons from './views/admin/Seasons.vue'
import AdminSeasonInfo from './views/admin/SeasonInfo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/admin',
            name: 'admindashboard',
            component: AdminDashboard
        },
        {
            path: '/admin/seasons',
            name: 'seasons',
            component: AdminSeasons
        },
        {
            path: '/admin/users',
            name: 'users',
            component: AdminUsers,
        },
        {
            name: 'seasoninfo',
            path: '/admin/seasons/:seasonid',
            component: AdminSeasonInfo,
            props: true,
        },

    ]
})
