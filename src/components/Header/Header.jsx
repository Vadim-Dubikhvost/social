import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../../logos/Logo_4.png'
import css from './Header.module.css';

const Header = (props) => {

	return (
		<header className={css.header}>

			<div className={css.header__inner}>
				<img
					src={Logo}
					alt=""
					className={css.header__logo} />

				<div className={css.header__intro}>
					So...Cial
				</div>
			</div>

			<div className={css.header__login}>
				{props.isAuth ?
					<div><p>{props.login}</p> <button className={css.logout} onClick={props.logout}>Logout</button> </div>
					: <NavLink to={'/login'}>Login</NavLink>
				}
			</div>

		</header>
	);
}

export default Header;