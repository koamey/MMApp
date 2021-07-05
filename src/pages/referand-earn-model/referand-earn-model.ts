import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReferandEarnModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referand-earn-model',
  templateUrl: 'referand-earn-model.html',
})
export class ReferandEarnModelPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferandEarnModelPage');
    var passingdata= this.navParams.get('myValue');
    console.log('passingdata',passingdata)
  }
  onClickCancel()
  {
    this.viewCtrl.dismiss({
    
    });
  }
}
