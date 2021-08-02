import dialogsReducer, { deleteMessage, sendMessage } from "./dialogs-reducer";

let state = {
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'What you know about going down in the deep?' },
		{ id: 3, message: 'I feels like an austronaut in the ocean!' },
	]
};


test('message must be `Hello`', () => {
	let action = sendMessage("Hello");

	let newState = dialogsReducer(state, action);

	expect(newState.messages[3].message).toBe("Hello");
});

test('messages length must be 4`', () => {
	let action = sendMessage("Hello");

	let newState = dialogsReducer(state, action);

	expect(newState.messages.length).toBe(4);
});

test('message length must be 2`', () => {
	let action = deleteMessage(1);

	let newState = dialogsReducer(state, action);

	expect(newState.messages.length).toBe(2);
});