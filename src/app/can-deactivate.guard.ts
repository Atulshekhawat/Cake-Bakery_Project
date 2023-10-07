import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class CanDeactivateGuard implements CanDeactivate<HomeComponent>{
  canDeactivate(component: HomeComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    alert("You can't leave the lage");
    return false;
  }

}