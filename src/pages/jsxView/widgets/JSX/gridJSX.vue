<script>
import wrap from "../widgetWrap";
import Draggable from "vuedraggable";
export default {
  name: "gridJSX",
  props: ["def"],
  components: {
    wrap,
    Draggable
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clickHandler() {}
  },
  render() {
    return (
      <el-row gutter={20}>
        {this.def.options.columns.map(v => {
          return (
            <el-col span={v.span}>
              <draggable
                group="cplist"
                v-model={v.list}
                onClick={this.clickHandler}
                class="grid-content bg-purple"
              >
                {v.list.map(item => {
                  return <wrap def={item}></wrap>;
                })}
              </draggable>
            </el-col>
          );
        })}
      </el-row>
    );
  }
};
</script>
<style scoped lang="scss">
.grid-content {
  text-align: center;
  border: 2px dotted $grid-color;
  min-height: 100px;
}
</style>