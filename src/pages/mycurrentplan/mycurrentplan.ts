import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,IonicApp,Platform } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MycurrentplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycurrentplan',
  templateUrl: 'mycurrentplan.html',
})
export class MycurrentplanPage {
  preferenceProducts
  preferenceProductsDinner
  preferenceProductstime
  preferenceProductsDinnertime
  custid
  custToken
  customer_subscription_id
  mealType
  conmessage
  lunchmeal_img = "assets/choosePreference/lunch_ic.svg"
  dinnermeal_img = "assets/choosePreference/dinner_ic.svg"
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private util: UtilService,
    private push: PushService,
    private ionicApp: IonicApp,
    public platform: Platform,
    private storage: Storage,
    private apiService: APIService
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
      this.Back();
    }
  }


  ngOnInit() {
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    this.apiService.getcurrentpaln(this.custid, this.custToken,this.customer_subscription_id).then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.preferenceProducts = response.product;
        this.preferenceProductsDinner=response.dinnerproduct;   
        this.preferenceProductstime=response.deliverytiming;   
        this.preferenceProductsDinnertime=response.dinnerdeliverytiming;   
        this.mealType = localStorage.getItem('mealType');
      }
      else{
        this.conmessage = response.message;
			  this.showConfirmAlert();
      }
    }).catch(response => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycurrentplanPage');
  }
  Back()
  {
    this.navCtrl.setRoot('MenuPage');
  }
  async showConfirmAlert() {
		let alertConfirm = this.alertCtrl.create({
		  //header: 'Download Successfully',
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "Try again",
			  handler: () => {
				this.navCtrl.setRoot('MycurrentplanPage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
  	}

}
