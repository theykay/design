module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@use "@/styles/main.scss" as styles;'
      }
    }
  }
}