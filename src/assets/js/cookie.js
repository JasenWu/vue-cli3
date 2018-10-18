var CookieUtil = {
  get: function (name, subName) {
    var subCookies = this.getAll(name)
    if (subCookies) {
      return subCookies[subName]
    } else {
      return null
    }
  },
  getAll: function (name) {
    var cookieName = encodeURIComponent(name) + '=',
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null,
      cookieEnd,
      subCookies,
      i,
      parts,
      result = {}
    if (cookieStart > -1) {
      cookieEnd = document.cookie.indexOf(';', cookieStart)
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = document.cookie.substring(cookieStart +
        cookieName.length, cookieEnd)
      if (cookieValue.length > 0) {
        subCookies = cookieValue.split('&')
        for (i = 0, len = subCookies.length; i < len; i++) {
          parts = subCookies[i].split('=')
          result[decodeURIComponent(parts[0])] =
            decodeURIComponent(parts[1])
        }
        return result
      }
    }
    return null
  },
  set: function (name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' +
      encodeURIComponent(value)
    if (expires instanceof Date) {
      cookieText += '; expires=' + expires.toGMTString()
    }
    if (path) {
      cookieText += '; path=' + path
    }
    if (domain) {
      cookieText += '; domain=' + domain
    }
    if (secure) {
      cookieText += '; secure'
    }
    document.cookie = cookieText
  },
  unset: function (name, path, domain, secure) {
    this.set(name, '', new Date(0), path, domain, secure)
  }
}
