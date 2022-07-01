module.exports = {
  lintOnSave: true,
  configureWebpack() {
    const config = {}
    if (process.env.NODE_ENV === 'production') {
      config.externals = {
        'element-ui': 'element-ui'
      }
    }
    return config
  }
}
