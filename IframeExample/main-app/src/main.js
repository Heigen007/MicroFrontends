import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]
  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
