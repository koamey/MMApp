import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, AlertController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  faqArray = []
  shownGroup = null;
  faqscreen = ''
  screenis = ''
  conmessage
  public isClicked: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiService: APIService,
    private nav: NavController,
    private builder: FormBuilder,
    private util: UtilService,
    private push: PushService,
    private storage: Storage,
    private translate: TranslateService,
    private viewctrl: ViewController,
    public platform: Platform,
    public atrCtrl: AlertController,
    private sanitizer: DomSanitizer) {
    this.faqscreen = navParams.get('screenis')
    this.screenis = navParams.get('selecscreenis');

    let backAction = platform.registerBackButtonAction(() => {
      this.Back();
      backAction();
    }, 2)
  }

  ionViewDidLoad() {

  }

  Back() {
    if (this.faqscreen == "FAQScreen") {
      var faq = "FAQScreen"
      this.nav.setRoot('AccountPage', {
        screenis: faq
      });
    }
    else if (this.screenis == "firstpage") {
      var firstpage = "firstpage"
      this.nav.setRoot('OnboardingPage', {
        screenis: firstpage
      });
    }
    else if (this.screenis == "secondpage") {
      var secondpage = "secondpage"
      this.nav.setRoot('OnboardingPage', {
        screenis: secondpage
      });
    }
    else if (this.screenis == "thirdpage") {
      var thirdpage = "thirdpage"
      this.nav.setRoot('OnboardingPage', {
        screenis: thirdpage
      });
    }

  }
  ngOnInit() {
    this.loadfaq();
  }
  loadfaq() {
    this.apiService.showsFAQ().then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.faqArray = response.data;
        for (var i = 0; i < this.faqArray.length; i++) {
          this.faqArray[i].questions = this.sanitizer.bypassSecurityTrustHtml(this.faqArray[i].questions);
          this.faqArray[i].answer = this.sanitizer.bypassSecurityTrustHtml(this.faqArray[i].answer);
        }
      }
      else{
        this.conmessage = response.message;
        if(localStorage.getItem('custstatus')=='new')
        {
          this.showConfirmAlert1();
        }
        else if(localStorage.getItem('custstatus')=='registered')
        {
          this.showConfirmAlert1();
        }
        else{
          this.showConfirmAlert();
        }
			  
      }
    }, (response) => {
      this.conmessage = "Something's wrong, let's try again?";
      if(localStorage.getItem('custstatus')=='new')
      {
        this.showConfirmAlert1();
      }
      else if(localStorage.getItem('custstatus')=='registered')
      {
        this.showConfirmAlert1();
      }
      else{
        this.showConfirmAlert();
      }
    });
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  async showConfirmAlert() {
		let alertConfirm = this.atrCtrl.create({
		  //header: 'Download Successfully',
		  enableBackdropDismiss: false,
		  message: this.conmessage,
		  buttons: [
			{
			  text: "Try again",
			  handler: () => {
				this.nav.setRoot('OnboardingPage');
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
				this.nav.setRoot('MenuPage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
