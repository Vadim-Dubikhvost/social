import React from 'react';
import css from './Dialogs.module.css';
import User from './Users/User';
import Message from './Messages/Message';
import TextInput from './TextInput/TextInput';



const Dialogs = ({ dialogs, messages, sendMessage }) => {



	let dialogsElements = dialogs.map(user => <User name={user.name} id={user.id} key={user.id} />);
	let messagesElements = messages.map(mes => <Message message={mes.message} key={mes.id} />)

	let addNewMessage = (values) => {
		sendMessage(values.sendMessage);
		values.sendMessage = undefined;
	}



	return (
		<div className={css.dialogs}>
			<div className={css.dialogs__inner}>
				<div className={css.dialogs__users}>
					{dialogsElements}

				</div>
				<div className={css.dialogs__block}>
					<div className={css.dialogs__messages}>

						{messagesElements}


					</div>
					<div className={css.dialogs__textinput}>
						<TextInput onSubmit={addNewMessage} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;