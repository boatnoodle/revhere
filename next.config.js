const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  webpack(config, options) {
    // config = {
    //   resolve: {
    //     modules: ['node_modules', 'src'],
    //     alias: {
    //       'antd': path.join(__dirname, './node_modules/antd/dist/antd.css')
    //     }
    //   }
    // };
    return config;
  }
});