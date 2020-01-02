const fs = require('fs')
const path = require('path')
const color = require('colors')
const _ = require('lodash')

module.exports = class PkgCheck {
  constructor(opts) {
    this._opts = opts
  }

  apply (compiler) {
    compiler.hooks.done.tapAsync('pkgCheckPlugin', (stats, cb) => {
      const fileToChunk = new Map();
      const obj = stats.toJson()
      const modules = _(obj.chunks)
        .map('modules')
        .concat(obj.modules)
        .compact()
        .flatten()
        .uniqBy('id')
        .value();

      const assetTree = parseChunks(obj.chunks);
    });
  }
}

function parseChunks(chunks) {
  return chunks.map(chunk => {
    return {
     
    }
  })
}