import { Action } from '@ngrx/store';

export const SIGNIN_USER = 'SIGNIN_USER' ;
export const SIGNUP_USER = 'SIGNUP_USER' ;

export class SigninUser implements Action{
	readonly type = SIGNIN_USER;
	
	constructor(public payload: {email: string, password: string}) {}
}

export class SignupUser implements Action{
	readonly type = SIGNUP_USER;
	
	constructor(public payload: {email: string, password: string}) {}
}

export type AuthActions = SigninUser | SignupUser;