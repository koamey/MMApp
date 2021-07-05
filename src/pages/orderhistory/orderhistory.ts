import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Platform,IonicApp, AlertController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})
export class OrderhistoryPage {
  conmessage

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav,
    private util: UtilService,
    private translate: TranslateService,
    private apiService: APIService,
    private builder: FormBuilder,
    private push: PushService,
    public alertCtrl: AlertController,
    private storage: Storage,
    public platform: Platform,
    private ionicApp: IonicApp) {
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
  custid
  showData : Boolean;
  showData1 : Boolean;
  custToken
  orderno
  mealtype
  startdate
  enddate
  price
  Mysub1 = "htabdesign"
  Mysub2 = "white"
  guestordr1 = "white"
  guestordr2 = "gray"
  orderArray = [];
  ActiveSubcription: boolean = true
  ActiveGuestMeal: boolean = false
  ionViewDidLoad() {
    //console.log('ionViewDidLoad OrderhistoryPage');
  }
  ngOnInit() {
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.ActiveSubcription = true;
    this.orderhistory();
    this.ActiveGuestMeal = false;
  }
  orderhistory() {
    this.util.showLoader();
    this.apiService.orderhistory(this.custid, this.custToken).then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.orderArray = response.data;
        if(this.orderArray.length > 0)
        {
          for (var i = 0; i < this.orderArray.length; i++) {
            this.orderno = response.data.subscription_order_number;
            this.mealtype = response.data.meal_type;
            this.startdate = response.data.start_date;
            this.enddate = response.data.end_date;
            this.price = response.data.price;
            this.showData = false;
          }
        }
        else{
          this.showData = true;
        }
      }
      else {
        this.conmessage = response.message;
        this.showConfirmAlert();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert();
    });
  }

  Back() {
    if (this.ActiveGuestMeal == true) {
      this.ActiveSubcription = true;
      this.Mysub2='white';
      this.ActiveGuestMeal = false;
      if(this.showData==true)
      {
        this.showData = true;
      }
      else{
        this.showData = false;
      }
    }
    else {
      this.navCtrl.setRoot('MenuPage');
    }

  }
  guestMealArray

  onClickMySubcription() {
    this.guestordr1 = "white";
    this.guestordr2 = "gray";
    this.Mysub2 ="white";
    this.ActiveSubcription = true;
    this.ActiveGuestMeal = false;
    this.orderhistory();
    var y = document.getElementById('idscripts');
    if(y)
    {
       y.classList.remove("idscript");
    }
   
  }
  onClickGuestMeal() {
    this.Mysub2 = "gray";
    var history = '1';
    var y = document.getElementById('idscripts');
    if(y)
    {
      y.classList.add("idscript");
    }
    
    this.apiService.guestMealHistory(this.custToken, this.custid, history).then(res => {
      if(res)
      {
        this.guestMealArray = res['data'];
        console.log(this.guestMealArray.length);
        if (this.guestMealArray.length == '0') {
          this.showData1 = true;
        }
        else {
          this.showData1 = false;
        }
      }
      else{
        //this.conmessage = res.message;
        // this.showConfirmAlert();
      }     
    }).catch((res) => {
      this.conmessage = res.message;
      this.showConfirmAlert();
    });
    this.ActiveSubcription = false;
    this.ActiveGuestMeal = true;
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
          this.navCtrl.setRoot('OrderhistoryPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
