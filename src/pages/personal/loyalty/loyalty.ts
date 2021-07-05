import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { APIService } from "../../../services/api_service";
import { Storage } from '@ionic/storage';

/**
 * Component for profile editing
 */
@IonicPage()
@Component({
  selector: 'loyalty',
  templateUrl: 'loyalty.html',
})
export class LoyaltyPage {
  public userData: any = {};
  public settings: any = {};
  public loggedIn = false;

  constructor(
    private apiService: APIService,
    private nav: NavController,
    private storage: Storage
  ) {
  }

  ionViewWillEnter() {
    this.settings = this.apiService.getSettings();
    this.loggedIn = this.apiService.isLoggedIn();
    if (this.loggedIn) {
      this.apiService.loadUserData().then(user => {
        this.userData = user;
      });
    }
  }

  login() {
    this.storage.clear().then(() => {
      this.nav.setRoot('SignupPage');
    });
  }
}
