<template>
  <div class="v-app" style="flex-direction:column;" :style="{height:appHeight}">
    <u-header v-if="$route.path!=='/'">
      <text slot="left"
        @click="$router.history.go(-1)"
        style="font-family:'iconfont';color:#fff;font-size:34px;">&#xe60c;</text>
      {{$store.getters.title}}
    </u-header>
    <!-- <scroller style="flex:1;"> -->
      <router-view></router-view>
    <!-- </scroller> -->
  </div>
</template>
<script>
const domModule = weex.requireModule('dom')
export default {
  data () {
    return {
      appHeight: weex.config.deviceHeight + 'px'
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
