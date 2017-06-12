<template>
  <div class="v-date-format">
    <text>Date对象: {{date}}</text>
    <text>格式化后的Date对象: {{formatedDate}}</text>
    <text>filter方式显示: {{dateStr|datetime('yy-M-d')}}</text>
    <text>当前时间: {{now|datetime}}</text>
  </div>
</template>
<script>
import { format } from '../../../packages/utils'
export default {
  data () {
    return {
      date: new Date(),
      dateStr: '1949-10-01',
      now: new Date(),
      interval: null
    }
  },
  computed: {
    formatedDate () {
      return format(this.date)
    }
  },
  filters: {
    datetime: format
  },
  created () {
    this.interval = setInterval(() => {
      this.now = new Date()
    }, 100)
  },
  beforeDestroy () {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }
}
</script>
<style scoped>
.v-date-format {
  padding: 20px;
}
</style>
