import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController,AlertController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { APIService } from '../../services/api_service';
import { UtilService } from '../../services/util_service';
import { PushService } from '../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AreaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-edit',
  templateUrl: 'area-edit.html',
})
export class AreaEditPage {
 @ViewChild('input') myInput;
  public preferenceEditForm: FormGroup;
  showFirstDiv: boolean = false
  showSecondDiv: boolean = false
  conmessage

   public areaid;
  public areaname
  public pincode
  areaArray = [];
  areaArrayfilter= [];
  areaArrayfilters=[];
  areaArrayfilters2=[];
  areaArrayfilters_sec=[];
  displayarea
  id
  displayid
  displaypincode
  Active: boolean
  checkarea: boolean
  checkareaid: any
  convertarea:any
  datavalues:any
  datavaluesid:any
  checklength: any
  ids: any
  customise_data:boolean
  customise_data1:boolean
  customise_data2:boolean
  customise_data3:boolean
  customise_data4:boolean
  Fieldactive:boolean
  Fieldactive1:boolean
  Fieldactive2:boolean
  Fieldactive3:boolean
  Fieldactive4:boolean
  areaname_new:any
  Actives: boolean
  Actives_one: boolean
  Actives_second: boolean
  Actives_second1: boolean
  abcde_new:any
  pincode1:any
  areaid1:any
  areaid2:any
  input1
  matched
  stringmatch
  matched2

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
          displayarea_sec: '',
          displayarea_area_sec: '',
        });
          this.displayarea = '';
          this.areaname_new = '';
          this.abcde_new = '';
          this.areaid2 = '';
          this.areaid1 = '';
          if (localStorage.getItem('area-pincode') != null) {
            this.displayarea = localStorage.getItem('area-pincode');
          }
          if (localStorage.getItem('areaname') != null) {
            if(localStorage.getItem('areaname')=='null')
            {
              this.areaname_new = '';
            }
            else{
              this.areaname_new = localStorage.getItem('areaname');
            }
            
          }
           if (localStorage.getItem('pincode') != null) {
            if(localStorage.getItem('pincode')=='null')
            {
              this.abcde_new = '';
            }
            else{
              this.abcde_new = localStorage.getItem('pincode');
            }
            
          }

          if (localStorage.getItem('getfirstpincodearea') != null) {
            this.areaid2 = localStorage.getItem('getfirstpincodearea');
          }

           if (localStorage.getItem('getsecondareapindata') != null) {
            this.areaid1 = localStorage.getItem('getsecondareapindata');
          }
        backAction();
      }, 2)
  }
  ngOnInit() {
    this.loadzipcode();
    this.onLoadDisplayrData();
   
    this.customise_data = this.navParams.get('customise_data');
    this.Fieldactive = this.navParams.get('customise_data');
    this.customise_data1 = this.navParams.get('customise_data1');
    this.Fieldactive1 = this.navParams.get('customise_data1');
    this.customise_data2 = this.navParams.get('customise_data2');
    this.Fieldactive2 = this.navParams.get('customise_data2');
    this.customise_data3 = this.navParams.get('customise_data3');
    this.Fieldactive3 = this.navParams.get('customise_data3');
    this.customise_data4 = this.navParams.get('customise_data4');
    this.Fieldactive4 = this.navParams.get('customise_data4');
    
   

    if (localStorage.getItem('area-pincode') != null) {
      this.displayarea = localStorage.getItem('area-pincode');
    }
    else{
      this.displayarea='';
    }
    if (localStorage.getItem('areaname') != null) {
      if(localStorage.getItem('areaname')=='null')
      {

        this.areaname_new = '';
      }
      else{
          this.areaname_new = localStorage.getItem('areaname');
      }
    }
    else{
      if(localStorage.getItem('areaname')=='null')
      {

        this.areaname_new = '';
      }
      else{
          this.areaname_new = '';
      }
    }
    if (localStorage.getItem('pincode') != null) {
        
        if(localStorage.getItem('pincode')=='null')
        {
          this.abcde_new = '';
        }
        else{
          this.abcde_new = localStorage.getItem('pincode');
      }
    }
    else{
      if(localStorage.getItem('pincode')=='null')
      {

        this.abcde_new = '';
      }
      else{
          this.abcde_new = '';
      }
    }

    if (localStorage.getItem('getfirstpincodearea') != null) {
        this.areaid2 = localStorage.getItem('getfirstpincodearea');
    }
    else{
        this.areaid2 = '';
    }

    if (localStorage.getItem('getsecondareapindata') != null) {
      this.areaid1 = localStorage.getItem('getsecondareapindata');
    }
    else{
      this.areaid1 = '';
    }
    
  }
  onLoadDisplayrData() {
    this.customise_data = this.navParams.get('customise_data');

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaEditPage');
      this.util.hideLoader();
       setTimeout(() => {
        this.myInput.setFocus();
      }, 800);
      
  }
    loadzipcode() {
	     this.apiService.showselectarea().then(response => {

	      this.util.hideLoader();
	      if (response.success) {
	        this.push.init(this.apiService.getSettings().pushwoosh_id);
	        this.storage.set('welcomeShown', '1').then(() => { }, () => { });
	        this.areaArray = response.data;
          // for first
            if(this.Fieldactive==true)
            {
              this.areaArrayfilter= [];
              var j=0;
              for (var i = 0; i < this.areaArray.length; i++) {
                this.Active = true;
                if(this.areaArray[i].area!='')
                {
                  this.areaArrayfilter[j]='<span>'+this.areaArray[i].pincode+'</span><span>-</span><span>'+this.areaArray[i].area+'</span>';
                  j++;
                }
              }
            }

          ///   for second

            if(this.Fieldactive1==true)
            {
              this.areaArrayfilter= [];
              var j=0;
              for (var i = 0; i < this.areaArray.length; i++) {
                        this.Actives = true;
                        if(this.areaArrayfilter.indexOf(this.areaArray[i].pincode) == -1)
                        {
                          this.areaArrayfilter.push(this.areaArray[i].pincode);
                          // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                        } 
                        // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                        // j++;
                }
            }
            // for third
            if(this.Fieldactive2==true)
            {
              this.areaArrayfilters= [];
              var j=0;
              for (var i = 0; i < this.areaArray.length; i++) {
                        this.Actives_one = true;
                        this.matched = localStorage.getItem('pincode');
                        if(this.matched==this.areaArray[i].pincode)
                        {
                          this.areaArrayfilters[j]=this.areaArray[i].area;
                          j++;
                        }
                        else{
                          if(this.matched=="null" || this.matched=="undefined" || this.matched==null || this.matched=='0' ||this.matched=="")
                          {
                            this.areaArrayfilters[j]=this.areaArray[i].area;
                            j++;
                          }
                        }
                        
                }
            }

            if(this.Fieldactive3==true)
            {
              this.areaArrayfilters_sec= [];
              var j=0;
              for (var i = 0; i < this.areaArray.length; i++) {
                        this.Actives_second = true;
                        if(this.areaArrayfilters_sec.indexOf(this.areaArray[i].pincode) == -1)
                        {
                          this.areaArrayfilters_sec.push(this.areaArray[i].pincode);
                          // this.areaArrayfilter[j]=this.areaArray[i].pincode;
                        } 
                        // this.areaArrayfilters_sec[j]=this.areaArray[i].pincode;
                        // j++;
                }
            }
              if(this.Fieldactive4==true)
            {
              this.areaArrayfilters2= [];
              var j=0;
              for (var i = 0; i < this.areaArray.length; i++) {
                        this.Actives_second1 = true;
                        this.matched2 = localStorage.getItem('getsecondareapindata');
                        if(this.matched2==this.areaArray[i].pincode)
                        {
                          this.areaArrayfilters2[j]=this.areaArray[i].area;
                          j++;
                        }
                        else{
                          if(this.matched2=="null" || this.matched2=="undefined" || this.matched2==null || this.matched2=='0' ||this.matched2=="")
                          {
                            this.areaArrayfilters2[j]=this.areaArray[i].area;
                            j++;
                          }
                        }
                       
                }
            }
	      }
	      else {
          this.conmessage = response.message;
          this.viewCtrl.dismiss({
            displayarea: '',
            displayarea_area: '',
          });
          this.showConfirmAlert();
	      }
	    }, (data) => {
        this.util.hideLoader();
        this.conmessage = "Something's wrong, let's try again?";
        this.viewCtrl.dismiss({
          displayarea: '',
          displayarea_area: '',
          displayarea_sec: '',
          displayarea_area_sec: '',
        });
        this.showConfirmAlert();
	    });
   
   }


    selectarea($a) {
    this.areaid = $a;
    this.convertarea = this.areaid.toLowerCase( );
    this.areaArrayfilter= [];
    var j=0;
	    for (var i = 0; i < this.areaArray.length; i++) {
	          this.datavaluesid = this.areaArray[i].pincode.toLowerCase( );
	          this.datavalues = this.areaArray[i].area.toLowerCase( );
	          this.areaArray[i].pincode = this.areaArray[i].pincode;         
	          this.checkarea =this.datavaluesid.includes(this.convertarea);
	          this.checkareaid =this.datavalues.includes(this.convertarea);
	          if(this.checkarea==true || this.checkareaid==true)
	          {
              console.log(this.convertarea);
	              this.Active = true;
	              if(this.areaArray[i].area!='')
	              {
                  this.areaArrayfilter[j]='<span>'+this.areaArray[i].pincode+'</span><span>-</span><span>'+this.areaArray[i].area+'</span>';
                  //this.areaArray[i].pincode + ' - ' + this.areaArray[i].area;
	                j++;
	              }
	              
	          }
	    }
  	}

  	setselectarea($event, a) {
    this.areaid = $event;
    console.log(this.areaid);
    //localStorage.setItem('area-pincode', this.areaid);
    // this.displayarea=this.areaid;
    this.Active = false;    
	    for (var i = 0; i < this.areaArray.length; i++) {
        this.stringmatch = '<span>'+this.areaArray[i].pincode+'</span><span>-</span><span>'+this.areaArray[i].area+'</span>';
        if (this.areaid == this.stringmatch) {
          console.log('innn');
          this.stringmatch=this.areaArray[i].pincode+ '-' + this.areaArray[i].area;
          console.log(this.stringmatch);
          this.displayarea=this.stringmatch;
          localStorage.setItem('area-pincode', this.stringmatch);
	        this.areaname = this.areaArray[i].area;
	        this.ids=  this.areaArray[i].id;
	        this.pincode = this.areaArray[i].pincode;
	        localStorage.setItem('areaid', this.areaArray[i].id);
	        localStorage.setItem('thisdataid', this.ids);
	      }
	    }    
	    	this.viewCtrl.dismiss({
		  	displayarea: localStorage.getItem('area-pincode'),
		  	displayarea_area: localStorage.getItem('area-area'),
	  	});

  	}

  	/// for where to delivery

  	selectarea1($a) {  
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase( );
      this.areaArrayfilter= [];
      var j=0;
      for (var i = 0; i < this.areaArray.length; i++) {
          this.datavaluesid = this.areaArray[i].pincode.toLowerCase( );
          this.datavalues = this.areaArray[i].area.toLowerCase( );
          this.areaArray[i].pincode = this.areaArray[i].pincode;         
          this.checkarea =this.datavaluesid.includes(this.convertarea);
          this.checkareaid =this.datavalues.includes(this.convertarea);
          if(this.checkarea==true || this.checkareaid==true)
          {
           	if(this.areaArray[i].pincode!='')
            {
              this.Actives = true;
              if(this.areaArrayfilter.indexOf(this.areaArray[i].pincode) == -1)
              {
                this.areaArrayfilter.push(this.areaArray[i].pincode);
                // this.areaArrayfilter[j]=this.areaArray[i].pincode;
              } 
              // this.areaArrayfilter[j]=this.areaArray[i].pincode;
              // j++;
            }
          }

    	}

  	}

  setselectarea1($event) {
    this.areaid = $event;
    for (var i = 0; i < this.areaArray.length; i++) {
      if (this.areaid == this.areaArray[i].pincode) {
        this.Actives = false;
        this.abcde_new= this.areaid;
        this.areaname = this.areaArray[i].area;
        //this.areaname_new= this.areaname;
        localStorage.setItem('area-pincode', this.abcde_new);
        localStorage.setItem('area-area', '');
        this.pincode = this.areaArray[i].pincode;
        localStorage.setItem('pincode', this.pincode)
        localStorage.setItem('areacode', this.areaid)
     	  this.id= this.areaArray[i].id;
       localStorage.setItem('getsecondpincodeid', this.id);
       localStorage.setItem('thisdataid', this.id);
       
       localStorage.setItem('areaname', '');
      }
    }
    this.viewCtrl.dismiss({
   
		  	displayarea: localStorage.getItem('area-pincode'),
		  	displayarea_area: localStorage.getItem('area-area'),
	  	});
  }
  // first end


      selectarea_one1($a) {  
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase( );
    this.areaArrayfilters= [];
    var j=0;
    for (var i = 0; i < this.areaArray.length; i++) {
          this.datavaluesid = this.areaArray[i].pincode.toLowerCase( );
          this.datavalues = this.areaArray[i].area.toLowerCase( );
          this.areaArray[i].pincode = this.areaArray[i].pincode;         
          this.checkarea =this.datavaluesid.includes(this.convertarea);
          this.checkareaid =this.datavalues.includes(this.convertarea);
          if(this.checkareaid==true)
          {
           if(this.areaArray[i].area!='')
              {
              this.Actives_one= true;
              this.areaArrayfilters[j]=this.areaArray[i].area;
              j++;
              }
          }

    }

  }

  


  setselectarea_one1($event) {
    this.areaid = $event;
    for (var i = 0; i < this.areaArray.length; i++) {
      if (this.areaid == this.areaArray[i].area) {
        this.Actives_one= false;
        this.areaname = this.areaArray[i].area;
        this.abcde_new=this.areaArray[i].pincode;
        this.areaname_new= this.areaArray[i].area;
        localStorage.setItem('area-pincode', this.abcde_new);
        localStorage.setItem('area-area', this.areaname_new);
        localStorage.setItem('areaname', this.areaname_new);
        this.pincode = this.areaArray[i].pincode;
        localStorage.setItem('pincode', this.pincode)
        localStorage.setItem('areacode', this.areaid)
        this.id= this.areaArray[i].id;
       localStorage.setItem('getsecondpincodeid', this.id);
       localStorage.setItem('thisdataid', this.id);
      }
    }
    this.viewCtrl.dismiss({
		  	displayarea: localStorage.getItem('area-pincode'),
		  	displayarea_area: localStorage.getItem('area-area'),
	  	});
  }
// second end

      selectarea12($a) {  
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase( );
    this.areaArrayfilters_sec= [];
    var j=0;
    for (var i = 0; i < this.areaArray.length; i++) {
          this.datavaluesid = this.areaArray[i].pincode.toLowerCase( );
          this.datavalues = this.areaArray[i].area.toLowerCase( );
          this.areaArray[i].pincode = this.areaArray[i].pincode;         
          this.checkarea =this.datavaluesid.includes(this.convertarea);
          this.checkareaid =this.datavalues.includes(this.convertarea);
          if(this.checkarea==true)
          {
          if(this.areaArray[i].pincode!='')
              {
              this.Actives_second= true;
              if(this.areaArrayfilters_sec.indexOf(this.areaArray[i].pincode) == -1)
              {
                this.areaArrayfilters_sec.push(this.areaArray[i].pincode);
                // this.areaArrayfilter[j]=this.areaArray[i].pincode;
              } 
              // this.areaArrayfilters_sec[j]=this.areaArray[i].pincode;
              // j++;
              }
          }

    }

  }

  setselectarea1_one1($event) {
    this.areaid = $event;
    for (var i = 0; i < this.areaArray.length; i++) {
      if (this.areaid == this.areaArray[i].pincode) {
        this.Actives_second= false;
        //this.areaname = this.areaArray[i].area;
        this.pincode1 = this.areaArray[i].pincode;
       localStorage.setItem('workpincode', this.pincode1);
         //this.areaid2 = this.areaname;
       this.areaid1 = this.pincode1;
       this.id= this.areaArray[i].id;
       localStorage.setItem('getfirstpincodeid', this.id);
        localStorage.setItem('getfirstpincodearea', '');
        localStorage.setItem('getsecondareapindata', this.pincode1);
      }
    }
    console.log('inn');
    this.viewCtrl.dismiss({
		  	displayarea_sec: localStorage.getItem('getsecondareapindata'),
		  	displayarea_area_sec: '',
	  	});
  }

// thrird end
        selectarea1_sec($a) {  
        this.areaid = $a;
        this.convertarea = this.areaid.toLowerCase( );
    this.areaArrayfilters2= [];
    var j=0;
    for (var i = 0; i < this.areaArray.length; i++) {
          this.datavaluesid = this.areaArray[i].pincode.toLowerCase( );
          this.datavalues = this.areaArray[i].area.toLowerCase( );
          this.areaArray[i].pincode = this.areaArray[i].pincode;         
          this.checkarea =this.datavaluesid.includes(this.convertarea);
          this.checkareaid =this.datavalues.includes(this.convertarea);
          if(this.checkareaid==true)
          {
             if(this.areaArray[i].area!='')
              {
              this.Actives_second1= true;
              this.areaArrayfilters2[j]=this.areaArray[i].area;
              j++;
              }
          }

    }



  }

    setselectarea1_sec1($event) {
    this.areaid = $event;
    for (var i = 0; i < this.areaArray.length; i++) {
      if (this.areaid == this.areaArray[i].area) {
        this.Actives_second1= false;
        this.areaname = this.areaArray[i].area;
        this.pincode1 = this.areaArray[i].pincode;
       localStorage.setItem('workpincode', this.pincode1);
       this.areaid2 = this.areaname;
       this.areaid1 = this.pincode1;
       this.id= this.areaArray[i].id;
       localStorage.setItem('getfirstpincodeid', this.id);
       localStorage.setItem('getfirstpincodearea', this.areaname);
       localStorage.setItem('getsecondareapindata', this.pincode1);
      }
    }

    this.viewCtrl.dismiss({
		  	displayarea_sec: localStorage.getItem('getsecondareapindata'),
		  	displayarea_area_sec: localStorage.getItem('getfirstpincodearea'),
	  	});
  }

  	closemodel() {
    var a = localStorage.getItem('getsecondareapindata');
    var b =localStorage.getItem('getfirstpincodearea');
    var c =localStorage.getItem('pincode');
    var d =localStorage.getItem('areacode');
    var e= localStorage.getItem('area-pincode');
    var f = localStorage.getItem('area-area');
    if(a==null)
    {
      localStorage.setItem('getsecondareapindata','');
    }
    else if(a=='null'){
      localStorage.setItem('getsecondareapindata','');
    }
    if(b==null)
    {
      localStorage.setItem('getfirstpincodearea','');
    }
    else if(b=='null'){
      localStorage.setItem('getfirstpincodearea','');
    }
    if(c==null)
    {
      localStorage.setItem('pincode','');
    }
    else if(c=='null'){
      localStorage.setItem('pincode','');
    }
    else if(c=='undefined'){
      localStorage.setItem('pincode','');
    }
    if(d==null)
    {
      localStorage.setItem('areacode','');
    }
    else if(d=='null'){
      localStorage.setItem('areacode','');
    }
    else if(d=='undefined'){
      localStorage.setItem('areacode','');
    }

    if(e==null)
    {
      localStorage.setItem('area-pincode','');
    }
    else if(e=='null'){
      localStorage.setItem('area-pincode','');
    }
    else if(e=='undefined'){
      localStorage.setItem('area-pincode','');
    }

    if(f==null)
    {
      localStorage.setItem('area-area','');
    }
    else if(f=='null'){
      localStorage.setItem('area-area','');
    }
    else if(f=='undefined'){
      localStorage.setItem('area-area','');
    }
	  	this.viewCtrl.dismiss({
        displayarea_sec: localStorage.getItem('getsecondareapindata'),
        displayarea_area_sec: localStorage.getItem('getfirstpincodearea'),
        displayarea: localStorage.getItem('area-pincode'),
        displayarea_area: localStorage.getItem('area-area'),
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
          // handler: () => {
          //   this.nav.setRoot('SelectAreaPage');
          // }			  
        }
        ]
      });
      (await alertConfirm).present();
    }


}
