<template>
  <div class="main-form">
    <wrap v-for="(def,index) in formDef" :key="index" :def="def"></wrap>
    <!-- <render-dom :render-func="renderFunc" :number="number"></render-dom> -->
  </div>
</template>

<script>
// import RenderDom from "./render-dom";
import wrap from "./widgets/widgetWrap";

export default {
  name: "widgetFormJSX",
  components: {
    wrap
    // RenderDom
  },
  data() {
    return {
      formDef:[
          {
            type:"input",
            value:"666",
            callback:this.myCallBack
          }
        ]
    };
  },
  mounted() {},
  methods: {
    handleClick() {
      console.log("click");
    },
    myCallBack(def,newVal) {
      def.value = newVal
    },
    // renderFunc(h, num) {
    //   return <div on-click={this.handleClick}>{num}Hello Vue</div>;
    // }
  }
};
</script>

<style scoped>
.main-form {
  border-width: 1px;
  border-style: dotted solid double dashed;
  border-color: #123456;
}
</style>