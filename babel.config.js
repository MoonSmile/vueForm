module.exports = {
  presets: [
    ['@vue/app', {
        useBuiltIns: 'entry'
    }],
    //不用配置可以直接用，配置后报重复声明错误
    //  ['@vue/babel-preset-jsx']
 ]


}
