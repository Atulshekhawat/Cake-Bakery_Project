import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RouteService } from './route.service';

@Injectable ({
  providedIn:"root"
})


export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private routeService: RouteService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLoggedIn == false) {
      this.routeService.toLogin();
      return false;
    }
    else {
      return true;
    }
  }
}
  