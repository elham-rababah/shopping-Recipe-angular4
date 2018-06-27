import * as AuthAction from './auth.actions';

export interface State {
	intiToken: string,
	authenticated: boolean,
}

const initState: State = {	
	intiToken: null,
	authenticated: false,
};

export function authReducers(state = initState , action: AuthAction.AuthActions) {
	console.log(action.type);
	switch (action.type) {
		case AuthAction.SIGNIN_USER:
			console.log('AuthAction.SIGNIN_USER', action.payload);
			return ;
		case AuthAction.SIGNUP_USER:
			console.log('AuthAction.SIGNUP_USER', action.payload);
			return ;
		default:
			console.log('default');
			return ;
	}
	return state;
}