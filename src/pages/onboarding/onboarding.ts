import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, AlertController, App } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
  public active1: boolean;
  public active2: boolean;
  public active3: boolean;
  contents: any;
  screenis = ''
  page_name
  conmessage
  constructor(public navCtrl: NavController,
    private apiService: APIService,
    private nav: NavController,
    private builder: FormBuilder,
    private util: UtilService,
    private push: PushService,
    public statusBar: StatusBar,
    private storage: Storage,
    private translate: TranslateService,
    private viewctrl: ViewController,
    public platform: Platform,
    public app: App,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {    
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
    this.screenis = navParams.get('screenis')

    let backAction = platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if (activeView.name == 'OnboardingPage') {
        if (this.count == 0) {
          this.count++;
          if (nav.canGoBack()) {
            nav.pop();
          } else {
            this.presentToast();
          }
        }
      }
    }, 2)

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
            if (this.active1 == true) {
              var firstpage = "firstpage"
              this.nav.setRoot('OnboardingPage', {
                selecscreenis: firstpage
              });
            }
            else if (this.active2 == true) {
              var secondpage = "secondpage"
              this.nav.setRoot('OnboardingPage', {
                selecscreenis: secondpage
              });
            }
            else if (this.active3 == true) {
              var thirdpage = "thirdpage"
              this.nav.setRoot('OnboardingPage', {
                selecscreenis: thirdpage
              });
            }
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
  ngOnInit() {
    if (this.platform.is('ios')) {
      this.statusBar.backgroundColorByHexString('f3a01c');
    }
    if (localStorage.getItem('onboardshows') == '1') {
      this.nav.setRoot('SelectAreaPage');
      return;
    }
    if (this.screenis == "firstpage") {
      this.active1 = true;
      this.active2 = false;
      this.active3 = false;
    }
    else if (this.screenis == "secondpage") {
      this.active1 = false;
      this.active2 = true;
      this.active3 = false;
    }
    else if (this.screenis == "thirdpage") {
      this.active1 = false;
      this.active2 = false;
      this.active3 = true;
    }
    this.loadcontent();
  }

  onboardingFirst() {
    this.nav.setRoot('SelectAreaPage');
    localStorage.setItem('onboardshows', '1');
  }
  onboardingSecond() {
    this.nav.setRoot('SelectAreaPage');
  }
  onboardingThird() {
    this.nav.setRoot('SelectAreaPage');
  }

  firstnext(index) {
    if (index == 0) {
      this.active1 = true;
      this.active2 = false;
      this.active3 = false;
      localStorage.setItem('frston', '1');
      localStorage.setItem('secondon', '0');
      localStorage.setItem('thirdon', '0');
    }
    else if (index == 1) {
      this.active1 = false;
      this.active2 = true;
      this.active3 = false;
      localStorage.setItem('frston', '0');
      localStorage.setItem('secondon', '1');
      localStorage.setItem('thirdon', '0');
    }
    else if (index == 2) {
      this.active1 = false;
      this.active2 = false;
      this.active3 = true;
      localStorage.setItem('frston', '0');
      localStorage.setItem('secondon', '0');
      localStorage.setItem('thirdon', '1');
    }
    else if (index == 3) {
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      localStorage.setItem('frston', '0');
      localStorage.setItem('secondon', '0');
      localStorage.setItem('thirdon', '1');
      this.nav.setRoot('SelectAreaPage');
      localStorage.setItem('onboardshows', '1');
    }
  }

  ionViewDidLoad() {
    if (this.platform.is('ios')) {
      this.statusBar.backgroundColorByHexString('f3a01c');
    }
    
  }

  page_name1: any; page_name2: any; page_name3: any;
  page_desc1: any; page_desc2: any; page_desc3: any;

  loadcontent() {
    this.page_name = 'home'
    this.apiService.getaContent(this.page_name).then(response => {

      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.contents = response.data;  
        this.page_name1 = this.sanitizer.bypassSecurityTrustHtml(this.contents[0]['page_name']);
        this.page_desc1 = this.sanitizer.bypassSecurityTrustHtml(this.contents[0]['page_description']);
        this.page_name2 = this.sanitizer.bypassSecurityTrustHtml(this.contents[1]['page_name']);
        this.page_desc2 = this.sanitizer.bypassSecurityTrustHtml(this.contents[1]['page_description']);
        this.page_name3 = this.sanitizer.bypassSecurityTrustHtml(this.contents[2]['page_name']);
        this.page_desc3 = this.sanitizer.bypassSecurityTrustHtml(this.contents[2]['page_description']);
      }
      else {
        this.conmessage = response.message;
			  this.showConfirmAlert();
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
			this.showConfirmAlert();
    }); //FaqPage
  }
  faq() {
    if (this.active1 == true) {
      var firstpage = "firstpage"
      this.nav.setRoot('FaqPage', {
        selecscreenis: firstpage
      });
    }
    else if (this.active2 == true) {
      var secondpage = "secondpage"
      this.nav.setRoot('FaqPage', {
        selecscreenis: secondpage
      });
    }
    else if (this.active3 == true) {
      var thirdpage = "thirdpage"
      this.nav.setRoot('FaqPage', {
        selecscreenis: thirdpage
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
			  handler: () => {
				this.navCtrl.setRoot('OnboardingPage');
			  }			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
