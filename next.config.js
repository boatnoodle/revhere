// Initialize dotenv library
require('dotenv').config();

const webpack = require('webpack');

/* eslint-disable */
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'));

module.exports = withCSS(
  withLess({
    lessLoaderOptions: {
      url: false, //https://github.com/zeit/next-plugins/issues/70
      javascriptEnabled: true,
      // theme antd here
      modifyVars: themeVariables,
    },
    mozjpeg: {},
    optipng: {},
    svgo: {},
    webpack(config, { isServer }) {
      //start env =======================================================================
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      };
      /**
       * Returns environment variables as an object
       */
      const env = Object.keys(process.env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
      }, {});

      /** Allows you to create global constants which can be configured
       * at compile time, which in our case is our environment variables
       */
      config.plugins.push(new webpack.DefinePlugin(env));
      //end env =======================================================================
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];
      }
      config.plugins.push(
        new FilterWarningsPlugin({
          // ignore ANTD chunk styles [mini-css-extract-plugin] warning
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );

      config.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      });

      config.resolve.alias['assets'] = path.join(__dirname, 'assets');
      config.resolve.modules.push(path.resolve('./'));
      return config;
    },
  }),
);
