import inputJSX from "./inputJSX"
export default {
    name: "widgetWrap",
    props: ["def"],
    data() {
        return {
            template: {
                "input": inputJSX
            }
        }
    },
    methods: {
    },
    render(h) {
        return (
            <div style="width:200px">
                <p>wrap value:{this.def.value}</p>
                {
                    h(this.template[this.def.type], {
                        props: {
                            def: this.def,
                        },
                    })
                }
            </div>
        );
    }
};