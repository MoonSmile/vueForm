<template>
  <div>
     <simple-render :render-text="renderText" text="配置项"></simple-render>
    <router-link to="/simpleDesc">说明</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import simpleRender from "./views/simpleRender";
export default {
  name: "config",
  components: {
    simpleRender
  },
  mounted() {},
  methods: {
    handleClick() {
      console.log("config");
    },
    renderText(h, title) {
      return <div on-click={this.handleClick}>{title}</div>;
    }
  }
};
</script>

<style scoped>
</style>