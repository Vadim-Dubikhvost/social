import React from 'react';
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setTotalUsersCount, getAllUsers, userFollowed, userUnfollowed } from "../../Redux/users-reducer";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getFollowingUsers, getIsFetching, getPageSize, getTotalItemsCount, getUsers, } from '../../Redux/users-selectors';


class UsersAPIComponent extends React.Component {

	componentDidMount() {
		const { currentPage, pageSize } = this.props;

		this.props.getAllUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber, portionNumber) => {
		const { pageSize } = this.props;

		this.props.getAllUsers(pageNumber, pageSize, portionNumber);
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : <Users
					users={this.props.users}
					totalItemsCount={this.props.totalItemsCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					follow={this.props.userFollowed}
					unfollow={this.props.userUnfollowed}
					onPageChanged={this.onPageChanged}
					followingUsers={this.props.followingUsers} />}
			</>
		)
	}
}

/* let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		isFetching: state.usersPage.isFetching,
		followingUsers: state.usersPage.followingUsers,
	}
} */

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		currentPage: getCurrentPage(state),
		totalItemsCount: getTotalItemsCount(state),
		pageSize: getPageSize(state),
		isFetching: getIsFetching(state),
		followingUsers: getFollowingUsers(state),
	}
}

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setUsers,
		setTotalUsersCount,
		getAllUsers,
		userFollowed,
		userUnfollowed,
	}),
	//withRedirect
)(UsersAPIComponent);