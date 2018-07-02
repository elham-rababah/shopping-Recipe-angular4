import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as AuthAction from './auth.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';


@Injectable()

export class AuthEffects {
	@Effect()


	authSignup = this.actions$.
	ofType(AuthAction.TRY_SIGNUP_USER)
	.map((action: AuthAction.TrySignupUser)=>{
		console.log('map payload');
		return action.payload;
	})
	.switchMap((authdata: {username:string, password: string})=> {
		return fromPromise(firebase.auth()
			.createUserWithEmailAndPassword(authdata.username, authdata.password)
			);
	})
	.switchMap(()=>{
		return fromPromise(firebase.auth().currentUser.getIdToken());
	})
	.mergeMap((token: string)=> { // mergeMap merge to observable
		return [
			{
				type: AuthAction.SignupUser
			},
			{
				type: AuthAction.SetToken,
				payload: token
			}
		];
	});

	constructor(private actions$: Actions){
		console.log('AuthEffects constructor');
	}
}

