import Router from 'vue-router'
import Homepage from './views/Homepage'
import Color from './views/Color'
import Text from './views/Text'
import Iconfont from './views/Iconfont'
import Button from './views/Button'
import Radio from './views/Radio'
import Checkbox from './views/Checkbox'
import Input from './views/Input'
import Select from './views/Select'
import Tab from './views/Tab'
import Progress from './views/Progress'
import Cell from './views/Cell'
import Navbar from './views/Navbar'

import store from './store'
Vue.use(Router)

const router = new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: Homepage },
    { path: '/color', component: Color },
    { path: '/text', component: Text },
    { path: '/iconfont', component: Iconfont },
    { path: '/button', component: Button },
    { path: '/radio', component: Radio },
    { path: '/checkbox', component: Checkbox },
    { path: '/input', component: Input },
    { path: '/select', component: Select },
    { path: '/tab', component: Tab },
    { path: '/progress', component: Progress },
    { path: '/cell', component: Cell },
    { path: '/navbar', component: Navbar, children: [
      { path: '/', component: { template: '<text>home</text>' }},
      { path: 'cart', component: { template: '<text>cart</text>' }},
      { path: 'order', component: { render (h) { h('text', 'order') } }},
      { path: 'my', component: { render (h) { h('text', 'my') } }}
    ] }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('setTitle', to.path.replace(/^\//, ''))
  next()
})

export default router
