<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="表单字段" name="first">
      <widget-list v-for="(def,index) in widgetDefs" :key="index" :def="def"></widget-list>
    </el-tab-pane>
    <el-tab-pane label="业务对象" name="second">
      <bo-tree></bo-tree>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { basicWidgetDef } from "@/pages/jsxView/WidgetConfig";
import widgetList from "./WidgetList";
import boTree from "./BoTree";
export default {
  name: "left-menu",
  components: {
    widgetList,
    boTree
  },
  data() {
    return {
      activeName: "first",
      widgetDefs: [
        {
          title: "基础字段",
          template: basicWidgetDef
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