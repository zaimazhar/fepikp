const state = {
  name: ''
}

const getters = {
  courseGet: (state) => state.name,
}

const mutations = {
  SETCOURSE: (state, name) => {
    state.name = name
  },
  CLEARCOURSE: (state) => {
    state.name = ''
  }
}

const actions = {
  SetCourse({ commit }, name) {
    commit('SETCOURSE', name)
  },
  ClearCourse({ commit }) {
    commit('CLEARCOURSE')
  }
}

module.exports = {
  state,
  getters,
  mutations,
  actions
}