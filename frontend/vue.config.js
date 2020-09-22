const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  configureWebpack: config => {
    config.plugins.push(new BundleTracker({filename: './webpack-stats.json'}));
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.publicPath = 'http://localhost:8081/';
}