<template>
  <div class="main-form">
    <el-form >
      <draggable class="mainland" v-model="formDef" v-bind="{group:'cplist', ghostClass: 'ghost'}" @change="log">
        <el-form-item class="item" v-for="(def,index) in formDef" :label="def.type"  :key="index">
          <wrap :def="def"></wrap>
        </el-form-item>
      </draggable>
    </el-form>
    <!-- <render-dom :render-func="renderFunc" :number="number"></render-dom> -->
  </div>
</template>

<script>
// import RenderDom from "./render-dom";
import { formDef } from './mixins/formDef'
import wrap from "./widgets/widgetWrap";
import Draggable from "vuedraggable";
export default {
  name: "widgetFormJSX",
  mixins: [formDef],
  components: {
    wrap,
    Draggable
    // RenderDom
  },
  data() {
    return {
    };
  },
  mounted() {
    this.formDefAddDefaultCallback(this.myCallBack)
  },
  methods: {
    log: function(evt) {
      evt.added.element.callback = this.myCallBack
    },
    handleClick() {
      console.log("click");
    },
    myCallBack(def, newVal) {
      console.log(newVal)
      def.value = newVal;
    }
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
.mainland{
    height: 100%;
    background: #F8F8F8;
    padding-bottom: 150px;
}
.item{
  padding: 1em;
  border: 1px solid #123456;
}
</style>