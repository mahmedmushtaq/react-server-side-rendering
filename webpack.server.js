const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config  = {
    // informing web pack that we're building a bundle
    // for node.js rathar than a browser,
    target: "node",

    // tell webpack root file of our server application
    entry: './src/index.js',

    // tell webpack where to put the files that is generated

    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname,'build')
    },

    externals: [webpackNodeExternals()]


}

module.exports = merge(baseConfig,config);