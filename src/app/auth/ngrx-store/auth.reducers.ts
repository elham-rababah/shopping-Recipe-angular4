import * as AuthAction from './auth.actions';

const intiToken = null;

export function authReducers(state , action: AuthAction.AuthActions) {
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