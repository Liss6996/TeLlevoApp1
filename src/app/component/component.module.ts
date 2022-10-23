import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [LoginComponent,FormularioRegistroComponent],
  imports: [
    CommonModule,
    IonicModule,

  ],
  exports: [LoginComponent,FormularioRegistroComponent],
})
export class ComponentModule { }
