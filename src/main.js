import Vue from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import router from './router/index'
import store from './store/index'
import ScreenSizeMixin from './Mixins/ScreenSizeMixin'
import "@fortawesome/fontawesome-free/css/all.css"
import './App.css'
Vue.config.productionTip = false

Vue.use(PerfectScrollbar);
Vue.mixin(ScreenSizeMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
