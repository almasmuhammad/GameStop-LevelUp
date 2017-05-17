import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { UserContextService } from './shared/services/userContext/user-context.service';

@Injectable()
export class ProfileGuard implements CanActivate, CanActivateChild { // , CanLoad {
  constructor(private _userContextService: UserContextService, private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

    this._userContextService.initialUrlRequest = state.url;

    return (this._userContextService.profileModel != null);
  }

  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // canLoad(route: Route): boolean {
  //   return false;
  // }
}
