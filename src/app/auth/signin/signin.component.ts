import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import * as  AuthActions from '../ngrx-store/auth.actions'
import * as fromApp  from '../../ngrx-store/app.redusers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private store : Store<fromApp.AppState>
    ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
  	let email = form.value.email;
  	let password = form.value.password;
    this.store.dispatch(new AuthActions.TrySigninUser({username:email, password: password})) ;

  	//this.authService.signinUser(email, password);
  }

}
