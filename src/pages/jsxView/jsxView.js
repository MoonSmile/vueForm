import Vue from 'vue'
import App from './jsxView.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/modules/store'
import router from "./router"
Vue.use(ElementUI)
Vue.config.productionTip = false;


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#index');