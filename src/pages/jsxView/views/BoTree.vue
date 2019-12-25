<template>
  <div>
    <el-tree :data="boTree" default-expand-all ref="tree">
    </el-tree>
  </div>
</template>

<script>
import { formDef } from "../mixins/formDef";
export default {
  name: "boTree",
  mixins: [formDef],
  components: {},
  data() {
    return {
      boTree: []
    };
  },
  methods: {
    initBOView(bo) {
      function generateLabel(attr) {
        return attr.name + "(" + attr.dataType + ")";
      }
      let root = {
        id: bo.parentEntVersion.ent.id,
        label: bo.parentEntVersion.ent.name,
        children: []
      };
      bo.parentEntVersion.attrs.forEach(attr =>
        root.children.push({
          id: attr.id,
          label: generateLabel(attr),
          me: bo.parentEntVersion.ent.code,
          code: attr.code
        })
      );
      bo.childEntVersions.forEach(e => {
        let ref = bo.refs.find(r => r.childEntVersionId == e.id);
        let subbo = {
          id: e.ent.id,
          label: e.ent.name + "[" + ref.childCodeAlias + "]",
          children: []
        };

        let relType = ref.relType;
        e.attrs.forEach(attr =>
          subbo.children.push({
            id: attr.id,
            label: generateLabel(attr),
            me: e.ent.code,
            relType: relType,
            parent: bo.parentEntVersion.ent.code,
            code: attr.code
          })
        );
        root.children.push(subbo);
      });
      this.boTree.push(root);
    }
  },
  watch: {
      boData:function(val){
          this.initBOView(val)
      }
  }
};
</script>

<style scoped>
</style>