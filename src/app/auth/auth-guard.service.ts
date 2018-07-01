import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromAuth from './ngrx-store/auth.reducers';
import * as formApp from '../ngrx-store/app.redusers';

@Injectable()

export class AuthGuard implements CanActivate {
	
	constructor(
		private store: Store<formApp.AppState>) {
	}

	canActivate(route: ActivatedRouteSnapshot ,state:RouterStateSnapshot){
		return this.store.select('auth').map((authState: fromAuth.State)=>{
			return authState.authenticated;
		})
	}
}