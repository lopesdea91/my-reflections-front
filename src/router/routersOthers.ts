import { RouteRecordRaw } from "vue-router";
import NotFound from '@/pages/notFound/NotFound.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]

export default routes