export default {
    name: "inputJSX",
    props: ["def"],
    data() {
        return {
            type: "textarea"
        }
    },
    methods: {
        input(e) {
            this.def.callback(this.def, e)
        }
    },
    render() {
        return (
            <el-input type="textarea" value={this.def.value} onInput={this.input}></el-input>
        );
    }
};
