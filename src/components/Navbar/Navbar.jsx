import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={css.nav}>

			<NavLink to="/news" className={css.nav__link} activeClassName={css.active}>
				<div className={css.nav__button}>
					News
				</div>
			</NavLink>

			<NavLink to="/profile" className={css.nav__link} activeClassName={css.active}>
				<div className={css.nav__button}>
					Profile
				</div>
			</NavLink>

			<NavLink to="/dialogs" className={css.nav__link} activeClassName={css.active}>
				<div className={css.nav__button}>
					Messages
				</div>
			</NavLink>

			<NavLink to="/users" className={css.nav__link} activeClassName={css.active}>
				<div className={css.nav__button}>
					Users
				</div>
			</NavLink>

			<NavLink to="/music" className={css.nav__link} activeClassName={css.active}>
				<div className={css.nav__button}>
					Music
				</div>
			</NavLink>

			<NavLink to="/settings" className={css.nav__link} activeClassName={css.active}>
				<div className={css.nav__button}>
					Settings
				</div>
			</NavLink>
		</nav >
	);
}

export default Navbar;