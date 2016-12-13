const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: __dirname + "/dist",  
    filename: 'bundle.js',
  },
  target: 'node',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      { test: /\.json?$/, loader: 'json-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  postcss() {
    return {
      defaults: [autoprefixer],
      cleaner: [autoprefixer({ browsers: [] })],
    };
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoErrorsPlugin(),
  ],
};
