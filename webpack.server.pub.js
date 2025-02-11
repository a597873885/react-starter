const baseConfig = require('./webpack.server.base')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  ...baseConfig,
  plugins: [
    // 清空打包目录
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../../'),
      verbose: true,
      dry: false
    }),
    ...baseConfig.plugins
  ],
  mode: 'production'
}

module.exports = config
