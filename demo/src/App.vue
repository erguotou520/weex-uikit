<template>
  <div class="v-app" style="flex-direction:column;" :style="{height:appHeight}">
    <u-header v-if="$route.path!=='/'">
      <v-icon slot="left" color="#fff" @click="$router.go(-1)">&#xe621;</v-icon>{{$store.getters.title}}<v-icon slot="right" color="#fff" @click="copy">&#xe666;</v-icon>
    </u-header>
    <!-- <scroller style="flex:1;"> -->
      <router-view></router-view>
    <!-- </scroller> -->
    <u-mask :show="$store.getters.maskVisiable" @click="onMaskClick">
      <u-select-popup :mask-show="$store.getters.maskVisiable" @hide-mask="$store.dispatch('toggleMask', false)"></u-select-popup>
      <u-loading v-if="$store.getters.loadingVisiable">2秒后消失</u-loading>
    </u-mask>
  </div>
</template>
<script>
const clipboard = weex.requireModule('clipboard')
const modal = weex.requireModule('modal')
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
    },
    onMaskClick () {
      if (!this.$store.getters.loadingVisiable) {
        this.$store.dispatch('toggleMask', false)
      }
    }
  }
}
</script>
<style scoped>
.v-app {
  background-color: #f9fafc;
}
</style>
