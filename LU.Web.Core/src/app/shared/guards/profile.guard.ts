import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserContextService } from '../services/userContext';

@Injectable()
export class ProfileGuard implements CanActivate, CanActivateChild {
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
}
