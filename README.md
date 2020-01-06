# vueForm
一个简单的VUE表单项目

## 插件
npm i -S vuedraggable

npm i element-ui -S

npm install vuex --save

npm install --save vue-router

mock 
npm install axios --save 

sass-loader 
npm install sass-loader -D
npm install node-sass --save-dev
## 难点
1 如果组件属性配置使用component v-bind:is 的方式进行加载，在组件属性以扁平化的格式存储的情况下，无法对关联属性进行加载（例：是否设置最大值+最大值）

可行性方法：属性使用树状结构存储，将关联属性，设置为子属性的叶子属性


2 如何渲染组件属性配置页，是否也像渲染组件一样动态渲染配置，如果是，则对于关联属性，如何将多个属性设置作为一个配置组件渲染

##### 参考资料
https://blog.csdn.net/qq_14993375/article/details/85193734