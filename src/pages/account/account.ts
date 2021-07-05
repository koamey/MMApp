import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Platform, IonicApp,AlertController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Keyboard } from 'ionic-angular';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  public accountForm: FormGroup;
  public addresssForm: FormGroup;
  newmobis = ''
  faqscreen = ''
  actionSheetCtrl: any;
  cordova: any;
  filePath: any;
  file: any;
  lastImage: any;
  toastCtrl: any;
  getMyads: any;
  transfer: any;
  loading: any;
  loadingCtrl: any;
  customise: any;
  pincode_1
  pincode_2
  profArray = [];
  modelstatus;
  profid
  profname
  conmessage
  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilService,
    private translate: TranslateService,
    private apiService: APIService,
    private builder: FormBuilder,
    private push: PushService,
    public platform: Platform,
    public nav: Nav,
    private storage: Storage,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private ionicApp: IonicApp,
    private keyboard: Keyboard,
    private camera: Camera
  ) {
    this.newmobis = navParams.get('newmobilenumis');
    this.faqscreen = navParams.get('screenis');
    const fields = {
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lname: ['', Validators.required],
      mobnum: ['', Validators.required],
      prof: ['', Validators.required]
    };
    this.accountForm = this.builder.group(fields);

    const fieldsadd = {
      Hflat: ['', Validators.required],
      Hadd1: ['', [Validators.required]],
      Hadd2: ['', Validators.required],
      mobnum: ['', Validators.required],
      Hcity: ['', Validators.required],
      Hstate: ['', Validators.required],
      Wflat: ['', [Validators.required]],
      Wadd1: ['', Validators.required],
      Wadd2: ['', Validators.required],
      Wcity: ['', Validators.required],
      Wstate: ['', Validators.required]
    };
    this.addresssForm = this.builder.group(fieldsadd);
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
      if (this.Active1) {
        // if(this.modelstatus==true){
        //   this.model.dismiss();
        // }
        // else{
          this.onclickacountback();
        //}        
      } else if (this.Active2) {
        if(this.modelstatus==true){
          this.model.dismiss();
        }
        else{
          this.onclickpersonalback();
        }
        
      } else if (this.Active3) {
        if(this.modelstatus==true){
          this.model.dismiss();
        }
        else{
        this.onclickaddressback();
        }
      }
    }
  }
  custid
  custtoken
  fname
  lname
  email
  mobnum
  Hflat
  Hadd1
  Hadd2
  Hcity
  Hstate
  Harea
  HPin
  Wflat
  Wadd1
  Wadd2
  Wcity
  Wstate
  Warea
  WPin
  areaid;
  areaid1;
  areaArray = [];
  areaArray1 = [];
  areaname;
  pincode;
  pincode1;
  homeid
  workid
  Active1: boolean
  Active2: boolean = false
  Active3: boolean = false
  mealid
  custFname
  custLname
  custMnum
  mtype
  abcde_new
  areaname_new
  areaid2
  imageheight
  imagewidth
  model
  trial_subscriptionTabCheck
  ngOnInit() {
    this.imageheight = "14.94vh";
    this.imagewidth = "15.2vh";
    this.customise = '1';
    localStorage.setItem('hardwareback', this.customise);
    this.custid = localStorage.getItem('id');
    this.custtoken = localStorage.getItem('token');
    this.mealid = localStorage.getItem('mealId');
    this.custFname = localStorage.getItem('CustomerName');
    this.custLname = localStorage.getItem('CustomerLastName');
    this.custMnum = localStorage.getItem('mobilenumber');
    this.mtype = localStorage.getItem('mealType');
    this.base64Image = localStorage.getItem('image');
    if (this.mtype == "Both") {
      this.mtype = "Lunch & Dinner";
    }
    if (this.newmobis == "Active2") {
      this.loadprofession();
      this.onclickpersonal();
      this.Active2 = true;
      this.Active1 = false;
      return;
    }
    else {
      this.Active1 = true;
    }
    this.loadprofession();
  }

  base64Image;
  picture;
  onCamera() {
    this.camera.getPicture({
      targetWidth: 512,
      targetHeight: 512,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/png;base64,' + imageData;
      this.picture = imageData;
    }, (err) => {
    });
  }

  onGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/png;base64,' + imageData;
      this.picture = imageData;

      localStorage.setItem('image', this.base64Image);
      this.util.showLoader();

      this.apiService.UploadFile(this.custid, this.custtoken, this.base64Image).then(res => {
        this.util.hideLoader();
        if (res) {
        }
        else {
          this.conmessage = res.message;
			    this.showConfirmAlert();
        }
      }, (data) => {
        this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working.';
			  this.showConfirmAlert();
      });
    }, (err) => {
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  onclickpersonal() {
    this.Active2 = true;
    this.Active1 = false;
    this.util.showLoader();

    this.apiService.customerdetail(this.custid, this.custtoken).then(res => {
      this.util.hideLoader();
      if (res.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.fname = res.data.customer_name;
        this.lname = res.data.customer_lname;
        this.email = res.data.customer_email;
        this.mobnum = res.data.customer_mobile;
        this.profid = res.data.customer_profession;
        for (var i = 0; i < this.profArray.length; i++) {
          if (this.profid == this.profArray[i].id) {
            this.profname = this.profArray[i].profession;
            localStorage.setItem('profname', this.profname)
            localStorage.setItem('proflid', this.profid);
          }
        }
      }
      else {
        this.conmessage = res.message;
			  this.showConfirmAlert();
        //this.util.alert(res.errors, '');
      }
    }, (data) => {
      this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working.';
      this.showConfirmAlert();
    });
  }
  onclickaddress() {
    this.Active3 = true
    this.Active2 = false;
    this.Active1 = false;
    this.loadzipcode();
    this.loadzipcode1();
    this.util.showLoader();

    this.apiService.customerdetail(this.custid, this.custtoken).then(res => {
      this.util.hideLoader();
      if (res.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.Hflat = res.data.home_address.flat_no;
        this.Hadd1 = res.data.home_address.address1;
        this.Hadd2 = res.data.home_address.address2;
        this.Hcity = res.data.home_address.city;
        this.Hstate = res.data.home_address.state;
        this.homeid = res.data.home_address.address_id
        this.areaname_new = res.data.home_address.area;
        this.abcde_new = res.data.home_address.pincode;

        localStorage.setItem('pincode', this.abcde_new);
        localStorage.setItem('areaname', this.areaname_new);

        this.areaid = res.data.home_address.area_id;
        localStorage.setItem('getsecondpincodeid', this.areaid);
        this.Wflat = res.data.work_address.flat_no;
        this.Wadd1 = res.data.work_address.address1;
        this.Wadd2 = res.data.work_address.address2;
        this.Wcity = res.data.work_address.city;
        this.Wstate = res.data.work_address.state;
        this.areaid2 = res.data.work_address.area;
        this.areaid1 = res.data.work_address.pincode;

        localStorage.setItem('getsecondareapindata', this.areaid1);
        localStorage.setItem('getfirstpincodearea', this.areaid2);

        //this.areaid1 = res.data.work_address.area_id;
        localStorage.setItem('getfirstpincodeid', res.data.work_address.area_id);
        this.workid = res.data.work_address.address_id;

        //getsecondpincodeid
        // getfirstpincodeid

      }
      else {
        //this.util.alert(res.errors, '');
        this.conmessage =res.message;
        this.showConfirmAlert1();
      }
    }, (data) => {
      this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working.';
      this.showConfirmAlert1();
    });
  }

  onclickpersonalback() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
    var element = document.getElementById("myDIV");
    if(element)
    {
        element.classList.remove("mystyle");
    }
    this.Active1 = true
    this.Active2 = false
  }
  onclickaddressback() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
    var element = document.getElementById("myDIV");
    if(element)
    {
        element.classList.remove("mystyle");
    }
    this.Active1 = true
    this.Active3 = false
  }

  onclickacountback() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
    var element = document.getElementById("myDIV");
    if(element)
    {
        element.classList.remove("mystyle");
    }
    this.customise = localStorage.getItem('hardwareback');
    if (this.customise == '0') {
      this.model.dismiss();
    }
    else {
      this.navCtrl.setRoot('MenuPage');
    }

  }

  loadzipcode() {
    this.apiService.showselectarea().then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.areaArray = response.data;
      }
      else {
        // this.util.alert(response.errors, '');
        this.conmessage = response.message;
        this.showConfirmAlert1();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert1();
    });
  }
  selectarea($event) {
    this.areaid = $event;
    for (var i = 0; i < this.areaArray.length; i++) {
      if (this.areaid == this.areaArray[i].id) {
        this.areaname = this.areaArray[i].area;
        this.pincode = this.areaArray[i].pincode;
        localStorage.setItem('pincode', this.pincode)
        localStorage.setItem('areacode', this.areaid)
      }
    }
  }

  loadzipcode1() {
    this.apiService.showselectarea().then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.areaArray1 = response.data;
      }
      else {
        this.conmessage = response.message;
        this.showConfirmAlert1();
      }
    }, (data) => {
      this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working';
      this.showConfirmAlert1();
    });
  }

  selectarea1($event) {
    this.areaid1 = $event;
    for (var i = 0; i < this.areaArray1.length; i++) {
      if (this.areaid1 == this.areaArray1[i].id) {
        this.areaname = this.areaArray1[i].area;
        this.pincode1 = this.areaArray1[i].pincode;
        localStorage.setItem('workpincode', this.pincode1);
        localStorage.setItem('areaid1', this.areaid1)
      }
    }
  }

  loadprofession() {
    this.apiService.showprofession().then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.profArray = response.data;
      }
      else {
        // this.util.alert(response.errors, '');
        this.conmessage = response.message;
        this.showConfirmAlert1();
      }
    }, (data) => {
      this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working';
      this.showConfirmAlert1();
    });
  }

  selectprof() {
		let cust_css;
		cust_css = 'select-modal-rtmsprof'
		this.modelstatus = true;
		// code of opening area-edit page in model
		this.model = this.modalCtrl.create('ProfessionEditPage', {
		
		  customise_data: true
		}, { cssClass: cust_css});
		this.model.present()
		this.model.onDidDismiss(data => {
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
  onSubmit() {


    this.abcde_new = localStorage.getItem('pincode');
    this.areaname_new = localStorage.getItem('areaname');
    this.areaid1 = localStorage.getItem('getsecondareapindata');
    this.areaid2 = localStorage.getItem('getfirstpincodearea');
    if ((this.Hflat == '' && this.Hadd1 == '' && this.Hadd2 == '' && this.abcde_new == '' && this.areaname_new == '') && (this.Wflat == '' && this.Wadd1 == '' && this.Wadd2 == '' && this.areaid1 == '' && this.areaid2 == '')) {
      this.util.alert(this.translate.instant('Fill one or both address'), '');
      return;
    }
    console.log('oooo21212');
    console.log(this.Hflat);
    console.log(this.Hadd1);
    console.log(this.Hadd2);
    console.log(this.abcde_new);
    console.log(this.areaname_new);
    console.log('oooo21212');
    console.log(this.Wflat);
    console.log(this.Wadd1);
    console.log(this.Wadd2);
    console.log(this.areaid1);
    console.log(this.areaid2);
    if (this.Hflat == '' && this.Hadd1 == '' && this.Hadd2 == '' && this.abcde_new == '' && this.areaname_new == '') {
      console.log('oooo');
      if (this.Wflat == '' && this.Wadd1 == '' && this.Wadd2 == '' && this.areaid1 == '' && this.areaid2 == '') {
      }
      else {
        if ((this.areaid1 == null || this.areaid1 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Select  Work Pincode'), '');
          return;
        }
        if ((this.areaid2 == null || this.areaid2 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Select  Work Area'), '');
          return;
        }
        if ((this.Wflat == null || this.Wflat == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Work Flat number'), '');
          return;
        }
        if ((this.Wadd1 == null || this.Wadd1 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
          this.util.hideLoader();
          return;
        }
        if ((this.Wadd2 == null || this.Wadd2 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
          this.util.hideLoader();
          return;
        }
      }
    }
    else 
    {
      console.log('oooo1');
      if (this.Hflat == '' && this.Hadd1 == '' && this.Hadd2 == '' && this.abcde_new == '' && this.areaname_new == '') {
      }
      else {
        console.log('iiiiiii');
        console.log(this.areaname_new );
        if ((this.abcde_new == null || this.abcde_new == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Select Home Pincode'), '');
          return;
        }
        if ((this.areaname_new == null || this.areaname_new == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Select Home Area'), '');
          return;
        }
        if ((this.Hflat == null || this.Hflat == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Home Flat number'), '');
          return;
        }
        if ((this.Hadd1 == null || this.Hadd1 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Home Address Line 1'), '');
          this.util.hideLoader();
          return;
        }
        if ((this.Hadd2 == null || this.Hadd2 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Home Address Line 2'), '');
          this.util.hideLoader();
          return;
        }
      }
      if (this.Wflat == '' && this.Wadd1 == '' && this.Wadd2 == '' && this.areaid1 == '' && this.areaid2 == '') {
      }
      else {
        if ((this.areaid1 == null || this.areaid1 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Select  Work Pincode'), '');
          return;
        }
        if ((this.areaid2 == null || this.areaid2 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Select  Work Area'), '');
          return;
        }
        if ((this.Wflat == null || this.Wflat == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Work Flat number'), '');
          return;
        }
        if ((this.Wadd1 == null || this.Wadd1 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
          this.util.hideLoader();
          return;
        }
        if ((this.Wadd2 == null || this.Wadd2 == '')) {
          this.util.hideLoader();
          this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
          this.util.hideLoader();
          return;
        }
      }
    }
    var data1 = {
      token: this.custtoken,
      customer_id: this.custid,
      meal_type: this.mealid,
      address11: this.Hadd1,
      address21: this.Hadd2,
      area_id1: localStorage.getItem('getsecondpincodeid'),
      city1: this.Hcity,
      state1: this.Hstate,
      address_type1: 'home',
      flat_no1: this.Hflat,
      address12: this.Wadd1,
      address22: this.Wadd2,
      area_id2: localStorage.getItem('getfirstpincodeid'),
      city2: this.Wcity,
      state2: this.Wstate,
      address_type2: 'work',
      flat_no2: this.Wflat,
      homeid: this.homeid,
      workid: this.workid
    }
    this.apiService.addAddress(data1).then(res => {
      this.util.showLoader();
      if (res.success) {
        this.util.hideLoader();
        this.Active1 = true;
        this.Active3 = false;
        //this.nav.setRoot('ChoosedeliveryaddressPage');
      }
      else {
        this.conmessage = res.message;
        this.showConfirmAlert();
      }
    },
      (data) => {
        this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working';
        this.showConfirmAlert();
      }
    );
  }

  newnum
  updatepersonalinfo() {
    if (this.fname == '') {
      this.util.alert(this.translate.instant('Please enter first name'), '');
      this.util.hideLoader();
      return;
    }
    var regex = /^[a-zA-Z ]*$/;
    if (!regex.test(this.fname)) {
      this.util.hideLoader();
      this.util.alert("Please enter only alphabet in first name field", '');
      return;
    }
    if (this.lname == '') {
      this.util.alert(this.translate.instant('Please enter last name'), '');
      this.util.hideLoader();
      return;
    }
    if (!regex.test(this.lname)) {
      this.util.hideLoader();
      this.util.alert("Please enter only alphabet in last name field", '');
      return;
    }
    if (this.email == '') {
      this.util.hideLoader();
      this.util.alert("Please enter email id", '');
      return;
    }
    var patrn = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!patrn.test(this.email)) {
      this.util.hideLoader();
      this.util.alert("Please enter correct email id", '');
      return;
    }
    if (this.mobnum.length != 10) {
      this.util.alert(this.translate.instant('Please enter the valid mobile no:'), '');
      this.util.hideLoader();
      return;
    }
    if (this.mobnum != localStorage.getItem('num')) {
      this.newnum = this.mobnum
    }
    else {
      this.newnum = ''
    }
    var data1 = {
      customer_id: this.custid,
      token: this.custtoken,
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      number: localStorage.getItem('num'),
      new_number: this.newnum,
      profession: this.profid
    }
    this.apiService.updatepersonalinfo(data1).then(res => {
      this.util.showLoader();
      if (res.success) {
        this.util.hideLoader();
        if (this.mobnum != localStorage.getItem('num')) {
          localStorage.setItem('newnum', this.mobnum)
          var chnum = "Active2"
          this.navCtrl.setRoot('LoginotpPage', {
            newmobilenumis: chnum
          });
        }
        else {
          //this.util.hideLoader();
          this.Active1 = true;
          this.Active2 = false;
        }

        //this.nav.setRoot('ChoosedeliveryaddressPage');
      }
      else
      {
        // this.util.hideLoader();
        // this.util.alert(this.translate.instant(res.message), '');
        //this.util.hideLoader();
        this.conmessage = res.message;
			  this.showConfirmAlert();
      }
    },
      (data) => {
        this.conmessage = "Something's wrong, let's try again?";//'Network error: API stopped working.';
			  this.showConfirmAlert();
      });
  }
  onclickhelp() {
    var faqscreen = "FAQScreen"
    this.navCtrl.setRoot('FaqPage', {
      screenis: faqscreen
    });
  }
  onClickReferAndEarn() {
    if (localStorage.getItem('subscription_id') == "1") {
      this.util.alert('This feature will be inactive for demo plan', '');
    }
    else {
      this.trial_subscriptionTabCheck = localStorage.getItem('referandearn');
      if (this.trial_subscriptionTabCheck == 'false') {
        this.util.alert('This feature will be active once you have subscription', '');
        this.util.hideLoader();
      }
      else{
        this.navCtrl.setRoot('ReferAndEarnPage');
      }
      
    }

  }

  //model

  onclickarea1() {
    this.customise = '0';
    localStorage.setItem('hardwareback', this.customise);
    this.modelstatus = true;
    let cust_css;
    cust_css = 'select-modal-rtms'
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: true
    }, { cssClass: cust_css });
    this.model.present()
    this.model.onDidDismiss(data => {
      this.modelstatus = false;
      this.abcde_new = data.displayarea;
      this.areaname_new = data.displayarea_area;
      if (this.areaname_new == '' || this.areaname_new == null) {
        if (localStorage.getItem('areaname') != null) {
          this.areaname_new = localStorage.getItem('areaname');
        }
      }
      if (this.abcde_new == '' || this.abcde_new == null) {
        if (localStorage.getItem('pincode') != null) {
          this.abcde_new = localStorage.getItem('pincode');
        }
      }
      this.customise = '1';
      localStorage.setItem('hardwareback', this.customise);

    });
  }

  onclickarea2() {

    this.customise = '0';
    localStorage.setItem('hardwareback', this.customise);
    this.modelstatus = true;
    let cust_css;
    cust_css = 'select-modal-rtms'
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: false,
      customise_data2: true
    }, { cssClass: cust_css });
    this.model.present()
    this.model.onDidDismiss(data => {
      this.modelstatus = false;
      this.abcde_new = data.displayarea;
      this.areaname_new = data.displayarea_area;
      if (this.areaname_new == '' || this.areaname_new == null) {
        if (localStorage.getItem('areaname') != null) {
          this.areaname_new = localStorage.getItem('areaname');
        }
      }
      if (this.abcde_new == '' || this.abcde_new == null) {
        if (localStorage.getItem('pincode') != null) {
          this.abcde_new = localStorage.getItem('pincode');
        }
      }
      this.customise = '1';
      localStorage.setItem('hardwareback', this.customise);

    });
  }

  onclickarea3() {

    this.customise = '0';
    localStorage.setItem('hardwareback', this.customise);
    let cust_css;
    this.modelstatus = true;
    cust_css = 'select-modal-rtms'
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: false,
      customise_data2: false,
      customise_data3: true
    }, { cssClass: cust_css });
    this.model.present()
    this.model.onDidDismiss(data => {
      this.modelstatus = false;
      this.areaid2 = data.displayarea_area_sec;
      this.areaid1 = data.displayarea_sec;

      if (this.areaid2 == '' || this.areaid2 == null) {
        if (localStorage.getItem('getfirstpincodearea') != null) {
          this.areaid2 = localStorage.getItem('getfirstpincodearea');
        }
      }
      if (this.areaid1 == '' || this.areaid1 == null) {
        if (localStorage.getItem('getsecondareapindata') != null) {
          this.areaid1 = localStorage.getItem('getsecondareapindata');
        }
      }

      this.customise = '1';
      localStorage.setItem('hardwareback', this.customise);

    });
  }

  onclickarea4() {

    this.customise = '0';
    localStorage.setItem('hardwareback', this.customise);
    let cust_css;
    cust_css = 'select-modal-rtms'
    this.modelstatus = true;
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: false,
      customise_data2: false,
      customise_data3: false,
      customise_data4: true
    }, { cssClass: cust_css });
    this.model.present()
    this.model.onDidDismiss(data => {
      this.modelstatus = false;
      this.areaid2 = data.displayarea_area_sec;
      this.areaid1 = data.displayarea_sec;

      if (this.areaid2 == '' || this.areaid2 == null) {
        if (localStorage.getItem('getfirstpincodearea') != null) {
          this.areaid2 = localStorage.getItem('getfirstpincodearea');
        }
      }
      if (this.areaid1 == '' || this.areaid1 == null) {
        if (localStorage.getItem('getsecondareapindata') != null) {
          this.areaid1 = localStorage.getItem('getsecondareapindata');
        }
      }
      this.customise = '1';
      localStorage.setItem('hardwareback', this.customise);

    });
  }

  deleteicon1() {
    this.areaid2 = localStorage.setItem('getfirstpincodearea', '');
    this.areaid1 = localStorage.setItem('getsecondareapindata', '');
    this.pincode_2 = localStorage.setItem('getfirstpincodeid', '');
  }

  deleteicon() {
    this.areaname_new = localStorage.setItem('areaname', '');
    this.abcde_new = localStorage.setItem('pincode', '');
    this.pincode_1 = localStorage.setItem('getsecondpincodeid', '');
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
				this.nav.setRoot('AccountPage');
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
			  // handler: () => {
				// this.nav.setRoot('AccountPage');
			  // }			  
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
