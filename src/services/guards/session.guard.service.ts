import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';

@Injectable({ providedIn: 'root' })
export class SessionGuardService implements CanActivate {

  constructor(private session: SessionService, private router: Router) { }

  canActivate(): Observable<boolean>  {

    const session = this.session.active();

    if (session && session.authorized) {
      return new Observable<boolean>(observer => {
        observer.next(true);
      })
    }

    this.setUnauthorized();

    return new Observable<boolean>(observer => {
      observer.next(false);
    });
  }

  async setUnauthorized() {
    this.session.destroy();
    await this.router.navigate(['login']);
  }

}
