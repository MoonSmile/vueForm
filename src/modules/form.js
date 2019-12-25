const common = require('@/../utils/common');

const state = {
    def: [],
    itemdef:{}
}

const getters = {
    getFormDef(state) {
        return common.deepCopy(state.def)
    },
    getWidgetItemDef(state) {
 
        return state.itemdef
    }
}

const mutations = {
    addDefaultCallback(state, callback) {
        state.def.forEach(e => {
            e.callback = callback
        })
    },
    addCallback(state, def, callback) {
        def.callback = callback
    },
    updateFormDef(state, def) {
        state.def = def
    },
    clearFormDef(state){
        state.def = []
    },
    setSelect(state,itemdef)
    {
        state.itemdef = itemdef
    }
}

const actions = {

}

export default {
    namespaced: true, // 进行多模块处理
    state,
    getters,
    mutations,
    actions
}