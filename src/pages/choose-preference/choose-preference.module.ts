import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePreferencePage } from './choose-preference';

@NgModule({
  declarations: [
    ChoosePreferencePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePreferencePage),
  ],
})
export class ChoosePreferencePageModule {}
