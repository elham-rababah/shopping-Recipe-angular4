import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class LoginInteceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		// to manipulate response
		return next.handle(req).do(event=>{
			console.log("event", event);
		})
	}
}