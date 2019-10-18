import inputJSX from "./inputJSX"
import textareaJSX from "./textareaJSX"
export default {
    name: "widgetWrap",
    props: ["def"],
    data() {
        return {
            template: {
                "input": inputJSX,
                "textarea":textareaJSX
            }
        }
    },
    methods: {
    },
    render(h) {
        return (
            <div style="margin:1em;">
                {/* <p>wrap value:{this.def.value}</p> */}
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