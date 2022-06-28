import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AllDevice from '../components/device/devicePartition.vue'
import Floorplan from '../components/main/Floorplan.vue'
import HomeAssistant from '../components/main/homeassistant.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: "/overview"
    },
    {
        path: '/allDevice',
        name: 'allDevice',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AllDevice
    },
    {
        path: '/overview',
        name: 'overview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Floorplan
    }
    ,
    {
        path: '/ha',
        name: 'ha',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HomeAssistant
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
