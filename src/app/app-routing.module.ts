import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [



  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule),

  },

    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard] //luego de crear las guards agregar canActivate segun corresponda
  },
  {
    path: 'formulario-registro',
    loadChildren: () => import('./page/formulario-registro/formulario-registro.module').then( m => m.FormularioRegistroPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'pasajero/:pasajero',
    loadChildren: () => import('./page/pasajero/pasajero.module').then( m => m.PasajeroPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'conductor/:conductor',
    loadChildren: () => import('./page/conductor/conductor.module').then( m => m.ConductorPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('./page/recuperar-contrasenia/recuperar-contrasenia.module').then( m => m.RecuperarContraseniaPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./page/error/error.module').then( m => m.ErrorPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
