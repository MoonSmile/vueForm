<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="表单字段" name="first">
      <component-list v-for="(component,index) in components" :key="index" :component="component"></component-list>
    </el-tab-pane>
    <el-tab-pane label="业务对象" name="second">业务对象</el-tab-pane>
  </el-tabs>
</template>

<script>
import { basicComponents } from "./componentConfig";
import componentList from "./ComponentsList";
export default {
  name: "left-menu",
  components: {
    componentList
  },
  data() {
    return {
      activeName: "first",
      components: [
        {
          title: "基础字段",
          template: basicComponents
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>