import { RouteRecordRaw } from "vue-router";
import Profile from '@/pages/profile/Profile.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
]

export default routes