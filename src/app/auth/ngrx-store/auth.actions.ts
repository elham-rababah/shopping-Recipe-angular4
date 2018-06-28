import { Action } from '@ngrx/store';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_TOKEN = 'SET_TOKEN';


export class SigninUser implements Action{
	readonly type = SIGNIN_USER;
	
	constructor() {}
}

export class SignupUser implements Action{
	readonly type = SIGNUP_USER;
	
	constructor() {}
}

export class LogoutUser implements Action{
	readonly type = LOGOUT_USER;
	
	constructor() {}
}

export class SetToken implements Action{
	readonly type = SET_TOKEN;
	
	constructor(public payload: string) {}
}

export type AuthActions = SigninUser | SignupUser | LogoutUser | SetToken;