import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';
import * as formApp from '../ngrx-store/app.redusers';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInteceptor implements HttpInterceptor {

  constructor(private store: Store<formApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.store.select('auth')
      // .take(1)// its mean only take it once
      .pipe(switchMap((authState: fromAuth.State) => {

        const tokenId = authState.token;
        const copiedreq = req.clone({ params: req.params.set('auth', tokenId) });
        return next.handle(copiedreq);
      }));
  }
}
