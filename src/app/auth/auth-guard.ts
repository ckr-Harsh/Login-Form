import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FireService } from '../service/fire.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: FireService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.service.isLoggedIn || this.service.GoogleAuth) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['auth'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
