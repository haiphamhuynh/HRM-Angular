import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import  decode  from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token: any = localStorage.getItem('token');

    const tokenPayload: any = decode(token);
    if (tokenPayload.roles !== expectedRole) {
      alert('For ADMIN permissions only!');
      return false;
    }
    return true;
  }
}
