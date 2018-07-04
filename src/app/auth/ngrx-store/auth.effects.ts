import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as AuthAction from './auth.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Router } from '@angular/router';


@Injectable()

export class AuthEffects {
	
	@Effect()

	authSignup = this.actions$.
	ofType(AuthAction.TRY_SIGNUP_USER)
	.map((action: AuthAction.TrySignupUser)=>{
		return action.payload;
	})
	.switchMap((authData: {username:string, password: string})=> {
		return fromPromise(firebase.auth()
			.createUserWithEmailAndPassword(authData.username, authData.password)
			);
	})
	.switchMap(()=>{
		this.router.navigate(['/recipes']);
		return fromPromise(firebase.auth().currentUser.getIdToken());
	})
	.mergeMap((token: string)=> { // mergeMap merge to observable
		return [
			new AuthAction.SetToken(token),
			new AuthAction.SignupUser()
		];
	});


	@Effect()
	authSignin = this.actions$.
	ofType(AuthAction.TRY_SIGNIN_USER).
	map((action: AuthAction.TrySigninUser)=>{
		return action.payload;
	})
	.switchMap((authData: {username:string, password: string})=>{
		return fromPromise (firebase.auth()
			.signInWithEmailAndPassword(authData.username,authData.password))

	}).switchMap(()=>{
		this.router.navigate(['/recipes']);
		return fromPromise(firebase.auth().currentUser.getIdToken());
	})
	.mergeMap((token: string)=> { // mergeMap merge to observable
		return [
			new AuthAction.SetToken(token),
			new AuthAction.SigninUser()
		];
	});

	@Effect({dispatch: false})
	authLogout = this.actions$
	.ofType(AuthAction.LOGOUT_USER)
	.do(()=>{
		this.router.navigate(['/']);
	})


	constructor(private actions$: Actions, private router: Router){
	}
}

