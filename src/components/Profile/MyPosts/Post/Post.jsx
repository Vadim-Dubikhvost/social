import React from 'react';
import css from './Post.module.css';


const Post = (props) => {
	return (
		<div className={css.posts__post}>
			<div className={css.posts__postimage}>
				<img src="#" alt="" />
			</div>
			<div className={css.posts__posttext}>
				{props.message}

				<div className={css.posts__likes}>
					{props.likesCount}
				</div>
			</div>

		</div>
	);
}

export default Post;