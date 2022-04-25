const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://apis.juhe.cn', // 聚合接口地址
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
})
