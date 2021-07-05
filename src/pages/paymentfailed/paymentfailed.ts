import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,IonicApp,Platform } from 'ionic-angular';

/**
 * Generated class for the PaymentfailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentfailed',
  templateUrl: 'paymentfailed.html',
})
export class PaymentfailedPage {

  constructor(public navCtrl: NavController, 
    private ionicApp: IonicApp,
    public platform: Platform,
    public navParams: NavParams) {
      this.initializeBackButtonCustomHandler();
  }
  unregisterBackButtonAction;
    public initializeBackButtonCustomHandler(): void {
      this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
        this.customHandleBackButton();
      }, 10);
    }
    private customHandleBackButton(): void {
      const overlayView = this.ionicApp._overlayPortal._views[0];
      if (overlayView && overlayView.dismiss) {
        overlayView.dismiss();// it will close the modals, alerts
      } else {
        //this.Back();
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentfailedPage');
  }

  Dashboardclick()
  {
    if(localStorage.getItem('payemntfailedguest')=='1')
    {
      this.navCtrl.setRoot('DashboardCheckoutPage');
    }
    else{
      this.navCtrl.setRoot('CheckoutPage');
    }    
  }

}
