<template>
  <div class="rate">
    <div v-for="n in max" class="rate-icon-wrapper">
      <v-icon class="rate-icon" :color="n <= value?'#ffd56c':'#667180'" @click="select(n)">{{n <= value?'&#xe674;':'&#xe673;'}}</v-icon>
      <v-icon v-if="remWidth>0&&n>value&&n-1<value" class="rate-icon rate-icon-rem"
        color="#ffd56c" :style="{width:`${remWidth*0.36}px`}" @click="select(n)">&#xe674;</v-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-rater',
  props: {
    value: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      emptyStar: '&#xe673;',
      fullStar: '&#xe674;'
    }
  },
  computed: {
    remWidth () {
      return this.value * 100 % 100
    }
  },
  methods: {
    select (index) {
      this.$emit('input', index)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../packages/theme-default/var.styl"
.rate
  flex-direction row
.rate-icon-wrapper
  position relative
.rate-icon
  margin-left 10px
  margin-right 10px
  font-size 36px
  color $color-text-minor
.rate-icon-rem
  position absolute
  left 0
  top 0
  overflow hidden
</style>
