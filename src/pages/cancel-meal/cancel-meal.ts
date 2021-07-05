import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, IonicApp,AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment';

/**
 * Generated class for the CancelMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancel-meal',
  templateUrl: 'cancel-meal.html',
})
export class CancelMealPage {
  submitButton = ' rgb(216, 216, 216)';
  submitButtoncolor
  fromDate = ''
  toDate = ''
  selecteddate1 = ''
  setdate
  enddate
  datedifference
  selecteddate2 = ''
  conmessage
  today = localStorage.getItem('guestmealdate');//new Date();
  today1: string = this.today;
  minDate1: string = this.today1.toString();
  minDate2: string
  today2: string

  tokendata: string;
  customer_id: string;
  customer_subscription_id: string;
  meal_type: any;
  countMeal
  mealType
  maxDate: any;
  countMeal1 = [];
  dateempty = ''
  lunch_settime = ''
  dinner_settime = ''
  subscriptionenddate
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    private util: UtilService,
    private translate: TranslateService,
    public platform: Platform,
    public atrCtrl: AlertController,
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
  ngOnInit() {
    this.countMeal = localStorage.getItem('cancelcount');
    this.mealType = localStorage.getItem('mealType');
    this.tokendata = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    this.setdate = localStorage.getItem('setdate');
    this.enddate = localStorage.getItem('endDate');
    this.minDate2 = this.enddate.toString();
    this.apiService.showCountMeal(this.tokendata, this.customer_id, this.customer_subscription_id).then((res) => {
      if(res)
      {
        this.countMeal1 = res['data'];
      }
      else{

      }
    }).catch((e) => {
    });
  }
  ionViewDidLoad() {

  }
  Back() {
    this.navCtrl.setRoot('DashboardPage');
  }
  rdDefaultLunch
  rdDefaultDinner
  newmealtype
  newmealtype1
  radioGroupChange(e) {
    this.submitButton = "rgb(242, 155, 17)";
    this.submitButtoncolor = "#fff";

    this.meal_type = e;
    if (this.meal_type == 'Lunch') {
      if (this.rdDefaultLunch) {
        this.rdDefaultLunch = false;
        localStorage.setItem('Lunchsettime', '');
        this.newmealtype = ''
      } else {
        this.rdDefaultLunch = true;
        localStorage.setItem('Lunchsettime', this.meal_type);
        if (this.meal_type == 'Lunch') {
          this.newmealtype = "lunch"
        }
        for (var i = 0; i < this.countMeal1.length; i++) {
          if (this.selecteddate1 != this.selecteddate2) {
            if ((this.selecteddate1 <= this.countMeal1[i]['meal_date']) && (this.selecteddate2 >= this.countMeal1[i]['meal_date']) && (this.newmealtype == this.countMeal1[i]['meal_type'])) {
              this.selecteddate1 = ''
              this.fromDate = ''
              this.util.alert(this.translate.instant('Already cancelled between the selected date meal'), '');
              this.rdDefaultLunch = false;
              localStorage.setItem('Lunchsettime', '');
              this.selecteddate1 = ''
              this.fromDate = ''
              this.navCtrl.setRoot('CancelMealPage');
              return;
            }
          }

          if ((this.selecteddate1 == this.countMeal1[i]['meal_date']) && (this.newmealtype == this.countMeal1[i]['meal_type'])) {
            this.selecteddate1 = ''
            this.fromDate = ''
            this.util.alert(this.translate.instant('Already cancelled selected from date meal'), '');
            this.rdDefaultLunch = false;
            localStorage.setItem('Lunchsettime', '');
            this.selecteddate1 = ''
            this.fromDate = ''
            this.navCtrl.setRoot('CancelMealPage');
            return;
          }
          else if ((this.selecteddate2 == this.countMeal1[i]['meal_date']) && (this.newmealtype == this.countMeal1[i]['meal_type'])) {
            this.selecteddate1 = ''
            this.fromDate = ''
            this.rdDefaultLunch = false;
            localStorage.setItem('Lunchsettime', '');
            this.util.alert(this.translate.instant('Already cancelled selected to date meal'), '');
            this.navCtrl.setRoot('CancelMealPage');
            return;
          }
        }
      }
    }
    if (this.meal_type == 'Dinner') {
      if (this.rdDefaultDinner) {
        this.rdDefaultDinner = false;
        localStorage.setItem('Dinnersettime', '');
        this.newmealtype1 = ''
      } else {
        this.rdDefaultDinner = true;
        localStorage.setItem('Dinnersettime', this.meal_type);
        if (this.meal_type == 'Dinner') {
          this.newmealtype1 = "dinner"
        }
        for (var i = 0; i < this.countMeal1.length; i++) {
          if (this.selecteddate1 != this.selecteddate2) {
            if ((this.selecteddate1 <= this.countMeal1[i]['meal_date']) && (this.selecteddate2 >= this.countMeal1[i]['meal_date']) && (this.newmealtype == this.countMeal1[i]['meal_type'])) {
              this.selecteddate1 = ''
              this.fromDate = ''
              this.util.alert(this.translate.instant('Already cancelled between the selected date meal'), '');
              this.rdDefaultDinner = false;
              localStorage.setItem('Dinnersettime', '');
              this.selecteddate1 = ''
              this.fromDate = ''
              this.navCtrl.setRoot('CancelMealPage');
              return;
            }
          }


          if ((this.selecteddate1 == this.countMeal1[i]['meal_date']) && (this.newmealtype1 == this.countMeal1[i]['meal_type'])) {
            this.selecteddate1 = ''
            this.fromDate = ''
            this.util.alert(this.translate.instant('Already cancelled selected from date meal'), '');
            this.rdDefaultDinner = false;
            localStorage.setItem('Dinnersettime', '');
            this.selecteddate1 = ''
            this.fromDate = ''
            this.navCtrl.setRoot('CancelMealPage');
            return;
          }
          else if ((this.selecteddate2 == this.countMeal1[i]['meal_date']) && (this.newmealtype1 == this.countMeal1[i]['meal_type'])) {
            this.selecteddate1 = ''
            this.fromDate = ''
            this.rdDefaultDinner = false;
            localStorage.setItem('Dinnersettime', '');
            this.util.alert(this.translate.instant('Already cancelled selected to date meal'), '');
            this.navCtrl.setRoot('CancelMealPage');
            return;
          }
        }
      }
    }

  }
  fromSelectdate() {
    this.fromDate = this.selecteddate1;
    this.minDate1 = this.fromDate.toString();
    this.subscriptionenddate = localStorage.getItem('endDate');
    if (this.minDate1 > this.subscriptionenddate) {
      this.selecteddate1 = '';
      this.fromDate = '';
      this.util.alert(this.translate.instant('Please Select Correct From Date'), '');
      return;
    }
    this.minDate2 = this.subscriptionenddate;
    var today = new Date(this.minDate1);
    var tempcount = parseInt(this.countMeal)
    if (this.minDate1 == this.subscriptionenddate) {
      this.maxDate = this.subscriptionenddate
    }
    else{
      this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + tempcount).toISOString();
      if(this.maxDate>this.subscriptionenddate)
      {
        this.maxDate=this.subscriptionenddate
      }
    //this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + tempcount).toISOString();
    }
    this.selecteddate2 = '';
    this.toDate = '';


    // for (var i = 0; i < this.countMeal1.length; i++) {
    //   if ((this.selecteddate1 == this.countMeal1[i]['meal_date']) && (this.newmealtype == this.countMeal1[i]['meal_type'])) {
    //     this.selecteddate1 = ''
    //     this.fromDate = ''
    //     this.util.alert(this.translate.instant('Already cancelled selected from date meal'), '');
    //     this.selecteddate1 = ''
    //     this.fromDate = ''
    //     return;
    //   }
    //   else if ((this.selecteddate1 == this.countMeal1[i]['meal_date']) && (this.newmealtype1 == this.countMeal1[i]['meal_type'])) {
    //     this.selecteddate1 = ''
    //     this.fromDate = ''
    //     this.util.alert(this.translate.instant('Already cancelled selected to date meal'), '');
    //     this.selecteddate1 = ''
    //     this.fromDate = ''
    //     return
    //   }
    // }


  }
  toSelectdate() {
    this.toDate = this.selecteddate2;
    this.subscriptionenddate = localStorage.getItem('endDate');
    if (this.toDate > this.subscriptionenddate) {
      this.selecteddate2 = '';
      this.toDate = '';
      this.util.alert(this.translate.instant('Please Select Correct To Date'), '');
      return;
    }

    // for (var i = 0; i < this.countMeal1.length; i++) {
    //   if ((this.selecteddate2 == this.countMeal1[i]['meal_date']) && (this.newmealtype == this.countMeal1[i]['meal_type'])) {
    //     this.selecteddate1 = ''
    //     this.fromDate = ''
    //     this.util.alert(this.translate.instant('Already cancelled selected to date meal'), '');
    //     return;

    //   }
    //   if ((this.selecteddate2 == this.countMeal1[i]['meal_date']) && (this.newmealtype1 == this.countMeal1[i]['meal_type'])) {
    //     this.selecteddate1 = ''
    //     this.fromDate = ''
    //     this.util.alert(this.translate.instant('Already cancelled selected from date meal'), '');
    //     return;
    //   }
    // }



  }
  onSubmit() {
    if (this.fromDate == '' || this.fromDate == null) {
      this.util.alert(this.translate.instant('Please Select From Date'), '');
      return;
    }
    if (this.toDate == '' || this.toDate == null) {
      this.util.alert(this.translate.instant('Please Select To Date'), '');
      return;
    }

    this.lunch_settime = localStorage.getItem('Lunchsettime');
    this.dinner_settime = localStorage.getItem('Dinnersettime');
    if (this.mealType == "Both") {
      if (this.lunch_settime == '' && this.dinner_settime == '') {
        this.util.alert(this.translate.instant('Please Select Meal Type'), '');
        return;
      }
    }
    else if (this.mealType == "Lunch") {
      if (this.lunch_settime == '') {
        this.util.alert(this.translate.instant('Please Select Meal Type'), '');
        return;
      }
    }
    else {
      if (this.dinner_settime == '') {
        this.util.alert(this.translate.instant('Please Select Meal Type'), '');
        return;
      }
    }
    if ((this.lunch_settime == 'Lunch') && (this.dinner_settime == 'Dinner')) {
      this.meal_type = 'both';
    }
    else {
      if (this.lunch_settime == 'Lunch') {

        this.meal_type = 'Lunch';
      }
      else {
        this.meal_type = 'Dinner';
      }
    }

    var a = moment(this.fromDate, 'YYYY-MM-DD');
    var b = moment(this.toDate, 'YYYY-MM-DD');
    var days = b.diff(a, 'days');
    this.datedifference = days + 1;
    if(this.meal_type=='both')
    {
      this.datedifference = parseFloat(this.datedifference) * 2;
    }
    else{
      this.datedifference = this.datedifference;
    }
    if(this.datedifference > this.countMeal)
    {
      this.selecteddate1 = '';
      this.fromDate = '';
      localStorage.setItem('Lunchsettime', '');
      localStorage.setItem('Dinnersettime', '');   
      this.util.alert(this.translate.instant('You have selected More than the cancel count left'), '');
      this.navCtrl.setRoot('CancelMealPage');
      return;
    }
    this.util.showLoader();
    this.apiService.cancelmeal(this.customer_subscription_id, this.customer_id, this.meal_type, this.toDate, this.fromDate).then(res => {
      this.util.hideLoader();
      localStorage.setItem('Lunchsettime', '');
      localStorage.setItem('Dinnersettime', '');      
      if (res['success']) {
        
        this.util.alert(this.translate.instant(res['message']), '');
        this.navCtrl.setRoot('DashboardPage');
      }
      else{
        this.conmessage = res['message'];
			  this.showConfirmAlert();
      }
    }).catch((err) => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
      this.util.hideLoader();
    });

  }

  async showConfirmAlert() {
		let alertConfirm = this.atrCtrl.create({
		  //header: 'Download Successfully',
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "Try again",
			  handler: () => {
				this.navCtrl.setRoot('DashboardPage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
	  }

}
