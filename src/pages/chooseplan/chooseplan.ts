import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, IonicApp, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { Subscription } from 'rxjs';
/**
 * Generated class for the ChooseplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chooseplan',
  templateUrl: 'chooseplan.html',
})
export class ChooseplanPage {
  tokendata: string;
  conmessage
  subscriptionArray = [];
  subscriptionName
  customer_id: string;
  subscription_id: string;
  subscriptionData: any;
  back_sub_id: string;
  customer_subscription_id
  constructor(private nav: NavController,
    public navParams: NavParams,
    private apiService: APIService,
    private push: PushService,
    private util: UtilService,
    private translate: TranslateService,
    private storage: Storage,
    private sanitizer: DomSanitizer,
    public platform: Platform,
    public viewCtrl: ViewController,
    private ionicApp: IonicApp,
    public atrCtrl: AlertController
  ) {
    this.subscription_id = navParams.get('subscription_id');
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
      this.back();
    }
  }
  ngOnInit() {

    localStorage.setItem('renewrotistringdinner','');
    localStorage.setItem('renewrotistringlunch','');
    this.tokendata = localStorage.getItem('token');
    this.customer_id = localStorage.getItem('id');
    this.loadSubscriptionData();
    if (localStorage.getItem('subscription_id') != null) {
      this.nav.setRoot('MealtypePage');
    }
  }
  image;
  image1
  loadSubscriptionData() {
    this.apiService.showSubscription().then((res) => {
      if(res['success'])
      {
        this.subscriptionArray = res['data'];
        for (var i = 0; i < this.subscriptionArray.length; i++) {
          this.subscriptionArray[i]['subscription_content'] = this.sanitizer.bypassSecurityTrustHtml(this.subscriptionArray[i]['subscription_content'])
          this.subscriptionArray[i]['subscription_sub_content'] = this.sanitizer.bypassSecurityTrustHtml(this.subscriptionArray[i]['subscription_sub_content'])
        }

        this.push.init(this.apiService.getSettings().pushwoosh_id);
      }
      else{
        this.conmessage = res['message'];
        this.showConfirmAlert();
      }
      
    }).catch((res) => {
      this.conmessage ="Something's wrong, let's try again?";
			this.showConfirmAlert();
    });
  }

  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    var asd = 'plan_' + this.subscription_id;
  }
  ngAfterViewInit() {
  }
  onClickSubscription(id) {
    for (var i = 0; i < this.subscriptionArray.length; i++) {
      if (id == this.subscriptionArray[i].subscription_id) {
        this.subscriptionData = this.subscriptionArray[i];
        localStorage.setItem('subscription_id', this.subscriptionData.subscription_id)
        this.subscription_id = localStorage.getItem('subscription_id');
        var type;
        // if (i == 0) {
        //   type = 'Trial Subscription';
        // } else if (i == 1) {
        //   type = '1 Month Subscription';
        // } else if (i == 2) {
        //   type = 'Half-Monthly Subscription';
        // }
        type = this.subscriptionData.subscription_name;
        localStorage.setItem('subscription_type', type);
      }
    }
    this.nav.setRoot('MealtypePage');
  }

  back() {
    if (localStorage.getItem('isLogin') == "login") {
      this.nav.setRoot('AboutyouPage');
    }
    else{
      localStorage.removeItem('custstatus')
      localStorage.removeItem('isLogin')
      this.nav.setRoot('LoginPage');
    }
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
				this.nav.setRoot('ChooseplanPage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
