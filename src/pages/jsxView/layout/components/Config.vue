<template>
  <div>
    <simple-render :render-text="renderText" text="配置项"></simple-render>
    <el-tabs v-model="activeName" @tab-click="handleTabClick">
      <el-tab-pane label="字段属性" name="first">
        <widget-form-config></widget-form-config>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <router-link to="/simpleDesc">点击显示说明</router-link>
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import simpleRender from "./simpleRender";
import WidgetFormConfig from "./WidgetFormConfig";
export default {
  name: "config",
  components: {
    simpleRender,
    WidgetFormConfig
  },
  data() {
    return {
      activeName: "first"
    };
  },
  mounted() {},
  methods: {
    handleTabClick() {},
    handleClick() {
      console.log("config");
    },
    renderText(h, title) {
      return <div on-click={this.handleClick}>{title}</div>;
    }
  }
};
</script>

<style scoped>
</style>