import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App, AlertController, IonicApp } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
 import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  current: number
  max: number = 20
  stroke: number = 4;
  radius: number = 20;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  defaultveggies: boolean = false;
  clockwise: boolean = true;
  color: string = 'rgb(32, 60, 82)';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate: number;
  max1;
  current1: number;
  mealday;
  startdate;
  enddate;
  enddates;
  custname;
  conmessage;
  custLname;
  todays;
  mealtyp;
  custid
  custToken
  subid
  cust_sub_id
  custstatus: any;
  actualmealdays
  actualmealcount
  today
  renewtoday
  renew_end_setdate
  setdate
  renewsetdate
  datecondition
  cancelMealTabCheck: any;
  buttonColor: any;
  PickVeggiesTabCheck: any;
  buttonColor1: string;
  trial_subscriptionTabCheck: any;
  orderGuestButton: string;
  cancelTabButton: string;
  allbutton
  switchaddresstime1: any
  switchaddressupgrade: any
  cancelCount: any;
  meal_cancel_count_meal: any
  trial_subscriptionactive: any
  chectrilkstatus: any
  changestatus: any
  picktomorrowtab: any
  currentmealperiod: any;
  today1 = new Date().toISOString();
  cancelmealdate = [];
  mealtype = ''
  count = 0;
  enddatess;
  enddatesss;
  days;
  fulldate
  referrelAppied: any;
  //
  type
  subscription_price
  extra_roti_lunch_price
  renew
  CGST
  IGST
  Tax
  Total
  reference_id
  extra_roti_dinner_price
  amount
  extra_price
  respcgst
  respigst
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private util: UtilService,
    private nav: NavController,
    private translate: TranslateService,
    private apiService: APIService,
    private push: PushService,
    public alertCtrl: AlertController,
    private storage: Storage,
    public app: App,
    public platform: Platform,
    private localNotifications: LocalNotifications,
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
      //this.Back();
      if (this.count == 0) {
        this.count++;
        setTimeout(() => { this.count = 0 }, 2000)
      }
      else {
        this.presentToast();
      }

    }
  }

  presentToast() {
    if (this.count == 1) {
      const alert = this.alertCtrl.create({
        title: 'Close the App',
        message: 'Are you sure?',
        buttons: [{
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.nav.setRoot('DashboardPage');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.platform.exitApp();
          }
        }]
      });
      alert.present();
    }
  }

  ionViewDidLoad() {   
  }
  ngOnInit() {
    localStorage.setItem('logintimestamp',null);
    this.custstatus = true
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    //for check the data entered properly 
    this.type = localStorage.getItem('failedstatus');
    console.log(this.type);
    if(this.type!=null)
    {
      this.util.showLoader();
      this.apiService.checkpayementstatus(this.custid,this.type,this.custToken).then(response => {
        this.util.hideLoader();
        if (response.success) {
          console.log(response.message);
          if(response.message=="false")
          {
            console.log(response.message);
            // calculation
            this.subscription_price = localStorage.getItem('price');
          if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
              this.extra_roti_lunch_price = localStorage.getItem('extraRoti_Lunch');
          } else {
              this.extra_roti_lunch_price = '0';
          }
          if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
              this.extra_roti_dinner_price = localStorage.getItem('extraRoti_Dinner');
          } else {
              this.extra_roti_dinner_price = '0';
          }

          var basic;
          var basicString = this.subscription_price.replace(',', '');
          basic = parseFloat(basicString) + parseFloat(this.extra_roti_lunch_price) + parseFloat(this.extra_roti_dinner_price)
          this.extra_price = parseFloat(this.extra_roti_lunch_price) + parseFloat(this.extra_roti_dinner_price)
          localStorage.setItem('extra_price', this.extra_price);
          this.respcgst = localStorage.getItem('respcgst');
          this.respigst = localStorage.getItem('respigst');
          this.CGST = (parseFloat(basic) * this.respcgst / 100).toFixed(2);
          this.IGST = (parseFloat(basic) * this.respigst / 100).toFixed(2);
          this.Tax = (parseFloat(this.CGST) + parseFloat(this.IGST)).toFixed(2);
          this.Total = (parseFloat(basic) + parseFloat(this.Tax)).toFixed(2);
          localStorage.setItem('Total', this.Total)
          this.amount = String(this.Total);
          this.amount = this.amount.replace('.', '');
          if (localStorage.getItem('payment_id') == null) {

              localStorage.setItem('payment_id', '0')
          }
          // end
            this.reference_id = localStorage.getItem('reference_id');        
            var lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
            var dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
            var data = [];

            if (lunch_products) {
                data.push(lunch_products);
            }
            if (dinner_products) {
                data.push(dinner_products);
            }
            if (localStorage.getItem('renewis') == '1') {
                this.renew = 1
                this.type = 'renew';
            }
            else {
                this.renew = 0
                this.type = 'regular';
            }
            console.log(data);
            console.log(this.CGST);
            console.log(this.IGST);
            console.log(this.renew);
            console.log(this.reference_id);
            this.apiService.addsubscriptionPlan(data, this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
                if(res['success'])
                {
                    localStorage.setItem('customer_payement_status', 'success');
                    localStorage.setItem('failedstatus',null);
                    //this.navCtrl.setRoot('PaymentsuccessfulPage');
                }
                else{
                    //this.navCtrl.setRoot('PaymentfailedPage');
                }
                
            }).catch((err) => {
            });
          }
        }
      }, (response) => {
        this.conmessage = "Something's wrong, let's try again?";
        // this.showConfirmAlert();
      });
    }
    //end
    
    //this.util.showLoader();
    this.apiService.Dashboard(this.custid, this.custToken).then(response => {
     // this.util.hideLoader();
      if (response.success) {
        this.referrelAppied = response.data.referrelAppied;
        if(this.referrelAppied == 1)
        {
              const alert = this.alertCtrl.create({
                title: 'congratulations !',
                message: 'You have received free meals on referring a friend. Refer and win more meals.',
                buttons: [{
                  text: 'ok',
                  handler: () => {
                    this.apiService.notificationdata_check(this.custid).then(response => {
                    });
                  }
                }]
              });
              alert.present();
         // this.util.alert(this.translate.instant('you have earn extra meals'),'congratulation !!');
         }
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        localStorage.setItem('subscription_id', response.data.subscription_id);
        this.currentmealperiod = response.data.mealperiodcount
        localStorage.setItem('referalcode', response.data.referalcode)
        localStorage.removeItem('mealId');
        localStorage.setItem('mealId', response.data.meal_id)
        localStorage.setItem('customer_subscription_id', response.data.customer_subscription_id)
        localStorage.setItem('guestmealdate', response.data.guestmealorder)
        localStorage.setItem('mealcount', response.data.mealcount)
        localStorage.setItem('mealdays', response.data.mealperiodcount)
        localStorage.setItem('CustomerName', response.data.customer_name);
        localStorage.setItem('CustomerLastName', response.data.customer_last_name);
        localStorage.setItem('StartDate', response.data.customer_start_date)
        localStorage.setItem('endDate', response.data.customer_end_date)
        localStorage.setItem('custStatus', response.data.customer_status)
        localStorage.setItem('mobilenumber', response.data.customer_mobile_number)
        localStorage.setItem('renew_before_ten', response.data.renew_before_ten)
        localStorage.setItem('renew_before_five', response.data.renew_before_five)
        localStorage.setItem('renew_before_two', response.data.renew_before_two);
        localStorage.setItem('defaultveggies_set', response.data.defaultorder);  
        if(response.data.defaultorder=='0')
        {
          this.defaultveggies = true;
        } 
        else{
          this.defaultveggies = false;
        }  
        this.enddatess = localStorage.getItem('renew_before_two');
        this.enddatesss = localStorage.getItem('renew_before_five');
        localStorage.setItem('delivery_status', response.data.delivery_status)
        localStorage.setItem('image', response.data.customer_image)
        this.today = new Date();
        localStorage.setItem('today', this.today);
        localStorage.setItem('setdate', this.setdate);
        localStorage.setItem('actualmealcount', response.data.actualmealcount);
        localStorage.setItem('actualmealdays', response.data.actualmealperiodcount);
        localStorage.removeItem('mealType');
        localStorage.setItem('mealType', response.data.meal_type);
        this.mealtype = response.data.meal_type
        this.current = parseInt(localStorage.getItem('mealcount'));
        this.current1 = parseInt(localStorage.getItem('mealdays'));
        this.startdate = localStorage.getItem('StartDate');
        // let lengths = this.today.getMonth() + 1;
        // let lengthsday = this.today.getDate() + 1;
        this.setdate = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+ 2).toISOString().substring(0, 10);
        let fromat = this.setdate + ' 00:00:00';
        localStorage.setItem('customerdate', fromat);
        this.datecondition = localStorage.getItem('customerdate');
        this.enddate = localStorage.getItem('endDate');
        this.enddate = this.enddate + ' 23:59:00';
        console.log(this.enddate);
        console.log(this.startdate);
        console.log(this.datecondition);
        if (localStorage.getItem('custStatus') == 'active' && this.datecondition >= this.startdate) {
          // && this.datecondition > this.startdate
          if (this.enddate <= this.datecondition) {
            this.custstatus = false;
            localStorage.setItem('referandearn', this.custstatus);
            localStorage.setItem('picktomorrowtab', this.custstatus);
            this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');

            localStorage.setItem('switchaddressupgrade', this.custstatus);
            this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');

            localStorage.setItem('meal_cancel_count_meal', this.custstatus)
            this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
            localStorage.setItem('cancelcount', response.data.cancelcount)
            this.cancelCount = localStorage.getItem('cancelcount');

            localStorage.setItem('trial_subscriptionactive', this.custstatus)
            this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
          }
          else {
            this.custstatus = true;
            localStorage.setItem('referandearn', this.custstatus);
            localStorage.setItem('picktomorrowtab', response.data.menuplan);
            this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
            localStorage.setItem('switchaddressupgrade', this.custstatus);
            this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
            localStorage.setItem('meal_cancel_count_meal', response.data.meal_cancel_count)
            this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
            localStorage.setItem('cancelcount', response.data.cancelcount)
            this.cancelCount = localStorage.getItem('cancelcount');
            this.chectrilkstatus = response.data.trial_subscription;
            if (this.chectrilkstatus == false) {
              this.changestatus = true;
              localStorage.setItem('trial_subscriptionactive', 'true');
              this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
            }
            else {
              localStorage.setItem('trial_subscriptionactive', 'true');
              this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
              this.trial_subscriptionTabCheck = true;
            }
          }
        }
        else {
          // if(localStorage.getItem('custStatus') == 'active' && this.datecondition <= this.startdate)
          // {
          //   console.log('iiiii');
          //   this.custstatus = true;
          //   localStorage.setItem('referandearn', this.custstatus);
          //   localStorage.setItem('picktomorrowtab', response.data.menuplan);
          //   this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
          //   localStorage.setItem('switchaddressupgrade', this.custstatus);
          //   this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
          //   localStorage.setItem('meal_cancel_count_meal', response.data.meal_cancel_count)
          //   this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
          //   localStorage.setItem('cancelcount', response.data.cancelcount)
          //   this.cancelCount = localStorage.getItem('cancelcount');
          //   this.chectrilkstatus = response.data.trial_subscription;
          //   if (this.chectrilkstatus == false) {
          //     this.changestatus = true;
          //     localStorage.setItem('trial_subscriptionactive', 'true');
          //     this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
          //   }
          //   else {
          //     localStorage.setItem('trial_subscriptionactive', 'true');
          //     this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
          //     this.trial_subscriptionTabCheck = true;
          //   }
          // }
          // else{
            this.custstatus = false;
            localStorage.setItem('referandearn', this.custstatus);
            localStorage.setItem('picktomorrowtab', this.custstatus);
            this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
  
            localStorage.setItem('switchaddressupgrade', this.custstatus);
            this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
  
            localStorage.setItem('meal_cancel_count_meal', this.custstatus)
            this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
            localStorage.setItem('cancelcount', response.data.cancelcount)
            this.cancelCount = localStorage.getItem('cancelcount');
  
            localStorage.setItem('trial_subscriptionactive', this.custstatus)
            this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
          //}
          //
         
        }
        this.setdate = localStorage.getItem('setsetdatedate');

        this.custname = localStorage.getItem('CustomerName');
        this.custLname = localStorage.getItem('CustomerLastName');
        this.mealtyp = localStorage.getItem('mealType');
        this.actualmealcount = localStorage.getItem('actualmealcount')
        this.actualmealdays = localStorage.getItem('actualmealdays')
        if (this.mealtyp == "Both") {
          this.mealtyp = "Lunch & Dinner"
        }
        this.cancelmealdate = response.data.cancel_meal_date;
        this.notificationcall();
      }
      else {
        this.conmessage = response.message;
			  this.showConfirmAlert();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
    });
    this.subid = localStorage.getItem('subscription_id');
    this.cust_sub_id = localStorage.getItem('customer_subscription_id');

    this.custname = localStorage.getItem('CustomerName');
    this.custLname = localStorage.getItem('CustomerLastName');
    this.mealtyp = localStorage.getItem('mealType');
    this.startdate = localStorage.getItem('StartDate');
    localStorage.removeItem('mynum1');
    localStorage.removeItem('mynum2');
    localStorage.removeItem('date');
    localStorage.removeItem('renewis');
    localStorage.removeItem('canceldinnerdate');
    localStorage.removeItem('canceldinnertype');
    localStorage.removeItem('cancelLunchdate');
    localStorage.removeItem('cancellunchtype');
    

  }
  scheduler() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    this.localNotifications.schedule({
      id: 1,
      title: "Choose your veggie for tomorrow",
      text: "Tell us what you'd like to eat.",
      trigger: { every: { hour: 9,minute:1 }, count: 1 },
      led: 'FF0000',
      smallIcon:"res://mipmap-ldpi/ic_launcher.png",
      sound: null,
      foreground: true,
    });
    // let observable = this.localNotifications.on('click').subscribe(() => {
    //   this.navCtrl.setRoot('PicktmrwvegiesPage');
    //   observable.unsubscribe();
    // });
  }
  schedulernight() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    this.localNotifications.schedule({
      id: 2,
      title: "Choose your veggie for tomorrow",
      text: "Tell us what you'd like to eat.",
      trigger: { every: { hour: 21,minute:1 }, count: 1 },
      smallIcon:"res://mipmap-ldpi/ic_launcher.png",
      led: 'FF0000',
      sound: null,
      foreground: true,
    });

    // let observable = this.localNotifications.on('click').subscribe(() => {
    //   this.navCtrl.setRoot('PicktmrwvegiesPage');
    //   // Unsubscribe to OnClick event after push your page
    //   observable.unsubscribe();
    // });
  }
  fivedaybeforeschedule() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    // this.localNotifications.schedule({
    //   id: 3,
    //   title: "Your subscription needs to be renewed",
    //   text: "We do not want you to skip your meals.",
    //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
    //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
    //   led: 'FF0000',
    //   sound: null,
    //   foreground: true,
    // });
  }
  twodaybeforeschedule() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    // this.localNotifications.schedule({
    //   id: 4,
    //   title: "Your subscription needs to be renewed",
    //   text: "We do not want you to skip your meals, please renew your subscription.",
    //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
    //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
    //   led: 'FF0000',
    //   sound: null,
    //   foreground: true,
    // });
  }

  tendaybeforeschedule() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    // this.localNotifications.schedule({
    //   id: 5,
    //   title: "Home-cooked food is right here, sign-up now",
    //   text: "Guess you've missed renewing your subscription, what are you waiting for?",
    //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
    //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
    //   led: 'FF0000',
    //   sound: null,
    //   foreground: true,
    // });
  }

  tendaybeforeschedule1() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    // this.localNotifications.schedule({
    //   id: 6,
    //   title: "Home-cooked food is right here, sign-up now",
    //   text: "We're here to treat you. Sign-up with us for home that you get back home.",
    //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
    //   smallIcon:"res://mipmap-ldpi/ic_launcher.png",
    //   led: 'FF0000',
    //   sound: null,
    //   foreground: true,
    // });
  }

  picktmrwveggies() {
    this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
    let today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
    console.log(today);
    let dateFormat = today.split('T');
    let dateFormat1 = this.today1.split('T')
    if(localStorage.getItem('referandearn')=='false')
    {
      let todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
      this.startdate = localStorage.getItem('StartDate');
      if(todaydate <=this.startdate)
      {
        this.util.alert('You can choose a veggie only a day before the delivery', '');
        this.util.hideLoader(); // disable button
      }
      else{
        this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
        this.util.hideLoader();
      }
     
      //this.navCtrl.setRoot('PicktmrwvegiesPage');
    }
    else if (this.PickVeggiesTabCheck == 'false') {
      this.util.alert('You can choose a veggie only a day before the delivery', '');
      this.util.hideLoader(); // disable button
    }
    else if (this.PickVeggiesTabCheck != 'false') {
      if (dateFormat1[0] == this.enddate) {
        this.util.alert('This feature will be active once we start delivering', '');
        this.util.hideLoader();
      }
      else {
        for (var i = 0; i < this.cancelmealdate.length; i++) {
          if ((dateFormat[0] == this.cancelmealdate[i]['meal_date']) && (this.cancelmealdate[i]['meal_type'] == "lunch")) {
            localStorage.setItem('cancelLunchdate', this.cancelmealdate[i]['meal_date'])
            localStorage.setItem('cancellunchtype', this.cancelmealdate[i]['meal_type'])
          }
          else if ((dateFormat[0] == this.cancelmealdate[i]['meal_date']) && (this.cancelmealdate[i]['meal_type'] == "dinner")) {
            localStorage.setItem('canceldinnerdate', this.cancelmealdate[i]['meal_date'])
            localStorage.setItem('canceldinnertype', this.cancelmealdate[i]['meal_type'])
          }
        }
        if (localStorage.getItem('mealId') == '1') {
          if (localStorage.getItem('cancellunchtype') == 'lunch') {
            this.util.alert("You already Cancelled tomorrow's meal", "");
            this.util.hideLoader();
          }
          else {
            this.navCtrl.setRoot('PicktmrwvegiesPage');
          }
        }
        else if (localStorage.getItem('mealId') == '2') {
          if (localStorage.getItem('canceldinnertype') == 'dinner') {
            this.util.alert("You already Cancelled tomorrow's meal", "");
            this.util.hideLoader();
          }
          else {
            this.navCtrl.setRoot('PicktmrwvegiesPage');
          }
        }
        else if (localStorage.getItem('mealId') == '3') {
          if (localStorage.getItem('cancellunchtype') == 'lunch' && localStorage.getItem('canceldinnertype') == 'dinner') {
            this.util.alert("You already Cancelled tomorrow's meal", "");
            this.util.hideLoader();
          }
          else {
            this.navCtrl.setRoot('PicktmrwvegiesPage');
          }
        }

      }
    }

  }
  orderGUestMeal() {
    this.trial_subscriptionTabCheck = localStorage.getItem('trial_subscriptionactive');
    this.PickVeggiesTabCheck = localStorage.getItem('picktomorrowtab');
    if(localStorage.getItem('referandearn')=='false')
    {
      let todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
      this.startdate = localStorage.getItem('StartDate');
      if(todaydate <=this.startdate)
      {
        this.util.alert('You can choose a veggie only a day before the delivery', '');
        this.util.hideLoader(); // disable button
      }
      else{
        this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
        this.util.hideLoader();
      }
    }
    else if (this.trial_subscriptionTabCheck == 'false' || this.PickVeggiesTabCheck == 'false') {
      this.util.alert('This feature will be active once we start delivering', '');
      this.util.hideLoader();
    }
    else if (this.trial_subscriptionTabCheck != 'false' || this.PickVeggiesTabCheck != 'false') {
      if (this.today1 == this.enddate) {
        this.util.alert('This feature will be active once we start delivering', '');
        this.util.hideLoader();
      }
      else {
        this.navCtrl.setRoot('OrderGuestMealPage');
      }
    }
  }

  cancelMeal() {
    this.cancelMealTabCheck = localStorage.getItem('meal_cancel_count_meal');
    this.cancelCount = localStorage.getItem('cancelcount');
    if(localStorage.getItem('referandearn')=='false')
    {
      let todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
      this.startdate = localStorage.getItem('StartDate');
      if(todaydate <=this.startdate)
      {
        this.util.alert('You can choose a veggie only a day before the delivery', '');
        this.util.hideLoader(); // disable button
      }
      else{
        this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
        this.util.hideLoader();
      }
    }    
    else if (localStorage.getItem('subscription_id') == "1") {
      this.util.alert('This feature will be inactive for demo plan', '');
      this.util.hideLoader();
    }
    else if (this.cancelMealTabCheck == 'false' || this.cancelCount <= 0) {
      this.util.alert('This feature will be active once we start delivering', '');
      this.util.hideLoader(); // disable button
    }
    else if (this.cancelMealTabCheck != 'false') {
      if (this.today1 == this.enddate) {
        this.util.alert('This feature will be active once we start delivering', '');
        this.util.hideLoader();
      }
      else {
        this.navCtrl.setRoot('CancelMealPage');
      }
    }
  }
  switchAddressTime() {
    localStorage.setItem('switchaddressupgrade', this.custstatus);
    this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
    if(localStorage.getItem('referandearn')=='false')
    {
      let todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
      this.startdate = localStorage.getItem('StartDate');
      if(todaydate <=this.startdate)
      {
        this.util.alert('You can choose a veggie only a day before the delivery', '');
        this.util.hideLoader(); // disable button
      }
      else{
        this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
        this.util.hideLoader();
      }
    }    
    else if (this.switchaddresstime1 == 'false') {
      this.util.alert('This feature will be active once we start delivering', '');
      this.util.hideLoader(); // disable button
    }
    else if (this.switchaddresstime1 != 'false') {
      if (this.today1 == this.enddate) {
        this.util.alert('This feature will be active once we start delivering', '');
        this.util.hideLoader();
      }
      else {
        this.navCtrl.setRoot('SwitchAddressTimePage');
      }
    }
  }
  changeupgrade() {
    localStorage.setItem('switchaddressupgrade', this.custstatus);
    this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
    if (this.switchaddresstime1 == 'false') {
      this.util.alert('Please wait until your current plan expires', '');
      this.util.hideLoader(); // disable button
    }
    else {
      //this.navCtrl.setRoot('UpgradeMealTypePage');
      this.util.alert('Please wait until your current plan expires', '');
      this.util.hideLoader(); //UpgradeMealTypePage
    }
  }
  renewsubscription() {
    localStorage.removeItem('lm_roti');
    localStorage.removeItem('dm_roti');  
    localStorage.removeItem('extraRoti_Lunch');  
    localStorage.removeItem('extraRoti_Dinner'); 
    localStorage.removeItem('lunch_products'); 
    localStorage.removeItem('dinner_products'); 
    localStorage.removeItem('customise_lc_data'); 
    localStorage.removeItem('customise_dm_data'); 
    localStorage.removeItem('payemntfailedguest'); 
    this.todays = localStorage.getItem('guestmealdate');
    this.renewtoday = this.todays;//.toISOString();
    //this.renewtoday = this.renewtoday.getFullYear().toString() + '-' + (this.renewtoday.getMonth() + 1).toString() + '-' + (this.renewtoday.getDate() - 1).toString();
    console.log(this.renewtoday);
    this.renewsetdate = this.renewtoday;
    // let lengths = this.today.getMonth() + 1;
    // let lengthsday = this.today.getDate();
    // if (lengths > 9) {
    //   if (lengthsday > 9) {
    //     this.renewsetdate = this.renewtoday.getFullYear().toString() + '-' + (this.renewtoday.getMonth() + 1).toString() + '-' + (this.renewtoday.getDate()).toString();
    //   }
    //   else {
    //     let append = '0' + lengths;
    //     let appendday = '0' + lengthsday;
    //     this.renewsetdate = this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
    //   }
    // }
    // else {
    //   let append = '0' + lengths;
    //   if (lengthsday > 9) {
    //     this.renewsetdate = this.renewtoday.getFullYear().toString() + '-' + (append).toString() + '-' + (this.renewtoday.getDate()).toString();
    //   }
    //   else {
    //     let append = '0' + lengths;
    //     let appendday = '0' + lengthsday;
    //     this.renewsetdate = this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
    //   }
    // }
    this.enddates = localStorage.getItem('renew_before_ten');
    if (this.renewsetdate >= this.enddates) {
      this.navCtrl.setRoot('RenewsubscriptionPage');
    }
    else {
      this.util.alert('You can only  renew your subscription last 10 subscription days', '');
      this.util.hideLoader();
      //this.navCtrl.setRoot('RenewsubscriptionPage');
    }


  }
  mycurrentplan()
  {
    localStorage.setItem('switchaddressupgrade', this.custstatus);
    this.switchaddresstime1 = localStorage.getItem('switchaddressupgrade');
    if(localStorage.getItem('referandearn')=='false')
    {
      let todaydate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();
      this.startdate = localStorage.getItem('StartDate');
      if(todaydate <=this.startdate)
      {
        this.util.alert('You can choose a veggie only a day before the delivery', '');
        this.util.hideLoader(); // disable button
      }
      else{
        this.util.alert('Your Subscription is expired. You need to renew your subscription', '');
        this.util.hideLoader();
      }
    }    
    else if (this.switchaddresstime1 == 'false') {
      this.util.alert('This feature will be active once we start delivering', '');
      this.util.hideLoader(); // disable button
    }
    else {
      this.navCtrl.setRoot('MycurrentplanPage');
    }
  }
  Back() {
    this.navCtrl.setRoot('MenuPage');
  }
  singlenotificationfortrialremaintwomeal() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    // this.localNotifications.schedule({
    //   id: 3,
    //   title: "It's time you upgrade",
    //   text: 'Sign up for our daily subscription plans in just a min!',
    //   trigger: { every: { hour: 15, minute: 30 }, count: 1 },
    //   led: 'FF0000',
    //   sound: null,
    //   foreground: true,
    // });
  }
  singlenotificationfortrialremainonemeals() {
    this.today = new Date();
    this.setdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth() + 1).toString() + '-' + this.today.getDate().toString();
    this.fulldate = this.setdate + " 14:45";
    // this.localNotifications.schedule({
    //   id: 4,
    //   title: "You might miss your next meal",
    //   text: 'Your subscription needs to be renewed, ASAP!',
    //   trigger: { every: { hour: 13, minute: 30 }, count: 1 },
    //   led: 'FF0000',
    //   sound: null,
    //   foreground: true,
    // });
  }

  singlenotificationformealdispatch() {
    // this.localNotifications.schedule({
    //   id: 5,
    //   title: "Your food is on the way",
    //   text: 'Our delivery agent has left our kitchen.',
    //   foreground: true,
    //   trigger: { every: { hour: 14 }, count: 1 },
    // });
  }

  singlenotificationformealdelivered() {
    // this.localNotifications.schedule({
    //   id: 6,
    //   title: "Your food is delivered",
    //   text: 'Please let us know how your meal was.',
    //   foreground: true,
    //   trigger: { every: { hour: 14, minute: 30 }, count: 1 },
    // });
  }

  notificationcall()
  {
    this.localNotifications.requestPermission().then((permission) => {
      let currentDate = new Date();
      let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      this.days = weekdays[currentDate.getDay()];
      if (localStorage.getItem('picktomorrowtab') == 'true' && localStorage.getItem('delivery_status') != "delivered" && localStorage.getItem('delivery_status') != "dispatched") {
        this.scheduler();
        this.schedulernight();
      }
      if (localStorage.getItem('delivery_status') == "delivered") {
        this.singlenotificationformealdelivered()
      }
      if (localStorage.getItem('delivery_status') == "dispatched") {
        this.singlenotificationformealdispatch()
      }
      if (localStorage.getItem('subscription_id') == "1") {
        if (localStorage.getItem('mealcount') == "2") {
          if (localStorage.getItem('countitems') != '2') {
            localStorage.setItem('countitems', '2');
            this.singlenotificationfortrialremaintwomeal();
          }

        }
        else if (localStorage.getItem('mealcount') == "1") {
          if (localStorage.getItem('countitems') != '1') {
            localStorage.setItem('countitems', '1');
            this.singlenotificationfortrialremainonemeals();
          }
        }
      }
      else {
        if (localStorage.getItem('mealcount') == "1") {
          if (localStorage.getItem('countitemss') != '1') {
            localStorage.setItem('countitemss', '1');
            this.singlenotificationfortrialremainonemeals();
          }
        }
        this.renewtoday = new Date();
        this.today = new Date();
        let lengths = this.today.getMonth() + 1;
        let lengthsday = this.today.getDate();
        if (lengths > 9) {
          if (lengthsday > 9) {
            this.renewsetdate = this.renewtoday.getFullYear().toString() + '-' + (this.renewtoday.getMonth() + 1).toString() + '-' + (this.renewtoday.getDate()).toString();
          }
          else {
            let append = '0' + lengths;
            let appendday = '0' + lengthsday;
            this.renewsetdate = this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
          }
        }
        else {
          let append = '0' + lengths;
          if (lengthsday > 9) {
            this.renewsetdate = this.renewtoday.getFullYear().toString() + '-' + (append).toString() + '-' + (this.renewtoday.getDate()).toString();
          }
          else {
            let append = '0' + lengths;
            let appendday = '0' + lengthsday;
            this.renewsetdate = this.today.getFullYear().toString() + '-' + (append).toString() + '-' + (appendday).toString();
          }
        }
        this.enddatess = localStorage.getItem('renew_before_two');
        this.enddates = localStorage.getItem('renew_before_ten');
        this.enddatesss = localStorage.getItem('renew_before_five');
        localStorage.setItem('alternatenoti', '0');
        if (this.renewsetdate == this.enddatess) {
          if (this.days == 'wednesday') {
            if (localStorage.getItem('alternatenoti') == '0') {
              this.tendaybeforeschedule();
              localStorage.setItem('alternatenoti', '1');
            }
            else {
              this.tendaybeforeschedule1();
              localStorage.setItem('alternatenoti', '0');
            }
          }
        }
        if (this.renewsetdate == this.enddatess) {
          if (localStorage.getItem('twovaldata') != "twoval") {
            localStorage.setItem('twovaldata', 'twoval');
            this.twodaybeforeschedule();
          }
        }
        if (this.renewsetdate == this.enddatesss) {
          if (localStorage.getItem('twovaldata') != "fiveval") {
            localStorage.setItem('twovaldata', 'fiveval');
            this.fivedaybeforeschedule();
          }
        }
      }
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
				this.nav.setRoot('DashboardPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
