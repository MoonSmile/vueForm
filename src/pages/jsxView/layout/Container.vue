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
      <el-aside width="300px">
        <config></config>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import { formDef } from "@/pages/jsxView/mixins/formDef";
import WidgetMenu from "./components/WidgetMenu";
import widgetFormJSX from "./components/WidgetFormJSX";
import config from "./components/Config";
export default {
  name: "Container",
  mixins: [formDef],
  components: {
    WidgetMenu,
    "main-form": widgetFormJSX,
    config
  },
  data() {
    return {
    };
  },
  mounted() {
    this.getBoData();
  },
  methods: {
    clearForm() {
      this.clearFormDef();
    },
    getBoData() {
      let that = this
      this.$axios.get("/mock/bo.json").then(res => {
        if(res.status == 200)
        {
          that.bo = res.data
        }
      });
    }
  }
};
</script>
<style scoped>
.Container {
  background: #f7f4f4;
}
.stay-right {
  text-align: right;
}
</style>
