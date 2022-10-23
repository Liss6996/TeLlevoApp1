import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then(m => m.InicioPageModule)

  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule),

  },
  {
    path: 'formulario-registro',
    loadChildren: () => import('./page/formulario-registro/formulario-registro.module').then(m => m.FormularioRegistroPageModule),
  },
  {
    path: 'pasajero/:pasajero',
    loadChildren: () => import('./page/pasajero/pasajero.module').then(m => m.PasajeroPageModule)
  },
  {
    path: 'conductor/:conductor',
    loadChildren: () => import('./page/conductor/conductor.module').then(m => m.ConductorPageModule)
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('./page/recuperar-contrasenia/recuperar-contrasenia.module').then(m => m.RecuperarContraseniaPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page/error/error.module').then(m => m.ErrorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
