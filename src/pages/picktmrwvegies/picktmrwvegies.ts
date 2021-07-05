import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform,IonicApp } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Generated class for the PicktmrwvegiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picktmrwvegies',
  templateUrl: 'picktmrwvegies.html',
})
export class PicktmrwvegiesPage {
  custid
  custToken
  subid
  cust_sub_id
  mealid
  custtype
  Activelunch: boolean = false
  Activedinner: boolean = false
  lunchbread1
  lunchbread2
  lunchsabji1
  lunchsabji2
  dinnerbread1
  dinnerbread2
  dinnersabji1
  dinnersabji2
  lbid1
  lbid2
  lsid1
  lsid2
  lbqty1
  lbqty2
  lsqty1
  lsqty2
  dbid1
  dbid2
  dsid1
  dsid2
  dbqty1
  dbqty2
  dsqty1
  dsqty2
  mymeal1 = "white"
  mymeal2 = "gray"
  guestmeal1 = "white"
  guestmeal2 = "gray"
  selectlunchbread1 = ''
  selectlunchbread2 = ''
  selectlunchsabji1 = ''
  selectlunchsabji2 = ''
  selectdinnerbread1 = ''
  selectdinnerbread2 = ''
  selectdinnersabji1 = ''
  selectdinnersabji2 = ''
  selectlunchbread
  selectlunchsabji
  selectdinnerbread
  selectdinnersabji
  lb1 = ''
  lb2 = ''
  ls1 = ''
  ls2 = ''
  db1 = ''
  db2 = ''
  ds1 = ''
  ds2 = ''
  lunchorderid
  dinnerorderid
  Disablecontinue: boolean;
  s1: string;
  Lborder2: string;
  Lborder1: string;
  Lborder3: string;
  Lborder4: string;
  Dborder3: string;
  Dborder4: string;
  Dborder1: string;
  Dborder2: string;
  displayProducts: string = 'false';
  rid
  rqty
  activeMyMeal: boolean = true;
  guestMeal: boolean = false;
  activeGuestMeal: boolean = false;
  lunchdisable = ''
  dinnerdisable = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private util: UtilService,
    private translate: TranslateService,
    private apiService: APIService,
    private builder: FormBuilder,
    private push: PushService,
    private storage: Storage,
    public atrCtrl: AlertController,
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

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PicktmrwvegiesPage');
  }
  ngOnInit() {
    
    localStorage.removeItem('displayProducts')
    this.mealid = localStorage.getItem('mealId');
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.cust_sub_id = localStorage.getItem('customer_subscription_id');

    this.subid = localStorage.getItem('subscription_id');
    this.custtype = localStorage.getItem('custType');
    if (this.mealid == 1) {
      this.Activelunch = true;
      this.Activedinner = false;
    }
    if (this.mealid == 2) {
      this.Activelunch = false;
      this.Activedinner = true;
    }
    if (this.mealid == 3) {
      this.Activelunch = true;
      this.Activedinner = true;
    }
    this.pickvegiclick();
    if (this.mealid ==3) {
      if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
        this.lunchdisable = "notnull"
      }
      else if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
        this.lunchdisable = "notnull"
      }
    }
    //mealId
  }
  pickvegiclick() {
    this.util.showLoader();
    this.apiService.pickurvegi(this.custid, this.custToken, this.cust_sub_id).then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        if (this.mealid == 1) {
          if (localStorage.getItem('displayProducts') == null || localStorage.getItem('displayProducts') == null) {
           
            if (response.data[0]['default'] == 'on') {
              this.LBdiv1 = "rgb(42, 194, 119)";
              this.Lborder3 = '1px solid #60cd66';
              this.Lborder4 = '1px solid #000';
              this.tlb1 = "white";
              this.conbut1 = "rgb(242, 155, 17)";
              this.lbid = response.data[0]['product_id'];
              this.lbqty = response.data[0]['product_quantity'];
              this.Disablecontinue = false;
            }
            if (response.data[1]['default'] == 'on') {
              this.LBdiv2 = "rgb(42, 194, 119)";
              this.Lborder4 = '1px solid #60cd66';
              this.Lborder3 = '1px solid #000';
              this.tlb2 = "white";
              this.conbut1 = "rgb(242, 155, 17)";
              this.lbid = response.data[1]['product_id'];
              this.lbqty = response.data[1]['product_quantity'];

              this.Disablecontinue = false;
            }
            if (response.data[2]['default'] == 'on') {
              this.Disablecontinue = false;
              this.LSdiv1 = "rgb(42, 194, 119)";
              this.Lborder1 = '1px solid #60cd66';
              this.Lborder2 = '1px solid #000';
              this.tls1 = "white";
              this.conbut1 = "rgb(242, 155, 17)";

              this.lsid = response.data[2]['product_id'];
              this.lsqty = response.data[2]['product_quantity'];

            }
            if (response.data[3]['default'] == 'on') {
              this.Disablecontinue = false;
              this.LSdiv2 = "rgb(42, 194, 119)";
              this.Lborder2 = '1px solid #60cd66';
              this.Lborder1 = '1px solid #000';
              this.tls2 = "white";
              this.conbut1 = "rgb(242, 155, 17)";
              this.lsid = response.data[3]['product_id'];
              this.lsqty = response.data[3]['product_quantity'];

            }
          }
          this.lunchbread1 = response.data[0]['product_name'];
          this.lunchbread2 = response.data[1]['product_name'];
          this.lunchsabji1 = response.data[2]['product_name'];
          this.lunchsabji2 = response.data[3]['product_name'];
          this.lbid1 = response.data[0]['product_id'];
          this.lbid2 = response.data[1]['product_id'];
          this.lsid1 = response.data[2]['product_id'];
          this.lsid2 = response.data[3]['product_id'];
          this.lbqty1 = response.data[0]['product_quantity'];
          this.lbqty2 = response.data[1]['product_quantity'];
          this.lsqty1 = response.data[2]['product_quantity'];
          this.lsqty2 = response.data[3]['product_quantity'];
          this.lunchorderid = response.data[4]['lunchh_order_id'];
          this.dinnerorderid = response.data[4]['dinner_order_id'];
          if (response.data[0]['product_id'] == response.data[0]['selected']) {
            this.Disablecontinue = false;
            this.LBdiv1 = "rgb(42, 194, 119)";
            this.LBdiv2 = "#ffffff";
            this.Lborder3 = '1px solid #60cd66';
            this.Lborder4 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)";
            this.tlb1 = "white";
            this.tlb2 = "black";
            this.butconfirm = true;
            this.butcont = false;
            this.lbid = '';
            this.lbid = this.lbid1;
            this.lbqty = '';
            this.lbqty = this.lbqty1;
          }

          if (response.data[1]['product_id'] == response.data[1]['selected']) {
            this.Disablecontinue = false;
            this.LBdiv1 = "#ffffff";
            this.LBdiv2 = "rgb(42, 194, 119)";
            this.Lborder4 = '1px solid #60cd66';
            this.Lborder3 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tlb1 = "black";
            this.tlb2 = "white";
            this.butconfirm = true;
            this.butcont = false;
            this.lbid = '';
            this.lbid = this.lbid2;
            this.lbqty = '';
            this.lbqty = this.lbqty2;
          }

          if (response.data[2]['product_id'] == response.data[2]['selected']) {
            this.Disablecontinue = false;
            this.LSdiv1 = "rgb(42, 194, 119)";
            this.LSdiv2 = "#ffffff";
            this.Lborder1 = '1px solid #60cd66';
            this.Lborder2 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)";
            this.tls1 = "white";
            this.tls2 = "black";
            this.butconfirm = true;
            this.butcont = false;
            this.lsid = '';
            this.lsid = this.lsid1;
            this.lsqty = '';
            this.lsqty = this.lsqty1;
          }
          if (response.data[3]['product_id'] == response.data[3]['selected']) {
            this.Disablecontinue = false;
            this.LSdiv1 = "#ffffff";
            this.LSdiv2 = "rgb(42, 194, 119)";
            this.Lborder2 = '1px solid #60cd66';
            this.Lborder1 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)";
            this.tls1 = "black";
            this.tls2 = "white";
            this.butconfirm = true;
            this.butcont = false;
            this.lsid = '';
            this.lsid = this.lsid2;
            this.lsqty = '';
            this.lsqty = this.lsqty2;
          }

        }

        else if (this.mealid == 2) {
          if (localStorage.getItem('displayProducts') == null || localStorage.getItem('displayProducts') == null) {

            if (response.data[0]['default'] == 'on') {
              this.DBdiv1 = "rgb(42, 194, 119)";
              this.Dborder3 = '1px solid #60cd66';
              this.Dborder4 = '1px solid #000';
              this.tDb1 = "white";
              this.tDb2 = "black";
              this.conbut1 = "rgb(242, 155, 17)";
              this.dbid = response.data[0]['product_id'];
              this.dbqty = response.data[0]['product_quantity'];
              this.Disablecontinue = false;
            }
            if (response.data[1]['default'] == 'on') {
              this.DBdiv2 = "rgb(42, 194, 119)";
              this.Dborder4 = '1px solid #60cd66';
              this.Dborder3 = '1px solid #000';
              this.tDb1 = "black";
              this.tDb2 = "white";
              this.conbut1 = "rgb(242, 155, 17)";
              this.dbid = response.data[1]['product_id'];
              this.dbqty = response.data[1]['product_quantity'];

              this.Disablecontinue = false;
            }
            if (response.data[2]['default'] == 'on') {

              this.Disablecontinue = false;
              this.DSdiv1 = "rgb(42, 194, 119)";
              this.Dborder1 = '1px solid #60cd66';
              this.Dborder2 = '1px solid #000';
              this.tDs1 = "white";
              this.conbut1 = "rgb(242, 155, 17)";

              this.dsid = response.data[2]['product_id'];
              this.dsqty = response.data[2]['product_quantity'];

            }
            if (response.data[3]['default'] == 'on') {
              this.Disablecontinue = false;
              this.DSdiv2 = "rgb(42, 194, 119)";
              this.Dborder2 = '1px solid #60cd66';
              this.Dborder1 = '1px solid #000';
              this.tDs2 = "white";
              this.conbut1 = "rgb(242, 155, 17)";
              this.dsid = response.data[3]['product_id'];
              this.dsqty = response.data[3]['product_quantity'];
            }
          }
          this.dinnerbread1 = response.data[0]['product_name'];
          this.dinnerbread2 = response.data[1]['product_name'];
          this.dinnersabji1 = response.data[2]['product_name'];
          this.dinnersabji2 = response.data[3]['product_name'];
          this.dbid1 = response.data[0]['product_id'];
          this.dbid2 = response.data[1]['product_id'];
          this.dsid1 = response.data[2]['product_id'];
          this.dsid2 = response.data[3]['product_id'];
          this.dbqty1 = response.data[0]['product_quantity'];
          this.dbqty2 = response.data[1]['product_quantity'];
          this.dsqty1 = response.data[2]['product_quantity'];
          this.dsqty2 = response.data[3]['product_quantity'];
          this.lunchorderid = response.data[4]['lunchh_order_id'];
          this.dinnerorderid = response.data[4]['dinner_order_id'];
          if (response.data[0]['product_id'] == response.data[0]['selected']) {
            this.Disablecontinue = false;
            this.DBdiv1 = "rgb(42, 194, 119)"
            this.DBdiv2 = "#ffffff"
            this.Dborder3 = '1px solid #60cd66';
            this.Dborder4 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDb1 = "white";
            this.tDb2 = "black"
            this.butconfirm = true
            this.butcont = false;
            this.dbid = ''
            this.dbid = this.dbid1
            this.dbqty = ''
            this.dbqty = this.dbqty1
          }

          if (response.data[1]['product_id'] == response.data[1]['selected']) {
            this.Disablecontinue = false
            this.DBdiv1 = "#ffffff"
            this.DBdiv2 = "rgb(42, 194, 119)"
            this.Dborder4 = '1px solid #60cd66';
            this.Dborder3 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDb1 = "black"
            this.tDb2 = "white";
            this.butconfirm = true
            this.butcont = false;
            this.dbid = ''
            this.dbid = this.dbid2
            this.dbqty = ''
            this.dbqty = this.dbqty2
          }

          if (response.data[2]['product_id'] == response.data[2]['selected']) {
            this.Disablecontinue = false
            this.DSdiv1 = "rgb(42, 194, 119)"
            this.DSdiv2 = "#ffffff"
            this.Dborder1 = '1px solid #60cd66';
            this.Dborder2 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDs1 = "white";
            this.tDs2 = "black"
            this.butconfirm = true
            this.butcont = false;
            this.dsid = ''
            this.dsid = this.dsid1
            this.dsqty = '';
            this.dsqty = this.dsqty1;
          }

          if (response.data[3]['product_id'] == response.data[3]['selected']) {
            this.Disablecontinue = false
            this.DSdiv1 = "#ffffff"
            this.DSdiv2 = "rgb(42, 194, 119)"
            this.Dborder2 = '1px solid #60cd66';
            this.Dborder1 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDs1 = "black"
            this.tDs2 = "white";
            this.butconfirm = true;
            this.butcont = false;
            this.dsid = ''
            this.dsid = this.dsid2
            this.dsqty = '';
            this.dsqty = this.dsqty2;
          }


        } 
        else {
          if (localStorage.getItem('displayProducts') == null || localStorage.getItem('displayProducts') == null) {
           
            if (response.data[0]['default'] == 'on') {
              this.LBdiv1 = "rgb(42, 194, 119)"
              this.Lborder3 = '1px solid #60cd66';
              this.Lborder4 = '1px solid #000';
              this.tlb1 = "white";
              this.conbut1 = "rgb(242, 155, 17)"
              this.lbid = response.data[0]['product_id']
              this.lbqty = response.data[0]['product_quantity']
              this.Disablecontinue = false;
            }
            if (response.data[1]['default'] == 'on') {
              this.LBdiv2 = "rgb(42, 194, 119)"
              this.Lborder4 = '1px solid #60cd66';
              this.Lborder3 = '1px solid #000';
              this.tlb2 = "white";
              this.conbut1 = "rgb(242, 155, 17)"
              this.lbid = response.data[1]['product_id']
              this.lbqty = response.data[1]['product_quantity']
              this.Disablecontinue = false;
            }
            if (response.data[2]['default'] == 'on') {
              this.Disablecontinue = false
              this.LSdiv1 = "rgb(42, 194, 119)"
              this.Lborder1 = '1px solid #60cd66';
              this.Lborder2 = '1px solid #000';
              this.tls1 = "white";
              this.conbut1 = "rgb(242, 155, 17)"

              this.lsid = response.data[2]['product_id']
              this.lsqty = response.data[2]['product_quantity']

            }
            if (response.data[3]['default'] == 'on') {
              this.Lborder2 = '1px solid #60cd66';
              this.Lborder1 = '1px solid #000';
              this.Disablecontinue = false
              this.LSdiv2 = "rgb(42, 194, 119)"
              this.tls2 = "white";
              this.conbut1 = "rgb(242, 155, 17)"
              this.lsid = response.data[3]['product_id']
              this.lsqty = response.data[3]['product_quantity']

            }
            if (response.data[0]['default'] == 'on') {
              this.Disablecontinue = false
              this.DBdiv1 = "rgb(42, 194, 119)"
              this.Dborder3 = '1px solid #60cd66';
              this.Dborder4 = '1px solid #000';
              this.tDb1 = "white";
              this.dbid = response.data[0]['product_id']
              this.dbqty = response.data[0]['product_quantity']
            }
            if (response.data[1]['default'] == 'on') {
              this.Disablecontinue = false
              this.DBdiv2 = "rgb(42, 194, 119)"
              this.Dborder4 = '1px solid #60cd66';
              this.Dborder3 = '1px solid #000';
              this.tDb1 = "black";
              this.tDb2 = "white";
              this.dbid = response.data[1]['product_id']
              this.dbqty = response.data[1]['product_quantity']
            }
            if (response.data[4]['default'] == 'on') {
              this.Disablecontinue = false
              this.DSdiv1 = "rgb(42, 194, 119)"
              this.Dborder1 = '1px solid #60cd66';
              this.Dborder2 = '1px solid #000';
              this.tDs1 = "white";
              this.dsid = response.data[4]['product_id']
              this.dsqty = response.data[4]['product_quantity']
            }
            if (response.data[5]['default'] == 'on') {
              this.Disablecontinue = false
              this.DSdiv2 = "rgb(42, 194, 119)"
              this.Dborder2 = '1px solid #60cd66';
              this.Dborder1 = '1px solid #000';
              this.tDs2 = "white";
              this.dsid = response.data[5]['product_id']
              this.dsqty = response.data[5]['product_quantity']
            }
          }

          this.lunchbread1 = response.data[0]['product_name']
          this.lunchbread2 = response.data[1]['product_name']
          this.lunchsabji1 = response.data[2]['product_name']
          this.lunchsabji2 = response.data[3]['product_name']
          this.dinnerbread1 = response.data[0]['product_name']
          this.dinnerbread2 = response.data[1]['product_name']
          this.dinnersabji1 = response.data[4]['product_name']
          this.dinnersabji2 = response.data[5]['product_name']

          this.lbid1 = response.data[0]['product_id']
          this.lbid2 = response.data[1]['product_id']
          this.lsid1 = response.data[2]['product_id']
          this.lsid2 = response.data[3]['product_id']
          this.dbid1 = response.data[0]['product_id']
          this.dbid2 = response.data[1]['product_id']
          this.dsid1 = response.data[4]['product_id']
          this.dsid2 = response.data[5]['product_id']
          this.lbqty1 = response.data[0]['product_quantity']
          this.lbqty2 = response.data[1]['product_quantity']
          this.lsqty1 = response.data[2]['product_quantity']
          this.lsqty2 = response.data[3]['product_quantity']
          this.dbqty1 = response.data[0]['product_quantity']
          this.dbqty2 = response.data[1]['product_quantity']
          this.dsqty1 = response.data[4]['product_quantity']
          this.dsqty2 = response.data[5]['product_quantity']
          this.lunchorderid = response.data[6]['lunchh_order_id']
          this.dinnerorderid = response.data[6]['dinner_order_id']
          if (response.data[0]['product_id'] == response.data[0]['lunchselected']) {
            this.Disablecontinue = false
            this.LBdiv1 = "rgb(42, 194, 119)"
            this.LBdiv2 = "#ffffff"
            this.Lborder3 = '1px solid #60cd66';
            this.Lborder4 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tlb1 = "white";
            this.tlb2 = "black"
            this.butconfirm = true
            this.butcont = false;
            this.lbid = ''
            this.lbid = this.lbid1
            this.lbqty = ''
            this.lbqty = this.lbqty1

          }

          if (response.data[1]['product_id'] == response.data[1]['lunchselected']) {
            this.Disablecontinue = false
            this.LBdiv1 = "#ffffff"
            this.LBdiv2 = "rgb(42, 194, 119)"
            this.Lborder4 = '1px solid #60cd66';
            this.Lborder3 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tlb1 = "black"
            this.tlb2 = "white";
            this.butconfirm = true
            this.butcont = false;
            this.lbid = ''
            this.lbid = this.lbid2
            this.lbqty = ''
            this.lbqty = this.lbqty2
          }

          if (response.data[2]['product_id'] == response.data[2]['selected']) {
            this.Disablecontinue = false;
            this.LSdiv1 = "rgb(42, 194, 119)"
            this.LSdiv2 = "#ffffff"
            this.Lborder1 = '1px solid #60cd66';
            this.Lborder2 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tls1 = "white";
            this.tls2 = "black"
            this.butconfirm = true
            this.butcont = false;
            this.lsid = ''
            this.lsid = this.lsid1
            this.lsqty = ''
            this.lsqty = this.lsqty1
          }
          if (response.data[3]['product_id'] == response.data[3]['selected']) {
            this.Disablecontinue = false;
            this.LSdiv1 = "#ffffff"
            this.LSdiv2 = "rgb(42, 194, 119)"
            this.Lborder2 = '1px solid #60cd66';
            this.Lborder1 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tls1 = "black"
            this.tls2 = "white";
            this.butconfirm = true
            this.butcont = false;
            this.lsid = ''
            this.lsid = this.lsid2
            this.lsqty = ''
            this.lsqty = this.lsqty2

          }
          if (response.data[0]['product_id'] == response.data[0]['dinnerselected']) {
            this.Disablecontinue = false;
            this.DBdiv1 = "rgb(42, 194, 119)"
            this.DBdiv2 = "#ffffff"
            this.Dborder3 = '1px solid #60cd66';
            this.Dborder4 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDb1 = "white";
            this.tDb2 = "black"
            this.butconfirm = true
            this.butcont = false;
            this.dbid = ''
            this.dbid = this.dbid1
            this.dbqty = ''
            this.dbqty = this.dbqty1
          }
          if (response.data[1]['product_id'] == response.data[1]['dinnerselected']) {
            this.Disablecontinue = false;
            this.DBdiv1 = "#ffffff"
            this.DBdiv2 = "rgb(42, 194, 119)"
            this.Dborder4 = '1px solid #60cd66';
            this.Dborder3 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDb1 = "black"
            this.tDb2 = "white";
            this.butconfirm = true
            this.butcont = false;
            this.dbid = ''
            this.dbid = this.dbid2
            this.dbqty = ''
            this.dbqty = this.dbqty2

          }
          if (response.data[4]['product_id'] == response.data[4]['selected']) {
            this.Disablecontinue = false
            this.DSdiv1 = "rgb(42, 194, 119)"
            this.DSdiv2 = "#ffffff"
            this.Dborder1 = '1px solid #60cd66';
            this.Dborder2 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDs1 = "white";
            this.tDs2 = "black"
            this.butconfirm = true
            this.butcont = false;
            this.dsid = ''
            this.dsid = this.dsid1
            this.dsqty = '';
            this.dsqty = this.dsqty1;
          }
          if (response.data[5]['product_id'] == response.data[5]['selected']) {
            this.Disablecontinue = false
            this.DSdiv1 = "#ffffff"
            this.DSdiv2 = "rgb(42, 194, 119)"
            this.Dborder2 = '1px solid #60cd66';
            this.Dborder1 = '1px solid #000';
            this.conbut1 = "rgb(242, 155, 17)"
            this.tDs1 = "black"
            this.tDs2 = "white";
            this.butconfirm = true;
            this.butcont = false;
            this.dsid = ''
            this.dsid = this.dsid2
            this.dsqty = '';
            this.dsqty = this.dsqty2;
          }
        }
      }
      else {
        this.util.alert(this.translate.instant(response.message), '');
        this.navCtrl.setRoot('DashboardPage');
      }
    }, (response) => {
      this.conmessage = response.message;
      this.showConfirmAlert2();
      this.util.hideLoader();      
    });
  }
  LBdiv1
  LBdiv2
  conbut1
  tlb1
  tlb2
  LSdiv1
  LSdiv2
  tls1
  tls2
  DBdiv1
  DBdiv2
  DSdiv1
  DSdiv2
  tDb1
  tDb2
  tDs1
  tDs2
  lbid
  lsid
  dbid
  dsid
  lbqty
  lsqty
  dbqty
  dsqty
  cancelmealtype
  butconfirm: boolean = false;
  butcont: boolean = true;
  onclicklunchbread1() {
    if (this.mealid == 3 || this.mealid == 1) {
      if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's lunch."), '');
      return;
      }
    }
    this.LBdiv1 = "rgb(42, 194, 119)"

    this.LBdiv2 = "#ffffff"
    this.Disablecontinue = false
    this.conbut1 = "rgb(242, 155, 17)"
    this.tlb1 = "white";
    this.tlb2 = "black"
    this.lbid = ''
    this.lbid = this.lbid1
    this.lbqty = ''
    this.lbqty = this.lbqty1
    this.butconfirm = false
    this.butcont = true;
    localStorage.setItem('secondbread','out');
    localStorage.setItem('firstbread','in');
    if (this.mealid == 1) {
      var x = document.getElementById('lunchbread1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('lunchbread2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('lunchbread1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('lunchbread2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }
  onclicklunchbread2() {
    if (this.mealid == 3 || this.mealid == 1) {
      if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's lunch."), '');
        return;

      }
    }
    this.Disablecontinue = false

    this.LBdiv1 = "#ffffff"
    this.LBdiv2 = "rgb(42, 194, 119)"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tlb1 = "black"
    this.tlb2 = "white";
    this.lbid = ''
    this.lbid = this.lbid2
    this.lbqty = ''
    this.lbqty = this.lbqty2
    this.butconfirm = false
    this.butcont = true;
    localStorage.setItem('secondbread','in');
    localStorage.setItem('firstbread','out');
    if (this.mealid == 1) {
      var x = document.getElementById('lunchbread2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('lunchbread1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('lunchbread2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('lunchbread1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }
  onclicklunchsabji1() {
    if (this.mealid == 3 || this.mealid == 1) {
      if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's lunch."), '');
      return;
      }
    }
    this.Disablecontinue = false
    localStorage.setItem('secondsabji','out');
    localStorage.setItem('firstsabju','in');
    this.LSdiv1 = "rgb(42, 194, 119)"
    this.LSdiv2 = "#ffffff"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tls1 = "white";
    this.tls2 = "black"
    this.lsid = ''
    this.lsid = this.lsid1
    this.lsqty = ''
    this.lsqty = this.lsqty1
    this.butconfirm = false
    this.butcont = true;
    if (this.mealid == 1) {
      var x = document.getElementById('lunchsabji1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }     
      var y = document.getElementById('lunchsabji2');
      if (y) {
        y.style.border = '1px solid #000';
      }      
    } else if (this.mealid == 3) {
      var x = document.getElementById('lunchsabji1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('lunchsabji2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }
  onclicklunchsabji2() {
    if (this.mealid == 3 || this.mealid == 1) {
      if (localStorage.getItem('cancelLunchdate') != null && localStorage.getItem('cancellunchtype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's lunch."), '');
      return;
      }
    }
    this.LSdiv1 = "#ffffff"
    this.Disablecontinue = false
    localStorage.setItem('secondsabji','in');
    localStorage.setItem('firstsabju','out');
    this.LSdiv2 = "rgb(42, 194, 119)"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tls1 = "black"
    this.tls2 = "white";
    this.lsid = ''
    this.lsid = this.lsid2
    this.lsqty = ''
    this.lsqty = this.lsqty2
    this.butconfirm = false
    this.butcont = true;
    if (this.mealid == 1) {
      var x = document.getElementById('lunchsabji2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('lunchsabji1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('lunchsabji2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }     
      var y = document.getElementById('lunchsabji1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }
  onclickdinnerbread1() {
    if (this.mealid == 3 || this.mealid == 2) {
      if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's dinner."), '');
      return;
      }
    }
    this.Disablecontinue = false;
    localStorage.setItem('secondbread1','out');
    localStorage.setItem('firstbread1','in');
    this.DBdiv1 = "rgb(42, 194, 119)"
    this.DBdiv2 = "#ffffff"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tDb1 = "white";
    this.tDb2 = "black"
    this.dbid = ''
    this.dbid = this.dbid1
    this.dbqty = ''
    this.dbqty = this.dbqty1
    this.butconfirm = false
    this.butcont = true;
    if (this.mealid == 2) {
      var x = document.getElementById('dinnerbread1');
      if (x) {
       x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnerbread2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('dinnerbread1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnerbread2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }

  onclickdinnerbread2() {
    if (this.mealid == 3 || this.mealid == 2) {
      if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's dinner."), '');
        return;
      }
    }
    this.Disablecontinue = false;
     localStorage.setItem('secondbread1','in');
    localStorage.setItem('firstbread1','out');
    this.DBdiv1 = "#ffffff"
    this.DBdiv2 = "rgb(42, 194, 119)"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tDb1 = "black"
    this.tDb2 = "white";
    this.dbid = ''
    this.dbid = this.dbid2
    this.dbqty = ''
    this.dbqty = this.dbqty2
    this.butconfirm = false
    this.butcont = true;
    if (this.mealid == 2) {
      var x = document.getElementById('dinnerbread2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnerbread1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('dinnerbread2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnerbread1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }
  onclickdinnersabji1() {
    if (this.mealid == 3 || this.mealid == 2) {
      if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's dinner."), '');
        return;
      }
    }
    this.Disablecontinue = false;
     localStorage.setItem('secondsabji1','out');
    localStorage.setItem('firstsabju1','in');
    this.DSdiv1 = "rgb(42, 194, 119)"
    this.DSdiv2 = "#ffffff"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tDs1 = "white";
    this.tDs2 = "black"
    this.dsid = ''
    this.dsid = this.dsid1
    this.dsqty = '';
    this.dsqty = this.dsqty1;
    this.butconfirm = false
    this.butcont = true;
    if (this.mealid == 2) {
      var x = document.getElementById('dinnersabji1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnersabji2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('dinnersabji1');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnersabji2');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }
  onclickdinnersabji2() {
    if (this.mealid == 3 || this.mealid == 2) {
      if (localStorage.getItem('canceldinnerdate') != null && localStorage.getItem('canceldinnertype') != null) {
        this.util.alert(this.translate.instant("Cancelled tommorow's dinner."), '');
        return;
      }
    }
    this.Disablecontinue = false;
    localStorage.setItem('secondsabji1','in');
    localStorage.setItem('firstsabju1','out');
    this.DSdiv1 = "#ffffff"
    this.DSdiv2 = "rgb(42, 194, 119)"
    this.conbut1 = "rgb(242, 155, 17)"
    this.tDs1 = "black"
    this.tDs2 = "white";
    this.dsid = ''
    this.dsid = this.dsid2
    this.dsqty = '';
    this.dsqty = this.dsqty2;
    this.butconfirm = false;
    this.butcont = true;
    if (this.mealid == 2) {
      var x = document.getElementById('dinnersabji2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnersabji1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    } else if (this.mealid == 3) {
      var x = document.getElementById('dinnersabji2');
      if (x) {
        x.style.border = '1px solid #60cd66';
      }
      var y = document.getElementById('dinnersabji1');
      if (y) {
        y.style.border = '1px solid #000';
      }
    }
  }

  conmessage
  onclickcontinue() {
    if (this.mealid == 1) {
      this.apiService.selectedlunchveggies(this.custid, this.custToken, this.cust_sub_id, this.subid, this.custtype, this.lbid, this.lbqty, this.lsid, this.lsqty, this.mealid, this.lunchorderid, this.dinnerorderid).then(res => {
        if (res.success) {
          this.push.init(this.apiService.getSettings().pushwoosh_id);
          this.storage.set('welcomeShown', '1').then(() => { }, () => { });
          this.conmessage = res.message;
          localStorage.setItem('canceldinnertype','');
          localStorage.setItem('cancellunchtype','');
          this.showConfirmAlert();
          if(this.conmessage!="order not valid for that date.")
          {
            this.displayProducts = 'true';
            localStorage.removeItem('displayProducts')
            localStorage.setItem('displayProducts', this.displayProducts)
          }
         
        }
        else {
          this.util.alert(res.message, '');
        }
      }, (res) => {
        this.conmessage = res.message;
        this.showConfirmAlert2();    
      });
    }
    if (this.mealid == 2) {
      this.apiService.selectedDinnerveggies(this.custid, this.custToken, this.cust_sub_id, this.subid, this.custtype, this.dbid, this.dbqty, this.dsid, this.dsqty, this.mealid, this.lunchorderid, this.dinnerorderid).then(res => {
        if (res.success) {
          this.push.init(this.apiService.getSettings().pushwoosh_id);
          this.storage.set('welcomeShown', '1').then(() => { }, () => { });
          this.conmessage = res.message;
          localStorage.setItem('canceldinnertype','');
          localStorage.setItem('cancellunchtype','');
          this.showConfirmAlert();
          if(this.conmessage!="order not valid for that date.")
          {
            this.displayProducts = 'true';
            localStorage.removeItem('displayProducts')
            localStorage.setItem('displayProducts', this.displayProducts)
          }
         
        }
        else {
          this.conmessage = res.message;
          this.showConfirmAlert2();
        }
      }, (res) => {
        this.conmessage = res.message;
        this.showConfirmAlert2();
      });
    }
    if (this.mealid == 3) {
      this.cancelmealtype = localStorage.getItem('cancellunchtype');
      if(this.cancelmealtype=='' || this.cancelmealtype=='null' || this.cancelmealtype==null || this.cancelmealtype=='undefined')
      {
        this.cancelmealtype =localStorage.getItem('canceldinnertype');
      }
      
      this.apiService.selectedveggies(this.custid, this.custToken, this.cust_sub_id, this.subid, this.custtype, this.lbid, this.lbqty, this.lsid, this.lsqty, this.dbid, this.dbqty, this.dsid, this.dsqty, this.mealid, this.lunchorderid, this.dinnerorderid,this.cancelmealtype).then(res => {
        if (res.success) {
          this.push.init(this.apiService.getSettings().pushwoosh_id);
          this.storage.set('welcomeShown', '1').then(() => { }, () => { });
          this.conmessage = res.message;
          this.showConfirmAlert();
          localStorage.setItem('canceldinnertype','');
          localStorage.setItem('cancellunchtype','');
          if(this.conmessage!="order not valid for that date.")
          {
            this.displayProducts = 'true';
            localStorage.removeItem('displayProducts')
            localStorage.setItem('displayProducts', this.displayProducts)
          }         
        }
        else {
          this.conmessage = res.message;
          this.showConfirmAlert2();
        }
      }, (res) => {
        this.conmessage = res.message;
        this.showConfirmAlert2();
      });
    }

  }
  Back() {
    if (this.activeGuestMeal == true) {
      var y = document.getElementById('idscripts');
      if (y) {
        y.classList.remove("idscript");
      }      
      if(localStorage.getItem('firstbread')=='in')
      {
          this.Lborder3= '1px solid #60cd66';
          this.LBdiv1='rgb(42, 194, 119)';
          this.tlb1='white';
      }
      else if(localStorage.getItem('firstbread')=='out'){
          this.Lborder3= '1px solid #000';
          this.LBdiv1='#fff';
          this.tlb1='#000';
      }

      if(localStorage.getItem('secondbread')=='in')
      {
      this.Lborder4= '1px solid #60cd66';
        this.LBdiv2='rgb(42, 194, 119)';
        this.tlb2 ="white";
          
      }
      else if(localStorage.getItem('secondbread')=='out'){
        this.Lborder4= '1px solid #000';
        this.LBdiv2='#fff';
        this.tlb2 ="#000";

      }

      if(localStorage.getItem('firstbread1')=='in')
      {
          this.Dborder3= '1px solid #60cd66';
          this.DBdiv1='rgb(42, 194, 119)';
          this.tDb1='white';
      }
      else if(localStorage.getItem('firstbread1')=='out'){
          this.Dborder3= '1px solid #000';
          this.DBdiv1='#fff';
          this.tDb1='#000';
      }

      if(localStorage.getItem('secondbread1')=='in')
      {
      this.Dborder4= '1px solid #60cd66';
        this.DBdiv2='rgb(42, 194, 119)';
        this.tDb2 ="white";
          
      }
      else if(localStorage.getItem('secondbread1')=='out'){
        this.Dborder4= '1px solid #000';
        this.DBdiv2='#fff';
        this.tDb2 ="#000";

      }

      if(localStorage.getItem('firstsabju')=='in')
      {
          this.Lborder1= '1px solid #60cd66';
          this.LSdiv1='rgb(42, 194, 119)';
          this.tls1='white';
      }
      else if(localStorage.getItem('firstsabju')=='out'){
          this.Lborder1= '1px solid #000';
          this.LSdiv1='#fff';
          this.tls1='#000';
      }

      if(localStorage.getItem('secondsabji')=='in')
      {
      this.Lborder2= '1px solid #60cd66';
        this.LSdiv2='rgb(42, 194, 119)';
        this.tls2 ="white";
          
      }
      else if(localStorage.getItem('secondsabji')=='out'){
        this.Lborder2= '1px solid #000';
        this.LSdiv2='#fff';
        this.tls2 ="#000";

      }


      if(localStorage.getItem('firstsabju1')=='in')
      {
          this.Dborder1= '1px solid #60cd66';
          this.DSdiv1='rgb(42, 194, 119)';
          this.tDs1='white';
      }
      else if(localStorage.getItem('firstsabju1')=='out'){
          this.Dborder1= '1px solid #000';
          this.DSdiv1='#fff';
          this.tDs1='#000';
      }

      if(localStorage.getItem('secondsabji1')=='in')
      {
      this.Dborder2= '1px solid #60cd66';
        this.DSdiv2='rgb(42, 194, 119)';
        this.tDs2 ="white";
          
      }
      else if(localStorage.getItem('secondsabji1')=='out'){
        this.Dborder2= '1px solid #000';
        this.DSdiv2='#fff';
        this.tDs2 ="#000";

      }
      this.activeMyMeal = true;
      this.activeGuestMeal = false;
    }
    else {
      localStorage.setItem('firstbread','');
      localStorage.setItem('secondbread','');
      localStorage.setItem('firstbread1','');
      localStorage.setItem('secondbread1','');

      localStorage.setItem('firstsabju','');
      localStorage.setItem('secondsabji','');
      localStorage.setItem('firstsabju1','');
      localStorage.setItem('secondsabji1','');

      this.navCtrl.setRoot('DashboardPage');
    }

  }

  onClickMyMeal() {
    this.activeMyMeal = true;
    this.activeGuestMeal = false;
    var y = document.getElementById('idscripts');
    if (y) {
      y.classList.remove("idscript");
    }
    if(localStorage.getItem('firstbread')=='in')
    {
        this.Lborder3= '1px solid #60cd66';
        this.LBdiv1='rgb(42, 194, 119)';
        this.tlb1='white';
    }
    else if(localStorage.getItem('firstbread')=='out'){
        this.Lborder3= '1px solid #000';
        this.LBdiv1='#fff';
        this.tlb1='#000';
    }
    
    if(localStorage.getItem('secondbread')=='in')
    {
     this.Lborder4= '1px solid #60cd66';
      this.LBdiv2='rgb(42, 194, 119)';
      this.tlb2 ="white";
        
    }
    else if(localStorage.getItem('secondbread')=='out'){
      this.Lborder4= '1px solid #000';
      this.LBdiv2='#fff';
      this.tlb2 ="#000";
    
    }

    if(localStorage.getItem('firstbread1')=='in')
    {
        this.Dborder3= '1px solid #60cd66';
        this.DBdiv1='rgb(42, 194, 119)';
        this.tDb1='white';
    }
    else if(localStorage.getItem('firstbread1')=='out'){
        this.Dborder3= '1px solid #000';
        this.DBdiv1='#fff';
        this.tDb1='#000';
    }
    
    if(localStorage.getItem('secondbread1')=='in')
    {
     this.Dborder4= '1px solid #60cd66';
      this.DBdiv2='rgb(42, 194, 119)';
      this.tDb2 ="white";
        
    }
    else if(localStorage.getItem('secondbread1')=='out'){
      this.Dborder4= '1px solid #000';
      this.DBdiv2='#fff';
      this.tDb2 ="#000";
    
    }

    if(localStorage.getItem('firstsabju')=='in')
    {
        this.Lborder1= '1px solid #60cd66';
        this.LSdiv1='rgb(42, 194, 119)';
        this.tls1='white';
    }
    else if(localStorage.getItem('firstsabju')=='out'){
        this.Lborder1= '1px solid #000';
        this.LSdiv1='#fff';
        this.tls1='#000';
    }
    
    if(localStorage.getItem('secondsabji')=='in')
    {
     this.Lborder2= '1px solid #60cd66';
      this.LSdiv2='rgb(42, 194, 119)';
      this.tls2 ="white";
        
    }
    else if(localStorage.getItem('secondsabji')=='out'){
      this.Lborder2= '1px solid #000';
      this.LSdiv2='#fff';
      this.tls2 ="#000";
    
    }


    if(localStorage.getItem('firstsabju1')=='in')
    {
        this.Dborder1= '1px solid #60cd66';
        this.DSdiv1='rgb(42, 194, 119)';
        this.tDs1='white';
    }
    else if(localStorage.getItem('firstsabju1')=='out'){
        this.Dborder1= '1px solid #000';
        this.DSdiv1='#fff';
        this.tDs1='#000';
    }
    
    if(localStorage.getItem('secondsabji1')=='in')
    {
     this.Dborder2= '1px solid #60cd66';
      this.DSdiv2='rgb(42, 194, 119)';
      this.tDs2 ="white";
        
    }
    else if(localStorage.getItem('secondsabji1')=='out'){
      this.Dborder2= '1px solid #000';
      this.DSdiv2='#fff';
      this.tDs2 ="#000";
    
    }



  }
  showData: boolean
  guestMealArray
  onClickGuestMeal() {
    this.guestmeal1 = "white";
    this.guestmeal2 = "gray";
    this.activeMyMeal = false;
    this.activeGuestMeal = true;
    var history = '0';
    var y = document.getElementById('idscripts');
    if (y) {
      y.classList.add("idscript");
    }

    this.apiService.guestMealHistory(this.custToken, this.custid, history).then(res => {
      this.guestMealArray = res['data'];
      if (this.guestMealArray == '' || this.guestMealArray == null) {
        this.showData = true;
      }
      else {
        this.showData = false;
      }
    }).catch((res) => {
      this.conmessage = res.message;
      this.showConfirmAlert2();
    });
  }
  onclickQuestMeal() {
    this.navCtrl.setRoot('OrderGuestMealPage');
  }

  async showConfirmAlert() {
    let alertConfirm = this.atrCtrl.create({
      //header: 'Download Successfully',
      enableBackdropDismiss: false,
      message: this.conmessage,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('DashboardPage');
          }
          
        }
      ]
    });
    (await alertConfirm).present();
  }

  async showConfirmAlert2() {
    let alertConfirm = this.atrCtrl.create({
      //header: 'Download Successfully',
      enableBackdropDismiss: false,
      message: this.conmessage,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('DashboardPage');
          }
          
        }
      ]
    });
    (await alertConfirm).present();
  }
}
