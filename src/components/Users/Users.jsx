import React from 'react';
import css from './Users.module.css'
import User from './User/User';
import Paginator from './Paginator/Paginator';


let Users = ({ totalItemsCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followingUsers, currentPortion }) => {

	return (
		<div>
			<div className={css.users}>
				{
					users.map(u => <User key={u.id}
						users={u}
						follow={follow}
						unfollow={unfollow}
						followingUsers={followingUsers} />)
				}
			</div>
			<Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
		</div >
	)
}

export default Users;