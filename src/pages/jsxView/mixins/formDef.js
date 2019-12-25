// import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { mapState, mapMutations } from "vuex";

export const formDef = {
    computed: {
        formDef: {
            // getter
            get: function () {
                return this.def
            },
            // setter
            set: function (newValue) {
                this.$store.commit('form/updateFormDef', newValue)
            }
        },
        bo: {
            // getter
            get: function () {
                return this.boData
            },
            // setter
            set: function (newValue) {
                this.$store.commit('bo/setBoData', newValue)
            }
        },

        ...mapState({
            def: state => state.form.def,
            boData:state =>state.bo.data
        })

    },
    methods: {
        ...mapMutations('form', {
            formDefAddDefaultCallback: 'addDefaultCallback',
            clearFormDef: 'clearFormDef'
        }),
    }
}