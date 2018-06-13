import * as firebase from 'firebase';

export class AuthService {
	
	constructor() {
	}

	signupUser(email :string, password: string) {
		firebase.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response)=>{
			console.log(response);
		})
		.catch((error)=>{
			console.log(error);
		});
	}
}