
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://abdulsalamalmahdi.github.io/'
    : '/',
  // "devServer": {
  //   "https": false
  // },
  "transpileDependencies": [
    "vuetify"
  ],

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // modify the options...
          
          return options
        })}
}