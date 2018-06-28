import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';
import * as AuthAction from '../auth/ngrx-store/auth.actions';

@Injectable()

export class AuthService {
	constructor(private router: Router, private store: Store<fromAuth.State>) {
	}

	signupUser(email :string, password: string) {
		firebase.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response)=>{
			this.store.dispatch(new AuthAction.SignupUser());
			this.router.navigate(['/recipes']);
			firebase.auth().currentUser.getIdToken()
			.then((tokenId:string)=>{
				this.store.dispatch(new AuthAction.SetToken(tokenId));

			})
		})
		.catch((error)=>{
			console.log(error);
		});
	}

	signinUser(email :string, password: string) {
		firebase.auth()
		.signInWithEmailAndPassword(email, password)
		.then((response)=>{
			this.store.dispatch(new AuthAction.SigninUser());
			this.router.navigate(['/recipes']);
			firebase.auth().currentUser.getIdToken()
			.then((tokenId:string)=>{
				this.store.dispatch(new AuthAction.SetToken(tokenId));
			})

			
		})
		.catch((error)=>{
			console.log(error);
		});
	}


	destroyToken(){
		this.store.dispatch(new AuthAction.LogoutUser());
	}
}