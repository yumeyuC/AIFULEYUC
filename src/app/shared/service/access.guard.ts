import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivateChild {
  constructor(private route: Router) {}
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
