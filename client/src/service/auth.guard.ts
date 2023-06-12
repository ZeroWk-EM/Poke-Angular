import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /*  Controllare se nell'URL stiamo andando nelle
    route protette (ESCLUSE LOGIN, REGISTER,VALIDATE) */
    const isProtectedRoute: boolean = !route.url.some(({ path }) => {
      return ['login', 'register', 'validate'].includes(path);
    });

    // ED ESEMPIO QUANDO SIAMO SU POKEDEX O FAVORITE PERCHè ESCLUDIAMO QUELLE SOPRA
    if (isProtectedRoute) {
      if (localStorage.getItem('token')) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
      // SE SIAMO NELLE ROUTE (LOGIN/REGISTER/VALIDATE)
    } else {
      if (localStorage.getItem('token')) {
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
    }
  }
}
