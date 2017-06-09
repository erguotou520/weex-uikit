<template>
  <div class="ajax-resource users">
    <list class="users">
      <cell class="user" v-for="user in users">
        <text class="user-name">{{user.name}}</text>
        <text class="user-email">{{user.email}}</text>
      </cell>
    </list>
    <u-button @click="add">添加</u-button>
  </div>
</template>
<script>
import { createInstance } from '../../../packages/utils'
const modal = weex.requireModule('modal')
export default {
  data () {
    return {
      users: [],
      user: {
        name: 'erguotou',
        email: 'erguotou525@gmail.com'
      }
    }
  },
  methods: {
    add () {
      this.$http.post('/users', this.user).then(() => {
        this.users.unshift(this.user)
        modal.toast({ message: '用户创建成功', duration: 3 })
      }).catch(() => {})
    },
    remove (user) {
      modal.toast({ message: '目前weex的stream不支持delete方法', duration: 3 })
    }
  },
  created () {
    Vue.prototype.$http = createInstance({ root: 'https://jsonplaceholder.typicode.com' })
    this.$http.get('/users').then(users => {
      this.users = users
    }).catch(() => {})
  }
}
</script>
<style lang="stylus" scoped>
</style>
