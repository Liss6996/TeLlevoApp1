import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioRegistroPageRoutingModule } from './formulario-registro-routing.module';

import { FormularioRegistroPage } from './formulario-registro.page';
import { FormularioRegistroComponent } from 'src/app/component/formulario-registro/formulario-registro.component';
import { BaseModule } from 'src/app/component/base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioRegistroPageRoutingModule,
    BaseModule
  ],
  declarations: [FormularioRegistroPage,FormularioRegistroComponent]
})
export class FormularioRegistroPageModule {}
