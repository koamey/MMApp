import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';

/**
 * Generated class for the GuestPaymentSuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest-payment-successful',
  templateUrl: 'guest-payment-successful.html',
})
export class GuestPaymentSuccessfulPage {
  custid
  custToken
  type
  conmessage
  date
  payment_id
  Total
  customer_subscription_id
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private apiService: APIService,
    private util: UtilService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPaymentSuccessfulPage');
  }
  Dashboardclick()
  {
    this.custid = localStorage.getItem('id');
    this.custToken = localStorage.getItem('token');
    this.type = 'guest';
    this.apiService.checkpayementstatus(this.custid,this.type,this.custToken).then(response => {
      this.util.hideLoader();
      if (response.success) {
        console.log(response.message);
        if(response.message=="false")
        {
          //
          this.date = localStorage.getItem('date');
          var payment_status = 'success';
          this.payment_id = localStorage.getItem('payment_id'); 
          this.Total = localStorage.getItem('guestmealtotal');
          this.util.showLoader();   
          this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
          this.apiService.guestmeal_payment(this.customer_subscription_id,this.custid, this.payment_id,payment_status, this.Total, this.date).then((res) => {
            this.util.hideLoader();
            if (res['success']) {  
              localStorage.removeItem('mynum1');
              localStorage.removeItem('mynum2');
              localStorage.removeItem('date');
              localStorage.setItem('customer_payement_status', 'success');
              this.navCtrl.setRoot('GuestPaymentSuccessfulPage');
              localStorage.setItem('failedstatus',null);
            }
            else {
              this.conmessage = res['message'];
            }
          }, (response) => {
            this.conmessage = "Something's wrong, let's try again?";
          });
          //
        }
      }
    
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
    });
    this.navCtrl.setRoot('DashboardPage');
  }
}
