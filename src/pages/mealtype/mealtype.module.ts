import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealtypePage } from './mealtype';

@NgModule({
  declarations: [
    MealtypePage,
  ],
  imports: [
    IonicPageModule.forChild(MealtypePage),
  ],
})
export class MealtypePageModule {}
