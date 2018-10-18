self.onmessage = function (event) {
  var data = event.data
  // 别忘了，默认的 sort()方法只比较字符串
  data.sort(function (a, b) {
    return (a - b)
  })
  self.postMessage(data)
}
