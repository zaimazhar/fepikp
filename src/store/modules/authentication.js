const state = {
  auth: false
}

const getters = {
  authState: state => state.auth
}

const actions = {

}

const mutations = {
  login: state => {
    state.auth = !state.auth
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}