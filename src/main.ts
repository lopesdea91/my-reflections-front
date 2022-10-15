import { createApp } from 'vue'
import './assets/css/app.scss'
import App from './App.vue'

import { pinia } from './config/pinia'
import { router } from './config/router'
import { FontAwesomeIcon } from './config/fontawesome'

const app = createApp(App)
app.component('Icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
