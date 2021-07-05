import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform,IonicApp, AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the TermsAndPrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-and-privacy',
  templateUrl: 'terms-and-privacy.html',
})
export class TermsAndPrivacyPage {
  termArray = []
  termsHight : string;
  fromonmodule
  page_name
  conmessage
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    private nav: NavController,
    private builder: FormBuilder,
    private util: UtilService,
    private push: PushService,
    private storage: Storage,
    private translate: TranslateService,
    public alertCtrl: AlertController,
    private viewctrl: ViewController,
    public platform: Platform,
    private sanitizer: DomSanitizer,
    private ionicApp: IonicApp) {
    this.fromonmodule = navParams.get('screenis')
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
  description
  ngOnInit() {
    this.loadaterms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndPrivacyPage');
    // this.termsHight = 'auto';
    var height = document.getElementById("terms").clientHeight;
    console.log(height);

  }
  loadaterms() {
    this.page_name='terms'
    this.apiService.getaContent(this.page_name).then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.termArray = response.data;
        for (var i = 0; i < this.termArray.length; i++) {
          this.termArray[i].page_name = this.sanitizer.bypassSecurityTrustHtml(this.termArray[i].page_name);
          this.termArray[i].page_description = this.sanitizer.bypassSecurityTrustHtml(this.termArray[i].page_description);
        }
      }
      else{
        this.conmessage = response.message;
        this.showConfirmAlert();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert();
    });
  }
  Back() {
    if (this.fromonmodule == "ommoduleterm") {
      this.nav.setRoot('ModulePage')
      return;
    }
    else {
      // window['location'].reload();
      // this.util.showLoader();
      this.nav.setRoot('MenuPage')
    }

  }

  async showConfirmAlert() {
		let alertConfirm = this.alertCtrl.create({
		  //header: 'Download Successfully',
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "try again",
			  handler: () => {
				this.navCtrl.setRoot('TermsAndPrivacyPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }

}
