import * as AuthAction from './auth.actions';

export interface State {
	token: string,
	authenticated: boolean,
}

const initState: State = {	
	token: null,
	authenticated: false,
};

export function authReducers(state = initState , action: AuthAction.AuthActions) {
	console.log(action.type);
	switch (action.type) {
		case AuthAction.SIGNIN_USER:
			console.log('AuthAction.SIGNIN_USER');
			return {
				...state,
				authenticated: true
			};
		case AuthAction.SIGNUP_USER:
			console.log('AuthAction.SIGNUP_USER');
			return {
				...state,
				authenticated: true
			};

		case AuthAction.LOGOUT_USER:
			console.log('AuthAction.LOGOUT_USER');
			return {
				...state,
				authenticated: false,
			};
			
		case AuthAction.SET_TOKEN:
			console.log('AuthAction.SET_TOKEN');
			return {
				...state,
				token: action.payload,
			};

		default:
			return state;
	}
}