import { RouteRecordRaw } from "vue-router";
import SignIn from '@/pages/_auth/signin/SignIn.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    }
]

export default routes