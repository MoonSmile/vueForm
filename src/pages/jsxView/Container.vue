<template>
  <div class="Container">
    <el-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <widget-menu></widget-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="stay-right">
            <el-button @click.native="clearForm">清空</el-button>
          </div>
          <main-form></main-form>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
       <el-aside width="200px">
        <config></config>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import { formDef } from "./mixins/formDef";
import WidgetMenu from "./WidgetMenu";
import widgetFormJSX from "./WidgetFormJSX";
import config from "./Config";
export default {
  name: "Container",
  mixins: [formDef],
  components: {
    WidgetMenu,
    "main-form": widgetFormJSX,
    config
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clearForm() {
      this.clearFormDef();
    }
  }
};
</script>
<style scoped>
.Container {
  width: 60%;
  background: #f7f4f4;
}
.stay-right {
  text-align: right;
}
</style>
