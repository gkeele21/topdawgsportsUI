import Vue from 'vue'
import Router from 'vue-router'
import AdminSeasons from './views/admin/Seasons.vue'
import AdminDashboard from './views/admin/Dashboard.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
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

    ]
})
