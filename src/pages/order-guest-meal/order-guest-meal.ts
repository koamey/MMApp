import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, IonicApp, AlertController} from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the OrderGuestMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-guest-meal',
  templateUrl: 'order-guest-meal.html',
})
export class OrderGuestMealPage {
  maxDate: string;
  mealType1: string;
  enddate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    private util: UtilService,
    private translate: TranslateService,
    public platform: Platform,
    public alertCtrl: AlertController,
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
      this.Back();
    }
  }
  // today = new Date();
  // minDate: string = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
  today =localStorage.getItem('guestmealdate');
  today1: string = this.today;
  minDate1: string = this.today1.toString();
  minDate2: string
  today2: string
  mealTypeArr
  mynum1 = 0
  innerstring: boolean
  mynum2 = 0;
  mealType
  selecteddate
  submitButton = ' rgb(216, 216, 216)';
  date = ''
  tokendata
  customer_id
  lunchmealtype
  Dinnermealtype
  conmessage

  ngOnInit() {
   this.firstload();
  }
  firstload(){
    this.innerstring = true;
    this.enddate = localStorage.getItem('endDate');
    this.minDate2 = this.enddate.toString();
    this.mealType1 = localStorage.getItem('mealType');
    this.tokendata = localStorage.getItem('token');
    if (localStorage.getItem('mynum1') != null) {
      var mynum15 = parseInt(localStorage.getItem('mynum1'))
      this.mynum1 = mynum15
    }
    if (localStorage.getItem('mynum2') != null) {
      var mynum15 = parseInt(localStorage.getItem('mynum2'))
      this.mynum2 = mynum15
    }
    if (localStorage.getItem('date') != null) {
      this.submitButton = "rgb(242, 155, 17)";
      this.selecteddate = localStorage.getItem('date');
      this.date = this.selecteddate;
    }
    this.apiService.showGuestMeal(this.tokendata).then((res) => {
      this.util.hideLoader();
      if (res['success']) {
        this.mealTypeArr = res['data'];
        for (var i = 0; i < this.mealTypeArr.length; i++) {
          if ('Lunch' == this.mealTypeArr[i].meal) {
            this.lunchmealtype = this.mealTypeArr[i].meal
          }
          if ('Dinner' == this.mealTypeArr[i].meal) {
            this.Dinnermealtype = this.mealTypeArr[i].meal
          }
        }
      }
      else{
        this.conmessage = res['message'];
			  this.showConfirmAlert();
      }
    }).catch((res) => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
    });
  }
  ionViewDidLoad() {
  }


  onclickPlus1() {
    this.mynum1 += 1;
  }
  onclickMinus1() {
    this.mynum1 -= 1;
  }

  onclickPlus2() {
    this.mynum2 += 1;
  }

  onclickMinus2() {
    this.mynum2 -= 1;
  }


  onClickMeal(type) {
    this.mealType = type
  }
  onClickZero() {
    this.innerstring = true;
  }
  onClickZerokey(mynum1) {
    this.mynum1 = mynum1;
  }
  onClickZerokey2(mynum2) {
    this.mynum2 = mynum2;
  }
  selectdate() {
    this.submitButton = "rgb(242, 155, 17)";
    this.date = this.selecteddate;
    // localStorage.removeItem('date');
    // localStorage.setItem('date', this.date);
  }
  Back() {
    let backDrop: any = document.getElementsByTagName('ion-picker-cmp');
    if (backDrop.length > 0) {
      for (let i = 0; i < backDrop.length; i++) {
        backDrop[i].style.display = 'none';
      }
    }
    localStorage.removeItem('mynum1');
    localStorage.removeItem('mynum2');
    localStorage.removeItem('date');
    this.mynum2 = 0
    this.mynum1 = 0
    this.navCtrl.setRoot('DashboardPage');
  }
  onSubmit() {
    localStorage.removeItem('mynum1');
    localStorage.removeItem('mynum2');
    localStorage.removeItem('date');
    localStorage.setItem('date', this.date);

    localStorage.setItem('mynum1', this.mynum1.toString());
    this.mynum1 = parseInt(localStorage.getItem('mynum1'));
    localStorage.setItem('mynum2', this.mynum2.toString());
    this.mynum2 = parseInt(localStorage.getItem('mynum2'));
    if (this.date == '') {
      // if(localStorage.getItem('date')!=null)
      this.util.alert(this.translate.instant('Please Select Date'), '');
      return;
    }
    if (this.mealType1 == "Both") {
      if (this.mynum1 == 0 && this.mynum2==0) {
        this.util.alert(this.translate.instant('Please choose Lunch or Dinner Quantity'), '');
        return;
      }
    }
    if (this.mealType1 == "Lunch") {
      if (this.mynum1 == 0 || this.mynum2 == null) {
        this.util.alert(this.translate.instant('Please choose Lunch Quantity'), '');
        return;
      }
    }
    if (this.mealType1 == "Dinner") {
      if (this.mynum2 == 0 || this.mynum2 == null) {
        this.util.alert(this.translate.instant('Please choose Dinner Quantity'), '');
        return;
      }
    }
      this.customer_id = localStorage.getItem('id');
      this.util.showLoader();
      this.apiService.guestmeal(this.tokendata, this.customer_id, this.mynum1.toString(), this.mynum2.toString(), this.lunchmealtype, this.Dinnermealtype, this.date).then((res) => {
        this.util.hideLoader();
        if (res['success']) {
        this.navCtrl.setRoot('DashboardCheckoutPage');
        }
        else{
          this.conmessage = res['message'];
			    this.showConfirmAlert();
        }
      }).catch((res) => {
        this.conmessage = "Something's wrong, let's try again?";
			  this.showConfirmAlert();
      });
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
				this.navCtrl.setRoot('OrderGuestMealPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
