import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionFireService } from './autenticacion-fire.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticGuardService implements CanActivate {

  private auth: AutenticacionFireService;
  private router: Router;

  constructor(
    auth: AutenticacionFireService,
    router: Router
    ){
      this.auth = auth;
      this.router = router;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoged){
        return true;
      }
      else{
        console.log("Acceso denegado!");
        this.router.navigate(['/login']);
        return false;
      }
  }
}
