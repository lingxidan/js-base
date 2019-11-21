module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://www.jianjukeji.top:28081/country_platform',
        // target: 'http://39.104.24.246/fishery',
        // target: 'http://192.168.31.159:8080',
        // target:"http://192.168.31.62:8080",
        target: 'http://192.168.31.188:43208',
        changeOrigin: true,
        ws: true,
      },
    },
  },
};
