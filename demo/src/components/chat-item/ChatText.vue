<template>
  <cell class="chat-text" :class="[right?'chat-right':'']">
    <template v-if="right">
      <div class="arrow arrow-right" :class="[name?'arrow-name':'']"></div>
      <div class="content">
        <text v-if="name" class="name">{{name}}</text>
        <div class="text-wrapper text-right-wrapper">
          <text class="text text-right"><slot></slot></text>
        </div>
      </div>
      <image class="avatar" :src="avatar"></image>
    </template>
    <template v-else>
      <image class="avatar" :src="avatar"></image>
      <div class="arrow" :style="{top:name?'71px':'44px'}" style="left:90px"></div>
      <div class="content">
        <text v-if="name" class="name">{{name}}</text>
        <div class="text-wrapper">
          <text class="text"><slot></slot></text>
        </div>
      </div>
    </template>
  </cell>
</template>
<script>
export default {
  name: 'v-chat-text',
  props: {
    avatar: String,
    name: String,
    right: Boolean
  }
  // render (h) {
  //   // 小箭头
  //   const arrowClass = []
  //   if (this.right) {
  //     arrowClass.push('arrow-right')
  //   }
  //   if (this.name) {
  //     arrowClass.push('arrow-name')
  //   }
  //   // 内容体
  //   const body = [
  //     h('div', {
  //       staticClass: 'arrow',
  //       'class': arrowClass
  //     })
  //   ]
  //   // 头像
  //   const avatar = h('image', {
  //     staticClass: 'avatar',
  //     attrs: {
  //       src: this.avatar
  //     }
  //   })
  //   // 名称+文字
  //   const text = [
  //     h('text', {
  //       staticClass: 'text',
  //       'class': [this.right ? 'text-right' : '']
  //     }, [this.$slots.default])
  //   ]
  //   if (this.name) {
  //     text.unshift(h('text', { staticClass: 'name' }, [this.name]))
  //   }
  //   // 内容
  //   const content = h('div', {
  //     staticClass: 'content'
  //   }, [text])
  //   if (this.right) {
  //     body.push(content)
  //     body.push(avatar)
  //   } else {
  //     body.push(avatar)
  //     body.push(content)
  //   }
  //   return h('cell', {
  //     staticClass: 'chat-text',
  //     'class': [this.right ? 'chat-right' : '']
  //   }, body)
  // }
}
</script>
<style lang="stylus" scoped>
@import "../../../../packages/theme-default/var.styl"
$dialog-bg = #f1f1f8
.chat-text
  position relative
  flex-direction row
  justify-content flex-start
  padding-top 20px
  padding-bottom @padding-top
  padding-left 20px
  padding-right @padding-left
.chat-right
  justify-content flex-end
.avatar
  width 60px
  height @width
  border-radius (@width/2)
.arrow
  position absolute
  top 44px
  width 10px
  height @width
  transform rotate(45deg)
  background-color $dialog-bg
.arrow-name
  top 77px
.arrow-right
  right 90px
  background-color $color-primary
.content
  margin-left 16px
  margin-right @margin-left
.name
  margin-bottom 8px
  font-size 24px
  line-height 20px
  color #ccc
.text-wrapper
  padding-top 12px
  padding-right 20px
  padding-bottom @padding-top
  padding-left @padding-right
  background-color $dialog-bg
  border-bottom-left-radius 10px
  border-bottom-right-radius 10px
  border-top-left-radius 10px
  border-top-right-radius 10px
.text
  font-size 28px
  line-height 36px
  max-width 560px
  color #666
.text-right-wrapper
  background-color $color-primary
.text-right
  color #fff
</style>
