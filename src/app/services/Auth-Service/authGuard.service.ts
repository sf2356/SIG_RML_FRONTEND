import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './authService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

constructor(private authService:AuthServiceService,private router:Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

  if (this.authService.isAuthenticated()) {
    return true;
  }
  else{
    this.router.navigate(["/login"]);
    return false;

  }

}

}
