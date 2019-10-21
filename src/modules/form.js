const common = require('@/../utils/common');

const state = {
    def: [{
        type: "input",
        value: "666",
    }]
}

const getters = {
    getFormDef(state) {
        return common.deepCopy(state.def)
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