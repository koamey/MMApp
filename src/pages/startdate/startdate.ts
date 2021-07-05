import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/**
 * Generated class for the StartdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startdate',
  templateUrl: 'startdate.html',
})
export class StartdatePage {
  today = new Date();
  selecteddate
  token
  id
  minDate: string = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 3).toISOString().valueOf();
  enddate
  firstDay
  lastDay
  conbut
  Active: boolean
  days
  selecteddateis
  coloropacity
  coundays = 1;
  total;
  disableSubmitButton;
  opacity;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private util: UtilService,
    private translate: TranslateService,
    private apiService: APIService,
    private builder: FormBuilder,
    private push: PushService,
    private storage: Storage,
    public platform: Platform,
    public viewCtrl: ViewController
  ) {
    this.selecteddateis = navParams.get('selectdateis');

    let backAction = platform.registerBackButtonAction(() => {
      //localStorage.removeItem('subscription_id')
      //this.navCtrl.pop();
      this.Back();
      backAction();
    }, 2)
  }
  ionViewDidLoad() {
  }
  dtcolor
  ngOnInit() {
    this.Active = false
    //  this.disableSubmitButton = true;
    this.conbut = "#d4d3d1";
    this.dtcolor = "rgb(153,153,153)";
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('id');
    this.selecteddate = localStorage.getItem('StartDate')
    console.log(this.selecteddate);
    this.days = parseInt(localStorage.getItem('mealdays'));
    this.total = this.days - this.coundays
    var curr = new Date(this.selecteddate); // get current date
    let first = curr.getDate(); // First day is the day of the month - the day of the week
    let last = first + parseInt(this.total); // last day is the first day + 6
    this.firstDay = new Date(curr.setDate(first)).toISOString(),
      this.lastDay = new Date(curr.setDate(last)).toISOString();
    localStorage.setItem('endDate', this.lastDay);
    if (this.selecteddate != null) {
      this.days = parseInt(localStorage.getItem('mealdays'));
      this.Active = true;
      this.conbut = "rgb(242, 155, 17)"
      this.coloropacity = 'datetime-text coloropacity';
    }
    else {
      this.coloropacity = 'datetime-text coloropacity1';
    }
    if (localStorage.getItem('statdatescreen') != null) {
      this.navCtrl.setRoot('ChoosedeliverytimePage');
    }
  }
  completedate
  continueclick() {
    this.completedate = localStorage.getItem('endDate')
    if (this.selecteddate == '' || this.selecteddate == null) {
      this.util.alert(this.translate.instant('Please Select Date'), '');
      return;
    } else {
      // this.util.showLoader();
      localStorage.setItem('statdatescreen', 'yes');
      if (this.selecteddateis != null) {
        this.navCtrl.setRoot('CheckoutPage');
        return;
      }
      else {
        this.navCtrl.setRoot('ChoosedeliverytimePage');
      }
      // let data = JSON.parse(JSON.stringify(this.selecteddate, this.id, this.token));
      // this.apiService.selectstartdate(this.selecteddate, this.id, this.token, this.completedate).then(res => {
      //   this.util.hideLoader();
      //   if (res.success) {
      //     this.push.init(this.apiService.getSettings().pushwoosh_id);
      //     this.storage.set('welcomeShown', '1').then(() => { }, () => { });


      //   }
      //   else {
      //     this.util.alert(res.errors, '');
      //   }
      // }, (data) => {
      //   this.util.alert(this.translate.instant('Network error: API stopped working'), '');
      //   this.util.hideLoader();
      // });
      // this.navCtrl.setRoot('ChoosedeliverytimePage');
    }
  }
 
  selectdate() {
    this.coloropacity = 'datetime-text coloropacity';
    this.disableSubmitButton = false;
    this.Active = true
    this.dtcolor = 'rgb(49, 74, 93)';
    this.opacity = '100%';
    this.days = parseInt(localStorage.getItem('mealdays'));
    this.total = this.days - this.coundays
    this.conbut = "orange"
    localStorage.setItem('StartDate', this.selecteddate);
    var StartDate = localStorage.getItem('StartDate');
    let result = {};
    var curr = new Date(this.selecteddate); // get current date
    let first = curr.getDate(); // First day is the day of the month - the day of the week
    let last = first + parseInt(this.total); // last day is the first day + 6
    this.firstDay = new Date(curr.setDate(first)).toISOString(),
      this.lastDay = new Date(curr.setDate(last)).toISOString();
    localStorage.setItem('endDate', this.lastDay);
    //this.completedate=((this.lastDay).substring(0,10))
    // console.log(this.completedate)
  }

  Back() {

    localStorage.removeItem('selectprefrence');
    //this.viewCtrl.dismiss();
    this.navCtrl.setRoot('ChoosePreferencePage', {

    });
  }

}
