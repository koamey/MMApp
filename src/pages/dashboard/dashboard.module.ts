import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    RoundProgressModule
  ],
})
export class DashboardPageModule {}
