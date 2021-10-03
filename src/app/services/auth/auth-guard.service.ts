import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private _as: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const loggedIn = this._as.isAuthenticated();
        if(loggedIn) {
            return true
        } else {
            this.router.navigate(['/'])
            return false;
        }
    }
}