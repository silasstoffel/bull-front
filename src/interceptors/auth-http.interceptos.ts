import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private session: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const session = this.session.active();
    if (!session) {
      return next.handle(req);
    }

    const token =  `Bearer ${session.token}`;

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    return next.handle(authReq);
  }
}
