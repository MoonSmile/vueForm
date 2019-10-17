<template>
  <div>
    <div class="widget-cate">{{component.title}}
      <el-tooltip :content="component.title" placement="bottom" effect="light">
        <i class="el-icon-question"></i>
      </el-tooltip>
    </div>
    <draggable tag="ul" :list="component.template" v-bind="{group:{ name:'cplist', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}" @end="handleMoveEnd" @start="handleMoveStart" :move="handleMove">
      <li class="form-edit-widget-label" v-for="(item, index) in component.template" :key="index">
        <a>
          <i class="icon iconfont" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </a>
      </li>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
export default {
  components: {
    Draggable
  },
  props: ["component"],
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    handleMoveStart({ oldIndex }) {
      console.log("move start", oldIndex, this.basicComponents);
    },
    handleMoveEnd(evt) {
      console.log("move end", evt);
    },
    handleMove() {
      return true;
    }
  }
};
</script>
