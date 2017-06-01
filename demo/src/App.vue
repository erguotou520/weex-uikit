<template>
  <div class="v-app" style="flex-direction:column;" :style="{height:appHeight}">
    <u-header v-if="$route.path!=='/'">
      <text slot="left"
        @click="$router.history.go(-1)"
        :style="{fontFamily:'iconfont',color:'#fff',fontSize:'34px'}">&#xe60c;</text>
      {{$store.getters.title}}
      <text slot="right" @click="copy"
        :style="{fontFamily:'iconfont',color:'#fff',fontSize:'34px'}">&#xe712;</text>
    </u-header>
    <!-- <scroller style="flex:1;"> -->
      <router-view></router-view>
    <!-- </scroller> -->
    <u-mask :show="$store.getters.maskVisiable" @click="$store.dispatch('toggleMask', false)">
      <u-select-popup :mask-show="$store.getters.maskVisiable" @hide-mask="$store.dispatch('toggleMask', false)"></u-select-popup>
    </u-mask>
  </div>
</template>
<script>
const clipboard = weex.requireModule('clipboard')
const modal = weex.requireModule('modal')
const domModule = weex.requireModule('dom')
export default {
  data () {
    return {
      appHeight: weex.config.deviceHeight + 'px'
    }
  },
  methods: {
    copy () {
      clipboard.setString(weex.config.bundleUrl)
      modal.toast({ message: '已复制地址', duration: 0.3 })
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
