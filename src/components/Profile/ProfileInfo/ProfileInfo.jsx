import React from 'react';
import defaultProfileAvatar from '../../../assets/images/defaultProfileAvatar.png';
import ProfileStatus from '../ProfileStatus/ProfileStatusWithHooks';
import css from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto }) => {

	const onPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return (
		<div className={css.profile}>

			<div className={css.profile__inner}>
				<div className={css.profile__avatar}>
					<img className={css.profile__mainImg} src={profile.photos.large ? profile.photos.large : defaultProfileAvatar} alt="" />
					{isOwner && <div className={css.input}>
						<input type={"file"} name={"file"} id={"input__file"} className={css.input__select} onChange={onPhotoSelected} />
						<label htmlFor={"input__file"} className={css.input__label} ><span className={css.input__labelText}>Change photo</span></label>
					</div>}
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