import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, IonicApp, AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { DatePipe } from '@angular/common';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Keyboard } from 'ionic-angular';

/**
 * Generated class for the LoginotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-loginotp',
	templateUrl: 'loginotp.html',
})
export class LoginotpPage {
	public loginOTPForm: FormGroup;
	public active: boolean;
	mobnum: any;
	time
	token
	id
	customerstatus
	currDate: any
	imeinum
	custtype
	newmobilenumis
	newnum
	firstname
	lastname
	profession
	number
	actions
	days
	conmessage
	constructor(private apiService: APIService,
		private nav: NavController,
		private builder: FormBuilder,
		private util: UtilService,
		private translate: TranslateService,
		private push: PushService,
		private storage: Storage,
		private datePipe: DatePipe,
		public navParams: NavParams,
		public platform: Platform,
		public alertCtrl: AlertController,
		private ionicApp: IonicApp,
		public localNotifications: LocalNotifications,
		private keyboard: Keyboard
	) {
		this.active = true;
		const fields = {
			number1: ['', Validators.required],
			number2: ['', Validators.required],
			number3: ['', Validators.required],
			number4: ['', Validators.required]
		};
		this.loginOTPForm = this.builder.group(fields);
		this.newmobilenumis = navParams.get('newmobilenumis')
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
			this.back();
		}
	}
	ngOnInit() {
		if (localStorage.getItem('custstatus') == 'registered') {
			this.mobnum = localStorage.getItem('mobile_number');
		} else {
			this.mobnum = localStorage.getItem('num');
		}
		this.time = localStorage.getItem('currDate');
		this.token = localStorage.getItem('token');
		this.id = localStorage.getItem('id');
		this.customerstatus = localStorage.getItem('custstatus');
		this.imeinum = localStorage.getItem('IMEI');
		this.custtype = localStorage.getItem('custType');
		this.newnum = localStorage.getItem('newnum');
	}
	
	scheduler() {
		//this.actions = 'http://localhost/index.html#/loginotp';
		this.localNotifications.schedule({
			title: "We can't wait to serve you",
			text: 'Real home-cooked food is only some clicks away!',
			trigger: { every: { hour: 9}, count: 1 },
			led: 'FF0000',
			smallIcon:"res://mipmap-ldpi/ic_launcher.png",
			sound: null
		});
	}
	scheduler1() {
		//this.actions = 'http://localhost/index.html#/loginotp';
		this.localNotifications.schedule({
			title: "We can't wait to serve you",
			text: 'Real home-cooked food is only some clicks away!',
			trigger: { every: { hour: 21, minute:15}, count: 1 },
			smallIcon:"res://mipmap-ldpi/ic_launcher.png",
			led: 'FF0000',
			sound: null
		});
	}
	ionViewDidLoad() {
	}

	displaylogin() {
		this.nav.setRoot('LoginPage');
	}

	displayaboutyou() {
		this.nav.setRoot('AboutyouPage');
	}

	gotoNextField(nextElement) {
		nextElement.focus();
	}

	otpController(event, next, prev) {
		if (event.target.value.length < 1 && prev) {
			prev.focus()
		}
		else if (next && event.target.value.length > 0) {
			next.focus();
		}
		else {
			return 0;
		}
	}
	resemail = ''
	verifyloginotp() {
		//this.util.showLoader();
		let data = JSON.parse(JSON.stringify(this.loginOTPForm.value));
		let otp = (data.number1.toString() + data.number2.toString() + data.number3.toString() + data.number4.toString());
		this.apiService.Verifyotp(this.mobnum, otp, this.time, this.token, this.id, this.newnum).then((res) => {
			//this.util.hideLoader();
			if (res.success) {
				if (res.msg == 'Otp matched successfully') {
					let currentDate = new Date();
					let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
					this.days = weekdays[currentDate.getDay()];
					this.push.init(this.apiService.getSettings().pushwoosh_id);
					this.storage.set('welcomeShown', '1').then(() => { }, () => { });
					localStorage.setItem('ShowOTP', '0');
					this.resemail = res.data.email;
					this.firstname = res.data.firstname;
					if (this.firstname == null) {
						this.firstname = '';
					}
					this.lastname = res.data.lastname;
					if (this.lastname == null) {
						this.lastname = '';
					}
					else if (this.lastname == 'null') {
						this.lastname = '';
					}
					this.number = res.data.number;
					if (this.number == null) {
						this.number = '';
					}
					this.profession = res.data.profession;
					if (this.profession == null) {
						this.profession = '';
					}
					else if (this.profession == '0') {
						this.profession = '';
					}
					else {
						localStorage.setItem('proflid', this.profession);
						localStorage.setItem('profname', '')
					}
					localStorage.setItem('firstname', this.firstname);
					localStorage.setItem('lastname', this.lastname);
					localStorage.setItem('Emailid', this.resemail);
					if (this.newmobilenumis == "Active2") {
						var personal = "Active2"
						localStorage.setItem('num', this.newnum);
						localStorage.removeItem('mobile_number')
						localStorage.setItem('mobile_number', this.newnum);
						if(this.days=='wednesday')
						{							
							this.scheduler1();
						}
						else if(this.days=='sunday')
						{
							this.scheduler();
						}						
						this.nav.setRoot('AccountPage', {
							newmobilenumis: personal
						});						
					} else if (this.customerstatus == "registered") {
						if (this.resemail == '') {
							localStorage.setItem('ShowAbout', '1');
							if(this.days=='wednesday')
							{							
								this.scheduler1();
							}
							else if(this.days=='sunday')
							{
								this.scheduler();
							}	
							this.nav.setRoot('AboutyouPage');							
						} else {
							if (localStorage.getItem('customer_payement_status') == 'success') {
								if (this.newmobilenumis == "Active2") {
									var personal = "Active2"
									localStorage.setItem('num', this.newnum);
									if(this.days=='wednesday')
									{							
										this.scheduler1();
									}
									else if(this.days=='sunday')
									{
										this.scheduler();
									}	
									this.nav.setRoot('AccountPage', {
										newmobilenumis: personal
									});									
								} else {
									this.nav.setRoot('MenuPage');
								}
							} else {
								if (localStorage.getItem('subscription_id') != null) {
									if (localStorage.getItem('mealType') != null) {
										if (localStorage.getItem('lunch_products') != null || localStorage.getItem('dinner_products') != null) {
											if (localStorage.getItem('statdatescreen') != null) {
												if (localStorage.getItem('selectlunchtime') != null || localStorage.getItem('selectdinnertime') != null) {
													if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
														if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
															if (localStorage.getItem('payment_id') != null) {
																this.nav.setRoot('DashboardPage');
															} else {
																if(this.days=='wednesday')
																{							
																	this.scheduler1();
																}
																else if(this.days=='sunday')
																{
																	this.scheduler();
																}	
																this.nav.setRoot('CheckoutPage');																
															}
														}
														if(this.days=='wednesday')
														{							
															this.scheduler1();
														}
														else if(this.days=='sunday')
														{
															this.scheduler();
														}	
														this.nav.setRoot('ChoosedeliveryaddressPage');
													} else {
														if(this.days=='wednesday')
														{							
															this.scheduler1();
														}
														else if(this.days=='sunday')
														{
															this.scheduler();
														}	
														this.nav.setRoot('WhereToDeliverePage');
													}
												} else {
													if(this.days=='wednesday')
													{							
														this.scheduler1();
													}
													else if(this.days=='sunday')
													{
														this.scheduler();
													}	
													this.nav.setRoot('ChoosedeliverytimePage');
												}
											} else {
												if(this.days=='wednesday')
												{							
													this.scheduler1();
												}
												else if(this.days=='sunday')
												{
													this.scheduler();
												}	
												this.nav.setRoot('StartdatePage');
											}
										} else {
											if(this.days=='wednesday')
											{							
												this.scheduler1();
											}
											else if(this.days=='sunday')
											{
												this.scheduler();
											}	
											this.nav.setRoot('ChoosePreferencePage');
										}
									} else {
										if(this.days=='wednesday')
										{							
											this.scheduler1();
										}
										else if(this.days=='sunday')
										{
											this.scheduler();
										}	
										this.nav.setRoot('MealtypePage');
									}
								} else {
									if (localStorage.getItem('ShowAbout') == 'undefined' || localStorage.getItem('ShowAbout') == null || localStorage.getItem('ShowAbout') == 'null') {
										localStorage.setItem('ShowAbout', '1');
										if(this.days=='wednesday')
										{							
											this.scheduler1();
										}
										else if(this.days=='sunday')
										{
											this.scheduler();
										}	
										this.nav.setRoot('AboutyouPage');
									}
									else {
										if(this.days=='wednesday')
										{							
											this.scheduler1();
										}
										else if(this.days=='sunday')
										{
											this.scheduler();
										}	
										this.nav.setRoot('ChooseplanPage');
									}


								}
							}
						}

					}
					else {
						localStorage.setItem('ShowAbout', '1');
						if(this.days=='wednesday')
						{							
							this.scheduler();
						}
						else if(this.days=='sunday')
						{
							this.scheduler();
						}	
						this.nav.setRoot('AboutyouPage');
					}
				} else {
					this.util.alert(this.translate.instant(res.msg), 'OTP Verification');
					return;
				}

			}
			else if (otp != localStorage.getItem('otp') && otp != '') {
				this.conmessage = res.message;
				this.showConfirmAlert();
				// this.util.alert(this.translate.instant(res.data), '');
				// return;
			}
			else if (otp == '' || otp == null) {
				this.util.alert(this.translate.instant('Please enter OTP'), '');
			}
		}, (res) => {
			this.util.hideLoader();
			this.util.alert(this.translate.instant(res.message), '');
		});
	}
	doLogin() {
		//this.util.showLoader();
		var alldata = {
			number: this.mobnum,
			customer_type: this.custtype,
			imei_number: this.imeinum
		}
		let data = JSON.parse(JSON.stringify(alldata));
		this.apiService.login(data).then((res) => {
			//this.util.hideLoader();
			if (res.success) {
				this.push.init(this.apiService.getSettings().pushwoosh_id);
				this.storage.set('welcomeShown', '1').then(() => { }, () => { });
				localStorage.removeItem('token');
				localStorage.setItem('token', res.data.token);
				var tokenlogin = localStorage.getItem('token');
				localStorage.removeItem('otp');
				localStorage.setItem('otp', res.data.otp);
				this.currDate = this.datePipe.transform(new Date(), "HH:mm:ss");
				localStorage.setItem('currDate', this.currDate);
				var optTimezone = localStorage.getItem('currDate');
				this.util.alert(this.translate.instant('OTP sent to Your Mobile Number.'), '');
				this.nav.setRoot('LoginotpPage');
			}
			else{
				this.conmessage = res.message;
				this.showConfirmAlert();
			}
		}, (res) => {
			this.conmessage = "Something's wrong, let's try again?";;
			this.showConfirmAlert();
		});
	}
	back() {
		console.log('The keyboard is open:', this.keyboard.isOpen());
			var element = document.getElementById("myDIV");
			if(element)
			{
				element.classList.remove("mystyle");
			}
		localStorage.removeItem('custstatus');
		localStorage.removeItem('isLogin');
		localStorage.removeItem('isLogin');
		localStorage.removeItem('newnum');
		let backDrop: any = document.getElementsByTagName('ion-alert');
		if (backDrop.length > 0) {
			for (let i = 0; i < backDrop.length; i++) {
				backDrop[i].style.display = 'none';
			}
		}
		else {
			this.nav.setRoot('LoginPage', {
			});
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
			//   handler: () => {
			// 	this.nav.setRoot('LoginotpPage');
			//   }
			  
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
