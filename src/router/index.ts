import { RouteRecordRaw } from 'vue-router'

import routersAccount from './routersAccount'
import routersAuth from './routersAuth'
import routersHome from './routersHome'
import routersPost from './routersPost'
import routersProfile from './routersProfile'
import routersOthers from './routersOthers'

export const routes: RouteRecordRaw[] = [
    ...routersAccount,
    ...routersAuth,
    ...routersHome,
    ...routersPost,
    ...routersProfile,
    ...routersOthers,
]