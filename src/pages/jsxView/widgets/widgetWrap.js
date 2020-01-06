import widgetLoader from "./widgetLoader"
export default {
    name: "widgetWrap",
    components: {
        widgetLoader
    },
    props: ["def"],
    data() {
        return {
            flag: false
        }
    },
    methods: {
        handleClick(e) {
            return e
        }
    },
    watch: {
        "$store.state.form.itemdef": function (newVal) {
            this.flag = newVal.id == this.def.id
        }
    },
    computed: {

    },
    render(h) {
        return (
            <div class={{ "widget-selected": this.flag, "widget-wrap": true }} onClick={(e) => { this.handleClick(e) }}>
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