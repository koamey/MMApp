import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';

/**
 * Generated class for the DashboardCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-checkout',
  templateUrl: 'dashboard-checkout.html',
})
export class DashboardCheckoutPage {
  dataarr = {
    lunch: 'Lunch ',
    dinner: 'Dinner',
    CGST: 'CGST',
    IGST: 'IGST',
    Tax: 'Tax (GST)',
    Total: 'Total'

  }
  tokendata
  type
  customer_id
  date
  customer_name
  mobile_number
  email
  quantity
  total1
  total2
  total3
  tax
  Total
  data
  quantity1
  quantity2
  cgst
  igst
  CGST
  IGST
  conmessage
  lunch: boolean = true
  dinner: boolean = true
  checkoutArr
  amount: string;
  payment_id
  customer_subscription_id
  // total
  subdisable:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    public alertCtrl: AlertController,
    private util: UtilService,
    public platform: Platform) {
      let backAction = platform.registerBackButtonAction(() => {
        //localStorage.removeItem('subscription_id')
        //this.navCtrl.pop();
        this.Back();
        backAction();
      }, 2)
  }

  ngOnInit() {
    this.subdisable=true;
    this.tokendata = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.date = localStorage.getItem('date');
    this.util.showLoader();
    this.apiService.checkoutdetail(this.tokendata, this.customer_id, this.date).then((res) => {
      this.util.hideLoader();
      if (res['success']) {
        this.subdisable=false;
      this.checkoutArr = res['data']
      this.CGST = parseFloat(res['CGST']) + parseFloat(res['IGST']);
      //this.CGST=parseFloat
      // this.CGST =res['CGST'];
      this.IGST = res['IGST']
      // this.tax = CGST + IGST
      this.total3 = res['total'];
     // this.Total= res['total'];
      this.Total=parseFloat(this.total3).toFixed(2);
      localStorage.setItem('guestmealtotal', this.Total); 
      this.amount = String(this.Total);
      this.amount = this.amount.replace('.', '');
      this.mobile_number = this.checkoutArr[0].mobile_number;
      this.email = this.checkoutArr[0].email;
      }
      else{
        this.conmessage = res['message'];
        this.showConfirmAlert1();
      }
    }, (res) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert1();
		});


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardCheckoutPage');
  }


  Back() {
    this.navCtrl.setRoot('OrderGuestMealPage');
  }

  onclickslidepay() {
   //rzp_live_AAPrMXQhJP49GU
    //rzp_test_uZ1iWGWR9vDDSM // old //rzp_test_1DP5mmOlF5G5ag
    //rzp_test_e1wp9DFMzylCAL // new test key
    var options = {
      description: '',
      image: '',
      currency: 'INR',
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: this.amount,
      name: 'Mummy Meals',
      prefill: {
        email: this.email,
        contact: this.mobile_number,
        name: this.customer_name
      },
      theme: {
        color: '#f8b13f'
      },
      modal: {
        ondismiss: function () {
          //alert('dismissed')
        }
      }
    };

    var successCallback = (payment_id) => {
      localStorage.setItem('payment_id', payment_id);      
      document.getElementById('buttonhidden').click();
    };
    var cancelCallback = (error) => {
      document.getElementById('buttonhiddencancle').click();
    };

    RazorpayCheckout.open(options, successCallback.bind(this), cancelCallback.bind(this));

  }
  buttonhidecancle() {
    localStorage.setItem('payemntfailedguest', '1');
    this.navCtrl.setRoot('PaymentfailedPage');
  }

  buttonhide() {
      this.successpayment();
  }
  successpayment(){
    var payment_status = 'success';
    this.payment_id = localStorage.getItem('payment_id'); 
    this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    this.util.showLoader();    
    this.apiService.guestmeal_payment(this.customer_subscription_id,this.customer_id, this.payment_id, payment_status, this.Total, this.date).then((res) => {
      this.util.hideLoader();
      if (res['success']) {  
        localStorage.removeItem('mynum1');
        localStorage.removeItem('mynum2');
        localStorage.removeItem('date');
        localStorage.setItem('customer_payement_status', 'success');
        this.navCtrl.setRoot('PaymentsuccessfulPage');
      }
      else {
        this.conmessage = res['message'];
			  this.showConfirmAlert();
      }
      }).catch((err) => {
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.payment_id = localStorage.getItem('payment_id');
        this.type = 'guest';
        localStorage.setItem('failedstatus',this.type);
        this.apiService.payementfail(this.customer_id,this.type,this.tokendata,this.payment_id,this.amount).then((res) => {
          this.navCtrl.setRoot('PaymentfailedPage');
      }).catch((err) => {
          RazorpayCheckout.close();
          this.navCtrl.setRoot('PaymentfailedPage');
      });
        RazorpayCheckout.close();     
        localStorage.setItem('payemntfailedguest', '1');
        this.navCtrl.setRoot('PaymentfailedPage');
      });
  }
  onclickslidepaydummy() {
    localStorage.removeItem('mynum1');
    localStorage.removeItem('mynum2');
    localStorage.removeItem('date');
    var payment_id = '312312'
    var payment_status = 'success';
    this.util.showLoader();   
    this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    this.apiService.guestmeal_payment(this.customer_subscription_id,this.customer_id, payment_id, payment_status, this.Total, this.date).then((res) => {
      this.util.hideLoader();
      if (res['success']) {  
        localStorage.removeItem('mynum1');
        localStorage.removeItem('mynum2');
        localStorage.removeItem('date');
        localStorage.setItem('customer_payement_status', 'success');
        this.navCtrl.setRoot('GuestPaymentSuccessfulPage');
      }
      else {
        this.conmessage = res['message'];
			  this.showConfirmAlert();
      }
      
    }).catch((err) => {
      this.tokendata = localStorage.getItem('token');
      this.customer_id = localStorage.getItem('id');
      this.payment_id = localStorage.getItem('payment_id');
      this.type = 'guest';
      localStorage.setItem('failedstatus',this.type);
      this.apiService.payementfail(this.customer_id,this.type,this.tokendata,this.payment_id,this.amount).then((res) => {
        this.navCtrl.setRoot('PaymentfailedPage');
    }).catch((err) => {
        RazorpayCheckout.close();
        this.navCtrl.setRoot('PaymentfailedPage');
    });
        localStorage.setItem('payemntfailedguest', '1');
        this.navCtrl.setRoot('PaymentfailedPage');
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
				  this.navCtrl.setRoot('DashboardPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
  async showConfirmAlert1() {
		let alertConfirm = this.alertCtrl.create({
		  //header: 'Download Successfully',
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "Try again",
			  handler: () => {
				  this.navCtrl.setRoot('DashboardCheckoutPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
