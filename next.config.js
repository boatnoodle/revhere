// Initialize dotenv library
require("dotenv").config();

const webpack = require("webpack");

/* eslint-disable */
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

module.exports = withCSS(
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      //start env =======================================================================
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
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
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader"
        });
      }
      config.resolve.modules.push(path.resolve("./"));
      return config;
    }
  })
);
