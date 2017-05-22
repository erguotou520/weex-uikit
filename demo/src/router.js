import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
Vue.use(Router)

const router = new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: Homepage },
    {
      path: '/color',
      component: resolve => {
        import('./views/Color.vue').then(resolve)
      }
    },
    {
      path: '/text',
      component: resolve => {
        import('./views/Text.vue').then(resolve)
      }
    },
    {
      path: '/button',
      component: resolve => {
        import('./views/Button.vue').then(resolve)
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
