import Router from 'vue-router'
import Homepage from './views/Homepage'
import Color from './views/Color'
import Text from './views/Text'
import Button from './views/Button'
import Header from './views/Header'
import Radio from './views/Radio'
import Checkbox from './views/Checkbox'
import store from './store'
Vue.use(Router)

const router = new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: Homepage },
    { path: '/color', component: Color },
    { path: '/text', component: Text },
    { path: '/button', component: Button },
    { path: '/header', component: Header },
    { path: '/radio', component: Radio },
    { path: '/checkbox', component: Checkbox }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('setTitle', to.path.replace(/^\//, ''))
  next()
})

export default router
