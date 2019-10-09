const baseConfig = require('./webpack.client.base')
const webpack = require('webpack')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
// const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path')
const config = {
  ...baseConfig,
  plugins: [
    new WriteFileWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new ManifestPlugin({ fileName: 'manifest.json' }),
    ...baseConfig.plugins,
    new CopyWebpackPlugin([
        { from: __dirname + "/src/assets", to: __dirname + "/dist/client/assets", force: true }
    ]),
  ],
  mode: 'development',
  devtool: 'cheap-module-inline-source-map'
}

// config.entry.app.push('webpack-hot-middleware/client?path=/__webpack_hmr')

module.exports = config
