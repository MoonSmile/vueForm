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
        handleClick(e){
            console.log(e)
        }
    },
    render(h) {
        return (
            <div style="margin:1em;border:1px solid #cc2323" onClick={(e) => {this.handleClick(e)}}>
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