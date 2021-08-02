import React from 'react';
import css from './User.module.css'
import defaultPhoto from '../../../logos/Logo_4.png'
import { NavLink } from 'react-router-dom';

let User = ({ users, follow, unfollow, followingUsers }) => {
	return (
		<div >
			<div className={css.user}>
				<div className={css.user__photo}>
					<NavLink to={'/profile/' + users.id}>
						<img src={users.photos.small !== null ? users.photos.small : defaultPhoto} alt="" className={css.user__img} />
					</NavLink>
				</div>
				<div className={css.user__block}>
					<div className={css.about}>
						<div className={css.about__inner}>
							<div className={css.about__name}>{users.name}</div>
							<div className={css.about__status}>{users.status}</div>
						</div>
						<div className={css.about__location}>
							<div className={css.about__city}>
								{"props.location.cityName"},
							</div>
							<div className={css.about__country}>{"props.location.country"}</div>
						</div>
					</div>
					<div className={css.user__follow}>
						{users.followed
							? <button disabled={followingUsers.some(id => id === users.id)} onClick={() => { unfollow(users.id) }}>Unfollow</button>
							: <button disabled={followingUsers.some(id => id === users.id)} onClick={() => { follow(users.id) }}>Follow</button>}
					</div>
				</div>
			</div>

		</div>
	);
};

export default User;