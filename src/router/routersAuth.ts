import { RouteRecordRaw } from "vue-router";
import Auth from '@/pages/auth/Auth.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    }
]

export default routes