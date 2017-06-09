const storage = weex.requireModule('storage')

function valid (val) {
  return val == null || val === ''
}

export default {
  async getItem (key) {
    if (valid(key)) {
      await new Promise((resolve, reject) => {
        storage.getItem(key, e => {
          if (e.result === 'success') {
            resolve(e.data)
          } else {
            reject(e.result)
          }
        })
      })
    } else {
      return null
    }
  },
  async setItem (key, value) {
    if (valid(key) && valid(value)) {
      await new Promise((resolve, reject) => {
        storage.setItem(key, value, e => {
          if (e.result === 'success') {
            resolve()
          } else {
            reject(e.result)
          }
        })
      })
    } else {
      console.error('key & value can\'t be null')
    }
  },
  async removeItem (key) {
    if (valid(key)) {
      await new Promise((resolve, reject) => {
        storage.removeItem(key, e => {
          if (e.result === 'success') {
            resolve()
          } else {
            reject(e.result)
          }
        })
      })
    } else {
      console.error('key can\'t be null')
    }
  }
}
