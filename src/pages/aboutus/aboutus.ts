import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, Platform,IonicApp, AlertController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
  aboutusArray = []
  page_name
  conmessage
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    private nav: NavController,
    private builder: FormBuilder,
    private util: UtilService,
    private push: PushService,
    public atrCtrl: AlertController,
    private storage: Storage,
    private translate: TranslateService,
    private viewctrl: ViewController,
    public platform: Platform,
    private sanitizer: DomSanitizer,
    private ionicApp: IonicApp) {
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
    console.log('ionViewDidLoad AboutusPage');
  }
  ngOnInit() {
    this.loadaboutus();
  }
  loadaboutus() {
    this.page_name='about'
    this.apiService.getaContent(this.page_name).then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.aboutusArray = response.data;
        for (var i = 0; i < this.aboutusArray.length; i++) {
          this.aboutusArray[i].page_name = this.sanitizer.bypassSecurityTrustHtml(this.aboutusArray[i].page_name);
          this.aboutusArray[i].page_description = this.sanitizer.bypassSecurityTrustHtml(this.aboutusArray[i].page_description);
        }
      }
      else{
        this.conmessage = response.message;
        this.showConfirmAlert();
      }
    }, (data) => {
      this.conmessage = "Something's wrong, let's try again?";
      this.showConfirmAlert();
    });
  }

  Back()
  {
    this.nav.setRoot('MenuPage');
  }
  onclickterm()
  {
    this.nav.setRoot('TermsAndPrivacyPage')
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
            this.navCtrl.setRoot('AboutusPage');
          }
          
        }
      ]
    });
    (await alertConfirm).present();
  }
}
