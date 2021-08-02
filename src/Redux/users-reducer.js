import { usersAPI } from "../api/api";
import { updateObjInArray } from "../utilites/action-helpers";

const FOLLOW = 'SoCial/users/FOLLOW';
const UNFOLLOW = 'SoCial/users/UNFOLLOW';
const SET_USERS = 'SoCial/users/SET_USERS';
const SET_CURRENT_PAGE = 'SoCial/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SoCial/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'SoCial/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_USER = 'SoCial/users/TOGGLE_IS_FOLLOWING_USER';


let initialState = {
	users: [],
	totalItemsCount: 0,
	pageSize: 3,
	currentPage: 1,
	isFetching: false,
	followingUsers: [],
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjInArray(state.users, action.userId, "id", { followed: true }),
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjInArray(state.users, action.userId, "id", { followed: false }),
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.page }
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalItemsCount: action.totalCount }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_IS_FOLLOWING_USER:
			return {
				...state,
				followingUsers: action.isFetching
					? [...state.followingUsers, action.userId]
					: state.followingUsers.filter(id => id !== action.userId),
			}

		default:
			return state;
	}

}

export let follow = (userId) => ({ type: FOLLOW, userId });
export let unfollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export let setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleFollowingUser = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_USER, isFetching, userId });

export let getAllUsers = (currentPage = 1, pageSize) => {
	return async (dispatch) => {
		dispatch(setCurrentPage(currentPage));
		dispatch(toggleIsFetching(true));
		let response = await usersAPI.getUsers(currentPage, pageSize);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(response.items));
		dispatch(setTotalUsersCount(response.totalCount));

	}
};

const toggleFollowUnfollow = async (dispatch, userId, actionCreator, apiMethod) => {
	dispatch(toggleFollowingUser(true, userId));
	let response = await apiMethod(userId);
	if (response.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingUser(false, userId));
}

export let userFollowed = (userId) => {
	return async (dispatch) => {

		toggleFollowUnfollow(dispatch, userId, follow, usersAPI.userFollow.bind(userId))

	}
};

export let userUnfollowed = (userId) => {
	return async (dispatch) => {

		toggleFollowUnfollow(dispatch, userId, unfollow, usersAPI.userUnFollow.bind(userId))
	}
};

export default usersReducer;