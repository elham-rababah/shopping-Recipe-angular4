import * as firebase from 'firebase';

export class AuthService {
	tokenId:string;

	constructor() {
	}

	signupUser(email :string, password: string) {
		firebase.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response)=>{
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
			console.log(response);
			firebase.auth().currentUser.getIdToken()
			.then((tokenId:string)=>{
				console.log(tokenId);
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