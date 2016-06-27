var path = require('path');
require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'panda-form.min.js',
    library: 'panda-form',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'mobx': {
        root: 'Mobx',
        commonjs2: 'mobx',
        commonjs: 'mobx',
        amd: 'mobx'
      }
    }
  ],
  resolve: {
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader!sass?sourceMap')
    }, {
      test: /\.gif$/,
      loaders: [
        'url-loader?limit=10000&mimetype=image/gif&name=assets/img/img-[hash:6].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.jpg$/,
      loaders: [
        'url-loader?limit=10000&mimetype=image/jpg&name=assets/img/img-[hash:6].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.png$/,
      loaders: [
        'url-loader?limit=10000&mimetype=image/png&name=assets/img/img-[hash:6].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.svg/,
      loader: 'url-loader?limit=26000&mimetype=image/svg+xml&name=assets/img/img-[hash:6].[ext]'
    }, {
      test: /\.(woff|woff2|ttf|eot)/,
      loader: 'url-loader?limit=1000000&name=fonts/font-[hash:6].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('panda-form.css')
  ]
};

module.exports = config;
