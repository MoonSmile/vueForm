<template>
  <div class="Container">
    <el-container>
      <el-header class="stay-right">
        <el-button @click.native="clearForm">清空</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <component-menu></component-menu>
        </el-aside>
        <el-container>
          <el-main>
            <main-form></main-form>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>

import { formDef } from './mixins/formDef'
import componentMenu from "./CompomentMenu";
import widgetFormJSX from "./WidgetFormJSX";
export default {
  name: "Container",
  mixins: [formDef],
  components: {
    componentMenu,
    "main-form": widgetFormJSX
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    clearForm() {}
  }
};
</script>
<style scoped>
.Container {
  width: 40%;
  background: #e8e8e8;
}
.stay-right {
  text-align: right;
}
</style>
