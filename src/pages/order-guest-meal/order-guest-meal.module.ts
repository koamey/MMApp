import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderGuestMealPage } from './order-guest-meal';

@NgModule({
  declarations: [
    OrderGuestMealPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderGuestMealPage),
  ],
})
export class OrderGuestMealPageModule {}
