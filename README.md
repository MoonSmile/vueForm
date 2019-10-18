# vueForm
一个简单的VUE表单项目

##插件
npm i -S vuedraggable
npm i element-ui -S

## 难点
1 如果组件属性配置使用component v-bind:is 的方式进行加载，在组件属性以扁平化的格式存储的情况下，无法对关联属性进行加载（例：是否设置最大值+最大值）

可行性方法：属性使用树状结构存储，将关联属性，设置为子属性的叶子属性
