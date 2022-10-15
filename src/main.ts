import { createApp } from 'vue'
import './assets/css/app.scss'
import App from './App.vue'

import { pinia } from './config/pinia'
import { router } from './config/router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
