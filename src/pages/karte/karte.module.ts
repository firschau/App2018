import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { KartePage } from './karte';

@NgModule({
  declarations: [
    KartePage,
  ],
  imports: [
    IonicPageModule.forChild(KartePage),
  ],
})
export class KartePageModule {}
