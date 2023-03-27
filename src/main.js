import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入SvgIcon.vue组件
import SvgIcon from './components/SvgIcon/index.vue'

import App from './App.vue'
import router from './router'
import './permission'

import './assets/main.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

import 'virtual:svg-icons-register'
app.component('SvgIcon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
