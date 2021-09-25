
const state = {
	auth: !!localStorage.getItem("jwt"),
	token: localStorage.getItem("jwt") ?? "",
};

const getters = {
	authState: (state) => state.auth,
};

const actions = {
	Login({ commit }, userData) {
		localStorage.setItem("jwt", userData.token);
		commit("LOGIN", userData.token);
	},
	Logout({ commit }) {
		localStorage.removeItem("jwt");
		commit("LOGOUT");
	},
};

const mutations = {
	LOGIN: (state, token) => {
		state.auth = true;
		state.token = token;
	},
	LOGOUT: (state) => {
		state.auth = false;
		state.token = "";
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
