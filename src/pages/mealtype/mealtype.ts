import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController,IonicApp, AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';

/**
 * Generated class for the MealtypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mealtype',
  templateUrl: 'mealtype.html',
})
export class MealtypePage {
  mealType = [];
  mealTypeArr = [];
  tokendata;
  customer_id;
  mealData; mealTypeArr1: any;
  meal
  mealId: string;
  mealtypeis
  conmessage
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    public platform: Platform,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private ionicApp: IonicApp
  ) {
    this.mealtypeis = navParams.get('mealtypeis');
    this.mealId = navParams.get('mealId');
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
    localStorage.setItem('renewis_id','1');
    this.tokendata = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.onLoadMealType();
    if (localStorage.getItem('mealId') != null) {
      this.navCtrl.setRoot('ChoosePreferencePage');
    }
  }

  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    if (this.mealId) {
      var x = document.getElementById('meal_' + this.mealId);
      if (x) {
        x.style.backgroundColor = 'rgba(29, 176, 104, 0.8)';
        x.style.color = '#fff';
      }
    }
  }
  ngAfterViewInit() {
  }
  onLoadMealType() {
    localStorage.setItem('renewis_id','1');
    this.apiService.showMealType().then((res) => {
      if (res.success) {
        this.mealTypeArr = res['data'];
      }
      else{
        this.conmessage = res.message;
			  this.showConfirmAlert();
      }
     
    }).catch((res) => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
    });

  }
  lunch1
  lunch2
  dinner1
  dinner2
  onClickMealType(type) {
    for (let i = 0; i < this.mealTypeArr.length; i++) {
      if (type == this.mealTypeArr[i]['meal']) {
        localStorage.removeItem('LMealTime1');
        localStorage.removeItem('LMealTime2');
        localStorage.removeItem('DMealTime1');
        localStorage.removeItem('DMealTime2');
        localStorage.removeItem('mealcount');
        localStorage.removeItem('mealdays');
        localStorage.setItem('price', this.mealTypeArr[i]['price']);
        localStorage.setItem('mealId', this.mealTypeArr[i]['mealId']);
        localStorage.setItem('cancel_count', this.mealTypeArr[i]['cancel_count']);
        var mealId = localStorage.getItem('mealId');
        localStorage.setItem('mealType', this.mealTypeArr[i]['meal'])
        localStorage.setItem('LMealTime1', this.mealTypeArr[0]['mealTiming1']);
        localStorage.setItem('DMealTime1', this.mealTypeArr[1]['mealTiming1']);
        localStorage.setItem('DMealTime2', this.mealTypeArr[1]['mealTiming2']);
        localStorage.setItem('LMealTime2', this.mealTypeArr[0]['mealTiming2']);
        localStorage.setItem('mealdays', this.mealTypeArr[i]['subscription_period'])
        localStorage.setItem('mealcount', this.mealTypeArr[i]['number_of_meals'])
        if (this.mealTypeArr[i]['BothTiming']) {
          localStorage.removeItem('LMealTime1');
          localStorage.removeItem('LMealTime2');
          localStorage.removeItem('DMealTime1');
          localStorage.removeItem('DMealTime2');
          this.lunch1 = this.mealTypeArr[i]['BothTiming'][0]['mealTiming1']
          this.lunch2 = this.mealTypeArr[i]['BothTiming'][0]['mealTiming2']
          this.dinner1 = this.mealTypeArr[i]['BothTiming'][1]['mealTiming1']
          this.dinner2 = this.mealTypeArr[i]['BothTiming'][1]['mealTiming2']
          localStorage.setItem('LMealTime1', this.lunch1)
          localStorage.setItem('LMealTime2', this.lunch2)
          localStorage.setItem('DMealTime1', this.dinner1)
          localStorage.setItem('DMealTime2', this.dinner2)
          localStorage.setItem('mealdays', this.mealTypeArr[i]['subscription_period'])
          localStorage.setItem('mealcount', this.mealTypeArr[i]['number_of_meals'])
        }
        this.mealData = this.mealTypeArr[i];
        if (localStorage.getItem('mealType') == this.mealtypeis) {
          this.navCtrl.setRoot('CheckoutPage');
          return;
        }
        localStorage.removeItem('selectprefrence');
        localStorage.removeItem('lunchComplete');
        this.navCtrl.setRoot('ChoosePreferencePage');
        return this.mealData;
      }
    }
  }
  Back() {
    if (localStorage.getItem('renewis') == '1') {
      this.navCtrl.setRoot('RenewsubscriptionPage')
    }
    else {
      var sub_id = localStorage.getItem('subscription_id')
      localStorage.removeItem('subscription_id');
      this.navCtrl.setRoot('ChooseplanPage', {
        subscription_id: sub_id
      });
    }
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
				this.navCtrl.setRoot('MealtypePage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
