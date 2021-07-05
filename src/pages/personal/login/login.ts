import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, DateTime, NavParams, Keyboard, AlertController, Platform, App ,IonicApp} from 'ionic-angular';
import { APIService } from '../../../services/api_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UtilService } from '../../../services/util_service';
import { PushService } from '../../../services/push_service';
import { TabsPage } from "../../tabs/tabs";
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/**
 * Login page component
 */
@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	device_id: any;
	public loginForm: FormGroup;
	public active: boolean;
	SimpleDateFormat;
	num
	optTime;
	dateTime
	numberint;
	time;
	skipfornow = "1"
	currDate: any
	logindiv:boolean
	logindiv1:boolean
	disableskip:boolean
	conmessage
	@ViewChild('inputToFocus') inputToFocus;
	constructor(
		private apiService: APIService,
		private nav: NavController,
		private builder: FormBuilder,
		private util: UtilService,
		private translate: TranslateService,
		private push: PushService,
		private storage: Storage,
		//public fb: Facebook,
		private datePipe: DatePipe,
		public navParams: NavParams,
		public keyboard: Keyboard,
		public alertCtrl: AlertController,		
		public app: App,
		public platform: Platform,
		private ionicApp: IonicApp
	) {

		this.keyboard.hasFocusedTextInput();
		this.active = true;
		const fields = {
			number: ['', Validators.required],
			customer_type: "Single"
		};
		this.loginForm = this.builder.group(fields);
		this.device_id = localStorage.getItem('deviceid');
		if (this.device_id == null) {
			this.device_id = this.makeid(10);
			localStorage.setItem("deviceid", this.device_id);
		}
		this.Logout = navParams.get('Logout');

		// let backAction = platform.registerBackButtonAction(() => {
		// 	// Catches the active view
		// 	console.log(this.app.getActiveNavs())
		// 	let nav = this.app.getActiveNavs()[0];
		// 	let activeView = nav.getActive();
		// 	// Checks if can go back before show up the alert
		// 	if (activeView.name == 'LoginPage') {
		// 		if (this.count == 0) {
		// 			this.count++;
		// 			setTimeout(() => { this.count = 0 }, 2000)
		// 		}
		// 		else {
		// 			this.presentToast();
		// 		}
		// 		// } else if (this.count < 2) {
		// 		// 	if (nav.canGoBack()) {
		// 		// 		nav.pop();
		// 		// 	} else {
		// 		// 		this.presentToast();
		// 		// 	}
		// 		// }
		// 	}
		// }, 2)let backAction = platform.registerBackButtonAction(() => {
		// 	// Catches the active view
		// 	console.log(this.app.getActiveNavs())
		// 	let nav = this.app.getActiveNavs()[0];
		// 	let activeView = nav.getActive();
		// 	// Checks if can go back before show up the alert
		// 	if (activeView.name == 'LoginPage') {
		// 		if (this.count == 0) {
		// 			this.count++;
		// 			setTimeout(() => { this.count = 0 }, 2000)
		// 		}
		// 		else {
		// 			this.presentToast();
		// 		}
		// 		// } else if (this.count < 2) {
		// 		// 	if (nav.canGoBack()) {
		// 		// 		nav.pop();
		// 		// 	} else {
		// 		// 		this.presentToast();
		// 		// 	}
		// 		// }
		// 	}
		// }, 2)
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
	count = 0;
	presentToast() {
		if (this.count == 1) {
			const alert = this.alertCtrl.create({
				title: 'Close the App',
				message: 'Are you sure?',
				buttons: [{
					text: 'No',
					role: 'cancel',
					handler: () => {
						this.nav.setRoot('LoginPage');
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
	makeid(length) {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	Logout = false
	async getIMEI() {
	}

	skip() {
		this.push.init(this.apiService.getSettings().pushwoosh_id);
		this.storage.set('welcomeShown', '1').then(() => { }, () => { });
		this.nav.setRoot(TabsPage);
	}
	skipdisable = true;
	ngOnInit() {
		if (this.Logout == true) {
			localStorage.setItem('skiploginskip','');
			var onboardshows = localStorage.getItem('onboardshows');
			var areaname = localStorage.getItem('areaname');
			var pincode = localStorage.getItem('pincode');
			var areacode = localStorage.getItem('areacode');
			var module = localStorage.getItem('module');
			if(module=='1')
			{
				this.logindiv=true;
				this.logindiv1=false;
			}
			else{
				this.logindiv=false;
				this.logindiv1=true;
			}
			var device_id = localStorage.getItem('deviceid');
			var skipdisable = localStorage.getItem('skipdisable');
			window.localStorage.clear();
			localStorage.setItem('onboardshows', onboardshows);
			localStorage.setItem('areaname', areaname);
			localStorage.setItem('areacode', areacode);
			localStorage.setItem('module', module);
			localStorage.setItem("deviceid", device_id);
			localStorage.setItem('skipdisable', skipdisable);
			if (localStorage.getItem('skipdisable') == '1') {
				this.skipdisable = true;
			}
		} 
		else {
			if(localStorage.getItem('skiploginskip')=='1'){
				this.disableskip = true;
			}
			var module = localStorage.getItem('module');
			if(module=='1')
			{
				this.logindiv=true;
				this.logindiv1=false;
			}
			else{
				this.logindiv=false;
				this.logindiv1=true;
			}
			if (localStorage.getItem('custstatus') == "registered") {
				this.nav.setRoot('ChooseplanPage');
			}
			if (localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
				this.nav.setRoot('ChooseplanPage');
			}
			if (localStorage.getItem('skipdisable') == '1') {
				this.skipdisable = false;
			}
		}
	}

	doLogin(skip_value) {
		 this.util.showLoader();
		let data = JSON.parse(JSON.stringify(this.loginForm.value));
		data.imei_number = this.device_id;
		
		localStorage.setItem('num', data.number);
		if (skip_value == 'skip') {
			data.number = 'skip';
		}
		else if (skip_value == 'login') {			
			var mobnum = localStorage.getItem('num');
			if (mobnum.length != 10) {
				this.util.alert(this.translate.instant('Please enter the valid mobile no.'), '');
				this.util.hideLoader();
				return;
			}
			else{
				this.numberint = parseInt(data.number);
				if(this.numberint!=data.number)
				{
					localStorage.setItem('num','');
					this.util.alert(this.translate.instant('Please enter Valid mobile no.'), '');
					this.util.hideLoader();
					return;
				}
			}
		}
		this.apiService.login(data).then((res) => {
			this.util.hideLoader();
			if (res.success) {
				this.dateTime= new Date().toISOString();
				localStorage.setItem('logintimestamp',this.dateTime);
				this.push.init(this.apiService.getSettings().pushwoosh_id);
				this.storage.set('welcomeShown', '1').then(() => { }, () => { });
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('custstatus', res.data.custmerstatus);

				localStorage.setItem('id', res.data.customer);
				localStorage.setItem('IMEI', this.device_id)
				localStorage.setItem('custType', data.customer_type)
				localStorage.setItem('otp', res.data.otp);
				this.currDate = this.datePipe.transform(new Date(), "HH:mm:ss");
				localStorage.setItem('currDate', this.currDate);
				localStorage.setItem('isLogin', skip_value);

				if (skip_value == 'login') {
					if (res.data.custmerstatus == 'registered') {
						localStorage.setItem('mobile_number', data.number);
					}
					localStorage.setItem('customer_payement_status', res.data.customer_payement_status);
					localStorage.setItem('ShowOTP', '1');
					localStorage.removeItem('fromDeliveryTime');
					this.nav.setRoot('LoginotpPage');
				}
				else {
					if (res.data.custmerstatus == 'registered') {
						localStorage.setItem('mobile_number', res.data.mobile_number);
						localStorage.setItem('customer_payement_status', res.data.customer_payement_status);
						localStorage.setItem('ShowOTP', '1');
						this.nav.setRoot('LoginotpPage');
					} else {
						this.nav.setRoot('ChooseplanPage');
					}
				}
			}
			else {
				this.conmessage = res.message;
				this.showConfirmAlert();
			}
		}, (res) => {
			this.conmessage ="Something's wrong, let's try again?";
			this.showConfirmAlert();
		});
	}
	signup() {
		this.nav.setRoot('SignupPage');
	}

	
	Choosemodule() {
		localStorage.removeItem('module')
		this.nav.setRoot('ModulePage');
	}
	skipfornowclcik() {
		localStorage.setItem('skipfornow', this.skipfornow)
		this.nav.setRoot('ChooseplanPage');
	}
	async showConfirmAlert() {
		let alertConfirm = this.alertCtrl.create({
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "Try again",
			//   handler: () => {
			// 	this.nav.setRoot('LoginPage');
			//   }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
