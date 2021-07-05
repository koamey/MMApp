import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, DateTime, IonicApp, AlertController } from 'ionic-angular';
import { PushService } from '../../services/push_service';
import { APIService } from '../../services/api_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { UtilService } from '../../services/util_service';

/**
 * Generated class for the ChoosedeliverytimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-choosedeliverytime',
	templateUrl: 'choosedeliverytime.html',
})
export class ChoosedeliverytimePage {
	@ViewChild("dateTime") dateTime: DateTime;
	viewchild
	today = new Date();
	selecteddate
	minDate: string = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2).toISOString().valueOf();
	Lunchtime1
	Lunchtime2
	Dinnertime1
	Dinnertime2
	ActiveLunch = false
	ActiveDinner = false
	lunch1 = ''
	lunch2 = ''
	dinner1 = ''
	dinner2 = ''
	id
	token
	mealType = ''
	Ldiv1
	Ldiv2
	Ldiv11
	Ldiv21
	Ddiv1
	Ddiv2
	Ddiv11
	Ddiv21
	conbut1
	tl1
	tl2
	td1
	td2
	blunch
	sellunchtime
	seldinnertime
	selectedlunchtime
	selecteddinnertime
	selectedbothtime1
	selectedbothtime2
	back
	conmessage
	selecteddates
	constructor(public navCtrl: NavController, public navParams: NavParams,
		private apiService: APIService,
		private push: PushService,
		private translate: TranslateService,
		private storage: Storage,
		private util: UtilService,
		public platform: Platform,
		public viewCtrl: ViewController,
		public atrCtrl: AlertController,
		private ionicApp: IonicApp
	) {
		this.selectedlunchtime = navParams.get('selecttimeforlunchis');
		this.selecteddinnertime = navParams.get('selecttimefordinneris');
		this.selectedbothtime1 = navParams.get('selecttimelunchis');
		this.selectedbothtime2 = navParams.get('selecttimedinneris');
		this.selecteddateis = navParams.get('selectdateis');
		this.back = navParams.get('back');
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
	mealtiming
	selmealtimelunch
	selmealtimedin
	dtcolor
	renewmealTypeArr = [];
	ngOnInit() {
		this.mealType = localStorage.getItem('mealType');
		if(this.mealType=='Lunch' || this.mealType=='lunch')
		{
			localStorage.setItem('dinnertime','');
		}
		else if(this.mealType=='Dinner' || this.mealType=='dinner')
		{
			localStorage.setItem('lunchtime','');
		}
		this.apiService.showMealType().then((res) => {
			this.util.hideLoader();
			if (res.success) {
				this.renewmealTypeArr = res['data'];
				for (var i = 0; i < this.renewmealTypeArr.length; i++) {
					if (this.mealType == this.renewmealTypeArr[i]['meal']) {
						localStorage.removeItem('LMealTime1');
						localStorage.removeItem('LMealTime2');
						localStorage.removeItem('DMealTime1');
						localStorage.removeItem('DMealTime2');
						localStorage.removeItem('mealcount');
						localStorage.removeItem('mealdays');
						localStorage.setItem('price', this.renewmealTypeArr[i]['price']);
						localStorage.setItem('mealId', this.renewmealTypeArr[i]['mealId']);
						localStorage.setItem('cancel_count', this.renewmealTypeArr[i]['cancel_count']);
						var mealId = localStorage.getItem('mealId');
						localStorage.setItem('mealType', this.renewmealTypeArr[i]['meal'])
						localStorage.setItem('choosestartdate', this.renewmealTypeArr[i]['choosestartdate'])
						this.selecteddates = localStorage.getItem('choosestartdate');
						console.log(this.selecteddates);
						this.minDate=this.selecteddates.toString();
						console.log(this.minDate);
						if(localStorage.getItem('renew_subscription_start')=='1')
						{
							this.selecteddate = localStorage.getItem('StartDate');
							this.minDate=this.selecteddate.toString();
							console.log(this.minDate);
						}
						localStorage.setItem('LMealTime1', this.renewmealTypeArr[0]['mealTiming1']);
						localStorage.setItem('DMealTime1', this.renewmealTypeArr[1]['mealTiming1']);
						localStorage.setItem('DMealTime2', this.renewmealTypeArr[1]['mealTiming2']);
						localStorage.setItem('LMealTime2', this.renewmealTypeArr[0]['mealTiming2']);
						localStorage.setItem('mealdays', this.renewmealTypeArr[i]['subscription_period'])
						localStorage.setItem('mealcount', this.renewmealTypeArr[i]['number_of_meals']);
						this.Lunchtime1 = localStorage.getItem('LMealTime1');
						this.Lunchtime2 = localStorage.getItem('LMealTime2');
						this.Dinnertime1 = localStorage.getItem('DMealTime1');
						this.Dinnertime2 = localStorage.getItem('DMealTime2');
						if (this.renewmealTypeArr[i]['BothTiming']) {
							localStorage.removeItem('LMealTime1');
							localStorage.removeItem('LMealTime2');
							localStorage.removeItem('DMealTime1');
							localStorage.removeItem('DMealTime2');
							localStorage.setItem('LMealTime1', this.renewmealTypeArr[i]['BothTiming'][0]['mealTiming1'])
							localStorage.setItem('LMealTime2', this.renewmealTypeArr[i]['BothTiming'][0]['mealTiming2'])
							localStorage.setItem('DMealTime1', this.renewmealTypeArr[i]['BothTiming'][1]['mealTiming1'])
							localStorage.setItem('DMealTime2', this.renewmealTypeArr[i]['BothTiming'][1]['mealTiming2'])

							this.Lunchtime1 = localStorage.getItem('LMealTime1');
							this.Lunchtime2 = localStorage.getItem('LMealTime2');
							this.Dinnertime1 = localStorage.getItem('DMealTime1');
							this.Dinnertime2 = localStorage.getItem('DMealTime2');

							localStorage.setItem('mealdays', this.renewmealTypeArr[i]['subscription_period'])
							localStorage.setItem('mealcount', this.renewmealTypeArr[i]['number_of_meals'])
						}
						if (localStorage.getItem('renewis') == '1') {
							this.dinner1 = this.selmealtimedin;
							this.lunch1 = this.selmealtimelunch;
						}
					}
				}
			}
			else {
				this.conmessage = res.message;
				this.showConfirmAlert();
			}
		}).catch((res) => {
			this.conmessage ="Something's wrong, let's try again?";
			this.showConfirmAlert();
		});
		this.Active = false;
		this.conbut = "#d4d3d1";
		this.dtcolor = "rgb(153,153,153)";
		this.token = localStorage.getItem('token');
		this.id = localStorage.getItem('id');
		this.selecteddate = localStorage.getItem('StartDate');
		console.log(this.selecteddate);
		this.selecteddates = localStorage.getItem('choosestartdate');
		console.log(this.selecteddates);
		if(this.selecteddates!=null && this.selecteddates!='null')
		{
			this.minDate=this.selecteddates.toString();
			console.log(this.minDate);
		}
		
		if(localStorage.getItem('renew_subscription_start')=='1')
		{
			this.minDate=this.selecteddate.toString();
			console.log(this.minDate);
		}
		if (this.selecteddate != null) {
			this.days = parseInt(localStorage.getItem('mealdays'));
			this.Active = true;
			this.conbut = "rgb(242, 155, 17)"
			this.coloropacity = 'datetime-text coloropacity';
		}
		else {
			this.coloropacity = 'datetime-text coloropacity1';
		}
		this.token = localStorage.getItem('token');
		this.conbut1 = 'rgb(216,216,216)';
		this.dtcolor = 'rgb(193,193,193)';
		this.mealType = localStorage.getItem('mealType');
		this.id = localStorage.getItem('id');
		this.Lunchtime1 = localStorage.getItem('LMealTime1');
		this.Lunchtime2 = localStorage.getItem('LMealTime2');
		this.Dinnertime1 = localStorage.getItem('DMealTime1');
		this.Dinnertime2 = localStorage.getItem('DMealTime2');
		this.sellunchtime = localStorage.getItem('selectlunchtime')
		this.seldinnertime = localStorage.getItem('selectdinnertime')
		this.selmealtimelunch = localStorage.getItem('lunchtime')
		this.selmealtimedin = localStorage.getItem('dinnertime');
		if (this.mealType == "Both") {
			this.ActiveLunch = true;
			this.ActiveDinner = true;
		}
		else if (this.mealType == "Lunch") {
			this.ActiveLunch = true;
			this.ActiveDinner = false;
		}
		else if (this.mealType == "Dinner") {
			this.ActiveLunch = false;
			this.ActiveDinner = true;
		}
		if(this.selmealtimelunch=='0')
		{
			this.Ldiv11 = "activ1"
			this.Ldiv21 = "activ1"
		}
		if(this.selmealtimedin=='0')
		{
			this.Ldiv11 = "activ1"
			this.Ldiv21 = "activ1"
		}
		if(this.selmealtimelunch=='0'){
			this.Ldiv1 = "rgb(255,255,255"
			this.Ldiv2 = "#ffffff"
			this.Ldiv11 = "activ1"
			this.Ldiv21 = "activ1"
			this.conbut1 = "rgb(216,216,216)"
			this.lunch1 = '';
			this.lunch1 = '';
			this.tl1 = "black";
			this.tl2 = "black";
			this.dtcolor = 'rgb(255,255,255)';
		}

		if(this.selmealtimedin=='0'){
			this.Ddiv1 = "rgb(255,255,255)"
			this.Ddiv2 = "#ffffff"
			this.Ddiv11 = "activ1"
			this.Ddiv21 = "activ1"
			this.conbut1 = "rgb(216,216,216)"
			this.dinner1 = '';
			this.dinner1 = '';
			this.td1 = "black";
			this.td2 = "black";
			this.dtcolor = 'rgb(255,255,255)';
		}
		if (this.selmealtimelunch == "12:00 PM - 1:00 PM") {
			this.Ldiv1 = "rgb( 42, 194, 119)"
			this.Ldiv2 = "#ffffff"
			this.Ldiv11 = "activ2"
			this.Ldiv21 = "activ1"
			this.conbut1 = "rgb(242, 155, 17)"
			this.lunch1 = '';
			this.lunch1 = this.Lunchtime1;
			this.tl1 = "white";
			this.tl2 = "black";
			localStorage.setItem('selectlunchtime', '1');
			this.dtcolor = 'rgb(255,255,255)';
		}
		if (this.selmealtimelunch == "1:00 PM - 2:00 PM") {
			this.Ldiv1 = "#ffffff"
			this.Ldiv2 = "rgb( 42, 194, 119)"
			this.Ldiv11 = "activ1"
			this.Ldiv21 = "activ2"
			this.conbut1 = "rgb(242, 155, 17)"
			this.lunch1 = '';
			this.lunch1 = this.Lunchtime2;
			this.tl2 = "white";
			this.tl1 = "black";
			localStorage.setItem('selectlunchtime', '1');
			this.dtcolor = 'rgb(255,255,255)';
		}
		if (this.selmealtimedin == "7:00 PM - 8:00 PM") {
			this.Ddiv1 = "rgb( 42, 194, 119)"
			this.Ddiv2 = "#ffffff"
			this.Ddiv11 = "activ2"
			this.Ddiv21 = "activ1"
			this.conbut1 = "rgb(242, 155, 17)"
			this.dinner1 = '';
			this.dinner1 = this.Dinnertime1;
			this.td1 = "white";
			this.td2 = "black";
			localStorage.setItem('selectdinnertime', '1');
			this.dtcolor = 'rgb(255,255,255)';
		}
		if (this.selmealtimedin == "8:00 PM - 9:00 PM") {
			this.Ddiv1 = "#ffffff"
			this.Ddiv2 = "rgb( 42, 194, 119)"
			this.Ddiv11 = "activ1"
			this.Ddiv21 = "activ2"
			this.conbut1 = "rgb(242, 155, 17)"
			this.dinner1 = '';
			this.dinner1 = this.Dinnertime2;
			this.td2 = "white";
			this.td1 = "black";
			localStorage.setItem('selectdinnertime', '1');
			this.dtcolor = 'rgb(255,255,255)';
		}
		if (this.selmealtimedin == null || this.selmealtimedin == '') {
			this.Ddiv11 = "activ1"
			this.Ddiv21 = "activ1"
		}
		if (this.selmealtimelunch == null || this.selmealtimelunch == '') {
			this.Ldiv11 = "activ1"
			this.Ldiv21 = "activ1"
		}
		if (localStorage.getItem('renewis') == '1') {
			this.Active = false
		}
	}

	onclicklunch1() {
		this.Ldiv1 = "rgb( 42, 194, 119)"
		this.Ldiv2 = "#ffffff"
		if (this.mealType == 'Lunch') {
			this.conbut1 = "rgb(242, 155, 17)"
			this.dtcolor = 'rgb(255,255,255)';
		}
		this.lunch1 = '';
		this.lunch1 = this.Lunchtime1;
		this.tl1 = "white";
		this.tl2 = "black"
		this.blunch = '0vh'


		if (localStorage.getItem('mealType') == 'Lunch') {
			var x = document.getElementById('Lunchtime1')
			x.style.border = 'none';
			var y = document.getElementById('Lunchtime2')
			y.style.border = '0.1vh solid #000';
		} else if (localStorage.getItem('mealType') == 'Both') {
			var x = document.getElementById('Lunchtime1')
			x.style.border = 'none';
			var y = document.getElementById('Lunchtime2')
			y.style.border = '0.1vh solid #000';
		}
	}
	onclicklunch2() {
		this.Ldiv1 = "#ffffff"
		this.Ldiv2 = "rgb( 42, 194, 119)"
		if (this.mealType == 'Lunch') {
			this.conbut1 = "rgb(242, 155, 17)"
			this.dtcolor = 'rgb(255,255,255)';
		}
		this.lunch1 = '';
		this.lunch1 = this.Lunchtime2;
		this.tl2 = "white";
		this.tl1 = "black";

		if (localStorage.getItem('mealType') == 'Lunch') {
			var x = document.getElementById('Lunchtime2')
			x.style.border = 'none';
			var y = document.getElementById('Lunchtime1')
			y.style.border = '0.1vh solid #000';
		} else if (localStorage.getItem('mealType') == 'Both') {
			var x = document.getElementById('Lunchtime2')
			x.style.border = 'none';
			var y = document.getElementById('Lunchtime1')
			y.style.border = '0.1vh solid #000';
		}

	}
	onclickdinner1() {
		this.Ddiv1 = "rgb( 42, 194, 119)"
		this.Ddiv2 = "#ffffff"
		if (this.mealType == 'Dinner' || this.mealType == 'Both') {
			this.dtcolor = 'rgb(255,255,255)';
			this.conbut1 = "rgb(242, 155, 17)"
		}
		this.dinner1 = '';
		this.dinner1 = this.Dinnertime1;
		this.td1 = "white";
		this.td2 = "black";

		if (localStorage.getItem('mealType') == 'Dinner') {
			var z = document.getElementById('Dinnertime1')
			z.style.border = 'none';
			var a = document.getElementById('Dinnertime2')
			a.style.border = '0.1vh solid #000';
		} else if (localStorage.getItem('mealType') == 'Both') {
			var z = document.getElementById('Dinnertime1')
			z.style.border = 'none';
			var a = document.getElementById('Dinnertime2')
			a.style.border = '0.1vh solid #000';
		}
	}
	onclickdinner2() {
		this.Ddiv1 = "#ffffff"
		this.Ddiv2 = "rgb( 42, 194, 119)"
		if (this.mealType == 'Dinner' || this.mealType == 'Both') {
			this.conbut1 = "rgb(242, 155, 17)"
			this.dtcolor = 'rgb(255,255,255)';
		}
		this.dinner1 = '';
		this.dinner1 = this.Dinnertime2;
		this.td2 = "white";
		this.td1 = "black";

		if (localStorage.getItem('mealType') == 'Dinner') {
			var z = document.getElementById('Dinnertime2')
			z.style.border = 'none';
			var a = document.getElementById('Dinnertime1')
			a.style.border = '0.1vh solid #000';
		} else if (localStorage.getItem('mealType') == 'Both') {
			var z = document.getElementById('Dinnertime2')
			z.style.border = 'none';
			var a = document.getElementById('Dinnertime1')
			a.style.border = '0.1vh solid #000';
		}
	}

	completedate
	onclickmealtime() {
		this.completedate = localStorage.getItem('endDate');
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
		}
		localStorage.setItem('StartDate', this.selecteddate);
		var StartDate = localStorage.getItem('StartDate');
		let result = {};
		var curr = new Date(this.selecteddate); 
		let first = curr.getDate(); 
		this.days = parseInt(localStorage.getItem('mealdays'));
		this.total = this.days - this.coundays
		let last = first + parseInt(this.total);
		this.firstDay = new Date(curr.setDate(first)).toISOString(),
		this.lastDay = new Date(curr.setDate(last)).toISOString();
		localStorage.setItem('endDate', this.lastDay);
		if (this.mealType == "Both") {
			localStorage.setItem('selectlunchtime', '1');
			localStorage.setItem('selectdinnertime', '1');
			if (this.lunch1 == null || this.lunch1 == '' || this.lunch1 == 'null' || this.lunch1 == '0') {
				this.util.alert(this.translate.instant('Select Lunch Time'), '');
				return
			}
			if (this.dinner1 == null || this.dinner1 == '' || this.dinner1 == 'null' || this.dinner1 == '0') {
				this.util.alert(this.translate.instant('Select Dinner Time'), '');
				return
			}
		}
		else if (this.mealType == "Lunch") {
			localStorage.setItem('selectlunchtime', '1');
			if (this.lunch1 == null || this.lunch1 == '' || this.lunch1 == 'null' || this.lunch1 == '0') {
				this.util.alert(this.translate.instant('Select Lunch Time'), '');
				return
			}
		}
		else if (this.mealType == "Dinner") {
			localStorage.setItem('selectdinnertime', '1');
			if (this.dinner1 == null || this.dinner1 == '' || this.dinner1 == 'null' || this.dinner1 == '0') {
				this.util.alert(this.translate.instant('Select Dinner Time'), '');
				return
			}
		}
		localStorage.setItem('lunchtime', this.lunch1);
		var lunchtime = localStorage.getItem('lunchtime');
		localStorage.setItem('dinnertime', this.dinner1);
		var dinnertime = localStorage.getItem('dinnertime');

		localStorage.setItem('selectDelTime', '1');

		if (localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('fromDeliveryTime') == '1') {
			localStorage.removeItem('isLogin');
			localStorage.removeItem('custstatus');
			localStorage.setItem('skipdisable', '1');
			localStorage.setItem('fromDeliveryTime', '1');
			localStorage.setItem('skiploginskip', '1');
			this.navCtrl.setRoot('LoginPage');
		}
		else if (this.selectedlunchtime != null) {
			if (this.back != null) {
				this.navCtrl.setRoot('WhereToDeliverePage');
				return;
			}
			this.navCtrl.setRoot('CheckoutPage');
			return;
		}
		else if (this.selecteddinnertime != null) {
			if (this.back != null) {
				this.navCtrl.setRoot('WhereToDeliverePage');
				return;
			}
			this.navCtrl.setRoot('CheckoutPage');
			return;
		}
		else if (this.selectedbothtime1 != null || this.selectedbothtime2 != null) {
			if (this.back != null) {
				this.navCtrl.setRoot('WhereToDeliverePage');
				return;
			}
			this.navCtrl.setRoot('CheckoutPage');
			return;
		}
		else {
			this.navCtrl.setRoot('WhereToDeliverePage');
		}
		localStorage.setItem('lunch1', this.lunch1);
		localStorage.setItem('dinner1', this.dinner1);

	}

	Back() {
		var statdatescreen = localStorage.getItem('selectDelTime');
		localStorage.removeItem('selectDelTime');
		this.navCtrl.setRoot('ChoosePreferencePage', {
			statdatescreen: statdatescreen
		});
	}
	coundays = 1;
	total;
	disableSubmitButton;
	opacity;
	enddate
	firstDay
	lastDay
	conbut
	Active: boolean
	days
	selecteddateis
	coloropacity
	selectdate() {
		this.coloropacity = 'datetime-text coloropacity';
		this.disableSubmitButton = false;
		if (localStorage.getItem('renewis') == '1') {
			this.days = parseInt(localStorage.getItem('mealdays'));
			this.total = this.days - this.coundays
			localStorage.setItem('StartDate', this.selecteddate);
			var StartDate = localStorage.getItem('StartDate');
			var curr = new Date(this.selecteddate); // get current date
			let first = curr.getDate(); // First day is the day of the month - the day of the week
			let last = first + parseInt(this.total); // last day is the first day + 6
			this.firstDay = new Date(curr.setDate(first)).toISOString(),
			this.lastDay = new Date(curr.setDate(last)).toISOString();
			localStorage.setItem('endDate', this.lastDay);
			this.Active = false
			return;
		}
		else {
			this.Active = true
		}
		//this.Active = true
		this.dtcolor = '#fff';
		this.opacity = '100%';
		this.days = parseInt(localStorage.getItem('mealdays'));
		this.total = this.days - this.coundays
		this.conbut = "orange";
		localStorage.setItem('StartDate', this.selecteddate);
		var StartDate = localStorage.getItem('StartDate');
		let result = {};
		var curr = new Date(this.selecteddate); // get current date
		let first = curr.getDate(); // First day is the day of the month - the day of the week
		let last = first + parseInt(this.total); // last day is the first day + 6
		this.firstDay = new Date(curr.setDate(first)).toISOString(),
		this.lastDay = new Date(curr.setDate(last)).toISOString();
		localStorage.setItem('endDate', this.lastDay);
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
				this.navCtrl.setRoot('ChoosedeliverytimePage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
    }
}
