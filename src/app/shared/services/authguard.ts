import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
  constructor(private _router:Router ) {      
  }      

 
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
      console.log("canActivate");      //return true    
     //remove comments to return true              
     if(localStorage.getItem("user") == null){
        this._router.navigate(["login"]);             
        return false;     
     }
     else{
        return true;
     }
     
} }