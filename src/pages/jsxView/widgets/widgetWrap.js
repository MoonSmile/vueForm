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
            console.log(e,this.def)
        }
    },
    render(h) {
        return (
            <div class="widget-wrap" onClick={(e) => {this.handleClick(e)}}>
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