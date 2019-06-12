import Vue from 'vue'
import Vuex from 'vuex'
import Contact from './modules/contact'
import Label from './modules/label'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contact: Contact,
    label: Label
  }
})
