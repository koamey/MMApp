import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,IonicApp, AlertController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';

/**
 * Generated class for the SwitchAddressTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-switch-address-time',
  templateUrl: 'switch-address-time.html',
})
export class SwitchAddressTimePage {
  // today = new Date();
  // minDate: string = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString();

  today = localStorage.getItem('guestmealdate');//new Date();
  today1: string = this.today;
  minDate1: string = this.today1.toString();
  minDate2: string
  today2: string

  fromDate
  meal_type
  selecteddate1
  submitButton = ' rgb(216, 216, 216)';
  submitButton1 = ' rgb(216, 216, 216)';
  selecteddate2
  toDate
  tokendata
  customer_id
  customer_subscription_id
  AddressTimeArray
  homeArray
  workArray
  flat_no: any;
  address1: any;
  address2: any;
  area: any;
  city: any;
  state: any;
  pincode: any;
  homeColor
  workColor
  mealType
  conmessage
  showcheckbox: boolean = false
  address_name: any;
  fromDate1: any;
  toDate1: any;
  delivery_lunch_timing
  showLunchDiv: boolean;

  delivery_dinner_timing: any;
  selecteddate11: any;
  selecteddate22p: any;
  delivery_lunch_timing2: any;
  delivery_dinner_timing2: any;
  Ltime1: string;
  Ltime2: string;
  Dtime1: string;
  Dtime2: string;
  lunch_time_selected: any;
  dinner_time_selected: any;
  address_select_lunch: any;
  address_select_dinner: any;
  customer_address_id: any;
  selecteddate22: any;
  deladd1 = "white"
  deladd2 = "gray"
  deltime1 = "white"
  deltime2 = "gray"
  th1
  tw1
  maxDate: string;
  selectedtime: any;
  disableRadio: boolean = true;
  disableAddress: boolean = true;
  selecteddate: any;
  homeID: any;
  workId: any;
  disableRadio1: boolean = true;
  disabletime: boolean = true;
  meal_type1: any;
  meal_type2: any;
  homeBorder: string;
  checktabClick: any;
  homeBorder1: string;
  workBorder: string;
  timeBorder1: string;
  timeBorder2: string;
  checkTimeTabClick: any;
  enddate: string;
  minDateTime: any;
  timeBorder3: string;
  timeBorder4: string;
  homestring: any;
  workstring: any;
  boxactive2
  boxactive
  lunch_settime
  lunch_set
  dinner_settime
  dinner_set
  subscriptionenddate: any;
  dinner
  lunch
  weekend_end
  rdDefaultlunch1
  rdDefaultdinner1
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private util: UtilService,
    private translate: TranslateService,
    private apiService: APIService,
    public platform: Platform,
    public alertCtrl: AlertController,
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
    this.dinner = '';
    this.lunch = '';
    this.enddate = localStorage.getItem('endDate');
    this.minDate2 = this.enddate.toString();
    this.maxDate = new Date(localStorage.getItem('endDate')).toISOString();
    this.mealType = localStorage.getItem('mealType');
    this.tokendata = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    this.apiService.getexistingaddress_time(this.tokendata, this.customer_id).then((res) => {
      this.util.hideLoader();
      if(res)
      {
        this.AddressTimeArray = res['data'];
        for (var i = 0; i < this.AddressTimeArray.length; i++) {
          if ('home' == this.AddressTimeArray[i].address_type) {
            this.flat_no = this.AddressTimeArray[i].flat_no
            this.address1 = this.AddressTimeArray[i].address1
            this.address2 = this.AddressTimeArray[i].address2
            this.area = this.AddressTimeArray[i].area
            this.city = this.AddressTimeArray[i].city
            this.state = this.AddressTimeArray[i].state
            //this.address_name = this.AddressTimeArray[i].customer_address_id
            this.pincode = this.AddressTimeArray[i].pincode;
            if (this.flat_no != '' && this.address1 != '' && this.address2 != '') {
              this.homestring = this.flat_no + ' ' + this.address1 + ' ' + this.address2 + ' ' + this.area + ' ' + this.city + '-' + this.pincode;
              this.boxactive = '0';
              localStorage.setItem('weekend', this.boxactive);
            }
            else {
              this.homestring = '';
              this.boxactive = '1';
              localStorage.setItem('weekend', this.boxactive);
            }

            this.delivery_lunch_timing = this.AddressTimeArray[i].delivery_lunch_timing
            this.delivery_lunch_timing2 = this.AddressTimeArray[i].delivery_lunch_timing2
            this.delivery_dinner_timing = this.AddressTimeArray[i].delivery_dinner_timing
            this.delivery_dinner_timing2 = this.AddressTimeArray[i].delivery_dinner_timing2
            this.lunch_time_selected = this.AddressTimeArray[i].lunch_time_selected
            this.dinner_time_selected = this.AddressTimeArray[i].dinner_time_selected
            this.address_select_lunch = this.AddressTimeArray[i].address_select_lunch
            this.address_select_dinner = this.AddressTimeArray[i].address_select_dinner
            this.customer_address_id = this.AddressTimeArray[i].customer_address_id
            this.homeID = this.customer_address_id

          }
          if ('work' == this.AddressTimeArray[i].address_type) {
            this.flat_no = this.AddressTimeArray[i].flat_no
            this.address1 = this.AddressTimeArray[i].address1
            this.address2 = this.AddressTimeArray[i].address2
            this.area = this.AddressTimeArray[i].area
            this.city = this.AddressTimeArray[i].city
            this.state = this.AddressTimeArray[i].state
            this.pincode = this.AddressTimeArray[i].pincode
            // this.address_name = this.AddressTimeArray[i].customer_address_id
            if (this.flat_no != '' && this.address1 != '' && this.address2 != '') {
              this.workstring = this.flat_no + ' ' + this.address1 + ' ' + this.address2 + ' ' + this.area + ' ' + this.city + '-' + this.pincode;
              this.boxactive2 = '0';
            }
            else {
              this.workstring = '';
              this.boxactive2 = '1';
            }
            this.delivery_lunch_timing = this.AddressTimeArray[i].delivery_lunch_timing
            this.delivery_lunch_timing2 = this.AddressTimeArray[i].delivery_lunch_timing2
            this.delivery_dinner_timing = this.AddressTimeArray[i].delivery_dinner_timing
            this.delivery_dinner_timing2 = this.AddressTimeArray[i].delivery_dinner_timing2
            this.lunch_time_selected = this.AddressTimeArray[i].lunch_time_selected
            this.dinner_time_selected = this.AddressTimeArray[i].dinner_time_selected
            this.address_select_lunch = this.AddressTimeArray[i].address_select_lunch
            this.address_select_dinner = this.AddressTimeArray[i].address_select_dinner
            this.customer_address_id = this.AddressTimeArray[i].customer_address_id
            this.workId = this.customer_address_id
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
    if (this.mealType == 'Both' || this.mealType == 'Lunch') {
      this.showLunchDiv = true
      this.showDinnerDiv = false
    }
    if (this.mealType == 'Dinner') {
      //  this.showLunchDiv=true
      this.showDinnerDiv = true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwitchAddressTimePage');
  }

  Back() {
    if (this.ActiveChkMethod == true) {
      this.ActiveChkMethod = false;
      this.ActiveChkSumm = true;
    }
    else {
      this.navCtrl.setRoot('DashboardPage');
    }

  }
  rdDefaultLunch
  rdDefaultDinner
  rdDefaultdsat
  rdDefaultdsun
  rdDefaultLunchT
  rdDefaultDinnerT
  showDinnerDiv: boolean
  radioGroupChange(e) {
    this.meal_type1 = e;
    if (this.meal_type1 == 'Lunch') {
      if (this.rdDefaultLunch) {
        this.meal_type1 = '';
        this.rdDefaultLunch = false;
        localStorage.setItem('Lunchset', '');
      } else {
        this.rdDefaultLunch = true;
        localStorage.setItem('Lunchset', this.meal_type1);
        this.meal_type1 = e;
      }
    }
    if (this.meal_type1 == 'Dinner') {
      if (this.rdDefaultDinner) {
        this.rdDefaultDinner = false;
        this.meal_type1 = '';
        localStorage.setItem('Dinnerset', '');
      } else {
        this.rdDefaultDinner = true;
        this.meal_type1 = e;
        localStorage.setItem('Dinnerset', this.meal_type1);
      }
    }
    if(localStorage.getItem('Lunchset')=='Lunch' && localStorage.getItem('Dinnerset')=='Dinner')
    {
      this.meal_type1='both';
      this.address_name = "";
    }
    else if(localStorage.getItem('Lunchset')=='Lunch')
    {
      this.meal_type1='Lunch';
    }
    else if(localStorage.getItem('Dinnerset')=='Dinner')
    {
      this.meal_type1='Dinner';
    }
    console.log(this.meal_type1);
    this.util.showLoader();
    this.apiService.selecteddatetime(this.tokendata, this.customer_id, this.fromDate, this.toDate, this.meal_type1).then((res) => {
      this.util.hideLoader();
      if(res)
      {
        this.selecteddate = res['data'].selecteddate;
        var element = document.getElementById('homeaddress');
        if(element)
        {
          element.classList.remove("introborder");
        }
        
        var elements = document.getElementById('workaddress');
        if(elements)
        {
          elements.classList.remove("introborder");
        }
        
        if (this.homeID == this.selecteddate) {
          localStorage.setItem('l1check', 'home');
          this.address_name = 'home'
          this.workColor = "#ffffff"
          this.homeColor = "#00CC66";
          this.worktxt = "black"
          this.hometxt = "white"
          this.th1 = "white";
          this.homeBorder = 'none !important'
          this.workBorder = '0.13vh solid #000 !imporatnt';
          var elements = document.getElementById('workaddress');
          elements.style.border = null;
          var x = document.getElementById('homeaddress');
          x.style.border = 'none';
          var y = document.getElementById('workaddress');
          if(y)
          {
            y.classList.add("introborder");
          }
          
          var element = document.getElementById('homeaddress');
          if(element)
          {
            element.classList.remove("introborder");
          }
          
        }
        else if (this.workId == this.selecteddate) {
          console.log('work in');
          localStorage.setItem('l1check', 'work');
          this.showcheckbox = true
          this.address_name = 'work'
          this.workColor = "#00CC66";
          this.homeColor = "#ffffff"
          this.worktxt = "white"
          this.hometxt = "black"
          this.tw1 = "white";
          this.workBorder = 'none !imporatnt'
          this.homeBorder = '0.13vh solid #000 !imporatnt';

          var elements = document.getElementById('homeaddress');
          elements.style.border = null;
          var x = document.getElementById('workaddress');
          x.style.border = 'none';
          var y = document.getElementById('homeaddress');
          if(y)
          {
            y.classList.add("introborder");
          }
          
          var element = document.getElementById('workaddress');
          if(element)
          {
            element.classList.remove("introborder");
          }
          

        }
        else{
          this.address_name = ''
        }
        if(this.selecteddate=="")
        {
          localStorage.setItem('l1check','');
            this.address_name = ''
            this.workColor = "#ffffff"
            this.homeColor = "#ffffff";
            this.worktxt = "black"
            this.hometxt = "black"
            this.th1 = "black";
            this.tw1 = "black";
            this.homeBorder = '0.13vh solid #000';
            this.workBorder = '0.13vh solid #000';
        }
      }
      else{
        this.conmessage = res['message'];
        this.showConfirmAlert();
      }
    }, (res) => {
      this.conmessage =  "Something's wrong, let's try again?";
      this.showConfirmAlert();
    });
    this.submitButton = "rgb(242, 155, 17)";
    this.meal_type1 = e;
    if (this.homeID == this.selecteddate) {
      this.address_name = 'home'
    }
    if (this.workId == this.selecteddate) {
      this.address_name = 'work'
    }
    this.disableAddress = false;
  }
  radioGroupChange1(e) {
    this.disabletime = false;
    this.meal_type2 = e;
    if (this.meal_type2 == 'Lunch') {
      this.rdDefaultdinner1=false;
      this.rdDefaultlunch1=true;
      if (this.rdDefaultLunchT) {
        this.rdDefaultLunchT = false;
        localStorage.setItem('Lunchsettime', '');
      }
      else {
        this.rdDefaultLunchT = true;
        localStorage.setItem('Lunchsettime', this.meal_type2);
      }

    }

    if (this.meal_type2 == 'Dinner') {
    this.rdDefaultdinner1=true;
    this.rdDefaultlunch1=false;
      if (this.rdDefaultDinnerT) {
        this.rdDefaultDinnerT = false;
        localStorage.setItem('Dinnersettime', '');
      }
      else {
        this.rdDefaultDinnerT = true;
        localStorage.setItem('Dinnersettime', this.meal_type2);
      }
    }
    this.util.showLoader();
    this.apiService.selecteddatetime(this.tokendata, this.customer_id, this.fromDate1, this.toDate1, this.meal_type2).then((res) => {
      this.util.hideLoader();
      if(res)
      {
        this.selectedtime = res['data'].selectedtime
        if (this.meal_type2 == 'Lunch') {
          this.showLunchDiv = true;
          this.showDinnerDiv = false;
          //this.ChooseTime1 = this.delivery_lunch_timing
        }
        if (this.meal_type2 == 'Dinner') {
          this.showLunchDiv = false;
          this.showDinnerDiv = true;
          this.ChooseTime1 = '';
        }
        if (this.selectedtime == this.delivery_lunch_timing) {
          this.ChooseTime1 = this.delivery_lunch_timing
          this.lt1 = "white";
          this.Ltime1 = "#00CC66"
          this.timeBorder1 = 'none'
          this.timeBorder2 = '0.13vh solid #000'

        }

        if (this.selectedtime == this.delivery_lunch_timing2) {
          this.ChooseTime1 = this.delivery_lunch_timing2
          this.lt2 = "white";
          this.Ltime2 = "#00CC66"
          this.timeBorder2 = 'none'
          this.timeBorder1 = '0.13vh solid #000'
        }

        if (this.selectedtime == this.delivery_dinner_timing) {
          this.ChooseTime1 = this.delivery_dinner_timing
          this.Dtime1 = "#00CC66";
          this.dt1 = "white";
          this.timeBorder3 = 'none'
          this.timeBorder4 = '0.13vh solid #000'
        }

        if (this.selectedtime == this.delivery_dinner_timing2) {
          this.ChooseTime1 = this.delivery_dinner_timing2
          this.Dtime2 = "#00CC66";
          this.dt2 = "white";
          this.timeBorder4 = 'none'
          this.timeBorder3 = '0.13vh solid #000'
        }
      }

    }, (res) => {
      this.conmessage =  "Something's wrong, let's try again?";;
      this.showConfirmAlert();
    });
  }
  setdate
  activeto: boolean = false
  fromSelectdate() {
    //this.submitButton="rgb(242, 155, 17)";
    // this.submitButton="rgb(242, 155, 17)";

    this.subscriptionenddate = localStorage.getItem('endDate');
    this.fromDate = this.selecteddate1;
    this.minDate1 = this.fromDate.toString();
    if (this.minDate1 > this.subscriptionenddate) {
      this.selecteddate1 = '';
      this.fromDate=''
      this.util.alert(this.translate.instant('Please Select Correct From Date'), '');
      return;
    }
    // let tempDate = new Date(this.selecteddate1);
    // let upcomingDate = tempDate.setDate(tempDate.getDate() + 0 * 1);
    // this.setdate = new Date(upcomingDate).toISOString();
    this.activeto = true;
    this.selecteddate2 = '';
    this.toDate = '';
    if (this.selecteddate2 != '') {
      //this.setdate = '';
      this.selecteddate2 = '';
      //  this.setdate = new Date(upcomingDate).toISOString();
    }
    //  localStorage.setItem('date', this.date);
  }
  toSelectdate() {


    this.submitButton = "rgb(242, 155, 17)";
    this.toDate = this.selecteddate2;
    this.subscriptionenddate = localStorage.getItem('endDate');
    if (this.toDate > this.subscriptionenddate) {
      this.selecteddate2 = '';
      this.toDate = '';
      this.util.alert(this.translate.instant('Please Select Correct To Date'), '');
      return;
    }

    if (this.meal_type1 == null || this.meal_type1 == ' ') {
      this.disableRadio = false;
    }
    else {
      this.disableRadio = true
    }
  }
  setdate1
  activeto1: boolean = false
  fromSelectdate1() {
    //this.submitButton="rgb(242, 155, 17)";
    // this.submitButton="rgb(242, 155, 17)";
    this.fromDate1 = this.selecteddate11;
    this.minDateTime = this.fromDate1.toString();
    this.subscriptionenddate = localStorage.getItem('endDate');
    if (this.fromDate1 > this.subscriptionenddate) {
      this.selecteddate11 = '';
      this.fromDate1=''
      this.util.alert(this.translate.instant('Please Select Correct From Date'), '');
      return;
    }
    // let tempDate = new Date(this.selecteddate11);
    // let upcomingDate = tempDate.setDate(tempDate.getDate() + 0 * 1);
    // this.setdate1 = new Date(upcomingDate).toISOString();
    // console.log('next date is', this.setdate1);
    this.activeto1 = true;
    this.selecteddate22 = '';
    this.toDate1 = '';
    if (this.selecteddate22 != '') {
      //this.setdate = '';
      this.selecteddate22 = '';
      // this.setdate1 = new Date(upcomingDate).toISOString();
    }
    //  localStorage.setItem('date', this.date);

    // console.log('date', this.date)
  }
  toSelectdate1() {
    this.submitButton1 = "rgb(242, 155, 17)"
    this.toDate1 = this.selecteddate22;
    this.subscriptionenddate = localStorage.getItem('endDate');
    if (this.toDate1 > this.subscriptionenddate) {
      this.selecteddate22 = '';
      this.toDate1 ='';
      this.util.alert(this.translate.instant('Please Select Correct To Date'), '');
      return;
    }

    if (this.meal_type2 == null || this.meal_type2 == ' ') {
      this.disableRadio1 = false;
    }
    else {
      this.disableRadio1 = true
    }

    if (this.fromDate1 == '' || this.fromDate1 == null) {
      this.util.alert(this.translate.instant('Please Select From Date'), '');
      return;
    }
  }
  hometxt
  worktxt
  onclickAddress(addressType) {
    if (this.disableAddress == true) {
      return
    }
    else {
      if (addressType == 'home') {
        this.checktabClick = addressType
        localStorage.setItem('l1check', addressType)
        this.showcheckbox = false;
        this.check1 = false
        this.check2 = false
        this.l1 = "0";
        this.l2 = "0";
        this.homeColor = "#00CC66"
        this.workColor = "#ffffff"
        this.th1 = "white";
        this.tw1 = "black";
        this.hometxt = "white"
        this.worktxt = "black"
        this.address_name = ''
        this.address_name = this.AddressTimeArray[0].customer_address_id
        if (this.address_name = this.AddressTimeArray[0].customer_address_id) {
          this.address_name = 'home'
        }

        //this.submitButton = "rgb(242, 155, 17)";
        var elements = document.getElementById('workaddress');
        elements.style.border = null;
        var x = document.getElementById('homeaddress');

        x.style.border = 'none';
        var y = document.getElementById('workaddress');
        if(y)
        {
          y.classList.add("introborder");
        }
        
        var element = document.getElementById('homeaddress');
        if(element)
        {
          element.classList.remove("introborder");
        }
        


      }

      if (addressType == 'work') {
        this.checktabClick = addressType
        localStorage.setItem('l1check', addressType)
        this.showcheckbox = true;
        this.workColor = "#00CC66"
        this.homeColor = "#ffffff"
        this.th1 = " black";
        this.tw1 = "white";
        this.hometxt = "black"
        this.worktxt = "white"
        this.address_name = ''
        this.address_name = this.AddressTimeArray[1].customer_address_id
        if (this.address_name = this.AddressTimeArray[1].customer_address_id) {
          this.address_name = 'work'
        }
        // this.submitButton = "rgb(242, 155, 17)";
        var elements = document.getElementById('homeaddress');
        elements.style.border = null;
        var x = document.getElementById('workaddress')
        x.style.border = 'none';
        var y = document.getElementById('homeaddress');
        if(y)
        {
          y.classList.add("introborder");
        }
        
        var element = document.getElementById('workaddress');
        if(element)
        {
          element.classList.remove("introborder");
        }
        
      }
    }

  }




  check1: boolean = false
  check2: boolean = false
  l1 = "0"
  l2 = "0"
  d1 = "0"
  d2 = "0"
  Saturday(e) {
    var isChecked = e.currentTarget.Lchecked1;
    this.weekend_end = localStorage.getItem('weekend');
    if (this.weekend_end == '1') {
      this.l1 = "0"
      var element = document.getElementById("checkedunchecked");
      if(element)
      {
        element.classList.add("removeunchecked");
      }
      
      this.rdDefaultdsat = false;
      this.util.alert(this.translate.instant('Home Address Not Entered'), '');
      return;
    }

    if (this.check1 == true) {
      this.rdDefaultdsat = true;
      this.l1 = "1"
      console.log('l1 sdvds', this.l1)
      localStorage.setItem('l1', this.l1)
    }
    else {
      this.rdDefaultdsat = false;
      this.l1 = "0"
      localStorage.setItem('l1', this.l1)
    }

  }
  Sunday(e) {
    var isChecked = e.currentTarget.Lchecked2;
    this.weekend_end = localStorage.getItem('weekend');
    if (this.weekend_end == '1') {
      this.rdDefaultdsun = false;
      this.l2 = "0"
      var element = document.getElementById("checkedunchecked");
      if(element)
      {
        element.classList.add("removeunchecked");
      }
      
      this.util.alert(this.translate.instant('Home Address Not Entered'), '');
      return;
    }
    if (this.check2 == true) {
      this.rdDefaultdsun = true;
      this.l2 = "1"
      console.log(this.l2);
      localStorage.setItem('l2', this.l2)
    }
    else {
      this.l2 = "0"
      this.rdDefaultdsun = false;
      localStorage.setItem('l2', this.l2)
    }

  }

  onSubmitAddress() {
    if (this.fromDate == '' || this.fromDate == null) {
      this.util.alert(this.translate.instant('Please Select From Date'), '');
      return;
    }
    if (this.toDate == '' || this.toDate == null) {
      this.util.alert(this.translate.instant('Please Select To Date'), '');
      return;
    }
    if (this.address_name == null) {
      this.util.alert(this.translate.instant('Please Select Address'), '');
      return;
    }

    this.lunch_set = localStorage.getItem('Lunchset');
    this.dinner_set = localStorage.getItem('Dinnerset');
    console.log(this.lunch_set);
    console.log(this.dinner_set);
    if(this.lunch_set==null)
    {
      localStorage.setItem('Lunchset','');
    }
    else if(this.lunch_set=='null')
    {
      localStorage.setItem('Lunchset','');
    }
    else if(this.lunch_set=='undefined')
    {
      localStorage.setItem('Lunchset','');
    }

    if(this.dinner_set==null)
    {
      localStorage.setItem('Dinnerset','');
    }
    else if(this.dinner_set=='null')
    {
      localStorage.setItem('Dinnerset','');
    }
    else if(this.dinner_set=='undefined')
    {
      localStorage.setItem('Dinnerset','');
    }
    this.lunch_set = localStorage.getItem('Lunchset');
    this.dinner_set = localStorage.getItem('Dinnerset');
    console.log(this.lunch_set);
    console.log(this.dinner_set);
    if ((this.lunch_set == 'Lunch') && (this.dinner_set == 'Dinner')) {
      this.meal_type1 = 'both';
    }
    else {
      if (this.lunch_set == 'Lunch') {
        this.meal_type1 = 'Lunch';
      }
      else {
        this.meal_type1 = 'Dinner';
      }
    }
    if (this.lunch_set == '' && this.dinner_set == '') {
      this.util.alert(this.translate.instant('Please Select Meal Type'), '');
      return;
    }
    if (this.address_name=="") {
      this.util.alert(this.translate.instant('Please Select Delivery Address'), '');
      return;
    }
    this.util.showLoader();
    this.apiService.switch_address(this.tokendata, this.address_name, this.customer_subscription_id, this.l1, this.l2, this.fromDate, this.toDate, this.meal_type1, this.customer_id).then((res) => {
      this.util.hideLoader();
      if(res['success'])
      {
        console.log('inside cancel meal Button', res);
        localStorage.setItem('Lunchset', '');
        localStorage.setItem('Dinnerset', '');
        this.util.alert(this.translate.instant(res['data']), '');
      }
      else{
        this.conmessage =  res['message'];
        this.showConfirmAlert();
      }
    }).catch((res) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert();
    });
    this.navCtrl.setRoot('DashboardPage');
  }
  onSubmitTime() {

    if (this.fromDate1 == '' || this.fromDate1 == null) {
      this.util.alert(this.translate.instant('Please Select From Date'), '');
      return;
    }
    if (this.toDate1 == '' || this.toDate1 == null) {
      this.util.alert(this.translate.instant('Please Select To Date'), '');
      return;
    }
    if (this.ChooseTime1 == null || this.ChooseTime1 == '') {
      this.util.alert(this.translate.instant('Please Select Time'), '');
      return;
    }
    console.log('onClickSubmitButton');
    this.lunch_settime = localStorage.getItem('Lunchsettime');
    this.dinner_settime = localStorage.getItem('Dinnersettime');
    if ((this.lunch_settime == 'Lunch') && (this.dinner_settime == 'Dinner')) {
      this.meal_type2 = 'both';
    }
    else {
      this.meal_type2 = this.meal_type2;
    }
    console.log(this.meal_type2);
    this.util.showLoader();
    this.apiService.switch_time(this.tokendata, this.customer_id, this.ChooseTime1, this.toDate1, this.fromDate1, this.meal_type2, this.customer_subscription_id).then((res) => {
      this.util.hideLoader();
      if(res['success'])
      {
        console.log('inside cancel meal Button', res);
        localStorage.setItem('Lunchsettime', '');
        localStorage.setItem('Dinnersettime', '');
        this.util.alert(this.translate.instant(res['data']), '');
      }
      else{
        this.conmessage =  res['message'];
        this.showConfirmAlert();
      }
     


    }).catch((res) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert();
    }); this.navCtrl.setRoot('DashboardPage');

  }
  ActiveChkSumm: boolean = true
  ActiveChkMethod: boolean = false
  onClickDAddress() {
    this.checktabClick = localStorage.getItem('l1check');
    console.log('checktabClick', this.checktabClick);
    if (this.checktabClick == 'home') {
      this.homeBorder = 'none'
      this.workBorder = '0.13vh solid #000';
    }
    if (this.checktabClick == 'work') {
      this.workBorder = 'none'
      this.homeBorder = '0.13vh solid #000';
    }
    this.ActiveChkSumm = true;

    this.ActiveChkMethod = false;
  }
  onClickDTime() {
    //localStorage.setItem('l1check','');
    if (this.checkTimeTabClick == 'time1') {
      console.log('bbbbbbbbbbbb')
      this.timeBorder1 = 'none'
      this.timeBorder2 = '0.13vh solid #000'
    }
    if (this.checkTimeTabClick == 'time2') {
      this.timeBorder2 = 'none'
      this.timeBorder1 = '0.13vh solid #000'
    }
    if (this.checkTimeTabClick == 'time3') {
      this.timeBorder3 = 'none'
      this.timeBorder4 = '0.13vh solid #000'
    }
    if (this.checkTimeTabClick == 'time4') {
      this.timeBorder4 = 'none'
      this.timeBorder3 = '0.13vh solid #000'
    }
    this.ActiveChkSumm = false;
    this.ActiveChkMethod = true;
  }

  time1
  time2
  ChooseTime1
  lt1
  lt2
  dt1
  dt2
  onclickTime1() {
    //this.submitButton1 = "rgb(242, 155, 17)"

    if (this.disabletime == true) {
      return
    }
    else {
      this.ChooseTime1 = '';
      this.checkTimeTabClick = 'time1'
      this.ChooseTime1 = this.delivery_lunch_timing
      console.log('chooseTime', this.ChooseTime1)
      this.Ltime1 = "#00CC66"
      this.Ltime2 = "#ffffff"
      this.lt1 = "white";
      this.lt2 = "black";

      var x = document.getElementById('Lunchtime1')
      x.style.border = 'none';
      var y = document.getElementById('Lunchtime2')
      y.style.border = '0.13vh solid #000';
    }
  }
  onclickTime2() {
    if (this.disabletime == true) {
      return
    }
    else {
      this.ChooseTime1 = '';
      this.checkTimeTabClick = 'time2'
      this.ChooseTime1 = this.delivery_lunch_timing2
      console.log('chooseTime', this.ChooseTime1)
      this.Ltime2 = "#00CC66"
      this.Ltime1 = "#ffffff"
      this.lt2 = "white";
      this.lt1 = "black";

      var x = document.getElementById('Lunchtime2')
      x.style.border = 'none';
      var y = document.getElementById('Lunchtime1')
      y.style.border = '0.13vh solid #000';
    }
  }
  onclickTime3() {
    if (this.disabletime == true) {
      return
    }
    else {
      this.ChooseTime1 = '';
      this.checkTimeTabClick = 'time3'
      this.ChooseTime1 = this.delivery_dinner_timing
      console.log('chooseTime', this.ChooseTime1)
      this.Dtime1 = "#00CC66"
      this.Dtime2 = "#ffffff"
      this.dt1 = "white";
      this.dt2 = "black";

      var x = document.getElementById('Dinnertime1')
      x.style.border = 'none';
      var y = document.getElementById('Dinnertime2')
      y.style.border = '0.13vh solid #000';
    }
  }
  onclickTime4() {
    if (this.disabletime == true) {
      return
    }
    else {
      // this.submitButton1 = "rgb(242, 155, 17)"
      this.ChooseTime1 = '';
      this.checkTimeTabClick = 'time4'
      this.ChooseTime1 = this.delivery_dinner_timing2
      console.log('chooseTime', this.ChooseTime1)
      this.Dtime2 = "#00CC66"
      this.Dtime1 = "#ffffff"
      this.dt2 = "white";
      this.dt1 = "black";

      var x = document.getElementById('Dinnertime2')
      x.style.border = 'none';
      var y = document.getElementById('Dinnertime1')
      y.style.border = '0.13vh solid #000';
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
          this.navCtrl.setRoot('SwitchAddressTimePage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}


