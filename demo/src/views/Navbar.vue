<template>
  <div class="v-navbar">
    <router-view>123</router-view>
    <u-navbar :value="$route.path" router>
      <u-navbar-item label="首页" index="/navbar">&#xe64f;</u-navbar-item>
      <u-navbar-item label="购物车" index="/navbar/cart">&#xe63f;</u-navbar-item>
      <u-navbar-item label="订单" index="/navbar/order">&#xe655;</u-navbar-item>
      <u-navbar-item label="我的" index="/navbar/my">&#xe659;</u-navbar-item>
    </u-navbar>
    <div style="margin-top:40px;"></div>
    <u-navbar value="1-2">
      <u-navbar-item label="首页" index="1-1">&#xe64f;</u-navbar-item>
      <u-navbar-item label="购物车" index="1-2">&#xe63f;</u-navbar-item>
      <u-navbar-item label="订单" index="1-3">&#xe655;</u-navbar-item>
      <u-navbar-item label="我的" index="1-4">&#xe659;</u-navbar-item>
    </u-navbar>
  </div>
</template>
<style lang="stylus" scoped>
.v-navbar
  padding-top 20px
  padding-bottom 20px
</style>
