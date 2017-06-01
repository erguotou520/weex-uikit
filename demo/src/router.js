import Router from 'vue-router'
import Homepage from './views/Homepage'
import Color from './views/Color'
import Text from './views/Text'
import Button from './views/Button'
import Radio from './views/Radio'
import Checkbox from './views/Checkbox'
import Input from './views/Input'
import Select from './views/Select'
import Tab from './views/Tab'
import Progress from './views/Progress'
import Cell from './views/Cell'

import store from './store'
Vue.use(Router)

const router = new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: Homepage },
    { path: '/color', component: Color },
    { path: '/text', component: Text },
    { path: '/button', component: Button },
    { path: '/radio', component: Radio },
    { path: '/checkbox', component: Checkbox },
    { path: '/input', component: Input },
    { path: '/select', component: Select },
    { path: '/tab', component: Tab },
    { path: '/progress', component: Progress },
    { path: '/cell', component: Cell }
  ]
})

router.beforeEach((to, from, next) => {
  store.dispatch('setTitle', to.path.replace(/^\//, ''))
  next()
})

export default router
