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

        ...mapState({
            def: state => state.form.def
        })

    },
    methods: {
        ...mapMutations('form', {
            formDefAddDefaultCallback: 'addDefaultCallback',
            clearFormDef: 'clearFormDef'
        }),
    }
}