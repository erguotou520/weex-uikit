<template>
  <list class="users">
    <cell class="user" v-for="user in users">
      <text class="user-name">{{user.name}}</text>
      <text class="user-email">{{user.email}}</text>
    </cell>
    <div class="btn">
      <u-button @click="add">添加</u-button>
    </div>
  </list>
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
    this.$http.get('/users').then(({ data }) => {
      this.users = data
    }).catch(() => {})
  }
}
</script>
<style scoped>
.ajax-resource {
  flex: 1;
}
.users {
  flex: 1;
  padding-bottom: 120px;
}
.user {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #b8c7d8;
}
.user-name {
  font-size: 32px;
  color: #667180;
}
.user-email {
  font-size: 24px;
  color: #b8c7d8;
}
.btn {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
}
</style>
