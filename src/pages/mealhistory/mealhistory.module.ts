import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealhistoryPage } from './mealhistory';

@NgModule({
  declarations: [
    MealhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MealhistoryPage),
  ],
})
export class MealhistoryPageModule {}
