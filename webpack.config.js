'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'ChimeraRPC.js',
    library: 'ChimeraRPC',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  },
  target: 'web'
}
