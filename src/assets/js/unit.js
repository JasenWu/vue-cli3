
// 合并对象
const extend = function (o, n) {
  for (var p in n) {
    if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p))) {
      o[p] = n[p]
    }
  }
}

const equalObj = function (x, y) {
  // If both x and y are null or undefined and exactly the same
  if (x === y) {
    return true
  }

  // If they are not strictly equal, they both need to be Objects
  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false
  }

  // They must have the exact same prototype chain,the closest we can do is
  // test the constructor.
  if (x.constructor !== y.constructor) {
    return false
  }

  for (var p in x) {
    // Inherited properties were tested using x.constructor === y.constructor
    if (x.hasOwnProperty(p)) {
      // Allows comparing x[ p ] and y[ p ] when set to undefined
      if (!y.hasOwnProperty(p)) {
        return false
      }

      // If they have the same strict value or identity then they are equal
      if (x[p] === y[p]) {
        continue
      }

      // Numbers, Strings, Functions, Booleans must be strictly equal
      if (typeof (x[p]) !== 'object') {
        return false
      }

      // Objects and Arrays must be tested recursively
      if (!Object.equals(x[p], y[p])) {
        return false
      }
    }
  }

  for (p in y) {
    // allows x[ p ] to be set to undefined
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false
    }
  }
  return true
}

/**
 * 加载js/json文件
 * @param url
 */
export const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    let head = document.getElementsByTagName('head')[0]
    script.type = 'text/javascript'
    script.charset = 'UTF-8'
    script.src = url
    if (script.addEventListener) {
      script.addEventListener('load', () => {
        return resolve()
      }, false)
    } else if (script.attachEvent) {
      script.attachEvent('onreadystatechange', () => {
        var target = window.event.srcElement
        if (target.readyState === 'loaded') {
          resolve()
        }
      })
    }
    head.appendChild(script)
  })
}

export {
  extend, equalObj
}
