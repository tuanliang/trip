import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pinia from './store/index.js'

import 'normalize.css'
import "./assets/css/index.css"

createApp(App).use(router).use(pinia).mount('#app')
