<template>
  <div class="container">
    <list class="dialog" :style="{height:`${height-80}px`}"><slot></slot></list>
    <div class="footbar">
      <v-icon v-if="!voice" class="icon voice" size="48" @click="voice=!voice">&#xe643;</v-icon>
      <v-icon v-else class="icon keyboard" size="48" @click="voice=!voice&&$refs.input.focus()">&#xe608;</v-icon>
      <input v-if="!voice" class="input" type="text" :value="value" :placeholder="placeholder"
        :maxlength="maxlength" return-key-type="send" ref="input"
        @input="evt=>$emit('input', evt.value)"
        @change="evt=>$emit('change')"
        @focus="evt=>$emit('focus')"
        @blur="evt=>$emit('blur')"
        @return="evt=>$emit('return')"></input>
      <text v-else class="voice-holder" @click="onHolderPressed">按住 说话</text>
      <v-icon class="icon emoji" size="48" @click="onEmojiClicked">&#xe64a;</v-icon>
      <v-icon class="icon add" size="48" @click="onAddClicked">&#xe601;</v-icon>
    </div>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
export default {
  name: 'v-chat',
  props: {
    height: {
      type: Number,
      required: true
    },
    value: {
      type: String
    },
    placeholder: String,
    maxlength: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      voice: false
    }
  },
  methods: {
    toggleVoice () {
      if (this.voice) {
        // 此处似乎不起作用
        this.$refs.input.focus()
        this.voice = false
      } else {
        // 此处似乎不起作用
        this.$refs.input.blur()
        this.voice = true
      }
      this.$emit('toggle-voice', this.voice)
    },
    onHolderPressed () {
      modal.toast({ message: '此处大家按照自己业务来处理', duration: 0.3 })
    },
    onEmojiClicked () {
      modal.toast({ message: '此处大家按照自己业务来处理', duration: 0.3 })
    },
    onAddClicked () {
      modal.toast({ message: '此处可以用wxc-popup来处理', duration: 0.3 })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
.container
  flex-direction column
.dialog
  height 300px
.footbar
  flex-direction row
  align-items center
  height 80px
  background-color #fff
  border-top 1px solid #ccc
.icon
  width 80px
  text-align center
.voice-holder
  flex 1
  padding-top 8px
  padding-bottom @padding-top
  text-align center
  line-height 40px
  font-size 30px
  border-top-style solid
  border-top-width 2px
  border-top-color #ccc
  border-right-style solid
  border-right-width 2px
  border-right-color #ccc
  border-bottom-style solid
  border-bottom-width 2px
  border-bottom-color #ccc
  border-left-style solid
  border-left-width 2px
  border-left-color #ccc
  border-radius 6px
.input
  flex 1
  padding-top 8px
  padding-right 12px
  padding-bottom @padding-top
  padding-left @padding-right
  border-left-color transparent
  border-top-color transparent
  border-right-color transparent
  border-bottom-style solid
  border-bottom-width 2px
  border-bottom-color $color-primary
</style>
