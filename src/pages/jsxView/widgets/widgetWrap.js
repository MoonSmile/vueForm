import widgetLoader from "./widgetLoader"
export default {
    name: "widgetWrap",
    components:{
        widgetLoader
    },
    props: ["def"],
    data() {
        return {
        }
    },
    methods: {
    },
    render(h) {
        return (
            <div style="margin:1em;">
                {/* <p>wrap value:{this.def.value}</p> */}
                {
                    h(widgetLoader[this.def.type], {
                        props: {
                            def: this.def,
                        },
                    })
                }
            </div>
        );
    }
};