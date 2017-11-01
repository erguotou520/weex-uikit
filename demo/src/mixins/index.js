export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    getDeviceInfo () {
      if (weex.config.env) {
        return weex.config.env
      } else {
        return weex.config
      }
    }
  }
}
