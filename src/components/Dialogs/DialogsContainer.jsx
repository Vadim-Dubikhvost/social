import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { sendMessage } from '../../Redux/dialogs-reducer';




let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		isAuth: state.auth.isAuth,
	}
};



export default compose(
	connect(mapStateToProps, { sendMessage }),
	withRedirect
)(Dialogs);