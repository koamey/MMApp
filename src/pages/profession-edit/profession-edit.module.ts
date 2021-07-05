import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessionEditPage } from './profession-edit';

@NgModule({
  declarations: [
    ProfessionEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessionEditPage),
  ],
})
export class ProfessionEditPageModule {}
