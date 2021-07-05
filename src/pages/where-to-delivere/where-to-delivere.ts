import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Platform, ViewController,IonicApp } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Keyboard } from 'ionic-angular';
/**
 * Generated class for the WhereToDeliverePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-where-to-delivere',
  templateUrl: 'where-to-delivere.html',
})
export class WhereToDeliverePage {
  @ViewChild('flatno1') flatno1input;
  @ViewChild('address11') address11input
  @ViewChild('address21') address21input
  @ViewChild('flateno2') flateno2Input;
  @ViewChild('address12') address12input
  @ViewChild('address22') address22input
  @ViewChild('areaidselect') areaidinput
  Hcity = "Pune";
  HState = "Maharashtra";
  WCity = "Pune";
  WState = "Maharashtra";
  public deliveryAddressForm: FormGroup;
  public active: boolean;
  Actives: boolean
  Actives_one: boolean
  Actives_second: boolean
  Actives_second1: boolean
  customise_data:boolean
  token;
  customer_id;
  address11;
  address12;
  area_id1;
  address22: any;
  city1: any;
  state1: any;
  address_type1: string;
  meal_type1: any;
  flat_no1: any;
  area_id2: any;
  address_type2: string;
  flat_no2: any;
  meal_type2: any;
  state2: any;
  city2: any;
  address21: any;
  mealId: any;
  areaname;
  pincode;
  areaid;
  areaid1;
  areaid2;
  getfirstpincodeid
  getsecondpincodeid
  getsecondareapin
  localhostset
  model
  customise:any;
  areaArray = [];
  areaArrayfilter= [];
  areaArrayfilters=[];
  areaArrayfilters_sec=[];
  areaArrayfilters2=[];
  areaArray1 = [];
  pincode1;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any;
  autocompleteItems: any;
  nearbyItems: any = new Array<any>();
  loading: any;
  homeid
  workid
  selectedlunch1
  selectedlunch2
  selecteddin1
  selecteddin2
  idappend:any
  abcde
  abcde_new
  areaname_new
  checkarea: boolean
  checkareaid: any
  convertarea:any
  datavalues:any
  datavaluesid:any
  getfirstpincodearea
  id
  displayarea 
  address_2
  address_22
  address_1
  address_12
  flat_2
  flat_1
  pincode_1
  pincode_2
  conmessage
  constructor(private apiService: APIService,
    private nav: NavController,
    private builder: FormBuilder,
    private util: UtilService,
    private push: PushService,
    private storage: Storage,
    private translate: TranslateService,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public atrCtrl: AlertController,    
    public platform: Platform,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private ionicApp: IonicApp,
    private keyboard: Keyboard
  ) {
    this.active = true;
    const fields = {
      flat_no1: [localStorage.getItem('Hflatno'), Validators.required],
      address11: [localStorage.getItem('Haddline1'), Validators.required],
      address21: [localStorage.getItem('Haddline2'), Validators.required],
      city1: [''],
      area_id1: [localStorage.getItem('areacode')],
      area_id12: [localStorage.getItem('areacode'), Validators.required],
      state1: [''],
      pinCode: [''],
      flate_no2: [localStorage.getItem('Wflatno'), Validators.required],
      address12: [localStorage.getItem('Waddline1'), Validators.required],
      address22: [localStorage.getItem('Waddline2'), Validators.required],
      city2: [''],
      area_id2: [localStorage.getItem('areaid1')],
      area_id22: [localStorage.getItem('areaid1'), Validators.required],
      state2: [''],
      pinCode2: [''],
      homeid: [parseInt(localStorage.getItem('homeid'))],
      workid: [parseInt(localStorage.getItem('workid'))]
    };
    this.deliveryAddressForm = this.builder.group(fields);
    this.selectedlunch1 = navParams.get('selectforhomelunchis');
    this.selectedlunch2 = navParams.get('selectorworklunchis');
    this.selecteddin1 = navParams.get('selectforhomedinis');
    this.selecteddin2 = navParams.get('selectorworkdinis');
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
  ionViewLoaded() {
  }

  ionViewWillEnter() {
  }

  homelunchadd//selhomelun
  worklunchadd //selworklun
  workdinneradd //selworkdin
  homedinneradd //selhomedin
  ngOnInit() {
  this.customise = '1';
    localStorage.setItem('hardwareback', this.customise);
    this.Actives = false
    this.Actives_one= false
    this.Actives_second = false
    this.Actives_second1 = false
    this.token = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.mealId = localStorage.getItem('mealId');
    this.areaname = localStorage.getItem('areaname');
     if (localStorage.getItem('areaname') != null) {
      if (localStorage.getItem('areaname') != 'null') {
        this.areaname_new = localStorage.getItem('areaname');
      }
      else{
        this.areaname_new = '';
      }
    }
    else{
      if (localStorage.getItem('areaname') != 'null') {
        this.areaname_new = localStorage.getItem('areaname');
      }
      else{
        this.areaname_new = '';
      }
      
    }
    this.pincode = localStorage.getItem('pincode');
       if (localStorage.getItem('pincode') != null) {
      this.abcde_new = localStorage.getItem('pincode');
      if(this.abcde_new.length=='1' || this.abcde_new.length=='2' || this.abcde_new.length=='3' || this.abcde_new.length=='4' ||  this.abcde_new.length=='5' || this.abcde_new.length=='0')
      {
       this.abcde_new = '';
      }
    }
    else{
      this.abcde_new = '';
    }
    this.localhostset = localStorage.getItem('thisdataid');
    localStorage.setItem('getsecondpincodeid', this.localhostset);
    this.areaid = localStorage.getItem('areacode')
    if (localStorage.getItem('Wareaid') != null) {
      this.areaid1 = localStorage.getItem('Wareaid')

    }
    if (localStorage.getItem('getfirstpincodearea') != null) {
      this.areaid2 = localStorage.getItem('getfirstpincodearea');
    }
    else{
      this.areaid2 = '';
    }
    if (localStorage.getItem('getsecondareapindata') != null) {
      this.areaid1 = localStorage.getItem('getsecondareapindata');
    }
    else{
      this.areaid1 = '';
    }
    this.loadzipcode();
    this.loadzipcode1();
    this.homelunchadd = localStorage.getItem('selhomelun');
    this.worklunchadd = localStorage.getItem('selworklun');
    this.workdinneradd = localStorage.getItem('selworkdin');
    this.homedinneradd = localStorage.getItem('selhomedin');

    if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null || localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
      return;
    }


  }

  ionViewDidLoad() {

  }

  onSubmit() {

    var data = JSON.parse(JSON.stringify(this.deliveryAddressForm.value));

    if((data.flat_no1 == null || data.flat_no1 == '') && (data.address11 == null || data.address11 == '') && (data.address21 == null || data.address21 == '') && (data.area_id1 == null || data.area_id1 == '') && (data.flate_no2 == null || data.flate_no2 == '') && (data.address12 == null || data.address12 == '') && (data.address22 == null || data.address22 == '') && (data.area_id2 == null || data.area_id2 == ''))
    {
      this.util.hideLoader();
          setTimeout(() => {
            this.flatno1input.setFocus();
          }, 150);
          this.util.alert(this.translate.instant('Fill one or both address'), '');
          return;
      
    }

    if((data.flat_no1 == null || data.flat_no1 == '') && (data.address11 == null || data.address11 == '') && (data.address21 == null || data.address21 == '') && (data.area_id1 == null || data.area_id1 == ''))
    {
         if((data.flate_no2 == null || data.flate_no2 == '') && (data.address12 == null || data.address12 == '') && (data.address22 == null || data.address22 == '') && (data.area_id2 == null || data.area_id2 == ''))
        {
        }
        else{
          if ((data.flate_no2 == null || data.flate_no2 == '')) {
            this.util.hideLoader();
            setTimeout(() => {
              this.flatno1input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Please Enter Work Address'), '');
            return;
          }

          if ((data.address12 == null || data.address12 == '')) {
            this.util.hideLoader();
            setTimeout(() => {
              this.address11input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
            this.util.hideLoader();
            return;
          }

          if ((data.address22 == null || data.address22 == '')) {
            this.util.hideLoader();
            setTimeout(() => {
              this.address21input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
            this.util.hideLoader();
            return;
          }

          if ((data.area_id2 == null || data.area_id2 == '')) {
            this.util.hideLoader();
            
             this.util.alert(this.translate.instant('Please Enter Work Pincode'), '');
            this.util.hideLoader();
            return;
          }

          if ((data.area_id22 == null || data.area_id22 == '')) {
            this.util.hideLoader();
            
             this.util.alert(this.translate.instant('Please Enter Work Area'), '');
            this.util.hideLoader();
            return;
          }
           
        }

      
    }
    else{
       if ((data.flat_no1 == null || data.flat_no1 == '')) {
          this.util.hideLoader();
          setTimeout(() => {
            this.flatno1input.setFocus();
          }, 150);
          this.util.alert(this.translate.instant('Please Enter Home Address'), '');
          return;
        }

        if ((data.address11 == null || data.address11 == '')) {
          this.util.hideLoader();
          setTimeout(() => {
            this.address11input.setFocus();
          }, 150);
          this.util.alert(this.translate.instant('Please Enter Home Address Line 1'), '');
          this.util.hideLoader();
          return;
        }

        if ((data.address21 == null || data.address21 == '')) {
          this.util.hideLoader();
          setTimeout(() => {
            this.address21input.setFocus();
          }, 150);
          this.util.alert(this.translate.instant('Please Enter Home Address Line 2'), '');
          this.util.hideLoader();
          return;
        }
        console.log(+'9999'+data.area_id1+'9999');
        if ((data.area_id1 == null || data.area_id1 == '')) {
          this.util.hideLoader();
          
           this.util.alert(this.translate.instant('Please Enter Pincode'), '');
          this.util.hideLoader();
          return;
        }

        if ((data.area_id12 == null || data.area_id12 == '')) {
          this.util.hideLoader();
          
           this.util.alert(this.translate.instant('Please Enter Area'), '');
          this.util.hideLoader();
          return;
        }
        if((data.flate_no2 == null || data.flate_no2 == '') && (data.address12 == null || data.address12 == '') && (data.address22 == null || data.address22 == '') && (data.area_id2 == null || data.area_id2 == ''))
        {
        }
        else{
          if ((data.flate_no2 == null || data.flate_no2 == '')) {
            this.util.hideLoader();
            setTimeout(() => {
              this.flatno1input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Please Enter Work Address'), '');
            return;
          }

          if ((data.address12 == null || data.address12 == '')) {
            this.util.hideLoader();
            setTimeout(() => {
              this.address11input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Please Enter Work Address Line 1'), '');
            this.util.hideLoader();
            return;
          }

          if ((data.address22 == null || data.address22 == '')) {
            this.util.hideLoader();
            setTimeout(() => {
              this.address21input.setFocus();
            }, 150);
            this.util.alert(this.translate.instant('Please Enter Work Address Line 2'), '');
            this.util.hideLoader();
            return;
          }

          if ((data.area_id2 == null || data.area_id2 == '')) {
            this.util.hideLoader();
            
             this.util.alert(this.translate.instant('Please Enter Work Pincode'), '');
            this.util.hideLoader();
            return;
          }
          if ((data.area_id22 == null || data.area_id22 == '')) {
            this.util.hideLoader();
            
             this.util.alert(this.translate.instant('Please Enter Work Area'), '');
            this.util.hideLoader();
            return;
          }
           
        }
    }
    if(data.address12==null)
    {
      this.address_2 = '';
    }
    else{
      this.address_2 = data.address12;
    }

     if(data.address11==null)
    {
      this.address_1 = '';
    }
    else{
      this.address_1 = data.address11;
    }


    if(data.address22==null)
    {
      this.address_22 = '';
    }
    else{
      this.address_22 = data.address22;
    }

    if(data.address21==null)
    {
      this.address_12 = '';
    }
    else{
      this.address_12 = data.address21;
    }

     if(data.flate_no2==null)
    {
      this.flat_2 = '';
    }
    else{
      this.flat_2 = data.flate_no2;
    }

    if(data.flat_no1==null)
    {
      this.flat_1 = '';
    }
    else{
      this.flat_1 = data.flat_no1;
    }

    this.pincode_1 =localStorage.getItem('getsecondpincodeid');
    this.pincode_2 = localStorage.getItem('getfirstpincodeid');
    if(localStorage.getItem('getsecondareapindata')==null)
    {
        localStorage.setItem('getsecondareapindata', '');
    }
    else{
        localStorage.setItem('getsecondareapindata', localStorage.getItem('getsecondareapindata'));
    }

    if(localStorage.getItem('getfirstpincodearea')==null)
    {
        localStorage.setItem('getfirstpincodearea', '');
    }
    else{
        localStorage.setItem('getfirstpincodearea', localStorage.getItem('getfirstpincodearea'));
    }
    localStorage.setItem('workpincode', localStorage.getItem('getsecondareapindata'));
    console.log(data.homeid);
    console.log(data.workid);
    var data1 = {
      token: this.token,
      customer_id: this.customer_id,
      meal_type: this.mealId,
      address11: this.address_1,
      address21: this.address_12,
      area_id1: this.pincode_1,
      city1: data.city1,
      state1: data.state1,
      address_type1: 'home',
      flat_no1: this.flat_1,
      address12: this.address_2,
      address22: this.address_22,
      area_id2: this.pincode_2,
      city2: data.city2,
      state2: data.state2,
      address_type2: 'work',
      flat_no2: this.flat_2,
      homeid: data.homeid,
      workid: data.workid
    }
    this.apiService.addAddress(data1).then(res => {
      this.util.showLoader();
      if (res.success) {
        localStorage.setItem('Hflatno', data1.flat_no1);
        localStorage.setItem('Haddline1', data1.address11);
        localStorage.setItem('Haddline2', data1.address21);
        localStorage.setItem('Hcity_id1', data1.city1);
        localStorage.setItem('Hstate1', data1.state1);
        localStorage.setItem('Haddress_type1', data1.address_type1);
        localStorage.setItem('Hareaid', data.area_id1)
        localStorage.setItem('Wflatno', data1.flat_no2);
        localStorage.setItem('Waddline1', data1.address12);
        localStorage.setItem('Waddline2', data1.address22);
        localStorage.setItem('Wcity_id1', data1.city2);
        localStorage.setItem('Wstate1', data1.state2);
        localStorage.setItem('Waddress_type1', data1.address_type2);
        localStorage.setItem('Wareaid', data.area_id2)

        this.homeid = parseInt(res.data[0]['homeid'])
        this.workid = parseInt(res.data[0]['workid'])
        localStorage.setItem('respcgst',res.data[0]['CGST']);
        localStorage.setItem('respigst',res.data[0]['IGST']);
        localStorage.setItem('homeid', this.homeid)
        localStorage.setItem('workid', this.workid)
        this.util.hideLoader();
        var selectedhomelunch = localStorage.getItem('selhomelun')
        var selectedworklunch = localStorage.getItem('selworklun')
        var selectedhomedin = localStorage.getItem('selhomedin')
        var selectedworkdin = localStorage.getItem('selworkdin')
        localStorage.removeItem('selhomelun');
        localStorage.removeItem('selworklun');
        localStorage.removeItem('selhomedin');
        localStorage.removeItem('selworkdin');

        localStorage.setItem('selectWhereAddress', '1');

        this.nav.setRoot('ChoosedeliveryaddressPage', {
          selectforhomelunchis: selectedhomelunch,
          selectorworklunchis: selectedworklunch,
          selectforhomedinis: selectedhomedin,
          selectorworkdinis: selectedworkdin
        });
      }
      else{
        this.conmessage = res.message;
			  this.showConfirmAlert1();
      }
    }).catch((res) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert1();
    });

  }

  Back() {
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
    else{
      var backfromwheretodel = "backfromwheretodel";
      localStorage.removeItem('selectDelTime');
      this.nav.setRoot('ChoosedeliverytimePage', {
        back: backfromwheretodel
      });
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
      this.conmessage = response.message;
      this.showConfirmAlert1();
    });
  }
   

   onclickarea1() {
    
   this.customise = '0';
   localStorage.setItem('hardwareback', this.customise);
    let cust_css;
    cust_css = 'select-modal-rtms'
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: true
    }, { cssClass: cust_css ,enableBackdropDismiss: false });
    this.model.present()
    this.model.onDidDismiss(data => {
    this.abcde_new = data.displayarea;
    this.areaname_new = data.displayarea_area;
    if(this.areaname_new=='' || this.areaname_new==null)
    {
      if (localStorage.getItem('areaname') != null) {
            this.areaname_new = localStorage.getItem('areaname');
      }
      if (localStorage.getItem('areaname') == 'null') {
        localStorage.setItem('areaname','');
        this.areaname_new = localStorage.getItem('areaname');
      }
      else{
         this.areaname_new = localStorage.getItem('areaname');
      } 
    }
    else{
      if (this.areaname_new == 'null') {
        localStorage.setItem('areaname','');
        this.areaname_new = localStorage.getItem('areaname');
      }
      else{
         this.areaname_new = localStorage.getItem('areaname');
      }  
    }
    if(this.abcde_new=='' || this.abcde_new==null)
    {
      if (localStorage.getItem('pincode') != null) {
        this.abcde_new = localStorage.getItem('pincode');
      }
      else{
        if (localStorage.getItem('pincode') == 'null') {
          localStorage.setItem('pincode','');
          this.abcde_new = localStorage.getItem('pincode');
        }
        else{
           this.abcde_new = localStorage.getItem('pincode');
        }       
      }
    }
    else{
     if (this.abcde_new == 'null') {
        localStorage.setItem('pincode','');
        this.abcde_new = localStorage.getItem('pincode');
      }
      else{
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
    let cust_css;
    cust_css = 'select-modal-rtms'
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: false,
      customise_data2: true
    }, { cssClass: cust_css ,enableBackdropDismiss: false});
    this.model.present()
    this.model.onDidDismiss(data => {
    this.abcde_new = data.displayarea;
    this.areaname_new = data.displayarea_area;
    if(this.areaname_new=='' || this.areaname_new==null)
    {
      if (localStorage.getItem('areaname') != null) {
          if(localStorage.getItem('areaname') == 'null')
          {
            localStorage.setItem('areaname','');
            this.areaname_new = localStorage.getItem('areaname');
          }
          else{
            this.areaname_new = localStorage.getItem('areaname');
          }
      }
      else{
        if(localStorage.getItem('areaname') == 'null')
          {
            localStorage.setItem('areaname','');
            this.areaname_new = localStorage.getItem('areaname');
          }
          else{
            this.areaname_new = localStorage.getItem('areaname');
          }

      }
    }
    else{
        if(this.areaname_new == 'null')
        {
          localStorage.setItem('areaname','');
          this.areaname_new = localStorage.getItem('areaname');
        }
        else{
          this.areaname_new = localStorage.getItem('areaname');
        }

    }
    if(this.abcde_new=='' || this.abcde_new==null)
    {
      if (localStorage.getItem('pincode') != null) {
        if(localStorage.getItem('pincode') == 'null')
        {
          localStorage.setItem('pincode','');    
          this.abcde_new = localStorage.getItem('pincode');
        }
        else{
          this.abcde_new = localStorage.getItem('pincode');
        }
        
      }
      else{
        if(localStorage.getItem('pincode') == 'null')
        {
          localStorage.setItem('pincode','');    
          this.abcde_new = localStorage.getItem('pincode');
        }
        else{
          this.abcde_new = localStorage.getItem('pincode');
        }

      }
    }
    else{
        if(this.abcde_new == 'null')
        {
          localStorage.setItem('pincode','');    
          this.abcde_new = localStorage.getItem('pincode');
        }
        else{
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
    cust_css = 'select-modal-rtms'
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: false,
      customise_data2: false,
      customise_data3: true
    }, { cssClass: cust_css,enableBackdropDismiss: false });
    this.model.present()
    this.model.onDidDismiss(data => {
    this.areaid2 = data.displayarea_area_sec;
    this.areaid1 = data.displayarea_sec;
    if(this.areaid2=='' || this.areaid2==null)
    {
        if (localStorage.getItem('getfirstpincodearea') != null) {
          this.areaid2 = localStorage.getItem('getfirstpincodearea');
        }
    }
    if(this.areaid1=='' || this.areaid1==null)
    {
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
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
      myValue: '',
      customise_data: false,
      customise_data1: false,
      customise_data2: false,
      customise_data3: false,
      customise_data4: true
    }, { cssClass: cust_css ,enableBackdropDismiss: false});
    this.model.present()
    this.model.onDidDismiss(data => {
    this.areaid2 = data.displayarea_area_sec;
    this.areaid1 = data.displayarea_sec;
     if(this.areaid2=='' || this.areaid2==null)
    {
        if (localStorage.getItem('getfirstpincodearea') != null) {
          this.areaid2 = localStorage.getItem('getfirstpincodearea');
        }
    }
    if(this.areaid1=='' || this.areaid1==null)
    {
        if (localStorage.getItem('getsecondareapindata') != null) {
            this.areaid1 = localStorage.getItem('getsecondareapindata');
        }
    }
    this.customise = '1';
    localStorage.setItem('hardwareback', this.customise);
    });
  }

  deleteicon1(){
    this.areaid2 = localStorage.setItem('getfirstpincodearea','');
    this.areaid1 = localStorage.setItem('getsecondareapindata','');
    this.pincode_2 = localStorage.setItem('getfirstpincodeid','');
  }

   deleteicon(){
    this.areaname_new = localStorage.setItem('areaname','');
    this.abcde_new = localStorage.setItem('pincode','');
    this.pincode_1 = localStorage.setItem('getsecondpincodeid','');
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
        // this.util.alert(response.errors, '');
        this.conmessage = response.message;
        this.showConfirmAlert1();
      }
    }, (response) => {
        this.conmessage = response.message;
        this.showConfirmAlert1();
    });
  }


  async showConfirmAlert() {
    let alertConfirm = this.atrCtrl.create({
      //header: 'Download Successfully',
      message: 'Please enter home address',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            setTimeout(() => {
              this.flatno1input.setFocus();
            }, 150);
          }
        }
      ]
    });
    (await alertConfirm).present();
  }

  async showConfirmAlert1() {
		let alertConfirm = this.atrCtrl.create({
		  //header: 'Download Successfully',
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "Try again",
			  handler: () => {
				this.nav.setRoot('WhereToDeliverePage');
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
