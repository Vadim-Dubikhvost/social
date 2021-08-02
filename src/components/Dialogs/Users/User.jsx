import React from 'react';
import css from './User.module.css';
import { NavLink } from 'react-router-dom';



const User = ({ id, name }) => {
	let path = '/dialogs/' + id;

	return (
		<NavLink to={path} className={css.dialogs__link} activeClassName={css.active} >
			<div className={css.dialogs__user} >{name}</div>
		</NavLink>
	);
}

export default User;