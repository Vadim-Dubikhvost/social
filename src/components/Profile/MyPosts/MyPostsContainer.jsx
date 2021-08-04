import { connect } from 'react-redux';
import { addPost } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		profile: state.profilePage.profile,
	}
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;