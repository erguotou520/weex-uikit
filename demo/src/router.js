import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Color from './views/Color.vue'
import Text from './views/Text.vue'
import Button from './views/Button.vue'
Vue.use(Router)

const router = new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: Homepage },
    { path: '/color', component: Color },
    { path: '/text', component: Text },
    { path: '/button', component: Button }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
