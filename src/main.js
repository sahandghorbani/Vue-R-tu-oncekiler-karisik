import { createApp } from 'vue'
import App from './App.vue'

import router from './Router.js'

let appp =createApp(App)


appp.use(router)
appp.mount('#app')
