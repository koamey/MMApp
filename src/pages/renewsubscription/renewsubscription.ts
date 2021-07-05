import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, IonicApp, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { l } from '@angular/core/src/render3';
/**
 * Generated class for the RenewsubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renewsubscription',
  templateUrl: 'renewsubscription.html',
})
export class RenewsubscriptionPage {
  subscriptionArray = [];
  tokendata: string;
  customer_id: string;
  cust_sub_id: string;
  lengthcount
  prefernceTypArr
  lunch_products
  dinner_products
  lm_roti
  lm_sabji
  lm_rice
  lm_dal
  lm_salad
  subtract
  dm_roti
  dm_sabji
  dm_rice
  dm_dal
  dm_salad
  mealid
  ricecount
  conmessage
  extraRoti_Lunch = 0; extraRoti_Dinner = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private apiService: APIService,
    private push: PushService,
    private util: UtilService,
    private translate: TranslateService,
    private storage: Storage,
    private sanitizer: DomSanitizer,
    public alertCtrl: AlertController,
    public platform: Platform,
    private ionicApp: IonicApp
  ) {
    //let backAction = platform.registerBackButtonAction(() => {
      //this.Back();
      //backAction();
    //}, 2)
    this.initializeBackButtonCustomHandler();
  }
  unregisterBackButtonAction
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
    console.log('ionViewDidLoad RenewsubscriptionPage');
  }
  ngOnInit() {
    this.dm_rice = '';
    this.lm_rice = '';
    localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
    localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
    localStorage.setItem('renewrotistringdinner','');
    localStorage.setItem('renewrotistringlunch','');
    this.tokendata = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.cust_sub_id = localStorage.getItem('customer_subscription_id');
    localStorage.setItem('refer_subscription','1');
    localStorage.removeItem('mealId');
    this.loaddata();
    //this.loadSubscriptionData();
  }
  loadSubscriptionData() {
    this.apiService.showSubscription().then((res) => {
      if(res['success'])
      {
        this.subscriptionArray = res['data'];
        for (var i = 0; i < this.subscriptionArray.length; i++) {
          this.subscriptionArray[i]['subscription_content'] = this.sanitizer.bypassSecurityTrustHtml(this.subscriptionArray[i]['subscription_content'])
          this.subscriptionArray[i]['subscription_sub_content'] = this.sanitizer.bypassSecurityTrustHtml(this.subscriptionArray[i]['subscription_sub_content'])
        }
        this.push.init(this.apiService.getSettings().pushwoosh_id);
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
  subscriptiondataArray = [];
  subscriptiondata2 = [];
  sub_id
  lunchaddresstype
  dinneraddresstype
  startdate: string
  enddate
  newstartdate
  today = new Date()
  newdate
  l1
  l2
  d1
  d2
  extraroti
  extrarice
amount
cgst
igst
cancelmeal
//minDate: string = new Date(this.newdate.getFullYear(), this.newdate.getMonth(), this.newdate.getDate() + 1).toISOString();

  lunch1
  dinner1
  lunchtime
  dinnertime
  lunch_add
  dinner_add
  mealdays //actualmealperiodcount
  mealcount //actualmealcount
  subscriptionmealdata
  Hflatno
  Hadd1
  Hadd2
  Hareaname
  Hpincode
  Wflatno
  Wadd1
  Wadd2
  Wareaname
  Wpincode
  Hareaid
  Wareaid
  home_id
  work_id
  totallunch
  totaldinner
  preflunchmeal
  prefdinnermeal
  lunchprefArray = []
  dinnerprefArray = []
  rcm_lm_roti = '';
  rcm_lm_sabji = '';
  rcm_lm_salad = '';
  rcm_lm_rice = '';
  rcm_lm_dal = '';

  rtm_lm_roti = '';
  rtm_lm_sabji = '';
  rtm_lm_salad = '';
  rtm_lm_rice = '';
  rtm_lm_dal = '';

  rcm_dm_roti = '';
  rcm_dm_sabji = '';
  rcm_dm_salad = '';
  rcm_dm_rice = '';
  rcm_dm_dal = '';

  rtm_dm_roti = '';
  rtm_dm_sabji = '';
  rtm_dm_salad = '';
  rtm_dm_rice = '';
  rtm_dm_dal = '';
  preferenceProducts: string = ' ';
  preferenceProductsRoti: string = '';
  preferenceProductsDinner: string = ' ';
  preferenceProductsRotiDinner: string = '';
  loaddata() {
   
    var data1 = {
      token: this.tokendata,
      customer_id: this.customer_id,
      customer_subscription_id: this.cust_sub_id
    }
    this.apiService.renewsubscription(data1).then(res => {
      this.util.showLoader();
      if (res.success) {
        this.util.hideLoader();
        this.subscriptiondataArray = res.data['subscription'];
        for (var i = 0; i < this.subscriptionArray.length; i++) {
          this.subscriptiondataArray[i]['subscription_content'] = this.sanitizer.bypassSecurityTrustHtml(this.subscriptiondataArray[i]['subscription_content'])
          this.subscriptiondataArray[i]['subscription_sub_content'] = this.sanitizer.bypassSecurityTrustHtml(this.subscriptiondataArray[i]['subscription_sub_content'])
        }
        localStorage.setItem('respcgst',res.data.CGST);
        localStorage.setItem('respigst',res.data.IGST);
        localStorage.setItem('subscription_id', res.data.subscription_id)
        localStorage.setItem('mealdays', res.data.subscription_period)
        
        this.mealid = res.data.meal_type
        this.lunch1 = res.data.delivery_lunch_timing
        this.dinner1 = res.data.delivery_dinner_timing
        this.lunchtime = res.data.delivery_lunch_timing
        this.dinnertime = res.data.delivery_dinner_timing
        this.lunch_add = res.data.delivery_lunch_address
        this.home_id = res.data.homeid;
        this.work_id = res.data.workid;
        localStorage.setItem('homeid', this.home_id);
        localStorage.setItem('workid', this.work_id);
        this.dinner_add = res.data.delivery_dinner_address
        this.lunchaddresstype = res.data.delivery_lunch_address_type
        this.dinneraddresstype = res.data.delivery_dinner_address_type
        this.l1 = res.data.weekend_lunch_saturday
        this.l2 = res.data.weekend_lunch_sunday
        this.d1 = res.data.weekend_dinner_saturday
        this.d2 = res.data.weekend_dinner_sunday;
        this.preflunchmeal = res.data.preference_lunch_meal;
        this.prefdinnermeal = res.data.preference_dinner_meal;
        this.startdate = res.data.start_date;
        this.enddate = res.data.end_date;
        this.extrarice = res.data.extra_rice;
        this.extraroti = res.data.extra_roti;
        this.Hflatno = res.data.home_address[0].flat_no;
        this.Hadd1 = res.data.home_address[0].address1;
        this.Hadd2 = res.data.home_address[0].address2;
        this.Hareaname = res.data.home_address[0].area_name;
        this.Hpincode = res.data.home_address[0].pincode;
        this.Hareaid = res.data.home_address[0].area_id;
        this.Wareaid = res.data.work_address[0].area_id;
        localStorage.setItem('getsecondpincodeid',this.Hareaid);
        localStorage.setItem('thisdataid',this.Hareaid);
        localStorage.setItem('getfirstpincodeid',this.Wareaid);
        this.Wflatno = res.data.work_address[0].flat_no;
        this.Wadd1 = res.data.work_address[0].address1;
        this.Wadd2 = res.data.work_address[0].address2;
        this.Wareaname = res.data.work_address[0].area_name;
        this.Wpincode = res.data.work_address[0].pincode;
        this.lunchprefArray = res.data.lunchpreferences;
        this.dinnerprefArray = res.data.dinnerpreferences;
        this.cancelmeal= res.data.cancel_meal_count

      }
      else{
        this.util.alert(this.translate.instant(res.message), '');
        this.util.hideLoader();
      }
    }).catch((res) => {
      this.util.alert(this.translate.instant(res.message), '');
      this.util.hideLoader();
    });
  }

  subscriptionData
  subscription_id
  renewmealday
  renewmealcount
  subprice
  onClickSubscription(id) {
  localStorage.setItem('renew_subscription_start', '1');
  localStorage.setItem('payment_id','0');
  this.lengthcount = this.subscriptiondataArray.length;
    for (var i = 0; i < this.lengthcount; i++) {
      if (id == this.subscriptiondataArray[i].subscription_id) {
        this.subscriptionData = this.subscriptiondataArray[i];
        var type;
        //if (i == 0) {         
          type = this.subscriptionData.subscription_name;
          localStorage.setItem('subscription_type', type);
          if (parseInt(localStorage.getItem('subscription_id')) == this.subscriptionData.subscription_id) {
            localStorage.setItem('customise_lc_data',null);
            localStorage.setItem('customise_dm_data',null);
            localStorage.setItem('subscription_id',id);
            localStorage.setItem('renewis','1')
            localStorage.setItem('renewis_id','0');
            localStorage.setItem('mealId', this.mealid)
            if (this.mealid == 3) {
              localStorage.setItem('mealType', 'Both');
              this.subprice = this.subscriptiondataArray[i].subscription_meal_array[2].price;
              localStorage.setItem('price', this.subprice)
              localStorage.setItem('preferenceType', this.preflunchmeal);
              localStorage.setItem('dinnerpreferenceType', this.prefdinnermeal);
              this.onLoadPreferenceData();
            }
            else if (this.mealid == 2) {
              localStorage.setItem('mealType', 'Dinner');
              this.subprice = this.subscriptiondataArray[i].subscription_meal_array[1].price;
              localStorage.setItem('price', this.subprice)
              localStorage.setItem('preferenceType', this.prefdinnermeal);
              this.onLoadPreferenceData();
            }
            else if (this.mealid == 1) {
              localStorage.setItem('mealType', 'Lunch');
              this.subprice = this.subscriptiondataArray[i].subscription_meal_array[0].price;
              localStorage.setItem('price', this.subprice)
              localStorage.setItem('preferenceType', this.preflunchmeal);
              this.onLoadPreferenceData();
            }
            localStorage.setItem('lunch1', this.lunch1)
            localStorage.setItem('dinner1', this.dinner1)
            localStorage.setItem('lunchtime', this.lunchtime)
            localStorage.setItem('dinnertime', this.dinnertime)
            localStorage.setItem('lunch_add', this.lunch_add)
            localStorage.setItem('dinner_add', this.dinner_add)
            localStorage.setItem('homeid', this.home_id)
            localStorage.setItem('workid', this.work_id)
            this.mealdays = parseInt(localStorage.getItem('mealdays'));//parseInt(localStorage.getItem('actualmealdays'))
            console.log(this.mealdays);
            this.mealcount = parseInt(localStorage.getItem('actualmealcount'))
            localStorage.setItem('statdatescreen', '1');
            localStorage.setItem('selectDelTime', '1');
            localStorage.setItem('selectWhereAddress', '1');
            localStorage.setItem('selectDelAdd', '1');
            localStorage.setItem('l1', this.l1);
            localStorage.setItem('l2', this.l2);
            localStorage.setItem('d1', this.d1);
            localStorage.setItem('d2', this.d2);
            localStorage.setItem('cancel_count',this.cancelmeal);
            localStorage.setItem('extraRoti', this.extraroti);
            localStorage.setItem('extraRice', this.extrarice);
            localStorage.setItem('Haddress_type1', 'Home');
            localStorage.setItem('Waddress_type1', 'Work')
            localStorage.setItem('Hflatno', this.Hflatno);
            localStorage.setItem('Haddline1', this.Hadd1);
            localStorage.setItem('Haddline2', this.Hadd2);

            localStorage.setItem('getfirstpincodearea',this.Wareaname);
            localStorage.setItem('getsecondareapindata',this.Wpincode);
            localStorage.setItem('pincode',this.Hpincode);
            localStorage.setItem('areaname',this.Hareaname);
            localStorage.setItem('getsecondpincodeid',this.Hareaid);
            localStorage.setItem('thisdataid',this.Hareaid);
            localStorage.setItem('getfirstpincodeid',this.Wareaid);
            localStorage.setItem('pincode', this.Hpincode);
            localStorage.setItem('Wflatno', this.Wflatno);
            localStorage.setItem('Waddline1', this.Wadd1);
            localStorage.setItem('Waddline2', this.Wadd2);
            localStorage.setItem('workpincode', this.Wpincode);
            if (this.lunchaddresstype != null || this.lunchaddresstype != '') {
              if (this.lunchaddresstype == "home") {
                localStorage.setItem('Ladd', "Home Address")
              }
              if (this.lunchaddresstype == "work") {
                localStorage.setItem('Ladd', "Work Address")
              }
            }
            if (this.dinneraddresstype != null || this.dinneraddresstype != '') {
              if (this.dinneraddresstype == "home") {
                localStorage.setItem('Dadd', "Home Address")
              }
              if (this.dinneraddresstype == "work") {
                localStorage.setItem('Dadd', "Work Address")
              }
            }

            let today = new Date().toISOString();
            if (today <= this.enddate) {
              var curr = new Date(this.enddate)
              let first = curr.getDate()
              let last = first + 1;
              this.newdate = new Date(curr.setDate(last)).toISOString();
              console.log(this.newdate);
              localStorage.setItem('StartDate', this.newdate);
              let newlast = first + this.mealdays;
              this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
              console.log(this.renewmealday);
              localStorage.setItem('endDate', this.renewmealday);
            }
            else if (today > this.enddate) {
              var curr = new Date()
              let first = curr.getDate()
              let last = first + 1;
              this.newdate = new Date(curr.setDate(last)).toISOString();
              console.log(this.newdate);
              localStorage.setItem('StartDate', this.newdate)
              let newlast = first + this.mealdays;
              this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
              console.log(this.renewmealday);
              localStorage.setItem('endDate', this.renewmealday);
            }
            if (id == this.subscriptiondataArray[i].subscription_id) {
             this.navCtrl.setRoot('CheckoutPage');
            }
            else{
             this.navCtrl.setRoot('MealtypePage');
            }
           
          }
          else {
            localStorage.setItem('subscription_id',id);
            localStorage.setItem('renewis','1')
            localStorage.setItem('renewis_id','0');
            localStorage.setItem('homeid', this.home_id)
            localStorage.setItem('workid', this.work_id)
            localStorage.setItem('Hflatno', this.Hflatno);
            localStorage.setItem('Haddline1', this.Hadd1);
            localStorage.setItem('Haddline2', this.Hadd2);

            localStorage.setItem('getfirstpincodearea',this.Wareaname);
            localStorage.setItem('getsecondareapindata',this.Wpincode);
            localStorage.setItem('pincode',this.Hpincode);
            localStorage.setItem('areaname',this.Hareaname);
            localStorage.setItem('getsecondpincodeid',this.Hareaid);
            localStorage.setItem('thisdataid',this.Hareaid);
            localStorage.setItem('getfirstpincodeid',this.Wareaid);
            localStorage.setItem('pincode', this.Hpincode);
            localStorage.setItem('Wflatno', this.Wflatno);
            localStorage.setItem('Waddline1', this.Wadd1);
            localStorage.setItem('Waddline2', this.Wadd2);
            localStorage.setItem('workpincode', this.Wpincode);
            let today = new Date().toISOString();
            if (today <= this.enddate) {
              var curr = new Date(this.enddate)
              let first = curr.getDate()
              let last = first + 1;
              this.newdate = new Date(curr.setDate(last)).toISOString();
              localStorage.setItem('StartDate', this.newdate);
            }
            else if (today > this.enddate) {
              var curr = new Date()
              let first = curr.getDate()
              let last = first + 1;
              this.newdate = new Date(curr.setDate(last)).toISOString();
              localStorage.setItem('StartDate', this.newdate)
            }
            this.navCtrl.setRoot('MealtypePage');
          }
        //} 
        // else if (i == 1) {
        //   type = 'Half-Monthly Subscription';
        //   localStorage.setItem('subscription_type', type)
        //   if (parseInt(localStorage.getItem('subscription_id')) == 3) { 
        //     localStorage.setItem('customise_lc_data',null);
        //     localStorage.setItem('customise_dm_data',null);
        //     localStorage.setItem('subscription_id',id);
        //     localStorage.setItem('renewis','1')
        //     localStorage.setItem('renewis_id','0');
        //     localStorage.setItem('mealId', this.mealid);
        //     if (this.mealid == 3) {
        //       localStorage.setItem('mealType', 'Both');
        //       this.subprice = this.subscriptiondataArray[1].subscription_meal_array[2].price;
        //       localStorage.setItem('price', this.subprice)
        //       localStorage.setItem('preferenceType', this.preflunchmeal);
        //       localStorage.setItem('dinnerpreferenceType', this.prefdinnermeal);
        //       this.onLoadPreferenceData();
        //     }
        //     else if (this.mealid == 2) {
        //       localStorage.setItem('mealType', 'Dinner');
        //       this.subprice = this.subscriptiondataArray[1].subscription_meal_array[1].price;
        //       localStorage.setItem('price', this.subprice)
        //       localStorage.setItem('preferenceType', this.prefdinnermeal);
        //       this.onLoadPreferenceData();
        //     }
        //     else if (this.mealid == 1) {
        //       localStorage.setItem('mealType', 'Lunch');
        //       this.subprice = this.subscriptiondataArray[1].subscription_meal_array[0].price;
        //       localStorage.setItem('price', this.subprice)
        //       localStorage.setItem('preferenceType', this.preflunchmeal);
        //       this.onLoadPreferenceData();
        //     }
        //     localStorage.setItem('lunch1', this.lunch1)
        //     localStorage.setItem('dinner1', this.dinner1)
        //     localStorage.setItem('lunchtime', this.lunchtime)
        //     localStorage.setItem('dinnertime', this.dinnertime)
        //     localStorage.setItem('lunch_add', this.lunch_add)
        //     localStorage.setItem('dinner_add', this.dinner_add)
        //     localStorage.setItem('homeid', this.home_id)
        //     localStorage.setItem('workid', this.work_id)
        //     localStorage.setItem('preferenceType', this.preflunchmeal);
        //     localStorage.setItem('dinnerpreferenceType', this.prefdinnermeal);
        //     localStorage.setItem('statdatescreen', '1');
        //     localStorage.setItem('selectDelTime', '1');
        //     localStorage.setItem('selectWhereAddress', '1');
        //     localStorage.setItem('selectDelAdd', '1');
        //     this.mealdays = parseInt(localStorage.getItem('actualmealdays'))
        //     this.mealcount = parseInt(localStorage.getItem('actualmealcount'))
        //     localStorage.setItem('cancel_count',this.cancelmeal);
        //     localStorage.setItem('extraRoti', this.extraroti);
        //     localStorage.setItem('extraRice', this.extrarice);
        //     localStorage.setItem('Haddress_type1', 'Home');
        //     localStorage.setItem('Waddress_type1', 'Work')
        //     localStorage.setItem('Hflatno', this.Hflatno);
        //     localStorage.setItem('Haddline1', this.Hadd1);
        //     localStorage.setItem('Haddline2', this.Hadd2);

        //     localStorage.setItem('getfirstpincodearea',this.Wareaname);
        //     localStorage.setItem('getsecondareapindata',this.Wpincode);
        //     localStorage.setItem('pincode',this.Hpincode);
        //     localStorage.setItem('areaname',this.Hareaname);
        //     localStorage.setItem('getsecondpincodeid',this.Hareaid);
        //     localStorage.setItem('thisdataid',this.Hareaid);
        //     localStorage.setItem('getfirstpincodeid',this.Wareaid);
        //     localStorage.setItem('pincode', this.Hpincode);
        //     localStorage.setItem('Wflatno', this.Wflatno);
        //     localStorage.setItem('Waddline1', this.Wadd1);
        //     localStorage.setItem('Waddline2', this.Wadd2);
        //     localStorage.setItem('workpincode', this.Wpincode);            
        //     if (this.lunchaddresstype != null || this.lunchaddresstype != '') {
        //       if (this.lunchaddresstype == "home") {
        //         localStorage.setItem('Ladd', "Home Address")
        //       }
        //       if (this.lunchaddresstype == "work") {
        //         localStorage.setItem('Ladd', "Work Address")
        //       }
        //     }
        //     if (this.dinneraddresstype != null || this.dinneraddresstype != '') {
        //       if (this.dinneraddresstype == "home") {
        //         localStorage.setItem('Dadd', "Home Address")
        //       }
        //       if (this.dinneraddresstype == "work") {
        //         localStorage.setItem('Dadd', "Work Address")
        //       }
        //     }
        //     let today = new Date().toISOString();
        //     if (today <= this.enddate) {
        //       var curr = new Date(this.enddate)
        //       let first = curr.getDate()
        //       let last = first + 1;
        //       this.newdate = new Date(curr.setDate(last)).toISOString();
        //       localStorage.setItem('StartDate', this.newdate)
        //       let newlast = first + this.mealdays + 1;
        //       this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
        //       localStorage.setItem('endDate', this.renewmealday);
        //     }
        //     else if (today > this.enddate) {
        //       var curr = new Date()
        //       let first = curr.getDate()
        //       let last = first + 1;
        //       this.newdate = new Date(curr.setDate(last)).toISOString();
        //       localStorage.setItem('StartDate', this.newdate)
        //       let newlast = first + this.mealdays + 1;
        //       this.renewmealday = new Date(curr.setDate(newlast)).toISOString();
        //       localStorage.setItem('endDate', this.renewmealday);
        //     }
        //     this.navCtrl.setRoot('CheckoutPage');
        //   }
        //   else {
        //     localStorage.setItem('subscription_id',id);
        //     localStorage.setItem('renewis','1')
        //     localStorage.setItem('renewis_id','0');
        //     localStorage.setItem('homeid', this.home_id)
        //     localStorage.setItem('workid', this.work_id)
        //     localStorage.setItem('Hflatno', this.Hflatno);
        //     localStorage.setItem('Haddline1', this.Hadd1);
        //     localStorage.setItem('Haddline2', this.Hadd2);

        //     localStorage.setItem('getfirstpincodearea',this.Wareaname);
        //     localStorage.setItem('getsecondareapindata',this.Wpincode);
        //     localStorage.setItem('pincode',this.Hpincode);
        //    localStorage.setItem('areaname',this.Hareaname);
        //     localStorage.setItem('getsecondpincodeid',this.Hareaid);
        //     localStorage.setItem('thisdataid',this.Hareaid);
        //     localStorage.setItem('getfirstpincodeid',this.Wareaid);
        //     localStorage.setItem('pincode', this.Hpincode);
        //     localStorage.setItem('Wflatno', this.Wflatno);
        //     localStorage.setItem('Waddline1', this.Wadd1);
        //     localStorage.setItem('Waddline2', this.Wadd2);
        //     localStorage.setItem('workpincode', this.Wpincode);
        //     let today = new Date().toISOString();
        //     if (today <= this.enddate) {
        //       var curr = new Date(this.enddate);
        //       let first = curr.getDate();
        //       let last = first + 1;
        //       this.newdate = new Date(curr.setDate(last)).toISOString();
        //       localStorage.setItem('StartDate', this.newdate);
        //     }
        //     else if (today > this.enddate) {
        //       var curr = new Date();
        //       let first = curr.getDate()
        //       let last = first + 1;
        //       this.newdate = new Date(curr.setDate(last)).toISOString();
        //       localStorage.setItem('StartDate', this.newdate)
        //     }
        //     this.navCtrl.setRoot('MealtypePage');
        //   }
        // }
      }
    }
  }
  Back() {
    this.navCtrl.setRoot('DashboardPage');
  }

  onLoadPreferenceData() {
    this.prefernceTypArr = [];
    this.lm_salad='';
    this.dm_salad='';
      localStorage.setItem('prefernceTypArr', JSON.stringify(this.lunchprefArray));
      if(this.lunchprefArray)
      {
        this.prefernceTypArr = this.lunchprefArray;
        for (var i = 0; i < this.prefernceTypArr['products'].length; i++) {
          if (this.prefernceTypArr.meal == 'Lunch Meal') {
              this.lunch_products = this.prefernceTypArr['products'];
              localStorage.setItem('lunch_products', JSON.stringify(this.lunch_products));
              for (var j = 0; j < this.prefernceTypArr['products'].length; j++) {
                // Roti or Phulaka
                if (this.prefernceTypArr['products'][j].category_id == '1') {
                  if (j <= 1) {
                    if (j == 0) {     
                      //this.lm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product + '/');
                      this.lm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                     
                    }
                    // if (j == 1) {
                    //   if (this.prefernceTypArr['products'][j].quantity != this.prefernceTypArr['products'][j - 1].quantity) {
                    //     this.lm_roti = this.lm_roti + (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                    //   } else {
                    //     this.lm_roti = this.lm_roti + (this.prefernceTypArr['products'][j].product);
                    //   }
                    //   
                    // }
                  }
                }
                // Sabji
                if (this.prefernceTypArr['products'][j].category_id == '5') {
                  this.lm_sabji = ',Sabji';
                }
                // Rice
                if (this.prefernceTypArr['products'][j].category_id == '2') {
                  this.lm_rice = this.prefernceTypArr['products'][j].product;
                  this.lm_rice = this.lm_rice + ' Rice';
                }
                // Dal
                if (this.prefernceTypArr['products'][j].category_id == '7') {
                  this.lm_dal = '1';
                }
                // // Salad
                if (this.prefernceTypArr['products'][j].category_id == '4') {
                  this.lm_salad = '1';
                }
              }
              this.ricecount =0;
              for (var asd = 0; asd < this.lunch_products.length; asd++) {
                this.lunch_products[asd]['extra_qty'] = this.lunch_products[asd]['extra_qty'];
                this.lunch_products[asd]['extra_amount'] = '0';
                if (this.lunch_products[asd]['category_id'] == '2') {
                  // if (this.lunch_products[asd]['selected'] == '1') {
                  //   this.lunch_products[asd]['selected'] = '1';
                  // } else {
                  //   this.lunch_products[asd]['selected'] = '0';
                  // }
                  console.log(this.lunch_products[asd]['selected']);
                  if (this.lunch_products[asd]['selected'] == '1') {
                    this.ricecount=1;
                    this.lunch_products[asd]['selected'] = '1';
                  } else {
                    if(this.ricecount==0)
                    {
                      this.ricecount =1;
                      this.lunch_products[asd]['selected'] = '1';
                    }
                    else{
                      this.lunch_products[asd]['selected'] = '0';
                    }
                    
                  }

                } else if (this.lunch_products[asd]['category_id'] == '1') {
                  if (asd == 0) {
                    this.lunch_products[0]['selected'] = '1';
                    
                    this.totallunch = parseFloat(this.lunch_products[asd]['extra_qty']) + parseFloat(this.lunch_products[asd]['quantity']);
                    this.lm_roti = this.totallunch +' '+ this.lunch_products[asd]['product'];
                    localStorage.setItem('renewrotistringlunch',this.lm_roti);
                    var countday = localStorage.getItem('mealdays');
                    if(localStorage.getItem('lm_rice')!="")
                    {
                      this.extraRoti_Lunch =parseFloat(this.lunch_products[asd]['extra_qty']) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                      
                    }
                    else{
                      if(this.lunch_products[asd]['extra_qty']!='0')
                      {
                        this.subtract = parseFloat(this.lunch_products[asd]['extra_qty']) - 1;
                      }
                      else{
                        this.subtract = 0;
                      }                      
                      this.extraRoti_Lunch =parseFloat(this.subtract) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                      
                    }
                    if(localStorage.getItem('extraRoti_Lunch')=='0')
                    {
                      localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
                      if (this.lm_dal == '1' && this.lm_salad == '1') {
                        this.preferenceProducts = this.lm_roti+this.lm_sabji+',Dal,'+this.lm_rice+' and Salad';
                      } else if (this.lm_dal == '1' && this.lm_salad == '') {
                        this.preferenceProducts = this.lm_roti+this.lm_sabji+',Dal and '+this.lm_rice;
                      }
                    }
                  } else {
                    this.lunch_products[asd]['selected'] = '0';
                    this.totallunch = parseFloat(this.lunch_products[asd]['extra_qty']) + parseFloat(this.lunch_products[asd]['quantity']);
                    this.lm_roti = this.totallunch +' '+ this.lunch_products[asd]['product'];
                    localStorage.setItem('renewrotistringlunch',this.lm_roti);
                    var countday = localStorage.getItem('mealdays');
                    if(localStorage.getItem('lm_rice')!="")
                    {
                      this.extraRoti_Lunch =parseFloat(this.lunch_products[asd]['extra_qty']) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                      
                    }
                    else{
                      if(this.lunch_products[asd]['extra_qty']!='0')
                      {
                        this.subtract = parseFloat(this.lunch_products[asd]['extra_qty']) - 1;
                      }
                      else{
                        this.subtract = 0;
                      }                      
                      this.extraRoti_Lunch =parseFloat(this.subtract) * parseFloat(this.lunch_products[asd]['price']) * parseFloat(countday);
                      
                    }
                    if(localStorage.getItem('extraRoti_Lunch')=='0')
                    {
                      localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
                      if (this.lm_dal == '1' && this.lm_salad == '1') {
                        this.preferenceProducts = this.lm_roti+this.lm_sabji+',Dal,'+this.lm_rice+' and Salad';
                      } else if (this.lm_dal == '1' && this.lm_salad == '') {
                        this.preferenceProducts = this.lm_roti+this.lm_sabji+',Dal and '+this.lm_rice;
                      }
                    }
                  }
                } else {
                  this.lunch_products[asd]['selected'] = '0';
                }
              }
              
              
              localStorage.setItem('preferenceProducts_default', this.preferenceProducts);
              localStorage.setItem('preferenceProducts', this.preferenceProducts);
              localStorage.setItem('lm_roti', this.lm_roti);
              localStorage.setItem('lm_sabji', this.lm_sabji);
              localStorage.setItem('lm_rice', this.lm_rice);
              localStorage.setItem('lm_dal', this.lm_dal);
              localStorage.setItem('lm_salad', this.lm_salad);
            
          }
        }
      }
      /////
      localStorage.setItem('prefernceTypArr', JSON.stringify(this.dinnerprefArray));
      if(this.dinnerprefArray)
      {
        this.prefernceTypArr = this.dinnerprefArray;
        for (var i = 0; i < this.prefernceTypArr['products'].length; i++) {
          if (this.prefernceTypArr.meal == 'Dinner Meal') {
              this.dinner_products = this.prefernceTypArr['products'];
               localStorage.setItem('dinner_products', JSON.stringify(this.dinner_products));
              for (var j = 0; j < this.prefernceTypArr['products'].length; j++) {
                // Roti or Phulaka
                if (this.prefernceTypArr['products'][j].category_id == '1') {
                  if (j <= 1) {
                    if (j == 0) {
                      //this.dm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product + '/');
                      this.dm_roti = (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                    }
                    // if (j == 1) {
                    //   if (this.prefernceTypArr['products'][j].quantity != this.prefernceTypArr['products'][j - 1].quantity) {
                    //     this.dm_roti = this.dm_roti + (this.prefernceTypArr['products'][j].quantity + ' ' + this.prefernceTypArr['products'][j].product);
                    //  } else {
                    //     this.dm_roti = this.dm_roti + (this.prefernceTypArr['products'][j].product);
                    //   }
                    // }
                  }
                }
                // Sabji
                if (this.prefernceTypArr['products'][j].category_id == '5') {
                  this.dm_sabji =',Sabji';
                }
                // Rice
                
                if (this.prefernceTypArr['products'][j].category_id == '2') {
                  console.log(this.prefernceTypArr['products'][j].category_id);
                  this.dm_rice = this.prefernceTypArr['products'][j].product;
                  this.dm_rice = this.dm_rice + ' Rice';
                }
                // Dal
                if (this.prefernceTypArr['products'][j].category_id == '7') {
                  this.dm_dal = '1';
                }
                // // Salad
                if (this.prefernceTypArr['products'][j].category_id == '4') {
                  this.dm_salad = '1';
                }
              }
              this.ricecount =0;
              for (var din_prod = 0; din_prod < this.dinner_products.length; din_prod++) {
                this.dinner_products[din_prod]['extra_qty'] = this.dinner_products[din_prod]['extra_qty'];
                this.dinner_products[din_prod]['extra_amount'] = '0';
                if (this.dinner_products[din_prod]['category_id'] == '2') {
                  // if (this.dinner_products[din_prod]['selected'] == '1') {
                  //   this.dinner_products[din_prod]['selected'] = '1';
                  // } else {
                  //   this.dinner_products[din_prod]['selected'] = '0';
                  // }
                  if (this.dinner_products[din_prod]['selected'] == '1') {
                    this.ricecount=1;
                    this.dinner_products[din_prod]['selected'] = '1';
                  } else {
                    if(this.ricecount==0)
                    {
                      this.ricecount =1;
                      this.dinner_products[din_prod]['selected'] = '1';
                    }
                    else{
                      this.dinner_products[din_prod]['selected'] = '0';
                    }
                    
                  }
                } else if (this.dinner_products[din_prod]['category_id'] == '1') {
                  if (din_prod == 0) {
                    this.dinner_products[0]['selected'] = '1';
                    this.totaldinner = parseFloat(this.dinner_products[din_prod]['extra_qty']) + parseFloat(this.dinner_products[din_prod]['quantity']);
                    this.dm_roti = this.totaldinner +' '+ this.dinner_products[din_prod]['product'];
                    localStorage.setItem('renewrotistringdinner',this.dm_roti);
                    //
                    var countday = localStorage.getItem('mealdays');
                    if(localStorage.getItem('lm_rice')!="")
                    {
                      this.extraRoti_Dinner =parseFloat(this.dinner_products[din_prod]['extra_qty']) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                      
                    }
                    else{
                      if(this.dinner_products[din_prod]['extra_qty']!='0')
                      {
                        this.subtract = parseFloat(this.dinner_products[din_prod]['extra_qty']) - 1;
                      }
                      else{
                        this.subtract = 0;
                      }                      
                      this.extraRoti_Dinner =parseFloat(this.subtract) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                      
                    }
                    if(localStorage.getItem('extraRoti_Dinner')=='0')
                    {
                      localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
                      if (this.dm_dal == '1' && this.dm_salad == '1') {
                        this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+',Dal,'+this.dm_rice+' and Salad';
                      } else if (this.dm_dal == '1' && this.dm_salad == '') {
                        this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+',Dal and '+ this.dm_rice;
                      }
                    }
                    //

                  } else {
                    this.dinner_products[din_prod]['selected'] = '0';
                    this.totaldinner = parseFloat(this.dinner_products[din_prod]['extra_qty']) + parseFloat(this.dinner_products[din_prod]['quantity']);
                    this.dm_roti = this.totaldinner +' '+ this.dinner_products[din_prod]['product'];
                    localStorage.setItem('renewrotistringdinner',this.dm_roti);
                    //
                    var countday = localStorage.getItem('mealdays');
                    if(localStorage.getItem('lm_rice')!="")
                    {
                      this.extraRoti_Dinner =parseFloat(this.dinner_products[din_prod]['extra_qty']) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                      
                    }
                    else{
                      if(this.dinner_products[din_prod]['extra_qty']!='0')
                      {
                        this.subtract = parseFloat(this.dinner_products[din_prod]['extra_qty']) - 1;
                      }
                      else{
                        this.subtract = 0;
                      }                      
                      this.extraRoti_Dinner =parseFloat(this.subtract) * parseFloat(this.dinner_products[din_prod]['price']) * parseFloat(countday);
                      
                    }
                    if(localStorage.getItem('extraRoti_Dinner')=='0')
                    {
                      localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
                      console.log(this.dm_rice)
                      if (this.dm_dal == '1' && this.dm_salad == '1') {
                        this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+',Dal,'+this.dm_rice+' and Salad';
                      } else if (this.dm_dal == '1' && this.dm_salad == '') {
                        this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+',Dal and '+ this.dm_rice;
                      }
                    }                    
                  }
                } else {
                  this.dinner_products[din_prod]['selected'] = '0';
                }
              }
              
              //this.preferenceProductsDinner = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
              localStorage.setItem('preferenceProductsDinner_default', this.preferenceProductsDinner);
              localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);

              localStorage.setItem('dm_roti', this.dm_roti);
              localStorage.setItem('dm_sabji', this.dm_sabji);
              localStorage.setItem('dm_rice', this.dm_rice);
              localStorage.setItem('dm_dal', this.dm_dal);
              localStorage.setItem('dm_salad', this.dm_salad);
            
          }
        }
      }


    
    this.preferenceString();
  }

  preferenceString() {
    // Lunch Starts Here
    //Rice meal string
    if (this.rcm_lm_rice == '1' && this.rcm_lm_dal == '1' && this.rcm_lm_salad == '1') {
      this.preferenceProducts = this.rcm_lm_roti+this.rcm_lm_sabji+',Dal,Rice and Salad';
      localStorage.setItem('preferenceProducts', this.preferenceProducts)
    } else if (this.rcm_lm_rice == '1' && this.rcm_lm_dal == '1' && this.rcm_lm_salad == '') {
      this.preferenceProducts = this.rcm_lm_roti+this.rcm_lm_sabji+',Dal and Rice';
      localStorage.setItem('preferenceProducts', this.preferenceProducts)
    }
    //Roti meal string
    if (this.rtm_lm_dal == '1' && this.rtm_lm_salad == '1') {
      this.preferenceProductsRoti = this.rtm_lm_roti+this.rtm_lm_sabji+',Dal and Salad';
      localStorage.setItem('preferenceProductsRoti', this.preferenceProductsRoti)
    } else if (this.rcm_lm_dal == '1' && this.rcm_lm_salad == '') {
      this.preferenceProductsRoti = this.rcm_lm_roti+this.rcm_lm_sabji+', and Dal';
      localStorage.setItem('preferenceProductsRoti', this.preferenceProductsRoti)
    }
    // Lunch Ends here

    // Dinner Starts Here
    //Rice meal string
    if (this.rcm_dm_rice == '1' && this.rcm_dm_dal == '1' && this.rcm_dm_salad == '1') {
      this.preferenceProductsDinner = this.rcm_dm_roti+this.rcm_dm_sabji+',Dal,Rice and Salad';
      localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner)
    } else if (this.rcm_dm_rice == '1' && this.rcm_dm_dal == '1' && this.rcm_dm_salad == '') {
      this.preferenceProductsDinner = this.rcm_dm_roti+this.rcm_dm_sabji+',Dal and Rice';
      localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner)
    }
    //Roti meal string
    if (this.rtm_dm_dal == '1' && this.rtm_dm_salad == '1') {
      this.preferenceProductsRotiDinner = this.rtm_dm_roti+this.rtm_dm_sabji+',Dal and Salad';
      localStorage.setItem('preferenceProductsRotiDinner', this.preferenceProductsRotiDinner)
    } else if (this.rcm_dm_dal == '1' && this.rcm_dm_salad == '') {
      this.preferenceProductsRotiDinner = this.rcm_dm_roti+this.rcm_dm_sabji +', and Dal';
      localStorage.setItem('preferenceProductsRotiDinner', this.preferenceProductsRotiDinner)
    }
    // Lunch Ends here  preflunchmeal

      if(localStorage.getItem('mealType')=='1')
      {
        localStorage.setItem('mealType','Lunch');
      }
      else if(localStorage.getItem('mealType')=='2'){
        localStorage.setItem('mealType','Dinner');
      }
      else if(localStorage.getItem('mealType')=='3'){
        localStorage.setItem('mealType','Both');
      }
    if (this.preflunchmeal == 'Rice Meal' || this.prefdinnermeal == 'Rice Meal') {
      if (localStorage.getItem('mealType') == "Lunch") {
        localStorage.setItem('lunchpreference', this.preferenceProducts)
      }
      if (localStorage.getItem('mealType') == "Dinner") {
        localStorage.setItem('dinnerpreference', this.preferenceProductsDinner)
      }
      if (localStorage.getItem('mealType') == "Both") {
        localStorage.setItem('lunchpreference', this.preferenceProducts)
        localStorage.setItem('dinnerpreference', this.preferenceProductsDinner)
      }
    }
    if (this.preflunchmeal == 'Roti Meal' || this.prefdinnermeal == 'Roti Meal') {
      if (localStorage.getItem('mealType') == "Lunch") {
        localStorage.setItem('lunchpreference', this.preferenceProductsRoti)
      }
      if (localStorage.getItem('mealType') == "Dinner") {
        localStorage.setItem('dinnerpreference', this.preferenceProductsRotiDinner)
      }
      if (localStorage.getItem('mealType') == "Both") {
        localStorage.setItem('lunchpreference', this.preferenceProductsRoti)
        localStorage.setItem('dinnerpreference', this.preferenceProductsRotiDinner)
      }
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
          this.navCtrl.setRoot('DashboardPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }

}
