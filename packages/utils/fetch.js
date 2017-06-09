import { assign, param } from './utils'
const stream = weex.requireModule('stream')
const DEFAULT_OPTION = {
  method: 'GET',
  headers: {
    'Accept': 'application/json, text/plain, */*'
  },
  type: 'json',
  timeout: 10000
}

function fetch (options) {
  return new Promise((resolve, reject) => {
    stream.fetch(options, res => {
      if (res.ok) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

export default {
  async get (url, query, options) {
    const _options = assign({}, DEFAULT_OPTION, options, { method: 'GET', url: query ? url + '?' + param(query) : url })
    return await fetch(_options)
  },
  async post (url, body, options) {
    const _options = assign({}, DEFAULT_OPTION, options, { method: 'POST', url, body: body ? JSON.stringify(body) : null })
    return await fetch(_options)
  }
}

class HttpInstance {
  constructor (options) {
    this.$options = assign({}, DEFAULT_OPTION, { root: '' }, options)
  }
  async get (url, query, options) {
    const _options = assign({}, this.$options, options, { method: 'GET', url: this.$options.root + (query ? url + '?' + param(query) : url) })
    return await fetch(_options)
  }
  async post (url, body, options) {
    const _options = assign({}, this.$options, options, { method: 'POST', url: this.$options.root + url, body: body ? JSON.stringify(body) : null })
    return await fetch(_options)
  }
  setHeaders (headers) {
    assign(this.$options.headers, headers)
  }
}

export function createInstance (options) {
  return new HttpInstance(options)
}
