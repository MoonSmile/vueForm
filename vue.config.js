const utils = require('./utils/utils');

module.exports = {
    devServer: {
        port: 8888
    },
    publicPath: './',
    pages: utils.getPages(),
    // css 相关选项
    css: {
        /*为预处理器 loader 传递自定义选项*/
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/theme.scss";`
            }
        }
    },

}