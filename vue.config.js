// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "/td": {
        target: "http://localhost:8888",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/td": ""
        }
      },
      "/tda": {
        target: "http://localhost:8888",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/tda": "/api/v1"
        }
      }
    }
  }
};
