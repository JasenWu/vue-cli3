var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'))
      .set('@src', resolve('src'))
      .set('@model', resolve('src/model'))
  }
}
