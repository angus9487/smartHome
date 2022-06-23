import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Floorplan from '../components/Floorplan.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Floorplan
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutView
    },
    {
        path: '/overview',
        name: 'overview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Floorplan
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
