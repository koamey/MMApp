import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,IonicApp,Platform } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MealhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mealhistory',
  templateUrl: 'mealhistory.html',
})
export class MealhistoryPage {
  custid
  custToken
  orderArray=[]
  conmessage
  showData
  customer_subscription_id
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private util: UtilService,
    private push: PushService,
    private storage: Storage,
    public platform: Platform,
    private ionicApp: IonicApp,
    public alertCtrl: AlertController,
    private apiService: APIService) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealhistoryPage');
  }
  ngOnInit() {
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    
    this.apiService.mealhistory_check(this.custid, this.custToken,this.customer_subscription_id).then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.orderArray = response.data;
        console.log('innnnn');
        console.log(this.orderArray);
        if(this.orderArray.length==1 )
        {
          this.orderArray['gueststatusdinner'];
          this.orderArray['gueststatuslunch'];
          this.orderArray['statusdinner'];
          this.orderArray['statuslunch'];
          if(this.orderArray[0].guestcountdinner=='' && this.orderArray[0].guestcountlunch=='' && this.orderArray[0].meal_typedinner=='' && this.orderArray[0].meal_typelunch=='')
          {
            console.log('innnnn');
            this.showData = true;
          }
          else{
            this.showData = false;
          }
         
        }
        else if(this.orderArray.length==0)
        {
          this.showData = true;
        }
        else{
          this.showData = false;
        }
      }
      else{
        this.showData = true;
        this.conmessage = response.message;
			  //this.showConfirmAlert();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
    });
  }

  Back(){
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
				this.navCtrl.setRoot('MenuPage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
  	}

}
