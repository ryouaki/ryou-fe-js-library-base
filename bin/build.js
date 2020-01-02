const path = require('path');
const webpack = require('webpack');
require('colors');
const root = path.resolve(__dirname, '..');

const pkgCheck = require('./../scripts/pkgCheck');

const pkg = require(`${root}/package.json`)
const config = require(`${root}/webpack.config.prod.js`)()

if (pkg.dependencies) {
  const keys = Object.keys(pkg.dependencies);
  if (keys.length > 0) {
    console.log('---------------------------------------------------------------------------------')
    console.error("Build".magenta, " ERROR! ".red, "Please move the packages into", " peerDependencies ".yellow, "below:")
    console.log()
    keys.forEach((package) => {
      console.error(`    ${package}: ${pkg.dependencies[package]}`.red)
    })
    console.log()
    console.log('Notice: '.yellow, 'If the packages in dependencies of your package and newer than user installed in project.')
    console.log('         Npm will update dependencies to the new one. and end users will carry risks.')
    console.log('---------------------------------------------------------------------------------')
    console.log()
    process.exit(99)
  }
}

config.plugins.push(new pkgCheck())

webpack(config, (err, stats) => {
  if (err) {
    console.error(err)
  } else {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
  }
})