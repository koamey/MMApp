import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsAndPrivacyPage } from './terms-and-privacy';

@NgModule({
  declarations: [
    TermsAndPrivacyPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsAndPrivacyPage),
  ],
})
export class TermsAndPrivacyPageModule {}
