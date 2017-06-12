const storage = weex.requireModule('storage')

function valid (val) {
  return val == null || val === ''
}

export default {
  getItem (key) {
    return new Promise((resolve, reject) => {
      if (valid(key)) {
        storage.getItem(key, e => {
          if (e.result === 'success') {
            resolve(e.data)
          } else {
            reject(e.result)
          }
        })
      } else {
        reject('key can\'t be null')
      }
    })
  },
  setItem (key, value) {
    return new Promise((resolve, reject) => {
      if (valid(key) && valid(value)) {
        storage.setItem(key, value, e => {
          if (e.result === 'success') {
            resolve()
          } else {
            reject(e.result)
          }
        })
      } else {
        reject('key & value can\'t be null')
      }
    })
  },
  removeItem (key) {
    return new Promise((resolve, reject) => {
      if (valid(key)) {
        storage.removeItem(key, e => {
          if (e.result === 'success') {
            resolve()
          } else {
            reject(e.result)
          }
        })
      } else {
        reject('key can\'t be null')
      }
    })
  }
}
