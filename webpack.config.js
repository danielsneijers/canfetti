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
      stats: {
        colors: true,
        hash: true,
        version: false,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: true,
        source: true,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false,
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
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
    entry: {
      canfetti: '../src/Canfetti.js',
      demo: '../demo/index.js',
    },
    mode: 'production',
    output: {
      path: resolve('./dist'),
      filename: '[name].js',
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
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Canfetti 🎊',
        chunks: ['canfetti', 'demo'],
        template: '../demo/template.ejs',
        minify: { useShortDoctype: true },
        hash: false,
      }),
    ],
  });
}
