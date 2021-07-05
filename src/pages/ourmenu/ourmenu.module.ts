import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurmenuPage } from './ourmenu';

@NgModule({
  declarations: [
    OurmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(OurmenuPage),
  ],
})
export class OurmenuPageModule {}
