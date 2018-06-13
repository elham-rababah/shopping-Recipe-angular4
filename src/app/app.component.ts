import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit() {
		/*
			config firebase
		*/
		firebase.initializeApp({
			apiKey: "AIzaSyCSMjGAzCg3UJ74kbY1GpWrqzRtpiXnmTI",
    		authDomain: "shoppingandrecipe.firebaseapp.com"
		})
	}
}
