import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  ,IonicApp} from 'ionic-angular';

/**
 * Generated class for the ModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-module',
  templateUrl: 'module.html',
})
export class ModulePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
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
  ngOnInit() {
    if(localStorage.getItem('module')){
      this.navCtrl.setRoot('LoginPage');
    }
  }
  individual()
  {
    localStorage.setItem('module','1');
    this.navCtrl.setRoot('LoginPage');
  }
   corporate()
  {
    localStorage.setItem('module','2');
    this.navCtrl.setRoot('LoginPage');
  }
  ionViewDidLoad() {
  }
  onclickTermCondition()
  {
    var ommoduleterm = "ommoduleterm"
    this.navCtrl.setRoot('TermsAndPrivacyPage', {
      screenis: ommoduleterm
    });
  }
  Back(){
    localStorage.removeItem('areacode');
    this.navCtrl.setRoot('SelectAreaPage')
  }
}
