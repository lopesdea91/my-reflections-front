import { RouteRecordRaw } from "vue-router";
import Home from '@/pages/home/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        redirect: 'feed',
    },
    {
        path: '/feed',
        name: 'Feed',
        component: Home
    },
]

export default routes