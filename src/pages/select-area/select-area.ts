import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, Platform, IonicApp, AlertController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the SelectAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-area',
  templateUrl: 'select-area.html',
})
export class SelectAreaPage {
  public selectareaform: FormGroup;
  public areaid;
  public areaname
  public pincode
  areaArray = [];
  areaArrayfilter = [];
  displayarea
  displayid
  displaypincode
  Active: boolean
  checkarea: boolean
  checkareaid: any
  convertarea: any
  datavalues: any
  datavaluesid: any
  checklength: any
  ids: any
  customise_data: boolean
  model
  conmessage

  constructor(
    public navCtrl: NavController,
    private apiService: APIService,
    private nav: NavController,
    private builder: FormBuilder,
    private util: UtilService,
    private push: PushService,
    private storage: Storage,
    private translate: TranslateService,
    private viewctrl: ViewController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private ionicApp: IonicApp
  ) {

    const fields = {
      area: ['', Validators.required],
      pincode: ['', Validators.required],
      id: ['']
    };
    this.selectareaform = this.builder.group(fields);

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
  labelFlag: any;
  onSelectChange(selectedValue: any) {
    this.labelFlag = '1';
  }

  ngOnInit() {
    if (localStorage.getItem('areacode')) {
      this.nav.setRoot('ModulePage');
    }
    this.loadzipcode();
  }

  loadzipcode() {
    this.Active = false
    this.displayarea = '';
    if (localStorage.getItem('area-pincode') != null) {
      this.displayarea = localStorage.getItem('area-pincode');
    }
    this.displayid = '';
    this.displaypincode = '';
    this.apiService.showselectarea().then(response => {

      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.areaArray = response.data;
      }
      else {
        this.conmessage = response.message;
        this.showConfirmAlert();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert();
    });

  }

  displayareacode() {
    this.checklength = localStorage.getItem('area-pincode');
    if (this.checklength == null || this.checklength == 0) {
      this.util.alert(this.translate.instant('Please Select Area'), '');
      return;
    }
    if (this.areaid == 0 || this.areaid == null) {
      if (this.checklength.length < 6) {
        this.util.alert(this.translate.instant('Please Select Area'), '');
        return;
      }
    }
    localStorage.setItem('areacode', this.areaid);
    this.util.showLoader();
    this.nav.setRoot('ModulePage');
    this.util.hideLoader();
  }

  ionViewDidLoad() {

  }
  modelstatus;
  onclickarea() {
    let cust_css;
    cust_css = 'select-modal-rtms'
    this.modelstatus = true;
    // code of opening area-edit page in model
    this.model = this.modalCtrl.create('AreaEditPage', {
    
      customise_data: true
    }, { cssClass: cust_css});
    this.model.present()
    this.model.onDidDismiss(data => {
      this.modelstatus = false;
      this.displayarea = data.displayarea;
      if(this.displayarea=='' || this.displayarea==null)
      {
        if (localStorage.getItem('area-pincode') != null) {
            this.displayarea = localStorage.getItem('area-pincode');
        }
      }
    });
  }
  Back(){
   if (localStorage.getItem('area-pincode') != null) {
            this.displayarea = localStorage.getItem('area-pincode');
    }
    if(this.modelstatus){
      this.model.dismiss();
    }else{
     localStorage.removeItem('onboardshows');
      this.nav.setRoot('OnboardingPage');     
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
			  handler: () => {
          this.navCtrl.setRoot('SelectAreaPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
