import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';
import { Field, Form } from 'react-final-form';
import { composeValidators, MaxLength, required } from '../../../utilites/validators/validators';
import { Element } from '../../common/Forms/Forms';



const MyPosts = React.memo(({ posts, addPost }) => {

	let addNewPost = async (values) => {
		await addPost(values.newPost)
		values.newPost = undefined;
	}

	let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)

	return (
		<div className={css.posts}>
			<div className={css.posts__myposts}>My posts</div>
			<NewPost onSubmit={addNewPost} />
			<div className={css.posts__userposts}>

				{postsElements}

			</div>
		</div>
	);

});

let NewPost = (props) => {
	const Textarea = Element('textarea');
	return (
		<Form onSubmit={props.onSubmit} initialValues={{ employed: true }}>
			{({ handleSubmit, reset, submitting, pristine }) => (
				<form onSubmit={(event) => { handleSubmit(event).then(reset) }}>
					<div className={css.posts__newpost}>New Post</div>
					<Field className={css.posts__textarea} name="newPost" component={Textarea} wrap="hard"
						placeholder="Input your post here" validate={composeValidators(required, MaxLength(100))} />
					<div className={css.posts__button}><button className={css.posts__btn} type='submit' disabled={submitting || pristine}>Send</button></div>
				</form>
			)}
		</Form>
	)
}

export default MyPosts;