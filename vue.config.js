const utils = require('./utils/utils');
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"))
        //   .set("assets", resolve("src/assets"))
        //   .set("components", resolve("src/components"))
        //   .set("base", resolve("baseConfig"))
        //   .set("public", resolve("public"));
    },
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