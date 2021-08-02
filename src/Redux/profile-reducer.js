import { profileAPI } from "../api/api";

const ADD_POST = 'SoCial/profile/ADD-POST';
const SET_USER_PROFILE = 'SoCial/profile/SET_USER_PROFILE';
const SET_STATUS = 'SoCial/profile/SET_STATUS';

let initialState = {
	posts: [
		{ id: 1, message: 'Hello!', likesCount: 23 },
		{ id: 2, message: 'Nice to meet you on my profile!', likesCount: 11 },
		{ id: 3, message: 'It`s my first post!', likesCount: 35 },
	],
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:

			return {
				...state,
				posts: [...state.posts, {
					id: 5,
					message: action.postData,
					likesCount: 0,
				}],
			};

		case SET_USER_PROFILE:

			return {
				...state,
				profile: action.profile,
			};

		case SET_STATUS:

			return {
				...state,
				status: action.status,
			};

		default:
			return state;
	}

}

export let addPost = (postData) => ({ type: ADD_POST, postData });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let setUserStatus = (status) => ({ type: SET_STATUS, status });

export let getUserProfile = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.setSelectedUser(userId);

		dispatch(setUserProfile(response));
	}
};

export let getUserStatus = (userId) => {
	return async (dispatch) => {
		let response = await profileAPI.getStatus(userId);

		dispatch(setUserStatus(response));

	}
};

export let updateUserStatus = (status) => {
	return async (dispatch) => {
		let response = await profileAPI.setStatus(status);

		if (response.resultCode === 0) {
			dispatch(setUserStatus(status));
		}

	}
};


export default profileReducer;