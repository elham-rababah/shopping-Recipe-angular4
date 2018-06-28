import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';
import * as formApp from '../ngrx-store/app.redusers';

@Injectable()
export class  AuthInteceptor implements HttpInterceptor {
	
	constructor(private store: Store<fromAuth.State>){}

	intercept(req: HttpRequest<any> , next: HttpHandler) {
		let tokenId;
		this.store.select('token').subscribe((token)=>{
			tokenId  = token
		});

		const copiedreq = req.clone({params: req.params.set('auth',tokenId)});
		return next.handle(copiedreq);
	}
}