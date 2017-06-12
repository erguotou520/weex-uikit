<template>
  <div class="v-badges">
    <div class="row">
      <div class="cell">
        <u-badge :count="99">
          <v-icon>&#xe64f;</v-icon>
        </u-badge>
      </div>
      <div class="cell">
        <u-badge dot>
          <text class="text">新闻</text>
        </u-badge>
      </div>
      <div class="cell">
        <u-badge :count="count1">
          <text class="text" @click="() => count1 = count1 > 0 ? count1 - 1 : 0">点击后减少</text>
        </u-badge>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <u-badge count="99+">
          <v-icon>&#xe657;</v-icon>
        </u-badge>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count1: 10
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-badges
  padding 20px
.row
  flex-direction row
  margin-top 20px
  margin-bottom 20px
.cell
  flex 1
  flex-direction row
  justify-content center
.text
  font-size 28px
  color #667180
</style>
