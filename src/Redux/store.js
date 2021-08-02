import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hello!', likesCount: 23 },
				{ id: 2, message: 'Nice to meet you on my profile!', likesCount: 11 },
				{ id: 3, message: 'It`s my first post!', likesCount: 35 },
			],
			newPostText: '',

		},
		dialogsPage: {
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
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'What you know about going down in the deep?' },
				{ id: 3, message: 'I feels like an austronaut in the ocean!' },
			],
			newMessageText: '',
		},
	},

	_callSubscriber() {
		console.log('Store changed');
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},



	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
};


export default store;
window.store = store;