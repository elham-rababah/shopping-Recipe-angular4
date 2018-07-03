import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp  from '../../ngrx-store/app.redusers';
import * as AuthAction from '../ngrx-store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
  	let email = form.value.email;
  	let password = form.value.password;
    this.store.dispatch(new AuthAction.TrySignupUser({username:email, password: password})) ;
  }

}
