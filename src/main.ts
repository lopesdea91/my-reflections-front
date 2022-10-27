import { createApp } from 'vue'
import './assets/css/app.scss'
import App from './App.vue'

import { pinia } from './config/pinia'
import { router } from './config/router'
import { FontAwesomeIcon } from './config/fontawesome'

// import components 
import TextBase from './components/base/Text.vue'
import TextLinkBase from './components/base/TextLink.vue'
import FormBase from './components/base/Form.vue'
import ButtonBase from './components/base/Button.vue'
import ButtonGroupBase from './components/base/ButtonGroup.vue'
import InputTextBase from './components/base/InputText.vue'
import InputTextareaBase from './components/base/InputTextarea.vue'
import Title from './components/layout/content/Title.vue'

const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
    console.log('err', err);
    console.log('vm', vm);
    console.log('info', info);
}
// components
app.component('Icon', FontAwesomeIcon)
app.component('Text', TextBase)
app.component('TextLink', TextLinkBase)
app.component('Form', FormBase)
app.component('Button', ButtonBase)
app.component('ButtonGroup', ButtonGroupBase)
app.component('InputText', InputTextBase)
app.component('InputTextarea', InputTextareaBase)
app.component('Title', Title)


app.use(pinia)
app.use(router)
app.mount('#app')
