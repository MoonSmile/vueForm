<template>
  <div>
    <h1>jsxView</h1>
    <ii :value="number"></ii>
    <ddd></ddd>
    <render-dom :render-func="renderFunc" :number="number"></render-dom>
  </div>
</template>

<script>
// import WidgetForm from "./WidgetForm";
import RenderDom from "./render-dom";
import ii from "./widgets/input";
import ddd from "./widgets/div"
import {
  basicComponents,
  numberComponent,
  radioComponent
} from "./componentConfig";
export default {
  name: "index",
  components: {
    // WidgetForm,
    ii,
    ddd,
    RenderDom
  },
  data() {
    return {
      number: 88,
      data: {
        options: {
          minRequired: false,
          min: 10
        },
        numberComponent,
        radioComponent,
        list: basicComponents
      }
    };
  },
  mounted() {},
  methods: {
    handleClick(){
      console.log("click")
    },
    renderFunc(h, num) {
      return <div on-click={this.handleClick}>{num}Hello Vue</div>;
    }
  }
};
</script>

<style scoped>
</style>