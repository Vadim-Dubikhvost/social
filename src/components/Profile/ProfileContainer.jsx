import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../Redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { Redirect, withRouter } from 'react-router-dom';
import { withRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;

		if (!userId) {
			userId = this.props.authUserId;
		}

		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	render() {
		return (
			<>
				{(this.props.authUserId) ? undefined : <Redirect to="/login" />}
				{(this.props.profile !== null) ? <Profile {...this.props} /> : <Preloader />}
			</>
		);
	}

}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
		status: state.profilePage.status,
		authUserId: state.auth.id,
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter,
	//withRedirect
)(ProfileContainer);