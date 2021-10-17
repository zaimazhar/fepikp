import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "SHEPro Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/courses",
		component: () => import("../views/Course.vue"),
	},
	{
		path: "/contact",
		component: () => import("../views/Contact.vue"),
	},
	{
		path: "/register/:id",
		component: () => import("../views/Register.vue"),
	},
	{
		path: "/login",
		component: () => import("../views/Login.vue")
	},
	{
		path: "/dashboard",
		children: [
			{
				path: "program",
				component: () => import("../views/admin/Create.vue"),
			},
			{
				path: "edit/:id",
				component: () => import("../views/admin/Edit.vue"),
			},
			{
				path: "view/:id",
				component: () => import("../views/admin/View.vue"),
			},
			{
				path: "delete/:id",
				component: () => import("../views/admin/Delete.vue"),
			},
			{
				path: "home",
				component: () => import("../views/admin/Home.vue"),
			},
		],
		component: () => import("../views/admin/Dashboard.vue"),
		meta: { requiresAuth: true },
	},
	{
		path: "/pikp",
		redirect: {
			name: "PIKPHome"
		}
	},
	{
		path: "/pikp",
		children: [
			{
				path: "home",
				name: "PIKPHome",
				component: () => import("../views/pikp/Home.vue")
			},
			{
				path: "about",
				component: () => import("../views/pikp/About.vue"),
			},
			{
				path: "activity",
				component: () => import("../views/pikp/Activity.vue"),
			},
		],
		component: () => import("../views/pikp/Base.vue"),
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
});

router.beforeResolve((to, from, next) => {
	if (to.matched.some((rec) => rec.meta.requiresAuth)) {
		if (!store.getters.authState) {
			next("/login");
			return;
		} else next();
	} else next();
});

export default router;
