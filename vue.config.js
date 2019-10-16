const utils = require('./utils/utils');

module.exports = {
    devServer: {
        port: 8888
    },
    publicPath: './',
    pages: utils.getPages(),

}