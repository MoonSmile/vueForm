<template>
  <div class="Container">
    <el-container>
      <el-header>Header</el-header>
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
import componentMenu from "./CompomentMenu";
import widgetFormJSX from "./WidgetFormJSX";
export default {
  name: "Container",
  components: {
    componentMenu,
    "main-form": widgetFormJSX
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.Container {
  width: 40%;
  background: gainsboro;
}
</style>
