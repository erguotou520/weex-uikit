<template>
  <div class="v-tabbar">
    <router-view></router-view>
    <u-tabbar :value="$route.path" router>
      <u-tabbar-item label="首页" index="/tabbar">&#xe64f;</u-tabbar-item>
      <u-tabbar-item label="购物车" index="/tabbar/cart">&#xe63f;</u-tabbar-item>
      <u-tabbar-item label="订单" index="/tabbar/order">&#xe655;</u-tabbar-item>
      <u-tabbar-item label="我的" index="/tabbar/my">&#xe659;</u-tabbar-item>
    </u-tabbar>
    <text style="padding-left:20px;line-height:88px;color:#667180;margin-top:40px;">索引模式:{{activeIndex}}</text>
    <u-tabbar :value="activeIndex" @input="v=>activeIndex=v">
      <u-tabbar-item label="首页" index="1-1">&#xe64f;</u-tabbar-item>
      <u-tabbar-item label="购物车" index="1-2">&#xe63f;</u-tabbar-item>
      <u-tabbar-item label="订单" index="1-3">&#xe655;</u-tabbar-item>
      <u-tabbar-item label="我的" index="1-4">&#xe659;</u-tabbar-item>
    </u-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1-2'
    }
  }
}
</script>
<style lang="stylus" scoped>
.v-tabbar
  padding-top 20px
  padding-bottom 20px
</style>
