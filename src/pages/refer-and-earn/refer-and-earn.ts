import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController,IonicApp,Platform } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';
import { UtilService } from '../../services/util_service';


/**
 * Generated class for the ReferAndEarnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refer-and-earn',
  templateUrl: 'refer-and-earn.html',
})
export class ReferAndEarnPage {
  model: any;
  referrerCode: string;
  sharecontent:any;
  trial_subscriptionTabCheck
  conmessage

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    private util: UtilService,
    public atrCtrl: AlertController,
    public platform: Platform,
    private ionicApp: IonicApp
  ) {
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
      this.backButton();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferAndEarnPage');
    this.referrerCode = localStorage.getItem('referalcode');
    console.log('referalcode', this.referrerCode)
    if (localStorage.getItem('subscription_id') == "1") {
      //this.util.alert('This feature will be inactive for demo plan', '');
      this.conmessage = 'This feature will be inactive for demo plan.';
      this.showConfirmAlert();
    }
    else {
      this.trial_subscriptionTabCheck = localStorage.getItem('referandearn');
      if (this.trial_subscriptionTabCheck == 'false') {
        this.conmessage = 'This feature will be active once you have subscription.';
        this.showConfirmAlert();
      }
    }
  }
  
  onClickShareCode() {
    console.log('inside onClickShareCode function');
    this.sharecontent = "MummyMeals delivers home-cooked food to you everyday! You can refer a friend and get free meals too. My referral code: "+this.referrerCode;
    this.socialSharing.share(this.sharecontent, null, null, null);
    
  }
  backButton() {
    this.navCtrl.setRoot('MenuPage')
  }

  async showConfirmAlert() {
    let alertConfirm = this.atrCtrl.create({
      //header: 'Download Successfully',
      enableBackdropDismiss: false,
      message: this.conmessage,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('MenuPage');
          }
          
        }
      ]
    });
    (await alertConfirm).present();
  }

}
