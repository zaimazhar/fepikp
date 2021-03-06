import Vue from "vue";
import Vuex from 'vuex'
import authentication from './modules/authentication'
import course from './modules/course'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    course
  },
  plugins: [createPersistedState()]
})