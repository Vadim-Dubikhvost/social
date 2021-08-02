import React from 'react';
import css from './Message.module.css';


const Message = ({ message }) => {
	return (
		<div className={css.dialogs__messageblock}><div className={css.dialogs__message}>{message}</div></div>
	);
}

export default Message;