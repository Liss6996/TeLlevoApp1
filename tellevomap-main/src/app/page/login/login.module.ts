import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginComponent } from 'src/app/component/login/login.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { BaseModule } from 'src/app/component/base.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    BaseModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [LoginPage,LoginComponent,],
})
export class LoginPageModule {}
