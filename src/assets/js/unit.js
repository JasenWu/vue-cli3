// 合并对象
const extend = function (o, n) {
  for (var p in n) {
    if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p))) { o[p] = n[p] }
  }
}

export { extend }
