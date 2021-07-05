import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tracker } from './tracker';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Tracker
  ],
  imports: [
    IonicPageModule.forChild(Tracker),
    TranslateModule.forChild()
  ]
})
export class HomePageModule {}
