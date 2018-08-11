const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        include: [resolve(__dirname, 'src'), resolve(__dirname, 'demo')],
        exclude: /node-modules/,
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules'],
  },
};

if (process.env.NODE_ENV === 'development') {
  module.exports = Object.assign(baseConfig, {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      '../demo/index.ts',
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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        title: 'Canfetti 🎊',
        template: '../demo/template.ejs',
        minify: { useShortDoctype: true },
        hash: false,
      }),
    ],
  });
}

if (process.env.NODE_ENV === 'production') {
  module.exports = Object.assign(baseConfig, {
    entry: '../src/Canfetti.ts',
    mode: 'production',
    plugins: [
      new UglifyJSPlugin(),
    ],
    output: {
      path: resolve('./dist'),
      filename: 'canfetti.js',
      libraryTarget: 'commonjs2',
    },
  });
}
