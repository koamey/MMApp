import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferenceEditPage } from './preference-edit';

@NgModule({
  declarations: [
    PreferenceEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferenceEditPage),
  ],
})
export class PreferenceEditPageModule {}
