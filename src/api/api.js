import axios from "axios";

let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "9b316602-a8f1-4f4d-8709-29375184c41c",
	},
});

export const usersAPI = {

	getUsers(pageNumber, pageSize) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
			.then(response => response.data);
	},

	userFollow(userId) {
		return instance.post(`follow/ ${userId}`)
			.then(response => response.data);
	},

	userUnFollow(userId) {
		return instance.delete(`follow/ ${userId}`)
			.then(response => response.data);
	},
};

export const profileAPI = {
	setSelectedUser(userId) {
		return instance.get(`profile/` + userId)
			.then(response => response.data);
	},

	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
			.then(response => response.data);
	},

	setStatus(status) {
		return instance.put(`profile/status/`, { status: status })
			.then(response => response.data)
	}
};

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`)
			.then(response => response.data);
	},
	login(email, password, rememberMe) {
		return instance.post(`auth/login`, { email, password, rememberMe })
			.then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`)
			.then(response => response.data);
	}
}
