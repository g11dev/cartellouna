import { createRouter, createWebHistory } from 'vue-router'
// da package
import HomeView from '../views/HomeView.vue'
  // EAGER
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // inganna il browser per far si che non richiami la pagina, ma venga gestito da vue 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')    
            //LAZY -> meglio perchè avviene il download solo quando avviene la richiesta da routerview (è quindi diluisco il tempo necessario)
    }
  ]
})

export default router
