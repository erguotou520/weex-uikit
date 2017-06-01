<template>
  <div class="v-cells">
    <u-cell-group title="个人信息">
      <u-cell text="用户名" value="erguotou" show-arrow></u-cell>
      <u-cell text="邮箱" value="erguotou525@gmail.com" show-arrow></u-cell>
      <u-cell text="性别" :value="gender==='male'?'男':'女'">
        <u-switch slot="right" :value="gender" size="small" @input="v=>gender=v"
          true-value="male" false-value="female"></u-switch>
      </u-cell>
    </u-cell-group>
    <u-cell-group>
      <u-cell text="分享名片" show-arrow @click.native="share">
        <v-icon slot="icon" color="#489cff" size="30px">&#xe712;</v-icon>
      </u-cell>
    </u-cell-group>
  </div>
</template>
<script>
const clipboard = weex.requireModule('clipboard')
const modal = weex.requireModule('modal')
const domModule = weex.requireModule('dom')
export default {
  data () {
    return {
      gender: 'male'
    }
  },
  methods: {
    share () {
      clipboard.setString('erguotou525@gmail.com')
      modal.toast({ message: '已复制邮箱地址', duration: 0.3 })
    }
  },
  created () {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('//at.alicdn.com/t/font_0dgio1v15kz6ko6r.ttf')"
    })
  }
}
</script>
