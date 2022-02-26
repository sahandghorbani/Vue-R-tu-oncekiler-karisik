import { createRouter, createWebHistory } from 'vue-router' ;
import others from './components/pages/Styles-and-etc.vue'


const routes = [
    {
      path: '/others',
      name: 'others',
      component: others
    } ,



]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })

  export default router