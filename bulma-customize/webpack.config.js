const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, args) => {
  const setting = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      //https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates
      new HtmlWebpackPlugin({
        title: "bulma-customize",
        template: path.resolve(__dirname, "public/index.html"),
      }),
    ],
    module: {
      rules: [
        //https://github.com/webpack-contrib/sass-loader#getting-started
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },

    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      compress: true,
      port: 9000,

      open: true,
    },
  };

  return setting;
};
