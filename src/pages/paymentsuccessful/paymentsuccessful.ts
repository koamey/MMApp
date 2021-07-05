import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,IonicApp,Platform,AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';

/**
 * Generated class for the PaymentsuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentsuccessful',
  templateUrl: 'paymentsuccessful.html',
})
export class PaymentsuccessfulPage {
  custid
  custToken
  conmessage
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
  constructor(public navCtrl: NavController, 
    private ionicApp: IonicApp,
    private util: UtilService,
    public platform: Platform,
    private apiService: APIService,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
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
      }
    }

  ionViewDidLoad() {
    
  }
  Dashboardclick()
  {
    console.log('payyyyyyyyyyyyyyyyyyyyyy starts');
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.type = localStorage.getItem('failedstatus');
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
          this.apiService.addsubscriptionPlan(data, this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
              if(res['success'])
              {
                console.log('payyyyyyyyyyyyyyyyyyyyyy');
                  localStorage.setItem('customer_payement_status', 'success');
                  this.navCtrl.setRoot('MenuPage');
              }
              else{
                console.log('payyyyyyyyyyyyyyyyyyyyyyrrrrrrr');
                this.navCtrl.setRoot('MenuPage');
              }
              
          }).catch((err) => {
            console.log('payyyyyyyyyyyyyyyyyyyyyyrrrrrrryyyyyyy');
            this.navCtrl.setRoot('MenuPage');
          });
        }
        else{
          this.navCtrl.setRoot('MenuPage');
        }
      }
      else{
        this.navCtrl.setRoot('MenuPage');
      }
    }, (response) => {
      console.log('ttttttttttttttttttttttttt');
			this.navCtrl.setRoot('MenuPage');
    });
    
  }

  // async showConfirmAlert() {
	// 	let alertConfirm = this.alertCtrl.create({
	// 	  //header: 'Download Successfully',
	// 	  enableBackdropDismiss: false,
	// 	  message: this.conmessage,
	// 	  buttons: [
	// 		{
	// 		  text: "Try again",
	// 		  handler: () => {
	// 			this.navCtrl.setRoot('DashboardPage');
	// 		  }			  
	// 		}
	// 	  ]
	// 	});
	// 	(await alertConfirm).present();
  // }

}
