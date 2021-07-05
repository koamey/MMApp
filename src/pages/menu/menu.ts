import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Nav, Platform, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard'
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public rootPage = DashboardPage;
  custFname
  custLname
  mtype
  custid
  custToken
  count = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public nav: Nav,
    private util: UtilService,
    private translate: TranslateService,
    private apiService: APIService,
    private builder: FormBuilder,
    private push: PushService,
    private storage: Storage,
    public app: App,
    public alertCtrl: AlertController,
    public platform: Platform) {
    this.rootPage = DashboardPage;
    platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if (activeView.name == 'MenuPage') {
        if (this.count == 0) {
          this.count++;
          setTimeout(() => { this.count = 0 }, 2000)
        } else if (this.count == 2) {
          if (nav.canGoBack()) {
            nav.pop();
          } else {
            this.presentToast();
          }
        }
      }
    }, 0);
  }

  presentToast() {
    //alert(this.count)
    if (this.count == 1) {

      const alert = this.alertCtrl.create({
        title: 'Alert !!!',
        message: 'Do you want to Exit?',
        buttons: [{
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.nav.setRoot('Menupage');
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
  imageheight;
  imagewidth;
  base64Image;
  type
  subscription_price
  extra_roti_lunch_price
  extra_roti_dinner_price
  extra_price
  respcgst
  respigst
  CGST
  IGST
  conmessage
  Tax
  Total
  amount
  reference_id
  renew
  ngOnInit() {
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.imageheight = "14.94vh";
    this.imagewidth = "15.2vh";
    this.base64Image = localStorage.getItem('image');
    if (this.base64Image == null || this.base64Image =='null') {
      this.base64Image = 'assets/Mask Group 2@2x.png';
    }
    //
       //for check the data entered properly 
       this.type = localStorage.getItem('failedstatus');
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
    //
    //this.util.showLoader();
    this.apiService.Dashboard(this.custid, this.custToken).then(response => {
      //this.util.hideLoader();
      if (response.success) {

        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        localStorage.setItem('CustomerName', response.data.customer_name);
        localStorage.setItem('CustomerLastName', response.data.customer_last_name);
        localStorage.setItem('mealType', response.data.meal_type);
        this.custFname = localStorage.getItem('CustomerName');
        this.custLname = localStorage.getItem('CustomerLastName');
        this.mtype = localStorage.getItem('mealType')
        localStorage.setItem('image', response.data.customer_image);
        localStorage.setItem('renew_before_five', response.data.renew_before_five)
        localStorage.setItem('renew_before_two', response.data.renew_before_two)
        this.base64Image = localStorage.getItem('image');
        if (this.base64Image == null || this.base64Image=="" || this.base64Image=="undefined" || this.base64Image=="null") {
          this.base64Image = 'assets/Mask Group 2@2x.png';
        }
        if (this.mtype == "Both") {
          this.mtype = "Lunch & Dinner"
        }
      }
      else {
      }
    }, (data) => {
    });
    this.custFname = localStorage.getItem('CustomerName');
    this.custLname = localStorage.getItem('CustomerLastName');
    this.mtype = localStorage.getItem('mealType')
    if (this.mtype == "Both") {
      this.mtype = "Lunch & Dinner"
    }
  }
  public appPages: PageInterface[] = [
    //{ title: 'Dashboard', component: DashboardPage, index: 0, icon: 'home' },
    { title: 'Order History', component: 'OrderhistoryPage', index: 0, icon: '' },
    { title: 'Account', component: 'AccountPage', index: 1, icon: '' },
    { title: 'Refer & Earn', component: 'ReferAndEarnPage', index: 2, icon: '' },
    { title: 'About Us', component: 'AboutusPage', index: 3, icon: '' },
    { title: 'Terms & Privacy', component: 'TermsAndPrivacyPage', index: 4, icon: '' },
    { title: 'Customer Care', component: 'ContactPage', index: 5, icon: '' },
    { title: 'Meal History', component: 'MealhistoryPage', index: 6, icon: '' },
    { title: 'Logout', component: 'LoginPage', index: 7, icon: '' }
  ];
  ionViewDidLoad() {
  }


  openPage(p) {
    if (p.title != "Logout") {
      this.nav.setRoot(p.component);
    } else {
      localStorage.setItem('areacode', null);
      localStorage.setItem('pincode', null);   
      localStorage.setItem('areaname', null);      
      localStorage.setItem('skipdisable', '1');
      this.nav.setRoot('LoginPage', {
        Logout: true
      });
    }
  }
}
