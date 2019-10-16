<template>
  <div class="hello">
    <el-form>
      <el-row>
        <el-col v-for="(col, colIndex) in data.list" :key="colIndex" :span="3" style="border:1px solid red;height:100%;">
          <widget-form-item :key="col.key" :element="col" :index="colIndex">
          </widget-form-item>
          <div style=";float:-10px;text-align:right;border:3px solid yellow; height:20px;">
            <i style="">
              {{col.name}}
            </i>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import WidgetFormItem from "./WidgetFormItem";
export default {
  name: "WidgetForm",
  props: ["data"],
  components: {
    WidgetFormItem
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
