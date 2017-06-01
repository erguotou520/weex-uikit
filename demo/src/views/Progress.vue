<template>
  <div class="v-progress">
    <u-progress class="progress-item" :percentage="10"></u-progress>
    <u-progress class="progress-item" :percentage="percentage"></u-progress>
  </div>
</template>
<script>
export default {
  data () {
    return {
      percentage: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 模拟加载
      let interval = setInterval(() => {
        const rest = 100 - this.percentage
        if (this.percentage > 99.5) {
          if (Math.random() > 0.5) {
            this.percentage = 100
            clearInterval(interval)
            interval = null
          }
        } else {
          this.percentage += Math.random() * rest
        }
      }, 1500)
    })
  }
}
</script>
<style lang="stylus" scoped>
.v-progress
  padding 20px
</style>
