<template>
  <div class="v-header">
    <u-header>
      <text slot="left" style="font-family:'iconfont';color:#fff;font-size:34px;">&#xe60c;</text>
      Title
      <text slot="right" style="font-family:'iconfont';color:#fff;font-size:34px;">&#xe712;</text>
    </u-header>
  </div>
</template>
<script>
const domModule = weex.requireModule('dom')
export default {
  created () {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url(\'http://at.alicdn.com/t/font_0dgio1v15kz6ko6r.ttf\')"
    })
  }
}
</script>
