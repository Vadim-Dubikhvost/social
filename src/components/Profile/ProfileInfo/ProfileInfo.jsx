import React from 'react';
import defaultProfileAvatar from '../../../assets/images/defaultProfileAvatar.png';
import ProfileStatus from '../ProfileStatus/ProfileStatusWithHooks';
import css from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
	return (
		<div className={css.profile}>

			<div className={css.profile__inner}>
				<div className={css.profile__avatar}>
					<img src={!profile.photos.large ? defaultProfileAvatar : profile.photos.large} alt="" />
				</div>
				<div className={css.profile__description}>
					<p className={css.profile__title}>{profile.fullName}</p>
					<ul>
						<li>Looking For A Job: {profile.lookingForAJob ? "Yes" : "No"}</li>
						<li>Description: {profile.lookingForAJobDescription}</li>
						<li className={css.profile__status}><div>Status:</div> <ProfileStatus profileStatus={status} updateUserStatus={updateUserStatus} /></li>
						<li>Web Site: {profile.website}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;