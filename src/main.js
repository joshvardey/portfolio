import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import FullPage from 'fullpage.js';


Vue.config.productionTip = false

const vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')