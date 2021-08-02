import { authUser } from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';


let initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {

	switch (action.type) {
		case INITIALIZE_SUCCESS:
			return { ...state, initialized: true }
		default:
			return state;
	}

}

export let initializeSucces = () => ({ type: INITIALIZE_SUCCESS });

export let initializeApp = () => {
	return (dispatch) => {
		let promise = dispatch(authUser());

		Promise.all([promise])
			.then(
				() => {
					dispatch(initializeSucces());
				}
			)
	}
}



export default appReducer;