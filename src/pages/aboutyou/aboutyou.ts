import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,IonicApp,AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { ModalController } from 'ionic-angular';
import { Keyboard } from 'ionic-angular';

/**
 * Generated class for the AboutyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-aboutyou',
	templateUrl: 'aboutyou.html',
})
export class AboutyouPage {
	public aboutForm: FormGroup;
	public active: boolean;
	modelstatus;
	model;
	mobnum: any;
	classnames
	token
	id
	fname
	lname
	Emailid
	profArray = [];
	profid
	profname
	conmessage
	constructor(
		private apiService: APIService,
		private nav: NavController,
		private builder: FormBuilder,
		private util: UtilService,
		private push: PushService,
		private storage: Storage,
		private translate: TranslateService,
		public navParams: NavParams,
		public platform: Platform,
		private ionicApp: IonicApp,
		public modalCtrl: ModalController,
		public atrCtrl: AlertController,
		private keyboard: Keyboard
	) {
		this.active = true;

		const fields = {
			name: ['', Validators.required],
			email: ['', Validators.email],
			lastname: ['', Validators.required],
			prof: ['', Validators.required]
		};
		this.aboutForm = this.builder.group(fields);
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

	ngOnInit() {
		this.token = localStorage.getItem('token');
		this.id = localStorage.getItem('id');
		this.mobnum = localStorage.getItem('num');
		this.fname = localStorage.getItem('firstname');
		this.lname = localStorage.getItem('lastname');
		this.Emailid = localStorage.getItem('Emailid');
		this.profid = localStorage.getItem('proflid');		
		this.profname = localStorage.getItem('profname');
		this.loadprofession();
	}
	doSignup() {
		this.util.showLoader();
		let data = JSON.parse(JSON.stringify(this.aboutForm.value));
		this.fname = data.name;
		this.lname = data.lastname;
		this.Emailid = data.email;
		this.profid = localStorage.getItem('proflid');//data.prof;
		if (data.name == ''||data.name ==null) {
			this.util.hideLoader();
			this.util.alert("Please enter first name", '');
			return;
		}
		var regex = /^[a-zA-Z ]*$/;
		if (!regex.test(data.name)) {
			this.util.hideLoader();
			this.util.alert("Please enter only alphabet in first name field", '');
			return;
		}
		if (data.lastname == ''|| data.lastname==null) {
			this.util.hideLoader();
			this.util.alert("Please enter last name", '');
			return;
		}
		if (!regex.test(data.lastname)) {
			this.util.hideLoader();
			this.util.alert("Please enter only alphabet in last name field", '');
			return;
		}
		if (data.email == ''|| data.email==null) {
			this.util.hideLoader();
			this.util.alert("Please enter email id", '');
			return;
		}
		var patrn = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!patrn.test(data.email)) {
			this.util.hideLoader();
			this.util.alert("Please enter correct email id", '');
			return;
		}
		if (data.prof == 0 || data.prof == null) {
			this.util.hideLoader();
			this.util.alert("Please select profession", '');
			return;
		}
		this.apiService.aboutyou(this.id, this.fname, this.Emailid, this.lname, this.mobnum, this.token, this.profid).then(res => {
			this.util.hideLoader();
			if (res.success) {
				console.log('innnn4444');
				localStorage.setItem('firstname', this.fname)
				localStorage.setItem('lastname', this.lname)
				localStorage.setItem('Emailid', this.Emailid)
				this.push.init(this.apiService.getSettings().pushwoosh_id);
				this.storage.set('welcomeShown', '1').then(() => { }, () => { });
				localStorage.setItem('ShowAbout', '0');
				localStorage.setItem('email', this.Emailid);
				localStorage.setItem('customer_name', this.fname + ' ' + this.lname);
				if (localStorage.getItem('skipdisable') == '1') {
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
													this.nav.setRoot('CheckoutPage');
												}
											}
											this.nav.setRoot('ChoosedeliveryaddressPage');
										} else {
											this.nav.setRoot('WhereToDeliverePage');
										}
									} else {
										this.nav.setRoot('ChoosedeliverytimePage');
									}
								} else {
									this.nav.setRoot('StartdatePage');
								}
							} else {
								this.nav.setRoot('ChoosePreferencePage');
							}
						} else {
							this.nav.setRoot('MealtypePage');
						}
					} else {
						this.nav.setRoot('ChooseplanPage');
					}
					localStorage.setItem('CustomerName', this.fname)
				} else {
					this.nav.setRoot('ChooseplanPage');
				}
			}
			else {
				//this.util.alert(res.data, '');
				console.log('innnn');
				this.conmessage = res.message;
				this.showConfirmAlert();
			}
		}, (data) => {
			console.log('innnn222');
			this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
		});
	}
	Back() {
		// console.log('The keyboard is open:', this.keyboard.isOpen());
		// if(this.keyboard.isOpen()==true){
		// 	var element = document.getElementById("myDIV");
		// 	if(element)
		// 	{
		// 		element.classList.add("mystyle");
		// 	}
		// }
		// else{
			console.log('The keyboard is open:', this.keyboard.isOpen());
			var element = document.getElementById("myDIV");
			if(element)
			{
				element.classList.remove("mystyle");
			}
		//}	
		if(this.modelstatus==true){
			this.model.dismiss();
		}
		else{
			localStorage.removeItem('custstatus');
			localStorage.removeItem('isLogin');
			localStorage.removeItem('ShowOTP');
			localStorage.removeItem('profname')
			localStorage.removeItem('proflid')
			this.nav.setRoot('LoginPage');
		}
	}
	loadprofession() {
		this.apiService.showprofession().then(response => {
			this.util.hideLoader();
			if (response.success) {
				this.push.init(this.apiService.getSettings().pushwoosh_id);
				this.storage.set('welcomeShown', '1').then(() => { }, () => { });
				this.profArray = response.data;
				this.profid = localStorage.getItem('proflid');
				for (var i = 0; i < this.profArray.length; i++) {
					if (this.profid == this.profArray[i].id) {
						this.profname = this.profArray[i].profession;
						localStorage.setItem('profname', this.profname)
						localStorage.setItem('proflid', this.profid);
					}
				}
			}
			else {
				console.log('iiiiii888999');
				this.conmessage = response.message;
				this.showConfirmAlert();
			}
		}, (data) => {
			console.log('iiiiii888');
			this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
		});
	}

	selectprof() {
		if(this.profArray.length == 0)
		{
			console.log('iiiiii');
			this.showConfirmAlert();
		}
		let cust_css;
		cust_css = 'select-modal-rtmsprof'
		this.modelstatus = true;
		// code of opening area-edit page in model
		this.model = this.modalCtrl.create('ProfessionEditPage', {
		
		  customise_data: true
		}, { cssClass: cust_css});
		this.model.present()
		this.model.onDidDismiss(data => {
			var element = document.getElementById("myDIV");
			if(element)
			{
				element.classList.remove("mystyle");
			}
		  this.modelstatus = false;
		  this.profid = data.displayprofid;
		  this.profname = data.displayprof;
		  if(this.profid=='' || this.profid==null)
		  {
			localStorage.setItem('profname', '');
			localStorage.setItem('proflid', '');
		  }
		  else{
			localStorage.setItem('profname', this.profname);
			localStorage.setItem('proflid', this.profid);
		  }
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
				this.nav.setRoot('AboutyouPage');
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
