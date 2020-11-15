const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      port: 9999
    },
    entry: {
      app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(s[ac]ss|css)$/i,
            use: [
              'style-loader',
              'css-loader', 
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    outputSass: "compressed"
                  }
                }
              }
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ] 
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: "Yana is the best developer",
          favicon: `src/assets/favicon.ico`
        })
      ],
      optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new HtmlMinimizerPlugin()
        ],
      },
}