import { createSelector } from "reselect";

export const getUsers = (state) => {
	return state.usersPage.users;
};

/* export const getUsersSelector = createSelector(getUsersSelector, (users) => {
	return users.filter( u => true);
}); */

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
};

export const getTotalItemsCount = (state) => {
	return state.usersPage.totalItemsCount;
};

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
};

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
};

export const getFollowingUsers = (state) => {
	return state.usersPage.followingUsers;
};

