import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { LatoolbarComponent } from './latoolbar/latoolbar.component';



@NgModule({
  declarations: [FooterComponent, LatoolbarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [FooterComponent, LatoolbarComponent]
})
export class BaseModule { }
