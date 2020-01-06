<template>
  <div>
    <el-form class="config-form" ref="form" :model="fields" label-width="60px" label-position="top">
      <el-form-item v-if="fields.id" label="id">
        <el-input disabled v-model="fields.id"></el-input>
      </el-form-item>
      <el-form-item v-if="fields.type" label="type">
        <el-input disabled v-model="fields.type"></el-input>
      </el-form-item>
      <el-form-item v-if ="'defaultValue' in fields.options" label="defaultValue">
        <el-input v-model="fields.options.defaultValue"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "WidgetFormConfig",
  components: {},
  data() {
    return {
      fields: {
        options: {}
      }
    };
  },
  methods: {
    test() {}
  },
  watch: {
    "$store.state.form.itemdef": function(newVal) {
      this.fields = newVal;
    }
  }
};
</script>
<style scoped>
.config-form {
  padding: 1em;
}
</style>
