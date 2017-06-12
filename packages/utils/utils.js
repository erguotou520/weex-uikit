const STRING_PROTOTYPE = '[object String]'
const NUMBER_PROTOTYPE = '[object Number]'
const REGEXP_PROTOTYPE = '[object RegExp]'
const DATE_PROTOTYPE = '[object Date]'
const BOOL_PROTOTYPE = '[object Boolean]'
const ARRAY_PROTOTYPE = '[object Array]'
const OBJECT_PROTOTYPE = '[object Object]'
const FUNCTION_PROTOTYPE = '[object Function]'

function protoString (obj) {
  return Object.prototype.toString.call(obj)
}

export function isString (str) {
  return protoString(str) === STRING_PROTOTYPE
}

export function isNumber (num) {
  return protoString(num) === NUMBER_PROTOTYPE
}

export function isRegExp (reg) {
  return protoString(reg) === REGEXP_PROTOTYPE
}

export function isBool (bool) {
  return protoString(bool) === BOOL_PROTOTYPE
}

export function isDate (date) {
  return protoString(date) === DATE_PROTOTYPE
}

export function isArray (arr) {
  return protoString(arr) === ARRAY_PROTOTYPE
}

export function isObject (obj) {
  return protoString(obj) === OBJECT_PROTOTYPE
}

export function isFunction (fn) {
  return protoString(fn) === FUNCTION_PROTOTYPE
}

/**
 * Vue data merge
 * @param  {Object} to      object that want to be merget to
 * @param  {Object} origins origin object sources
 */
export function merge (to, ...origins) {
  origins.forEach(from => {
    for (const key in from) {
      const value = from[key]
      // Just merge existed property in origin data
      if (to[key] !== undefined) {
        switch (protoString(value)) {
          case OBJECT_PROTOTYPE:
            merge(to[key], value)
            break
          default:
            to[key] = value
            break
        }
      }
    }
  })
}

// deep assign
export function assign (to, ...origins) {
  origins.forEach(from => {
    if (!isObject(from)) {
      return
    }
    for (const key in from) {
      const value = from[key]
      switch (protoString(value)) {
        case OBJECT_PROTOTYPE:
          if (to[key] === undefined) {
            to[key] = {}
          }
          assign(to[key], value)
          break
        default:
          to[key] = value
          break
      }
    }
  })
  return to
}

// clone obj
export function clone (obj, deep = false) {
  if (obj === undefined || obj === null) {
    return
  }
  switch (protoString(obj)) {
    case DATE_PROTOTYPE:
      return new Date(obj)
    case REGEXP_PROTOTYPE:
      return new RegExp(obj)
    case ARRAY_PROTOTYPE:
      return !deep ? obj.slice(0) : obj.map(item => clone(item))
    case OBJECT_PROTOTYPE:
      const r = {}
      for (const key in obj) {
        r[key] = deep ? clone(obj[key]) : obj[key]
      }
      return r
    default:
      return obj
  }
}

function buildParams (prefix, obj, add) {
  let name
  if (isArray(obj)) {
    add(prefix, JSON.stringify(obj))
    // Serialize array item.
    // obj.forEach((v, i) => {
    //   // Item is non-scalar (array or object), encode its numeric index.
    //   buildParams(prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']', v, add)
    // })
  } else if (isObject(obj)) {
    // Serialize object item.
    for (name in obj) {
      buildParams(prefix + '[' + name + ']', obj[name], add)
    }
  } else {
    // Serialize scalar item.
    add(prefix, obj)
  }
}

/**
 * Clone from jQuery.param
 * Turn obj to http request form data, useful for axios
 * @example
 * axios.create({
 *   paramsSerializer: function (params) {
 *     return param(params)
 *   },
 *   transformRequest: [data => {
 *     return param(data)
 *   }]
 * })
 * @param  {object} obj obj to param
 * @return {string}     paramed string
 */
export function param (obj) {
  // Return direct for formdata
  if (obj instanceof window.FormData) {
    return obj
  }
  let prefix
  const s = []
  const add = function (key, valueOrFunction) {
    // If value is a function, invoke it and use its return value
    var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction

    s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value == null ? '' : value)
  }

  // If an array was passed in, assume that it is an array of form elements.
  if (isArray(obj)) {
    // Serialize the form elements
    add(JSON.stringify(obj))
    // obj.forEach((value, index) => {
    //   add(index, value)
    // })
  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for (prefix in obj) {
      buildParams(prefix, obj[prefix], add)
    }
  }

  // Return the resulting serialization
  return s.join('&')
}
