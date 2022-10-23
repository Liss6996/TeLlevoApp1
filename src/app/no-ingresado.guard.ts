import { NavController } from '@ionic/angular'
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(
  public navController: NavController){}  //importamos la navegacion


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){   //si en el local storage esta el item ingresado retorna un false y podemos ingresar
        return false;
        this.navController.navigateRoot('conductor/:conductor');
      }else{
        return true;
      }
    
  }
  
}
