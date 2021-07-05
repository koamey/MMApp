import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardCheckoutPage } from './dashboard-checkout';

@NgModule({
  declarations: [
    DashboardCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardCheckoutPage),
  ],
})

export class DashboardCheckoutPageModule {}
