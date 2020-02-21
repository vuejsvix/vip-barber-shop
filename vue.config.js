module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        src: require('path').resolve(__dirname, 'src')
      }
    }
  }
}
