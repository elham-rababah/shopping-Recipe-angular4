import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core'


@Injectable()

export class AuthService {
	tokenId:string;

	constructor(private router: Router) {
	}

	signupUser(email :string, password: string) {
		firebase.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response)=>{
			this.router.navigate(['/recipes']);
			firebase.auth().currentUser.getIdToken()
			.then((tokenId:string)=>{
				this.tokenId = tokenId;
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
			this.router.navigate(['/recipes']);
			firebase.auth().currentUser.getIdToken()
			.then((tokenId:string)=>{
				this.tokenId = tokenId;
			})

			
		})
		.catch((error)=>{
			console.log(error);
		});
	}
	
	getIdToken() {
		firebase.auth().currentUser.getIdToken()
		.then((tokenId:string)=>{
			this.tokenId = tokenId;
		})
		return this.tokenId;
	}

	isAuthenticated() {
		return this.tokenId != null;
	}

	destroyToken(){
		this.tokenId = null;
	}
}