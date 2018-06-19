import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class  AuthInteceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any> , next: HttpHandler) {
		console.log(req,next)
		return next.handle(req);
	}
}