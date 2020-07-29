<template>
  <div class="main-form">
    
      <draggable class="mainland" v-model="formDef" v-bind="{group:'cplist', ghostClass: 'ghost'}" @change="log">
        <div class="item" v-for="(def,index) in formDef" :label="def.type"  :key="index" @click.stop="changeSelect(def)">
          <wrap :def="def"></wrap>
        </div>
      </draggable>
  
  </div>
</template>

<script>
import { formDef } from '@/pages/jsxView/mixins/formDef'
import wrap from "@/pages/jsxView/widgets/widgetWrap";
import Draggable from "vuedraggable";
export default {
  name: "widgetFormJSX",
  mixins: [formDef],
  components: {
    wrap,
    Draggable
  },
  data() {
    return {
    };
  },
  mounted() {
    this.formDefAddDefaultCallback(this.myCallBack)
  },
  methods: {
    changeSelect(def){
      this.$store.commit('form/setSelect',def)
    },
    log: function(evt) {
      if(evt.added)
      {
        evt.added.element.callback = this.myCallBack
      }
      
    },
    myCallBack(def, newVal) {
      console.log(newVal)
      def.value = newVal;
    }
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

  border: 1px solid #123456;
}
</style>