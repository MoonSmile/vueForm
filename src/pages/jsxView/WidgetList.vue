<template>
  <div>
    <div class="widget-cate">{{def.title}}
      <el-tooltip :content="def.title" placement="bottom" effect="light">
        <i class="el-icon-question"></i>
      </el-tooltip>
    </div>
    <draggable tag="ul" :list="def.template" v-bind="{group:{ name:'cplist', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"  :clone="cloneTemplate" @end="handleMoveEnd" @start="handleMoveStart" :move="handleMove">
      <li class="form-edit-widget-label" v-for="(item, index) in def.template" :key="index">
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
import uuidv1 from 'uuid/v1' 
export default {
  components: {
    Draggable
  },
  props: ["def"],
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    cloneTemplate({type,options}){
      return{
        id:uuidv1(),
        type:type,
        options:JSON.parse(JSON.stringify(options))
      }
    },
    handleMoveStart({ oldIndex }) {
      console.log("move start", oldIndex);
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
