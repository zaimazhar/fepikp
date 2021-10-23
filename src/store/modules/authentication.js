import router from "../../router";

const state = {
	auth: !!localStorage.getItem("token"),
	token: localStorage.getItem("token") ?? "",
};

const getters = {
	authState: (state) => state.auth,
};

const actions = {
	Login({ commit }, userData) {
		localStorage.setItem("token", userData.token);
		commit("LOGIN", userData.token);
	},
	Logout({ commit }) {
		localStorage.removeItem("token");
		commit("LOGOUT");
		router.replace('/')
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
