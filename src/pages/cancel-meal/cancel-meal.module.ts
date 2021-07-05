import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelMealPage } from './cancel-meal';

@NgModule({
  declarations: [
    CancelMealPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelMealPage),
  ],
})
export class CancelMealPageModule {}
