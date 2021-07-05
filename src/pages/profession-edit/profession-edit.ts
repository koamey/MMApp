import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController,AlertController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the ProfessionEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profession-edit',
  templateUrl: 'profession-edit.html',
})
export class ProfessionEditPage {
  // @ViewChild('input') myInput;
  customise_data;
  profArray = [];
  profArrays = [];
  datavaluesid;
  checkarea: boolean;
  Active: boolean;
  convertprof;
  areaid;
  Fieldactive:boolean;
  displayarea;
  conmessage;
  constructor(public nav: NavController, public navParams: NavParams,
    private builder: FormBuilder, private apiService: APIService,
    public modalCtrl: ModalController,
    private util: UtilService,
    private push: PushService,
    private translate: TranslateService,
    private storage: Storage,
    public atrCtrl: AlertController,    
    public platform: Platform,
    public viewCtrl: ViewController) {
      let backAction = platform.registerBackButtonAction(() => {
        this.viewCtrl.dismiss({
        });
      },2);
  }
  ngOnInit() {
    
    this.onLoadDisplayrData();
    this.customise_data = this.navParams.get('customise_data');
    this.Fieldactive = this.navParams.get('customise_data');
    console.log(localStorage.getItem('profname'));
    this.loadzipcode();    
    if(localStorage.getItem('profname')!=null)
    {
      if(localStorage.getItem('profname')==null || localStorage.getItem('profname')=='null')
      {
        localStorage.setItem('profname','');
        this.displayarea = localStorage.getItem('profname');
      }
      else{
        this.displayarea = localStorage.getItem('profname');
      }      
    }
    else if(localStorage.getItem('profname')=='')
    {
      console.log('in1');
      this.displayarea = localStorage.getItem('profname');
    }
    else if(localStorage.getItem('profname')!='null')
    {
      if(localStorage.getItem('profname')==null || localStorage.getItem('profname')=='null')
      {
        localStorage.setItem('profname','');
        this.displayarea = localStorage.getItem('profname');
      }
      else{
        this.displayarea = localStorage.getItem('profname');
      } 
    }
    else{
      localStorage.setItem('profname','');
      this.displayarea = localStorage.getItem('profname');
    }
  }
  onLoadDisplayrData() {
    this.customise_data = this.navParams.get('customise_data');

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AreaEditPage');
      // this.util.hideLoader();
      //  setTimeout(() => {
      //   this.myInput.setFocus();
      // }, 800);
  }
  loadzipcode() {
    this.apiService.showprofession().then(response => {
      this.util.hideLoader();
      if (response.success) {
        this.push.init(this.apiService.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
        this.profArray = response.data;
        if(this.Fieldactive==true)
        {
          this.profArrays= [];
          var j=0;
          for (var i = 0; i < this.profArray.length; i++) {
            this.Active = true;
            if(this.profArray[i].profession!='')
            {
              this.profArrays[j]=this.profArray[i].profession ;
              j++;
            }
          }
        }
      }
      else{
        this.conmessage = response.message;
      }
    }, (response) => {
			this.util.alert(this.translate.instant("Something's wrong, let's try again?"), '');
      this.util.hideLoader();
      this.viewCtrl.dismiss({
        displayprofid: '',
		  	 displayprof: '',
      });
		});
  }

  selectprofesssion($a) {
    this.areaid = $a;
    this.convertprof = this.areaid.toLowerCase( );
    this.profArrays= [];
    var j=0;
	    for (var i = 0; i < this.profArray.length; i++) {
	          this.datavaluesid = this.profArray[i].profession.toLowerCase( );
	          this.checkarea =this.datavaluesid.includes(this.convertprof);
	          if(this.checkarea==true)
	          {
	              this.Active = true;
	              if(this.profArray[i].profession!='')
	              {
	                this.profArrays[j]=this.profArray[i].profession;
	                j++;
	              }
	              
	          }
	    }
  }


  setselectarea($event, a) {
    this.areaid = $event;
    console.log(this.areaid);
    this.Active = false;
	    for (var i = 0; i < this.profArray.length; i++) {
	      if (this.areaid == this.profArray[i].profession) {
	        localStorage.setItem('proflid', this.profArray[i].id);
	        localStorage.setItem('profname', this.profArray[i].profession);
	      }
	    }    
	    this.viewCtrl.dismiss({
		  	 displayprofid: localStorage.getItem('proflid'),
		  	 displayprof: localStorage.getItem('profname'),
	  	});

  }
    

    closemodel() {
        this.viewCtrl.dismiss({
          displayprofid: localStorage.getItem('proflid'),
		  	  displayprof: localStorage.getItem('profname'),
        });
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
          this.nav.setRoot('AboutyouPage');
          }
          
        }
        ]
      });
      (await alertConfirm).present();
      }

}
