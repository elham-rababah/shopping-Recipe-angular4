import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class  AuthInteceptor implements HttpInterceptor {
	constructor(private authService: AuthService){

	}
	
	intercept(req: HttpRequest<any> , next: HttpHandler) {
		console.log(req,next)
		const copiedreq = req.clone({params: req.params.set('auth',this.authService.getIdToken())});
		return next.handle(copiedreq);
	}
}