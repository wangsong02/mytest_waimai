import Vue from 'vue'
import App from './layouts/App.vue'
Vue.config.productionTip = false //关闭提示
//引入iconfont
import '../iconfont/iconfont.css'
import '../static/css/reset.css'

import router from './plugins/router.js'
new Vue({
	render: h => h(App),
	router
}).$mount('#app')
