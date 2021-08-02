import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import css from './ProfileStatus.module.css'

let ProfileStatus = ({ profileStatus, updateUserStatus }) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(profileStatus);

	useEffect(() => {
		setStatus(profileStatus);
	}, [profileStatus])

	let activateEditMode = () => {
		setEditMode(true);
	}

	let deactivateEditMode = () => {
		setEditMode(false);
		updateUserStatus(status);
	}

	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div className={css.status}>
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}>{status || "ChangeStatus"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} className={css.status__input} autoFocus={true} onBlur={deactivateEditMode} value={status} type="text" />
				</div>
			}
		</div>
	)

};

export default ProfileStatus;