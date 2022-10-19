import { RouteRecordRaw } from 'vue-router'

import routersHome from './routersHome'
import routersAuth from './routersAuth'
import routersPost from './routersPost'
import routersProfile from './routersProfile'

export const routes: RouteRecordRaw[] = [
    ...routersHome,
    ...routersAuth,
    ...routersPost,
    ...routersProfile,
]