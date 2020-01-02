const path = require('path')

module.exports = (env) => {
  const plugins = [];
  if (env === 'report') {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    plugins.push(new BundleAnalyzerPlugin())
  }
  return {
    entry: {
      test: './src/index.js'
    },
    mode: 'production',
    output: {
      path: path.join(__dirname, 'lib'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: '[name]'
    },
    externals: {
      jquery: 'jQuery'
    },
    resolve:{
      alias:{
        '@': './alias'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: plugins
  }
}