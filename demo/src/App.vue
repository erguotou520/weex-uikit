<template>
  <div class="v-app" style="flex-direction:column;" :style="{height:appHeight}">
    <u-header v-if="$route.path!=='/'">
      <text slot="left"
        @click="$router.history.go(-1)"
        style="font-family:'iconfont';color:#fff;font-size:34px;">&#xe60c;</text>
      {{$store.getters.title}}
    </u-header>
    <div style="flex:1;overflow:auto">
      <router-view></router-view>
    </div>
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
      'src': "url(\'http://at.alicdn.com/t/font_0dgio1v15kz6ko6r.ttf\')"
    })
  }
}
</script>
