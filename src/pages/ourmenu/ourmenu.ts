import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,IonicApp, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api_service';
import { PushService } from '../../services/push_service';
import { UtilService } from '../../services/util_service';

/**
 * Generated class for the OurmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ourmenu',
  templateUrl: 'ourmenu.html',
})
export class OurmenuPage {
  shownGroup = null;
  screenis='thirdpage';
  questions
  ourmenuArray = [];
  answer
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private apiService: APIService,
    private push: PushService,
    public alertCtrl: AlertController,
    private storage: Storage,
    private ionicApp: IonicApp,
    public platform: Platform,
    private util: UtilService) {
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

  ngOnInit() {
    this.questions="questions";
    this.answer="ANSWER";
    // this.custid = localStorage.getItem('id');
    // this.custToken = localStorage.getItem('token');
    // this.customer_subscription_id = localStorage.getItem('customer_subscription_id');
    // this.apiService.getcurrentpaln(this.custid, this.custToken,this.customer_subscription_id).then(response => {
    //   this.util.hideLoader();
    //   if (response) {
    //     this.push.init(this.apiService.getSettings().pushwoosh_id);
    //     this.storage.set('welcomeShown', '1').then(() => { }, () => { });
    //     console.log(response.deliverytiming);
    //     this.preferenceProducts = response.product;
    //     this.preferenceProductsDinner=response.dinnerproduct;   
    //     this.preferenceProductstime=response.deliverytiming;   
    //     this.preferenceProductsDinnertime=response.dinnerdeliverytiming;   
    //     this.mealType = localStorage.getItem('mealType');
    //   }
    //   else{
    //     console.log('out');
    //     this.conmessage = 'Something Went Wrong';
		// 	  this.showConfirmAlert();
    //   }
    // }, (data) => {
    //   // this.util.hideLoader();
    //   // this.util.alert(this.translate.instant(''), data[0]);
    //   this.conmessage = '';
		// 	this.showConfirmAlert();
    // });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OurmenuPage');
  }
  Back()
  {
    if (this.screenis == "thirdpage") {
      var thirdpage = "thirdpage"
      this.navCtrl.setRoot('OnboardingPage', {
        screenis: thirdpage
      });
    }
    
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

}
