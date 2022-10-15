import { createApp } from 'vue'
import './assets/css/app.scss'
import App from './App.vue'

import { pinia } from './config/pinia'

const app = createApp(App)
app.use(pinia)
app.mount('#app')
