import { RouteRecordRaw } from "vue-router";
import Account from '@/pages/account/Account.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/account',
        name: 'Account',
        component: Account
    }
]

export default routes