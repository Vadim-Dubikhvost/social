const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Vadim' },
		{ id: 2, name: 'Olia' },
		{ id: 3, name: 'Vlad' },
		{ id: 4, name: 'Maksim' },
		{ id: 5, name: 'Yurii' },
		{ id: 6, name: 'Pasha' },
		{ id: 7, name: 'Yulia' },
		{ id: 8, name: 'Natali' },
		{ id: 9, name: 'Anton' },
	],
	messages: [
		{ id: 1, message: 'Sorry' },
		{ id: 2, message: 'This page isn`t already done' },
		{ id: 3, message: 'I haven`t a API for it now =[' },
	],
	newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let text = action.newMessageText;
			return {
				...state,
				messages: [...state.messages, {
					id: 4,
					message: text,
				}],

			}

		case DELETE_MESSAGE:
			return {
				...state,
				messages: state.messages.filter(m => m.id !== action.messageId),
			}

		default:
			return state;
	}

}

export let sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });
export let deleteMessage = (messageId) => ({ type: DELETE_MESSAGE, messageId });


export default dialogsReducer;