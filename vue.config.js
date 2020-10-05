module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,

  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },

  transpileDependencies: [
    '@coreui/utils'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'am',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
