import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from './Profile.module.css';

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;