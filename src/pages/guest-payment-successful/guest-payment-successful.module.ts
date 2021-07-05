import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestPaymentSuccessfulPage } from './guest-payment-successful';

@NgModule({
  declarations: [
    GuestPaymentSuccessfulPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestPaymentSuccessfulPage),
  ],
})
export class GuestPaymentSuccessfulPageModule {}
