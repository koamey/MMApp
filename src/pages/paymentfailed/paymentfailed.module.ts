import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentfailedPage } from './paymentfailed';

@NgModule({
  declarations: [
    PaymentfailedPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentfailedPage),
  ],
})
export class PaymentfailedPageModule {}
