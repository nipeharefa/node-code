module.exports = {
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    'jquery': 'jQuery',
    'vue-router': 'VueRouter'
  }
}