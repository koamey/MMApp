import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,IonicApp} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Push} from '@ionic-native/push/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm/ngx';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  //isToggled
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    // private fcm: FCM,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
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
      this.onclickback();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  onclickback() {
    this.navCtrl.setRoot('MenuPage');
  }



}
