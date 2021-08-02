import { authAPI } from "../api/api";

const SET_USER_AUTH = 'SoCial/auth/SET_USER_AUTH';
const ERROR = 'ERROR';


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	errorMessage: '',
	failedAuth: false,
};

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_AUTH:
			return { ...state, ...action.data }
		case ERROR:
			return { ...state, errorMessage: action.message, failedAuth: action.failedAuth }
		default:
			return state;
	}

}

export let setUserAuth = (id, email, login, isAuth) => ({ type: SET_USER_AUTH, data: { id, email, login, isAuth } });
export let errors = (failedAuth, message) => ({ type: ERROR, failedAuth: failedAuth, message: message });

export let authUser = () => {
	return async (dispatch) => {
		let response = await authAPI.authMe();

		if (response.resultCode === 0) {
			let { id, login, email } = response.data;
			dispatch(setUserAuth(id, email, login, true));
		}

	}
}

export let login = (email, password, rememberMe = false) => {
	return async (dispatch) => {
		let response = await authAPI.login(email, password, rememberMe);

		if (response.resultCode === 0) {
			dispatch(authUser());
		} else {
			dispatch(errors(true, response.messages[0]));
		}

	}
}

export let logout = () => {
	return async (dispatch) => {
		let response = await authAPI.logout();

		if (response.resultCode === 0) {
			dispatch(setUserAuth(null, null, null, false));
		}

	}
}


export default authReducer;