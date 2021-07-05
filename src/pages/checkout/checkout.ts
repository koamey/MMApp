import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, IonicApp, AlertController } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { Keyboard } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-checkout',
    templateUrl: 'checkout.html',
})
export class CheckoutPage {
    type
    renew = 0
    token
    payment_id
    id
    referCode = ''
    reference_id = '0'
    mealtype
    lunchPreference
    dinnerPreference
    startdate
    respigst;
    respcgst;
    enddate
    deliverytime
    lunchdeliverytime
    ActiveChkSumm: boolean
    ActiveChkMethod: boolean
    lunchtime: boolean = false
    Dinnertime: boolean = false
    Lunchadd
    Dinneradd
    tokendata
    customer_id
    subscription_id
    ladd: boolean = false
    dadd: boolean = false
    customer_subscription_id
    mobile_number
    customer_name
    conmessage
    email
    subscription_price
    extra_roti_lunch_price
    extra_roti_dinner_price
    CGST
    IGST
    Tax
    Total
    summeryColor
    paymentColor
    subdisable: boolean;
    subdisables: any;
    demosub: boolean;
    days
    coundays = 1;
    total_total
    firstDay
    lastDay
    currentdate
    setdatecurrentdate
    selecteddate_start
    dataarr = {
        month: '1 Month Subscription',
        ExtraRoti: 'Extra Bread',
        ExtraRice: 'Extra Rice',
        Tax: 'Tax (GST)',
        Total: 'Total'
    }

    summaryWhiteArrow = "assets/imgicon/Group 210.svg"
    summaryBlackArrow = "assets/imgicon/Group_214.svg"
    paymentWhiteArrow = "assets/imgicon/Group 210.svg"
    paymentBlackArrow = "assets/imgicon/Group 209.svg"
    msg: any;
    isdisable: boolean = false;
    subscription_disable: boolean;
    conbut1 = 'rgb(216, 216, 216)';
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private apiService: APIService,
        private util: UtilService,
        private translate: TranslateService,
        public viewCtrl: ViewController,
        public atrCtrl: AlertController,
        public platform: Platform,
        private keyboard: Keyboard,
        private ionicApp: IonicApp) {
        this.ActiveChkSumm = true;
        this.ActiveChkMethod = false;
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
    }
    lunchdis
    dinnerdis
    amount
    ngOnInit() {
        localStorage.setItem('reference_id', '0');
        this.mealtype = localStorage.getItem('mealType');
        this.dataarr.month = localStorage.getItem('subscription_type');
        this.summeryColor = 'white';
        this.paymentColor = 'rgb(121, 138, 151)';
        if (this.mealtype == "Both") {
            this.mealtype = "Lunch and Dinner";
            this.lunchdis = "Lunch";
            this.dinnerdis = "Dinner";
            this.lunchtime = true;
            this.Dinnertime = true;
            this.ladd = true;
            this.dadd = true;
        }
        else if (this.mealtype == "Lunch") {
            this.lunchdis = "Lunch";
            this.lunchtime = true;
            this.Dinnertime = false;
            this.ladd = true;
            this.dadd = false;
        }
        else if (this.mealtype == "Dinner") {
            this.dinnerdis = "Dinner";
            this.lunchtime = false;
            this.Dinnertime = true;
            this.ladd = false;
            this.dadd = true;
        }
        this.lunchPreference = localStorage.getItem('preferenceProducts');
        this.dinnerPreference = localStorage.getItem('preferenceProductsDinner');
        this.startdate = localStorage.getItem('StartDate');
        this.currentdate = new Date();  
        this.setdatecurrentdate = new Date(this.currentdate.getFullYear(),this.currentdate.getMonth(),this.currentdate.getDate()+ 1).toISOString().valueOf();
        if(this.startdate > this.setdatecurrentdate){
        }
        else{
          this.startdate = new Date(this.currentdate.getFullYear(),this.currentdate.getMonth(),this.currentdate.getDate()+ 2).toISOString().substring(0, 10);
          this.days = parseInt(localStorage.getItem('mealdays'));
          this.total_total = this.days - this.coundays;
          var curr = new Date(this.startdate); // get current date
          let first = curr.getDate(); // First day is the day of the month - the day of the week
          let last = first + parseInt(this.total_total); // last day is the first day + 6
          this.firstDay = new Date(curr.setDate(first)).toISOString();
          this.lastDay = new Date(curr.setDate(last)).toISOString();
          this.startdate = localStorage.setItem('StartDate',this.startdate);
          localStorage.setItem('endDate', this.lastDay);
        }
        this.startdate = localStorage.getItem('StartDate');
        //
        this.enddate = localStorage.getItem('endDate')
        this.deliverytime = localStorage.getItem('dinnertime');
        this.lunchdeliverytime = localStorage.getItem('lunchtime');
        this.Lunchadd = localStorage.getItem('Ladd');
        this.Dinneradd = localStorage.getItem('Dadd')
        localStorage.setItem('backchooseaddress', '1')
        this.tokendata = localStorage.getItem('token');
        this.customer_id = localStorage.getItem('id');
        this.subscription_id = localStorage.getItem('subscription_id');
        if (this.subscription_id == '1') {
            localStorage.setItem('refer_subscriptions', '1');
            this.isdisable = true;
            this.subdisable = true;
        }
        else {
            localStorage.setItem('refer_subscriptions', '0')
            this.isdisable = true;
            this.subdisable = false;
        }
        this.customer_name = localStorage.getItem('customer_name');
        this.mobile_number = localStorage.getItem('num');
        this.email = localStorage.getItem('email');
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
        if (localStorage.getItem('payment_id') != '0') {

            this.navCtrl.setRoot('MenuPage');
        }
    }

    extra_price;
    onclickeditmealtype() {
        var selectedmeal = localStorage.getItem('mealId')
        localStorage.removeItem('mealId');
        localStorage.removeItem('mealId');
        localStorage.removeItem('preferenceType');
        localStorage.removeItem('preferenceType1');
        localStorage.removeItem('lunch_products');
        localStorage.removeItem('dinner_products');
        localStorage.removeItem('customise_lc_data');
        localStorage.removeItem('customise_dm_data');
  
        localStorage.removeItem('lm_roti');
        localStorage.removeItem('extraRoti_Dinner');
        localStorage.removeItem('extraRoti_Lunch');
        localStorage.removeItem('lm_roti');
        localStorage.removeItem('lm_sabji');
        localStorage.removeItem('lm_rice');
        localStorage.removeItem('lm_dal');
        localStorage.removeItem('lm_salad');
        localStorage.removeItem('dm_roti');
        localStorage.removeItem('dm_sabji');
        localStorage.removeItem('dm_rice');
        localStorage.removeItem('dm_dal');
        localStorage.removeItem('dm_salad');
        localStorage.removeItem('extra_roti');
        this.navCtrl.setRoot('MealtypePage', {
            mealtypeis: selectedmeal
        });
    }

    onclickpreference() {
        localStorage.removeItem('selectprefrence');
        var selectedpreference = localStorage.getItem('preferenceProducts')
        this.navCtrl.setRoot('ChoosePreferencePage', {
            preferencetypeis: selectedpreference
        });
    }
    onclickstartdate() {
        var selecteddate = localStorage.getItem('statdatescreen')
        localStorage.removeItem('statdatescreen');
        this.navCtrl.setRoot('ChoosedeliverytimePage', {
            selectdateis: selecteddate
        });
    }
    onclickdeliverytime() {
        if (localStorage.getItem('mealType') == "Lunch") {
            var selectedtime = localStorage.getItem('selectlunchtime')
            localStorage.removeItem('selectlunchtime');
            this.navCtrl.setRoot('ChoosedeliverytimePage', {
                selecttimeforlunchis: selectedtime
            });
        }
        if (localStorage.getItem('mealType') == "Dinner") {
            var selectedtime = localStorage.getItem('selectdinnertime')
            localStorage.removeItem('selectdinnertime');
            this.navCtrl.setRoot('ChoosedeliverytimePage', {
                selecttimefordinneris: selectedtime
            });
        }
        if (localStorage.getItem('mealType') == "Both") {
            var selectedtime = localStorage.getItem('selectlunchtime')
            var selectedtime1 = localStorage.getItem('selectdinnertime')
            localStorage.removeItem('selectlunchtime');
            localStorage.removeItem('selectdinnertime');
            this.navCtrl.setRoot('ChoosedeliverytimePage', {
                selecttimelunchis: selectedtime,
                selecttimedinneris: selectedtime1
            });
        }
    }

    onclickPaytoProceed() {
        this.ActiveChkMethod = true;
        this.ActiveChkSumm = false;
        this.summeryColor = 'white';
        this.paymentColor = 'white';
        this.subdisables = localStorage.getItem('refer_subscription');

        if (this.subdisables == '1') {
            this.subdisable = true;
        }
        else {
            this.subdisables = localStorage.getItem('refer_subscriptions');
            if (this.subdisables == '1') {
                this.subdisable = true;
            }
            else {
                this.subdisable = false;
            }
        }
    }
    onclickaddress() {
        if (localStorage.getItem('mealType') == "Lunch") {
            var selectedhomelunch = localStorage.getItem('selhomelun')
            var selectedworklunch = localStorage.getItem('selworklun')
            localStorage.removeItem('selhomelun');
            localStorage.removeItem('selworklun');
            localStorage.removeItem('backchooseaddress')
            this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                selectforhomelunchis: selectedhomelunch,
                selectorworklunchis: selectedworklunch
            });
        }
        if (localStorage.getItem('mealType') == "Dinner") {
            var selectedhomedin = localStorage.getItem('selhomedin')
            var selectedworkdin = localStorage.getItem('selworkdin')
            localStorage.removeItem('selhomedin');
            localStorage.removeItem('selworkdin');
            localStorage.removeItem('backchooseaddress')
            this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                selectforhomedinis: selectedhomedin,
                selectorworkdinis: selectedworkdin
            });
        }
        if (localStorage.getItem('mealType') == "Both") {
            var selectedhomelunch = localStorage.getItem('selhomelun')
            var selectedworklunch = localStorage.getItem('selworklun')
            var selectedhomedin = localStorage.getItem('selhomedin')
            var selectedworkdin = localStorage.getItem('selworkdin')
            localStorage.removeItem('selhomelun');
            localStorage.removeItem('selworklun');
            localStorage.removeItem('selhomedin');
            localStorage.removeItem('selworkdin');
            localStorage.removeItem('backchooseaddress')
            this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                selectforhomelunchis: selectedhomelunch,
                selectorworklunchis: selectedworklunch,
                selectforhomedinis: selectedhomedin,
                selectorworkdinis: selectedworkdin
            });
        }
    }
    onClickSummary() {
        this.ActiveChkSumm = true;
        this.ActiveChkMethod = false;
    }
    onClickPayment() {
        this.ActiveChkMethod = true;
        this.ActiveChkSumm = false;
        this.paymentWhiteArrow = "assets/imgicon/Group 210.svg"
        this.paymentBlackArrow = "assets/imgicon/Group 209.svg"
        this.summeryColor = 'rgb(121, 138, 151)';
        this.paymentColor = 'white';
    }

    Back() {
        console.log('The keyboard is open:', this.keyboard.isOpen());
        var element = document.getElementById("myDIV");
        if(element)
        {
            element.classList.remove("mystyle");
        }
        if (this.ActiveChkSumm == true) {
            if (localStorage.getItem('renewis') == '1') {
                if (localStorage.getItem('renewis_id') == '1') {
                    if (localStorage.getItem('mealType') == "Lunch") {
                        var selectedhomelunch = localStorage.getItem('selhomelun')
                        var selectedworklunch = localStorage.getItem('selworklun')
                        localStorage.removeItem('selhomelun');
                        localStorage.removeItem('selworklun');
                        //this.viewCtrl.dismiss();
                        localStorage.removeItem('backchooseaddress')
                        this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                            selectforhomelunchis: selectedhomelunch,
                            selectorworklunchis: selectedworklunch
                        });
                    }
                    if (localStorage.getItem('mealType') == "Dinner") {
                        var selectedhomedin = localStorage.getItem('selhomedin')
                        var selectedworkdin = localStorage.getItem('selworkdin')
                        localStorage.removeItem('selhomedin');
                        localStorage.removeItem('selworkdin');
                        localStorage.removeItem('backchooseaddress')
                        //this.viewCtrl.dismiss();
                        this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                            selectforhomedinis: selectedhomedin,
                            selectorworkdinis: selectedworkdin
                        });
                    }
                    if (localStorage.getItem('mealType') == "Both") {
                        var selectedhomelunch = localStorage.getItem('selhomelun')
                        var selectedworklunch = localStorage.getItem('selworklun')
                        var selectedhomedin = localStorage.getItem('selhomedin')
                        var selectedworkdin = localStorage.getItem('selworkdin')
                        localStorage.removeItem('selhomelun');
                        localStorage.removeItem('selworklun');
                        localStorage.removeItem('selhomedin');
                        localStorage.removeItem('selworkdin');
                        localStorage.removeItem('backchooseaddress')
                        //this.viewCtrl.dismiss();
                        this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                            selectforhomelunchis: selectedhomelunch,
                            selectorworklunchis: selectedworklunch,
                            selectforhomedinis: selectedhomedin,
                            selectorworkdinis: selectedworkdin
                        });
                    }
                }
                else {
                    this.navCtrl.setRoot('RenewsubscriptionPage')
                }
            }
            else {
                if (localStorage.getItem('mealType') == "Lunch") {
                    var selectedhomelunch = localStorage.getItem('selhomelun')
                    var selectedworklunch = localStorage.getItem('selworklun')
                    localStorage.removeItem('selhomelun');
                    localStorage.removeItem('selworklun');
                    //this.viewCtrl.dismiss();
                    localStorage.removeItem('backchooseaddress')
                    this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                        selectforhomelunchis: selectedhomelunch,
                        selectorworklunchis: selectedworklunch
                    });
                }
                if (localStorage.getItem('mealType') == "Dinner") {
                    var selectedhomedin = localStorage.getItem('selhomedin')
                    var selectedworkdin = localStorage.getItem('selworkdin')
                    localStorage.removeItem('selhomedin');
                    localStorage.removeItem('selworkdin');
                    localStorage.removeItem('backchooseaddress')
                    //this.viewCtrl.dismiss();
                    this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                        selectforhomedinis: selectedhomedin,
                        selectorworkdinis: selectedworkdin
                    });
                }
                if (localStorage.getItem('mealType') == "Both") {
                    var selectedhomelunch = localStorage.getItem('selhomelun')
                    var selectedworklunch = localStorage.getItem('selworklun')
                    var selectedhomedin = localStorage.getItem('selhomedin')
                    var selectedworkdin = localStorage.getItem('selworkdin')
                    localStorage.removeItem('selhomelun');
                    localStorage.removeItem('selworklun');
                    localStorage.removeItem('selhomedin');
                    localStorage.removeItem('selworkdin');
                    localStorage.removeItem('backchooseaddress')
                    //this.viewCtrl.dismiss();
                    this.navCtrl.setRoot('ChoosedeliveryaddressPage', {
                        selectforhomelunchis: selectedhomelunch,
                        selectorworklunchis: selectedworklunch,
                        selectforhomedinis: selectedhomedin,
                        selectorworkdinis: selectedworkdin
                    });
                }
            }

        }
        if (this.ActiveChkMethod == true) {
            this.ActiveChkSumm = true
            this.ActiveChkMethod = false;
        }
        //this.navCtrl.setRoot('ChoosedeliveryaddressPage');
    }
    //rzp_live_AAPrMXQhJP49GU
    //rzp_test_uZ1iWGWR9vDDSM // old //rzp_test_1DP5mmOlF5G5ag
    //rzp_test_e1wp9DFMzylCAL // new test key
    onclickslidepay() {
        this.util.hideLoader();
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
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
        this.payment_id = localStorage.getItem('payment_id');
        if (localStorage.getItem('renewis') == '1') {
            this.renew = 1
            this.type = 'renew';
            localStorage.setItem('failedstatus',this.type);
        }
        else {
            this.renew = 0
            this.type = 'regular';
            localStorage.setItem('failedstatus',this.type);
        }
        this.apiService.payementfail(this.id,this.type,this.token,this.payment_id,this.amount).then((res) => {
            this.navCtrl.setRoot('PaymentfailedPage');
        }).catch((err) => {
            RazorpayCheckout.close();
            this.navCtrl.setRoot('PaymentfailedPage');
        });
        this.navCtrl.setRoot('PaymentfailedPage');
    }

    buttonhide() {
        this.successpayment();
    }

    successpayment() {
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
            localStorage.setItem('failedstatus',this.type);
        }
        else {
            this.renew = 0
            this.type = 'regular';
            localStorage.setItem('failedstatus',this.type);
        }
        this.apiService.referandearn(this.referCode, this.reference_id, this.tokendata).then((res) => {
        }).catch((err) => {
        });
        
        this.apiService.addsubscriptionPlan(data, this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
           if(res['success'])
            {
                localStorage.setItem('customer_payement_status', 'success');
                this.navCtrl.setRoot('PaymentsuccessfulPage');
            }
            else{
                this.lunchPreference = localStorage.getItem('preferenceProducts');
                this.dinnerPreference = localStorage.getItem('preferenceProductsDinner');
                this.apiService.checkIfapifailed(this.lunchPreference,this.dinnerPreference,this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
                    if(res['success'])
                    {
                        localStorage.setItem('customer_payement_status', 'success');
                        this.navCtrl.setRoot('PaymentsuccessfulPage');
                    }
                    else{
                        this.navCtrl.setRoot('PaymentfailedPage');
                    }
                
                }).catch((err) => {
                    this.navCtrl.setRoot('PaymentfailedPage');
                });
            }
            
        }).catch((err) => {
            this.token = localStorage.getItem('token');
            this.id = localStorage.getItem('id');
            this.payment_id = localStorage.getItem('payment_id');
            
            this.apiService.payementfail(this.id,this.type,this.token,this.payment_id,this.amount).then((res) => {
                this.navCtrl.setRoot('PaymentfailedPage');
            }).catch((err) => {
                RazorpayCheckout.close();
                this.navCtrl.setRoot('PaymentfailedPage');
            });
            RazorpayCheckout.close();
            this.navCtrl.setRoot('PaymentfailedPage');
        });

       
    }

    onclickslidepaydummy() {
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
            localStorage.setItem('failedstatus',this.type);
        }
        else {
            this.renew = 0
            this.type = 'regular';
            localStorage.setItem('failedstatus',this.type);
        }
        this.apiService.referandearn(this.referCode, this.reference_id, this.tokendata).then((res) => {
        }).catch((err) => {
        });
        //
        // this.lunchPreference = localStorage.getItem('preferenceProducts');
        // this.dinnerPreference = localStorage.getItem('preferenceProductsDinner');
        // this.apiService.checkIfapifailed(this.lunchPreference,this.dinnerPreference,this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
        //     if(res['success'])
        //     {
        //         localStorage.setItem('customer_payement_status', 'success');
        //         this.navCtrl.setRoot('PaymentsuccessfulPage');
        //     }
        //     else{
        //         this.navCtrl.setRoot('PaymentfailedPage');
        //     }
        
        // }).catch((err) => {
        //     this.navCtrl.setRoot('PaymentfailedPage');
        // });
        
        this.apiService.addsubscriptionPlan(data, this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
           if(res['success'])
            {
                localStorage.setItem('customer_payement_status', 'success');
                this.navCtrl.setRoot('PaymentsuccessfulPage');
            }
            else{
                this.lunchPreference = localStorage.getItem('preferenceProducts');
                this.dinnerPreference = localStorage.getItem('preferenceProductsDinner');
                this.apiService.checkIfapifailed(this.lunchPreference,this.dinnerPreference, this.CGST, this.IGST, this.renew, this.reference_id).then((res) => {
                    if(res['success'])
                    {
                        localStorage.setItem('customer_payement_status', 'success');
                        this.navCtrl.setRoot('PaymentsuccessfulPage');
                    }
                    else{
                        this.navCtrl.setRoot('PaymentfailedPage');
                    }
                
                }).catch((err) => {
                    this.navCtrl.setRoot('PaymentfailedPage');
                });
            }
            
        }).catch((err) => {
            this.token = localStorage.getItem('token');
            this.id = localStorage.getItem('id');
            this.payment_id = localStorage.getItem('payment_id');
            
            this.apiService.payementfail(this.id,this.type,this.token,this.payment_id,this.amount).then((res) => {
                this.navCtrl.setRoot('PaymentfailedPage');
            }).catch((err) => {
                RazorpayCheckout.close();
                this.navCtrl.setRoot('PaymentfailedPage');
            });
            RazorpayCheckout.close();
            this.navCtrl.setRoot('PaymentfailedPage');
        });

       

    }
    onSearchChange(e) {
        if (this.subscription_id != 1) {
            this.isdisable = false;
            this.conbut1 = 'rgb(242, 155, 17)'
        }
    }
    onClickRefer(code) {
        if (this.subscription_id != 1) {
            if (this.referCode != '') {
                this.isdisable = true
                this.conbut1 = 'rgb(242, 155, 17)'
            }
            else {
                this.isdisable = false
            }
        }

    }

    onclickApply() {
        this.apiService.referexistornot(this.tokendata, this.referCode).then((res) => {
            this.msg = res['message']
            this.reference_id = res['customer_id'];
            localStorage.setItem('reference_id', this.reference_id);

        }).catch((res) => {
            this.ActiveChkSumm = true;
            this.ActiveChkMethod = false;
            this.conmessage="Something's wrong, let's try again?";
            this.showConfirmAlert();
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
				this.navCtrl.setRoot('CheckoutPage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
    }
    classadded() {
		console.log('The keyboard is open:', this.keyboard.isOpen());
		if(this.keyboard.isOpen()==true){
			var element = document.getElementById("myDIV");
			if(element)
			{
				element.classList.add("mystyle");
			}
		}
		else{
			console.log('The keyboard is open:', this.keyboard.isOpen());
			var element = document.getElementById("myDIV");
			if(element)
			{
				element.classList.remove("mystyle");
			}
		}
		
	}

}