<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'v-timeline',
  data () {
    return {
      childrenCount: 0
    }
  },
  methods: {
    addLine () {
      return this.childrenCount ++
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
