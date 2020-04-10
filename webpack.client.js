const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {


    // tell webpack root file of our server application
    entry: './src/client/client.js',

    // tell webpack where to put the files that is generated

    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname,'public')
    },



}

module.exports = merge(baseConfig,config);