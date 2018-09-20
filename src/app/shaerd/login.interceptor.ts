import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoginInteceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(tap(event => {
      console.log(event);
    }));
  }
}
