const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  context: resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve(__dirname, 'src'), resolve(__dirname, 'demo')],
        exclude: /node-modules/,
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
  plugins: [new CleanWebpackPlugin()],
};

if (process.env.NODE_ENV === 'development') {
  module.exports = Object.assign(baseConfig, {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      '../demo/index.js',
    ],
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: '/',
      historyApiFallback: true,
      stats: { colors: true },
    },
    plugins: baseConfig.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Canfetti 🎊',
        template: '../demo/template.ejs',
        minify: { useShortDoctype: true },
        hash: false,
      }),
    ]),
  });
}

if (process.env.NODE_ENV === 'production') {
  module.exports = Object.assign(baseConfig, {
    entry: '../src/Canfetti.ts',
    mode: 'production',
    output: {
      path: resolve('./dist'),
      filename: 'canfetti.js',
      library: 'Canfetti',
      umdNamedDefine: true,
      libraryExport: 'default',
      libraryTarget: 'umd',
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          sourceMap: false,
          uglifyOptions: {
            compress: {
              inline: false,
            },
          },
        }),
      ],
    },
  });
}
