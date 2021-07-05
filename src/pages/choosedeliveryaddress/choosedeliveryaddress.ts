import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController,IonicApp } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ChoosedeliveryaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosedeliveryaddress',
  templateUrl: 'choosedeliveryaddress.html',
})
export class ChoosedeliveryaddressPage {
  ActiveLunch: boolean
  ActiveDinner: boolean
  mealtype
  Hfalt = ''
  Hadd1 = ''
  Hadd2 = ''
  Hcity = ''
  Hstate = ''
  Haddtype = ''
  Hpincode = ''

  Wfalt = ''
  Wadd1 = ''
  Wadd2 = ''
  Wcity = ''
  Wstate = ''
  Waddtype = ''
  Wpincode = ''
  lunch = ''
  dinner = ''
  id
  token
  Ldiv1
  Ldiv2
  Ddiv1
  Ddiv2
  conbut1='rgb(216,216,216)'
  Activechk1: boolean
  Activechk2: boolean
  pincode1 = ''
  pincode = ''
  lunchhome
  lunchwork
  dinnerhome
  dinnerwork
  backfrmchkout
  lchk1
  lchk2
  dchk1
  dchk2
  th1
  th2
  tw1
  tw2
  Ldiv11
  Ldiv21
  Ddiv11
  Ddiv21
  activehome: boolean = false
  activedinner: boolean = false
  activehome1: boolean = false
  activedinner1: boolean = false
  rdDefaultdsat
  rdDefaultdsun
  rdDefaultdsatd
  rdDefaultdsund
  pencilimghomelunch = "assets/imgicon/edit-black.svg"
  pencilimgworklunch = "assets/imgicon/edit-black.svg"
  pencilimghomedinner = "assets/imgicon/edit-black.svg"
  pencilimgworkdinner = "assets/imgicon/edit-black.svg"
  selectedhomelunch
  selectedworklunch
  selectedhomedin
  selectedworkdin
  addressis
  tl2: string;
  tl1: string;
  td2: string;
  td1: string;
  homestring:any;
  workstring:any;
  disablebox:any;
  disablebox2:any;
  existornot;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private util: UtilService,
    private push: PushService,
    private translate: TranslateService,
    private storage: Storage,
    private apiService: APIService,    
    public platform: Platform,
    public viewCtrl : ViewController,
    private ionicApp: IonicApp
  ) {
    this.selectedhomelunch = navParams.get('selectforhomelunchis');
    this.selectedworklunch = navParams.get('selectorworklunchis');
    this.selectedhomedin = navParams.get('selectforhomedinis');
    this.selectedworkdin = navParams.get('selectorworkdinis');
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
    this.mealtype = localStorage.getItem('mealType')
    this.Hfalt = localStorage.getItem('Hflatno');
    this.Hadd1 = localStorage.getItem('Haddline1');
    this.Hadd2 = localStorage.getItem('Haddline2');
    this.Hcity = localStorage.getItem('Hcity_id1');
    this.Hstate = localStorage.getItem('Hstate1');
    this.Haddtype = localStorage.getItem('Haddress_type1');
    this.Hpincode = localStorage.getItem('pincode');
    this.Wfalt = localStorage.getItem('Wflatno');
    this.Wadd1 = localStorage.getItem('Waddline1');
    this.Wadd2 = localStorage.getItem('Waddline2');
    this.Wcity = localStorage.getItem('Wcity_id1');
    this.Wstate = localStorage.getItem('Wstate1');
    this.Waddtype = localStorage.getItem('Waddress_type1');
    this.Wpincode = localStorage.getItem('workpincode');
    if(this.Hfalt=='' && this.Hadd1==''&& this.Hadd2=='')
    {
      this.homestring =  '';
      this.disablebox='0';
      localStorage.setItem('homeaddress_exist',this.disablebox);
    }
    else{
      this.homestring =  this.Hfalt+ ',' +this.Hadd1+ ',' +this.Hadd2+ ',' +this.Hcity+ ',' +this.Hpincode;
      this.disablebox='1';
      localStorage.setItem('homeaddress_exist',this.disablebox);
    }

    if(this.Wfalt=='' && this.Wadd1==''&& this.Wadd2=='')
    {
      this.workstring =  '';
      this.disablebox2='0';
    }
    else{
      this.workstring =  this.Wfalt+ ',' +this.Wadd1+ ',' +this.Wadd2+ ',' +this.Wcity+ ',' +this.Wpincode;
      this.disablebox2='1';
    }

    if (this.mealtype == "Both") {
      this.ActiveLunch = true;
      this.ActiveDinner = true;
    }
    else if (this.mealtype == "Lunch") {
      this.ActiveLunch = true;
      this.ActiveDinner = false;
    }
    else if (this.mealtype == "Dinner") {
      this.ActiveLunch = false;
      this.ActiveDinner = true;
    }
    //this.onLoadDeliveryAddessData();
    this.lunchhome = localStorage.getItem('Ladd');
    this.lunchwork = localStorage.getItem('Ladd');
    this.dinnerhome = localStorage.getItem('Dadd');
    this.dinnerwork = localStorage.getItem('Dadd');
    this.backfrmchkout = localStorage.getItem('backchooseaddress');
    this.lchk1 = localStorage.getItem('l1')
    this.lchk2 = localStorage.getItem('l2')
    this.dchk1 = localStorage.getItem('d1')
    this.dchk2 = localStorage.getItem('d2')
    
    if (this.mealtype == "Lunch") {
      if (localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null) {
        if (localStorage.getItem('backchooseaddress') != null) {
          this.navCtrl.setRoot('CheckoutPage');
          return;
        }

      }
    }
    if (this.mealtype == "Dinner") {
      if (localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null) {
        if (localStorage.getItem('backchooseaddress') != null) {
          this.navCtrl.setRoot('CheckoutPage');
          return;
        }

      }
    }
    if (this.mealtype == "Both") {
      if ((localStorage.getItem('selhomelun') != null || localStorage.getItem('selworklun') != null) && (localStorage.getItem('selworkdin') != null || localStorage.getItem('selhomedin') != null)) {
        if (localStorage.getItem('backchooseaddress') != null) {
          this.navCtrl.setRoot('CheckoutPage');
          return;
        }

      }
    }
      if (this.lunchhome == "Home Address") {
        this.Ldiv1 = "rgb(42, 194, 119)";
        this.Ldiv2 = "#ffffff"
        this.Ldiv11 = "activ2"
        this.Ldiv21 = "activ1"
       this.conbut1 =  "rgb(242, 155, 17)"
        this.tl1="#fff"
        this.tl2="#000"
        //this.Activechk1 = true
        this.lunch = localStorage.getItem('homeid');
        this.th1 = "white";
        localStorage.removeItem('selworklun')
        localStorage.setItem('selhomelun', '1')
        //this.activehome = true
        this.activedinner = false
        this.pencilimghomelunch = "assets/edit-2.png"
        this.Lchecked1 = false
        this.Lchecked2 = false

      }
      if (this.lunchwork == "Work Address") {
        this.Ldiv1 = "#ffffff"
        this.Ldiv2 = "rgb(42, 194, 119)";
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ2"
        this.conbut1 =  "rgb(242, 155, 17)"
        this.Activechk1 = true
        this.lunch = localStorage.getItem('workid');
        this.tw1 = " white"
        this.tl1="#000"
        this.tl2="#fff"
        localStorage.removeItem('selhomelun');
        localStorage.setItem('selworklun', '2');
        this.activedinner = true
        this.pencilimgworklunch = "assets/edit-2.png"
        if (this.lchk1 == "1") {
          this.Lchecked1 = true
        }
        else {
          this.Lchecked1 = false
        }
        if (this.lchk2 == "1") {
          this.Lchecked2 = true
        }
        else {
          this.Lchecked2 = false
        }
      }
      if (this.dinnerhome == "Home Address") {
        this.Ddiv1 = "rgb(42, 194, 119)";
        this.Ddiv2 = "#ffffff"
        this.Ddiv11 = "activ2"
        this.Ddiv21 = "activ1"
        this.conbut1 =  "rgb(242, 155, 17)";
        this.dinner = localStorage.getItem('homeid');
        this.th2 = "white";
        this.td1="#fff"
        this.td2="#000"
        localStorage.removeItem('selworkdin')
        localStorage.setItem('selhomedin', '3');
        this.activedinner1 = false;
        this.pencilimghomedinner = "assets/edit-2.png"
        this.Dchecked1 = false
        this.Dchecked2 = false

      }
      if (this.dinnerwork == "Work Address") {
        this.Ddiv1 = "#ffffff"
        this.Ddiv2 = "rgb(42, 194, 119)";
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ2"
        this.conbut1 = "rgb(242, 155, 17)"
        this.Activechk2 = true
        this.dinner = localStorage.getItem('workid');
        this.tw2 = "white"
        this.td1="#000"
        this.td2="#fff"
        localStorage.removeItem('selhomedin')
        localStorage.setItem('selworkdin', '4');
        this.activedinner1 = true;
        this.pencilimgworkdinner = "assets/edit-2.png"
        if (this.dchk1 == "1") {
          this.Dchecked1 = true
        }
        else {
          this.Dchecked1 = false
        }
        if (this.dchk2 == "1") {
          this.Dchecked2 = true
        }
        else {
          this.Dchecked2 = false
        }
      }
    if (this.mealtype == 'Lunch' || this.mealtype == 'lunch') {
      if (this.lunchhome == null) {
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ1"
      }
      if (this.lunchwork == null) {
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ1"
      }
    }
    else if (this.mealtype == 'Dinner' || this.mealtype == 'dunch') {
      if (this.dinnerhome == null) {
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ1"
      }
      if (this.dinnerwork == null) {
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ1"
      }
    }
    else if (this.mealtype == 'Both' || this.mealtype == 'both') {
      if (this.lunchhome == null) {
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ1"
      }
      if (this.lunchwork == null) {
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ1"
      }
      if (this.dinnerhome == null) {
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ1"
      }
      if (this.dinnerwork == null) {
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ1"
      }
    }
    else {
      if (this.lunchhome == null) {
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ1"
      }
      if (this.lunchwork == null) {
        this.Ldiv11 = "activ1"
        this.Ldiv21 = "activ1"
      }
      if (this.dinnerhome == null) {
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ1"
      }
      if (this.dinnerwork == null) {
        this.Ddiv11 = "activ1"
        this.Ddiv21 = "activ1"
      }
    }


  }

  onclicklunch1() {
    this.Ldiv1 = "rgb(42, 194, 119)";
    this.Ldiv2 = "#ffffff"
    this.tl1 = "white";
    this.tl2 = "black"
    if(this.mealtype=='Lunch')
		{
    this.conbut1 =  "rgb(242, 155, 17)"
    }
    this.Activechk1 = false
    this.th1 = "white";
    this.tw1 = "black"
    this.Ldiv11 = "activ2"
    this.Ldiv21 = "activ1"
    this.lunch = localStorage.getItem('homeid');
    this.pencilimghomelunch = "assets/edit-2.png";
    this.pencilimgworklunch = "assets/imgicon/edit-black.svg";
    localStorage.setItem('Ladd', 'Home Address');
    localStorage.removeItem('selworklun');
    localStorage.setItem('selhomelun', '1');
    this.activedinner = false
    this.Lchecked1 = false
    this.Lchecked2 = false
    this.l1 = ''
    this.l1 = "0";
    localStorage.removeItem('l1')
    localStorage.setItem('l1', '0')
    this.l2 = '';
    this.l2 = "0"
    localStorage.removeItem('l2')
    localStorage.setItem('l2', '0')
    localStorage.setItem('addressforlunch', 'addressforlunch');
  }

  onclicklunch2() {
    this.Ldiv1 = "#ffffff"
    this.Ldiv2 = "rgb(42, 194, 119)";
    this.tl2 = "white";
    this.tl1 = "black";
    if(this.mealtype=='Lunch')
		{
    this.conbut1 = "rgb(242, 155, 17)"
    }
    this.Activechk1 = true
    this.th1 = "black";
    this.tw1 = " white"
    this.lunch = localStorage.getItem('workid');
    this.pencilimghomelunch = "assets/imgicon/edit-black.svg"
    this.pencilimgworklunch = "assets/edit-2.png"
    localStorage.setItem('Ladd', 'Work Address')
    localStorage.removeItem('selhomelun');
    localStorage.setItem('selworklun', '2');
    this.activedinner = true
    localStorage.setItem('addressforlunch', 'addressforlunch')
    this.Ldiv11 = "activ1"
    this.Ldiv21 = "activ2";
  }
  onclickdinner1() {
    this.Ddiv1 = "rgb(42, 194, 119)";
    this.Ddiv2 = "#ffffff"
    this.td1 = "white";
    this.td2 = "black";
    if(this.mealtype=='Dinner' || this.mealtype=='Both')
		{
    this.conbut1 =  "rgb(242, 155, 17)"
    }
    this.Activechk2 = false
    this.dinner = localStorage.getItem('homeid');
    this.th2 = "white";
    this.tw2 = "black"
    this.pencilimghomedinner = "assets/edit-2.png";
    this.pencilimgworkdinner = "assets/imgicon/edit-black.svg";
    localStorage.setItem('Dadd', 'Home Address');
    localStorage.removeItem('selworkdin');
    localStorage.setItem('selhomedin', '3');
    this.activedinner1 = false;
    this.Dchecked1 = false;
    this.Dchecked2 = false;
    this.d1 = '';
    this.d1 = '0'
    localStorage.removeItem('d1')
    localStorage.setItem('d1', '0')
    this.d2 = '';
    this.d2 = '0'
    localStorage.removeItem('d2')
    localStorage.setItem('d2', '0')
    localStorage.setItem('addressfordinner', 'addressfordinner')
    this.Ddiv11 = "activ2"
    this.Ddiv21 = "activ1"

  }
  onclickdinner2() {
    this.Ddiv1 = "#ffffff"
    this.Ddiv2 = "rgb(42, 194, 119)";
    this.td2 = "white";
    this.td1 = "black"
    if(this.mealtype=='Dinner' || this.mealtype=='Both')
		{
    this.conbut1 =  "rgb(242, 155, 17)"
    }
    this.Activechk2 = true
    this.th2 = "black";
    this.tw2 = "white"
    this.dinner = localStorage.getItem('workid');
    this.pencilimghomedinner = "assets/imgicon/edit-black.svg"
    this.pencilimgworkdinner = "assets/edit-2.png"
    localStorage.setItem('Dadd', 'Work Address')
    localStorage.removeItem('selhomedin')
    localStorage.setItem('selworkdin', '4');
    //this.activehome1 = false
    this.activedinner1 = true;
    localStorage.setItem('addressfordinner', 'addressfordinner')
    this.Ddiv11 = "activ1"
    this.Ddiv21 = "activ2"
  }


  l1 = "0"
  l2 = "0"
  d1 = "0"
  d2 = "0"
  Lchecked1: boolean = false;
  LaddValue1(e): void {
    var isChecked = e.currentTarget.Lchecked1;
    this.existornot = localStorage.getItem('homeaddress_exist');
    if(this.existornot=='0')
    {
      var element = document.getElementById("checkedunchecked");
      element.classList.add("removeunchecked");
      this.rdDefaultdsat = false;
      this.l1 = "0"
        localStorage.setItem('l1', this.l1);
      this.util.alert(this.translate.instant('Home Address Not Entered'), '');
      return;
    }
    else{
      if (this.Lchecked1 == true) {
        this.l1 = "1"
        this.rdDefaultdsat = true
        localStorage.setItem('l1', this.l1)
      }
      else {
      this.rdDefaultdsat = false
        this.l1 = "0"
        localStorage.setItem('l1', this.l1)
      }
    }
  }

  Lchecked2: boolean = false
  LaddValue2(e): void {
  var isChecked = e.currentTarget.Lchecked2;
   this.existornot = localStorage.getItem('homeaddress_exist');
   if(this.existornot==0)
  {
    var element = document.getElementById("checkedunchecked");
    element.classList.add("removeunchecked");
    this.rdDefaultdsun = false

    this.util.alert(this.translate.instant('Home Address Not Entered'), '');
        return
  }
  else{
  
       
    if (this.Lchecked2 == true) {
      this.l2 = "1"
      this.rdDefaultdsun = true
      localStorage.setItem('l2', this.l2)
    }
    else {
      this.l2 = "0"
      this.rdDefaultdsun = false
      localStorage.setItem('l2', this.l2)
    }
  }
   
  }
  Dchecked1: boolean = false;
  DaddValue1(e): void {
  var isChecked = e.currentTarget.Dchecked1;

   this.existornot = localStorage.getItem('homeaddress_exist');
   if(this.existornot==0)
  {
    var element = document.getElementById("checkeduncheckeds");
      element.classList.add("removeunchecked");
    this.rdDefaultdsatd = false

    this.util.alert(this.translate.instant('Home Address Not Entered'), '');
        return
  }
  else{
  
        if (this.Dchecked1 == true) {
      this.d1 = "1"
      this.rdDefaultdsatd = true
      localStorage.setItem('d1', this.d1)
    }
    else {
      this.d1 = "0"
      this.rdDefaultdsatd = false
      localStorage.setItem('d1', this.d1)
    }
  }
   
  }
  Dchecked2: boolean = false;
  DaddValue2(e): void {
  var isChecked = e.currentTarget.Dchecked2;
  this.existornot = localStorage.getItem('homeaddress_exist');
  if(this.existornot==0)
  {
    var element = document.getElementById("checkeduncheckeds");
      element.classList.add("removeunchecked");
    this.rdDefaultdsund = false

    this.util.alert(this.translate.instant('Home Address Not Entered'), '');
        return
  }
  else{
  
      
    if (this.Dchecked2 == true) {
      this.d2 = "1"
      this.rdDefaultdsund = true
      localStorage.setItem('d2', this.d2)
    }
    else {
      this.d2 = "0"
      this.rdDefaultdsund = false
      localStorage.setItem('d2', this.d2)
    }
  }
    
  }
  Back() {
    var selectedhomelunch = localStorage.getItem('selhomelun')
    var selectedworklunch = localStorage.getItem('selworklun')
    var selectedhomedin = localStorage.getItem('selhomedin')
    var selectedworkdin = localStorage.getItem('selworkdin')
    localStorage.removeItem('selhomelun');
    localStorage.removeItem('selworklun');
    localStorage.removeItem('selhomedin');
    localStorage.removeItem('selworkdin');
    this.navCtrl.setRoot('WhereToDeliverePage', {
      selectforhomelunchis: selectedhomelunch,
      selectorworklunchis: selectedworklunch,
      selectforhomedinis: selectedhomedin,
      selectorworkdinis: selectedworkdin
    });
  }


  onclickAddress() {
    if (this.mealtype == "Both") {
      if (this.lunch == null || this.lunch == '') {
        this.util.alert(this.translate.instant('Select Lunch Address'), '');
        return
      }
      if (this.dinner == null || this.dinner == '') {
        this.util.alert(this.translate.instant('Select Dinner Address'), '');
        return
      }
    }
    else if (this.mealtype == "Lunch") {
      if (this.lunch == null || this.lunch == '') {
        this.util.alert(this.translate.instant('Select Lunch Address'), '');
        return
      }
    }
    else if (this.mealtype == "Dinner") {
      if (this.dinner == null || this.dinner == '') {
        this.util.alert(this.translate.instant('Select Dinner Address'), '');
        return
      }
    }
    if (this.selectedhomelunch != null || this.selectedworklunch!=null) {
      localStorage.setItem('selectDelAdd','1');
      localStorage.setItem('lunch_add', this.lunch);
      localStorage.setItem('dinner_add', this.dinner);
      this.navCtrl.setRoot('CheckoutPage');
      return;
    }
    else if (this.selectedhomedin != null || this.selectedworkdin!=null) {
      localStorage.setItem('selectDelAdd','1');
      localStorage.setItem('lunch_add', this.lunch);
      localStorage.setItem('dinner_add', this.dinner);
      this.navCtrl.setRoot('CheckoutPage');
      return;
    }
    else if (this.selectedhomelunch != null || this.selectedworklunch || this.selectedhomedin != null || this.selectedworkdin) {
      localStorage.setItem('selectDelAdd','1');
      localStorage.setItem('lunch_add', this.lunch);
      localStorage.setItem('dinner_add', this.dinner);
      this.navCtrl.setRoot('CheckoutPage');
      return;
    }
    else {
     localStorage.setItem('selectDelAdd','1');
      localStorage.setItem('lunch_add', this.lunch);
      localStorage.setItem('dinner_add', this.dinner);
      this.navCtrl.setRoot('CheckoutPage');
    }
    localStorage.setItem('selectDelAdd','1');
    localStorage.setItem('lunch_add', this.lunch);
    localStorage.setItem('dinner_add', this.dinner);
  }

  editaddress() {
    var selectedhomelunch = localStorage.getItem('selhomelun')
    var selectedworklunch = localStorage.getItem('selworklun')
    var selectedhomedin = localStorage.getItem('selhomedin')
    var selectedworkdin = localStorage.getItem('selworkdin')
    localStorage.removeItem('selhomelun');
    localStorage.removeItem('selworklun');
    localStorage.removeItem('selhomedin');
    localStorage.removeItem('selworkdin');
    this.navCtrl.setRoot('WhereToDeliverePage', {
      selectforhomelunchis: selectedhomelunch,
      selectorworklunchis: selectedworklunch,
      selectforhomedinis: selectedhomedin,
      selectorworkdinis: selectedworkdin
    });
  }

}
