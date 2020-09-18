const path = require('path')
module.exports = {
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        views: path.resolve(__dirname, 'src/views'),
        common: path.resolve(__dirname, 'src/common'),
        network: path.resolve(__dirname, 'src/network'),
        assets: path.resolve(__dirname, 'src/assets'),
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项

      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        additionalData: `@import "~@/assets/css/index.scss";`
      },
      // 给 less-loader 传递 Less.js 相关选项

    }
  }

}
