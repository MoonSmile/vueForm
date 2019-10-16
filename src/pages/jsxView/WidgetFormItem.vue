<template>

  <el-form-item class="widget-view " style=" min-height:200px;" :label="element.name" @click.native.stop="handleSelectWidget(index)">
    <template v-if="element.type == 'input'">
      <el-input v-model="element.options.defaultValue" :style="{width: element.options.width}" :placeholder="element.options.placeholder"></el-input>
    </template>
    <template v-if="element.type == 'textarea'">
      <el-input type="textarea" :rows="5" v-model="element.options.defaultValue" :style="{width: element.options.width}" :disabled="element.options.disabled" :placeholder="element.options.placeholder"></el-input>
    </template>
  </el-form-item>
</template>

<script>
export default {
  props: ["element", "select", "index", "data"],
  components: {},
  data() {
    return {
      selectWidget: this.select
    };
  },
  mounted() {},
  methods: {
    handleSelectWidget(index) {
      console.log(index);
    }
  }
};
</script>