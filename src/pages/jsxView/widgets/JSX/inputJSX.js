export default {
    name: "inputJSX",
    props: ["def"],
    data() {
        return {
        }
    },
    methods: {
        input(e) {
            this.def.callback(this.def,e)
        }
    },
    render() {
        return (
            <el-input placeholder = {this.def.options.placeholder} value={this.def.value} onInput={this.input}></el-input>
        );
    }
};