import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, store: RouterStateSnapshot):boolean | Promise<boolean> | Observable<boolean> {
      let isLoggedIn = this.authService.isAuthenticated();
      if(isLoggedIn) {
        return true;
      } else {
        return false;
      }
  }
}
