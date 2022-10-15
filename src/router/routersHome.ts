import { RouteRecordRaw } from "vue-router";
import Home from '@/pages/home/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

export default routes