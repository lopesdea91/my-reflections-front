import { RouteRecordRaw } from "vue-router";
import Post from '@/pages/post/Post.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/post/:id',
        name: 'PostId',
        component: Post
    }
]

export default routes