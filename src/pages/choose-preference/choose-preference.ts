import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App, ViewController, IonicApp,AlertController } from 'ionic-angular';
import { APIService } from '../../services/api_service';
import { ModalController } from 'ionic-angular';
import { UtilService } from '../../services/util_service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-choose-preference',
  templateUrl: 'choose-preference.html',
})
export class ChoosePreferencePage {

  public type: string = ''; public type1: string = ''; public type2: string = ''; public type3: string = '';
  preferenceProducts: string = ''; preferenceProductsDinner: string = ' ';
  lunch_products; dinner_products;
  prefernceTypArr;
  typeboth = '';
  conmessage
  ricecount;
  subtract
  lunchmeal_img = "assets/choosePreference/lunch_ic.svg"
  dinnermeal_img = "assets/choosePreference/dinner_ic.svg"
  extraRoti_Lunch = 0; extraRoti_Dinner = 0;
  buttonColor = '';; buttonColor1 = '';;
  submitbuttonColor = ''; subcolor = '';
  count = 0;
  lm_roti = ''; lm_sabji = ''; lm_salad = ''; lm_rice = ''; lm_dal = '';
  dm_roti = ''; dm_sabji = ''; dm_salad = ''; dm_rice = ''; dm_dal = '';
  lunchmeal = ''; dinnermeal = '';
  model: any;
  customise: boolean;
  customise_lc_data: any; customise_dm_data: any;
  platformclose:boolean

  constructor(public nav: NavController, public navParams: NavParams,
    private apiService: APIService,
    public modalCtrl: ModalController,
    public platform: Platform,
    public app: App,
    private util: UtilService,
    public viewCtrl: ViewController,
    private translate: TranslateService,  
    private ionicApp: IonicApp,
    public atrCtrl: AlertController
  ) {
    this.initializeBackButtonCustomHandler();
    if (this.platform.is('android')) {
     this.platformclose = false;
    }
    if (this.platform.is('ios')) {
      this.platformclose = true;
    }
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
      if(localStorage.getItem('customise_dm_data')=='undefined')
      {
        localStorage.setItem('customise_dm_data',null);
      }

      if(localStorage.getItem('customise_lc_data')=='undefined')
      {
        localStorage.setItem('customise_lc_data',null);
      }
    this.customise = false;
    this.submitbuttonColor = 'rgb(242,155,17)';
    this.subcolor = 'rgb(255,255,255)';
    this.typeboth = localStorage.getItem('mealType');
   
    if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
      this.extraRoti_Lunch = parseFloat(localStorage.getItem('extraRoti_Lunch'));
    } else {
      this.extraRoti_Lunch = 0;
     // localStorage.setItem('extraRoti_Lunch','0');
    }
    
    if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
      this.extraRoti_Dinner = parseFloat(localStorage.getItem('extraRoti_Dinner'));
    } else {
      this.extraRoti_Dinner = 0;
      //localStorage.setItem('extraRoti_Dinner','0');
    }
    if (localStorage.getItem('extraRoti_Lunch') != '0' && localStorage.getItem('extraRoti_Lunch') != null) {
      if(localStorage.getItem('defaultprice')!='0')
      {
        if(localStorage.getItem('defaultquantity')!='0')
        {
          var countday = localStorage.getItem('mealdays');
          if(localStorage.getItem('lm_rice')!="")
          {
            this.extraRoti_Lunch =parseFloat(localStorage.getItem('defaultquantity')) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
            
          }
          else{
            this.subtract = parseFloat(localStorage.getItem('defaultquantity')) - 1;
            this.extraRoti_Lunch =parseFloat(this.subtract) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
            
          }
         
        }
        localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
      }
    }

    if (localStorage.getItem('extraRoti_Dinner') != '0' && localStorage.getItem('extraRoti_Dinner') != null) {
      if(localStorage.getItem('defaultprice')!='0')
      {
        if(localStorage.getItem('defaultquantity')!='0')
        {
          var countday = localStorage.getItem('mealdays');
          if(localStorage.getItem('dm_rice')!="")
          {
            this.extraRoti_Dinner =parseFloat(localStorage.getItem('defaultquantity')) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
          }
          else{
            this.subtract = parseFloat(localStorage.getItem('defaultquantity')) - 1;
            this.extraRoti_Dinner =parseFloat(this.subtract) * parseFloat(localStorage.getItem('defaultprice')) * parseFloat(countday);
          }
          
        }
        localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());
      }
    }
    if (this.typeboth == "Both") {
      // Default selection if user try to visit using back button or try to edit
      if (localStorage.getItem('customise_lc_data') != null && localStorage.getItem('customise_lc_data') != 'null') {
        this.lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
        this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
        this.customise_lc_data = JSON.parse(localStorage.getItem('customise_lc_data'));
        this.lm_roti = localStorage.getItem('lm_roti');
        this.lm_sabji = localStorage.getItem('lm_sabji');
        this.lm_rice = localStorage.getItem('lm_rice');
        this.lm_rice= this.lm_rice;
        this.lm_dal = localStorage.getItem('lm_dal');
        this.lm_salad = localStorage.getItem('lm_salad');
        this.preferenceString('Lunch Meal', 'Lunch');
      } else {
        this.onLoadPreferenceData();
        this.onLunchMeal();
      }
      if (localStorage.getItem('customise_dm_data') != null && localStorage.getItem('customise_dm_data') != 'null') {
        this.dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
        this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
        this.customise_dm_data = JSON.parse(localStorage.getItem('customise_dm_data'));
        this.dm_rice = localStorage.getItem('dm_rice');
        this.dm_rice = this.dm_rice;
        this.dm_roti = localStorage.getItem('dm_roti');
        this.dm_sabji = localStorage.getItem('dm_sabji');
        this.dm_dal = localStorage.getItem('dm_dal');
        this.dm_salad = localStorage.getItem('dm_salad');
        this.preferenceString('Dinner Meal', 'Dinner');
      } else {
        this.onLoadPreferenceData();
        this.onDinnerMeal();
      }
    }
    else if (this.typeboth == 'Lunch') {
      if (localStorage.getItem('customise_lc_data') != null && localStorage.getItem('customise_lc_data') != 'null') {
        this.customise_lc_data = JSON.parse(localStorage.getItem('customise_lc_data'));
        this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
        this.lunch_products = JSON.parse(localStorage.getItem('lunch_products'));
        this.lm_roti = localStorage.getItem('lm_roti');
        this.lm_roti=this.lm_roti;
        this.lm_sabji = localStorage.getItem('lm_sabji');
        this.lm_rice = localStorage.getItem('lm_rice');
        this.lm_dal = localStorage.getItem('lm_dal');
        this.lm_salad = localStorage.getItem('lm_salad');
        this.preferenceString('Lunch Meal', 'Lunch');
      } else {
        this.onLoadPreferenceData();
        this.onLunchMeal();
      }
    }
    else if (this.typeboth == 'Dinner') {
      if (localStorage.getItem('customise_dm_data') != null && localStorage.getItem('customise_dm_data') != 'null') {

        this.dinner_products = JSON.parse(localStorage.getItem('dinner_products'));
        this.prefernceTypArr = JSON.parse(localStorage.getItem('prefernceTypArr'));
        this.customise_dm_data = JSON.parse(localStorage.getItem('customise_dm_data'));
        this.dm_rice = localStorage.getItem('dm_rice');
        this.dm_rice = this.dm_rice;
        this.dm_roti = localStorage.getItem('dm_roti');
        this.dm_sabji = localStorage.getItem('dm_sabji');
        this.dm_dal = localStorage.getItem('dm_dal');
        this.dm_salad = localStorage.getItem('dm_salad');

        this.preferenceString('Dinner Meal', 'Dinner');
      } else {
        this.onLoadPreferenceData();
        this.onDinnerMeal();
      }
    }
  }

  onLunchMeal() {
    this.lunchmeal = 'Lunch';
    localStorage.setItem('lunch_meal_menu', '1');
  }

  onDinnerMeal() {
    this.dinnermeal = 'Dinner';
    localStorage.setItem('dinner_meal_menu', '2');
  }

  // initial data load for meals
  onLoadPreferenceData() {
    //API to get Meal details and products
    this.apiService.mealType().then((res) => {
      if(res.success)
      {
        if (this.typeboth == 'Lunch') {
          this.prefernceTypArr = [];
          this.prefernceTypArr.push(res.data[0]);
        } else if (this.typeboth == 'Dinner') {
          this.prefernceTypArr = [];
          this.prefernceTypArr.push(res.data[1]);
        } else if (this.typeboth == 'Both') {
          this.prefernceTypArr = res.data;
        }
        // Set local storage for reload of same screen so no need to recall api
        localStorage.setItem('prefernceTypArr', JSON.stringify(this.prefernceTypArr));

        for (var i = 0; i < this.prefernceTypArr.length; i++) {
          if (this.prefernceTypArr[i].meal == 'Lunch Meal') {
            if (this.customise_lc_data == null) {
              //this.lunch_products = [];    
              this.lunch_products = this.prefernceTypArr[i]['products'];

              for (var j = 0; j < this.prefernceTypArr[i]['products'].length; j++) {
                // Roti or Phulaka
                if (this.prefernceTypArr[i]['products'][j].category_id == '1') {
                  if (j <= 1) {
                    if (j == 0) {     
                      this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product + '/');
                      //this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                    }
                    if (j == 1) {
                      if (this.prefernceTypArr[i]['products'][j].quantity != this.prefernceTypArr[i]['products'][j - 1].quantity) {
                        this.lm_roti = this.lm_roti + (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                      } else {
                        this.lm_roti = this.lm_roti + (this.prefernceTypArr[i]['products'][j].product);
                      }
                    }
                  }
                }
                // Sabji
                if (this.prefernceTypArr[i]['products'][j].category_id == '5') {
                  this.lm_sabji =' ,Sabji';
                }
                // Rice
                if (this.prefernceTypArr[i]['products'][j].category_id == '2') {
                  this.lm_rice = this.prefernceTypArr[i]['products'][j - 1].product;
                  this.lm_rice =this.lm_rice+' Rice';
                }
                // Dal
                if (this.prefernceTypArr[i]['products'][j].category_id == '7') {
                  this.lm_dal = '1';
                }
                // // Salad
                if (this.prefernceTypArr[i]['products'][j].category_id == '4') {
                  this.lm_salad = '1';
                }
              }
              this.ricecount =0;
              for (var asd = 0; asd < this.lunch_products.length; asd++) {
                this.lunch_products[asd]['extra_qty'] = '0';
                this.lunch_products[asd]['extra_amount'] = '0';
                if (this.lunch_products[asd]['category_id'] == '2') {                
                  if (this.lunch_products[asd]['selected'] == '1') {
                    this.ricecount=1;
                    this.lunch_products[asd]['selected'] = '1';
                  } else {
                    if(this.ricecount==0)
                    {
                      this.ricecount =1;
                      this.lunch_products[asd]['selected'] = '1';
                    }
                    else{
                      this.lunch_products[asd]['selected'] = '0';
                    }
                    
                  }
                } else if (this.lunch_products[asd]['category_id'] == '1') {
                  if (asd == 0) {
                    this.lunch_products[0]['selected'] = '1';
                  } else {
                    this.lunch_products[asd]['selected'] = '0';
                  }
                } else {
                  this.lunch_products[asd]['selected'] = '0';
                }
              }
              if (this.lm_dal == '1' && this.lm_salad == '1') {
                this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal, '+this.lm_rice+' and Salad';
              } else if (this.lm_dal == '1' && this.lm_salad == '') {
                this.preferenceProducts = this.lm_roti + this.lm_sabji+', Dal and '+this.lm_rice;
              }
              //this.preferenceProducts = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
              console.log(localStorage.getItem('renewrotistringlunch'));
              if(localStorage.getItem('renewrotistringlunch')==null)
              {
                localStorage.setItem('renewrotistringlunch','');
              }
              if(localStorage.getItem('renewrotistringlunch')!='')
              {
                this.lm_roti = localStorage.getItem('renewrotistringlunch');
                if(this.lm_roti!=null)
                {
                  if(this.lm_rice!='')
                  {
                    this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal, '+this.lm_rice+' and Salad';
                  }
                  else{
                    this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal and Salad';
                  }
                }
                else{
                  this.lm_roti = this.lm_roti;
                }                
                
              }
              else{
                this.lm_roti = this.lm_roti;
              }
              localStorage.setItem('preferenceProducts_default', this.preferenceProducts);
              localStorage.setItem('preferenceProducts', this.preferenceProducts);
              localStorage.setItem('lm_roti', this.lm_roti);
              localStorage.setItem('lm_sabji', this.lm_sabji);
              localStorage.setItem('lm_rice', this.lm_rice);
              localStorage.setItem('lm_dal', this.lm_dal);
              localStorage.setItem('lm_salad', this.lm_salad);
            }
          }
          if (this.prefernceTypArr[i].meal == 'Dinner Meal') {
            if (this.customise_dm_data == null) {
              //this.dinner_products = [];
              this.dinner_products = this.prefernceTypArr[i]['products'];

              for (var j = 0; j < this.prefernceTypArr[i]['products'].length; j++) {
                // Roti or Phulaka
                if (this.prefernceTypArr[i]['products'][j].category_id == '1') {
                  if (j <= 1) {
                    if (j == 0) {
                      this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product + '/');
                      // this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                    }
                    if (j == 1) {
                      if (this.prefernceTypArr[i]['products'][j].quantity != this.prefernceTypArr[i]['products'][j - 1].quantity) {
                        this.dm_roti = this.dm_roti + (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                    } else {
                        this.dm_roti = this.dm_roti + (this.prefernceTypArr[i]['products'][j].product);
                      }
                    }
                  }
                }
                // Sabji
                if (this.prefernceTypArr[i]['products'][j].category_id == '5') {
                  this.dm_sabji=' ,Sabji';
                }
                // Rice
                if (this.prefernceTypArr[i]['products'][j].category_id == '2') {
                  this.dm_rice = this.prefernceTypArr[i]['products'][j - 1].product;
                  this.dm_rice =this.dm_rice+' Rice';
                }
                // Dal
                if (this.prefernceTypArr[i]['products'][j].category_id == '7') {
                  this.dm_dal = '1';
                }
                // // Salad
                if (this.prefernceTypArr[i]['products'][j].category_id == '4') {
                  this.dm_salad = '1';
                }
              }
              this.ricecount =0;
              for (var din_prod = 0; din_prod < this.dinner_products.length; din_prod++) {
                this.dinner_products[din_prod]['extra_qty'] = '0';
                this.dinner_products[din_prod]['extra_amount'] = '0';
                if (this.dinner_products[din_prod]['category_id'] == '2') {
                  
                  if (this.dinner_products[din_prod]['selected'] == '1') {
                    this.ricecount =1;
                    this.dinner_products[din_prod]['selected'] = '1';
                  } else {
                    if(this.ricecount==0)
                    {
                      this.ricecount =1;
                      this.dinner_products[din_prod]['selected'] = '1';
                    }
                    else{
                      this.dinner_products[din_prod]['selected'] = '0';
                    }
                  }
                } else if (this.dinner_products[din_prod]['category_id'] == '1') {
                  if (din_prod == 0) {
                    this.dinner_products[0]['selected'] = '1';
                  } else {
                    this.dinner_products[din_prod]['selected'] = '0';
                  }
                } else {
                  this.dinner_products[din_prod]['selected'] = '0';
                }
              }

              if (this.dm_dal == '1' && this.dm_salad == '1') {
                this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal, '+this.dm_rice+' and Salad';
              } else if (this.dm_dal == '1' && this.dm_salad == '') {
                this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal and '+this.dm_rice;
              }
              //this.preferenceProductsDinner = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
             
              if(localStorage.getItem('renewrotistringdinner')==null)
              {
                localStorage.setItem('renewrotistringdinner','');
              }
              if(localStorage.getItem('renewrotistringdinner')!='')
              {
                this.dm_roti = localStorage.getItem('renewrotistringdinner');
                if(this.dm_roti!=null)
                {
                  if(this.dm_rice!='')
                  {
                    this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal, '+this.dm_rice+' and Salad';
                  }
                  else{
                    this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal and Salad';
                  }
                }
                else{
                  this.dm_roti = this.dm_roti;
                }
                
              }
              else{
                this.dm_roti = this.dm_roti;
              }
              localStorage.setItem('preferenceProductsDinner_default', this.preferenceProductsDinner);
              localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);

              localStorage.setItem('dm_roti', this.dm_roti);
              localStorage.setItem('dm_sabji', this.dm_sabji);
              localStorage.setItem('dm_rice', this.dm_rice);
              localStorage.setItem('dm_dal', this.dm_dal);
              localStorage.setItem('dm_salad', this.dm_salad);
            }
          }
        }
      }
      else{
        this.conmessage=res.message;
        this.showConfirmAlert();
      }
    }).catch((res) => {
      this.conmessage="Something's wrong, let's try again?";
      this.showConfirmAlert();
    });
  }

  preferenceString(type, mealtype) {
    // Lunch Starts Here
    if (mealtype == 'Lunch') {
      if (type == 'Lunch Meal') {
        //Lunch Meal string
        if (this.lm_dal == '1' && this.lm_salad == '1') {
          if(this.lm_rice== '')
          {
            this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal and Salad';
          }
          else{
            this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal, '+this.lm_rice+' and Salad';
          }
          
        } else if (this.lm_dal == '1' && this.lm_salad == '' && this.lm_rice != '') {
          this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal and '+this.lm_rice;
        } else if (this.lm_dal == '1' && this.lm_salad == '' && this.lm_rice == '') {
          this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal';
        }
        localStorage.setItem('lm_roti', this.lm_roti);
        localStorage.setItem('lm_sabji', this.lm_sabji);
        localStorage.setItem('lm_rice', this.lm_rice);
        localStorage.setItem('lm_dal', this.lm_dal);
        localStorage.setItem('lm_salad', this.lm_salad);
        localStorage.setItem('preferenceProducts', this.preferenceProducts);
      }
    }
    // Lunch Ends here

    // Dinner Starts Here
    if (mealtype == 'Dinner') {
      if (type == 'Dinner Meal') {
        //Dinner Meal string
        if (this.dm_dal == '1' && this.dm_salad == '1') {
          if(this.dm_rice== '')
          {
            this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal and Salad';
          }
          else{
            this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal, '+this.dm_rice+ ' and Salad';
          }
          
        } else if (this.dm_dal == '1' && this.dm_salad == '' && this.dm_rice != '') {
          this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal and '+this.dm_rice;
        } else if (this.dm_dal == '1' && this.dm_salad == '' && this.dm_rice == '') {
          this.preferenceProductsDinner = this.dm_roti + this.dm_sabji+', Dal';
        }
        localStorage.setItem('dm_roti', this.dm_roti);
        localStorage.setItem('dm_sabji', this.dm_sabji);
        localStorage.setItem('dm_rice', this.dm_rice);
        localStorage.setItem('dm_dal', this.dm_dal);
        localStorage.setItem('dm_salad', this.dm_salad);
        localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);
      }
    }
    // Dinner Ends here
  }
  close(){
    
    if(this.customise==true)
    {
      this.customise = false;
      this.model.dismiss();
    }
    
  }
  cust_type
  onclickCustomize(type) {
    let cust_css = 'select-modal-rcm';
    let mealscount = 0;
    if (this.typeboth == "Both") {
      mealscount = parseFloat(localStorage.getItem('mealcount')) / 2;
    } else {
      mealscount = parseFloat(localStorage.getItem('mealcount'));
    }
    this.customise = true;
    var customise_data;
    var preference_string;

    this.cust_type = type;
    if (type == 'Lunch Meal') {
      customise_data = this.customise_lc_data;
      console.log(this.customise_lc_data);
    }
    if (type == 'Dinner Meal') {
      customise_data = this.customise_dm_data;
    }
    // code of opening preference-edit page in model
    
    this.model = this.modalCtrl.create('PreferenceEditPage', {
      type: type,
      myValue: this.prefernceTypArr,
      customise_data: customise_data
    }, { cssClass: cust_css, showBackdrop: true, enableBackdropDismiss: true});
    this.model.present();
    this.model.onDidDismiss(data => {
      if (this.cust_type == 'Lunch Meal') {
        this.customise_lc_data = data;
        if (this.lunch_products) {
          for (var lcp_index = 0; lcp_index < this.lunch_products.length; lcp_index++) {
            if (this.customise_lc_data) {
              if (this.lunch_products[lcp_index]['category'] == 'Bread') {
                if (this.customise_lc_data.product1 == this.lunch_products[lcp_index]['product_id']) {
                  if (this.customise_lc_data.ricechek == false) {
                    this.lm_rice = '';
                    this.lm_roti = (parseFloat(this.lunch_products[lcp_index]['quantity']) + parseFloat(this.customise_lc_data.quantity)).toString() + ' ' + this.lunch_products[lcp_index]['product'];
                    this.lunch_products[lcp_index]['extra_amount'] = ((parseFloat(this.customise_lc_data.quantity) - 1) * parseFloat(this.lunch_products[lcp_index]['price']));
                    if(this.customise_lc_data.quantity!='0')
                    {
                      this.extraRoti_Lunch = (((parseFloat(this.customise_lc_data.quantity) - 1) * parseFloat(this.lunch_products[lcp_index]['price'])) * mealscount);
                    }
                    else{
                      this.extraRoti_Lunch = 0 ;
                    }
                    this.lunch_products[lcp_index]['extra_qty'] = this.customise_lc_data.quantity;
                    this.lunch_products[lcp_index]['selected'] = '1';
                  } else {
                    this.lm_roti = (parseFloat(this.lunch_products[lcp_index]['quantity']) + parseFloat(this.customise_lc_data.quantity)).toString() + ' ' + this.lunch_products[lcp_index]['product'];
                    this.lunch_products[lcp_index]['extra_amount'] = (parseFloat(data.quantity) * parseFloat(this.lunch_products[lcp_index]['price']));
                    this.extraRoti_Lunch =  ((parseFloat(this.customise_lc_data.quantity) * parseFloat(this.lunch_products[lcp_index]['price'])) * mealscount);
                    this.lunch_products[lcp_index]['extra_qty'] = data.quantity;
                    this.lunch_products[lcp_index]['selected'] = '1';
                  }
                } else {
                  this.lunch_products[lcp_index]['selected'] = '0';
                  this.lunch_products[lcp_index]['extra_qty'] = '0';
                  this.lunch_products[lcp_index]['extra_amount'] = '0';
                }
              } else if (data.product2 == this.lunch_products[lcp_index]['product_id']) {
                if (this.customise_lc_data.ricechek == true) {
                  this.lm_rice = this.lunch_products[lcp_index]['product'];
                  this.lm_rice = this.lm_rice + ' Rice';
                  this.lunch_products[lcp_index]['selected'] = '1';
                }
              } else {
                this.lunch_products[lcp_index]['selected'] = '0';
                this.lunch_products[lcp_index]['extra_qty'] = '0';
                this.lunch_products[lcp_index]['extra_amount'] = '0';
              }
            }
          }
        }
        this.preferenceString(this.cust_type, 'Lunch');
        localStorage.setItem('customise_lc_data', JSON.stringify(this.customise_lc_data));
        localStorage.setItem('lunch_products', JSON.stringify(this.lunch_products));
      }
      if (this.cust_type == 'Dinner Meal') {
        this.customise_dm_data = data;
        if (this.dinner_products) {
          for (var dmp_index = 0; dmp_index < this.dinner_products.length; dmp_index++) {
            if (this.customise_dm_data) {
              if (this.dinner_products[dmp_index]['category'] == 'Bread') {
                if (this.customise_dm_data.product1 == this.dinner_products[dmp_index]['product_id']) {
                  if (this.customise_dm_data.ricechek == false) {
                    this.dm_rice = '';
                    this.dm_roti = (parseFloat(this.dinner_products[dmp_index]['quantity']) + parseFloat(this.customise_dm_data.quantity)).toString() + ' ' + this.dinner_products[dmp_index]['product'];
                    this.dinner_products[dmp_index]['extra_amount'] = ((parseFloat(data.quantity) - 1) * parseFloat(this.dinner_products[dmp_index]['price']));
                    
                    if(this.customise_dm_data.quantity!='0')
                    {
                      this.extraRoti_Dinner =(((parseFloat(this.customise_dm_data.quantity) - 1) * parseFloat(this.dinner_products[dmp_index]['price'])) * mealscount);
                    }
                    else{
                      this.extraRoti_Dinner = 0;
                    }
                    this.dinner_products[dmp_index]['extra_qty'] = data.quantity;
                    this.dinner_products[dmp_index]['selected'] = '1';
                  } else {
                    this.dm_roti = (parseFloat(this.dinner_products[dmp_index]['quantity']) + parseFloat(this.customise_dm_data.quantity)).toString() + ' ' + this.dinner_products[dmp_index]['product'];
                    this.dinner_products[dmp_index]['extra_amount'] = (parseFloat(data.quantity) * parseFloat(this.dinner_products[dmp_index]['price']));
                    this.extraRoti_Dinner =  ((parseFloat(this.customise_dm_data.quantity) * parseFloat(this.dinner_products[dmp_index]['price'])) * mealscount);
                    this.dinner_products[dmp_index]['extra_qty'] = data.quantity;
                    this.dinner_products[dmp_index]['selected'] = '1';
                  }
                } else {
                  this.dinner_products[dmp_index]['extra_qty'] = '0';
                  this.dinner_products[dmp_index]['extra_amount'] = '0';
                  this.dinner_products[dmp_index]['selected'] = '0';
                }
              } else if (data.product2 == this.dinner_products[dmp_index]['product_id']) {
                if (this.customise_dm_data.ricechek == true) {
                  this.dm_rice = this.dinner_products[dmp_index]['product'];
                  this.dm_rice = this.dm_rice + ' Rice';
                  this.dinner_products[dmp_index]['selected'] = '1';
                }
              } else {
                this.dinner_products[dmp_index]['extra_qty'] = '0';
                this.dinner_products[dmp_index]['extra_amount'] = '0';
                this.dinner_products[dmp_index]['selected'] = '0';
              }
            }
          }
        }
        this.preferenceString(this.cust_type, 'Dinner');
        localStorage.setItem('customise_dm_data', JSON.stringify(this.customise_dm_data));
        localStorage.setItem('dinner_products', JSON.stringify(this.dinner_products));
      }
      this.customise = false;
    });
  }

  onSubmit() {
    if (this.lunch_products) {
        for (var i = 0; i < this.prefernceTypArr.length; i++) {
          if (this.prefernceTypArr[i].meal == 'Lunch Meal') {
            if (this.customise_lc_data == null) {
              //this.lunch_products = [];    
              this.lunch_products = this.prefernceTypArr[i]['products'];

              for (var j = 0; j < this.prefernceTypArr[i]['products'].length; j++) {
                // Roti or Phulaka
                if (this.prefernceTypArr[i]['products'][j].category_id == '1') {
                  if (j <= 1) {
                    if (j == 0) {     
                      this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                      //this.lm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                    }
                   // if (j == 1) {
                      //if (this.prefernceTypArr[i]['products'][j].quantity != this.prefernceTypArr[i]['products'][j - 1].quantity) {
                      //  this.lm_roti = this.lm_roti + (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                     // } else {
                      //  this.lm_roti = this.lm_roti + (this.prefernceTypArr[i]['products'][j].product);
                      //}
                   // }
                  }
                }
                // Sabji
                if (this.prefernceTypArr[i]['products'][j].category_id == '5') {
                  this.lm_sabji = ' ,Sabji';
                }
                // Rice
                if (this.prefernceTypArr[i]['products'][j].category_id == '2') {
                  this.lm_rice = this.prefernceTypArr[i]['products'][j - 1].product;
                  this.lm_rice = this.lm_rice + ' Rice';
                }
                // Dal
                if (this.prefernceTypArr[i]['products'][j].category_id == '7') {
                  this.lm_dal = '1';
                }
                // // Salad
                if (this.prefernceTypArr[i]['products'][j].category_id == '4') {
                  this.lm_salad = '1';
                }
              }
              for (var asd = 0; asd < this.lunch_products.length; asd++) {
                this.lunch_products[asd]['extra_qty'] = '0';
                this.lunch_products[asd]['extra_amount'] = '0';
                if (this.lunch_products[asd]['category_id'] == '2') {
                  if (this.lunch_products[asd]['selected'] == '1') {
                    this.lunch_products[asd]['selected'] = '1';
                  } else {
                    this.lunch_products[asd]['selected'] = '0';
                  }
                } else if (this.lunch_products[asd]['category_id'] == '1') {
                  if (asd == 0) {
                    this.lunch_products[0]['selected'] = '1';
                  } else {
                    this.lunch_products[asd]['selected'] = '0';
                  }
                } else {
                  this.lunch_products[asd]['selected'] = '0';
                }
              }
              if (this.lm_dal == '1' && this.lm_salad == '1') {
                this.preferenceProducts = this.lm_roti + this.lm_sabji+', Dal, '+this.lm_rice+' and Salad';
              } else if (this.lm_dal == '1' && this.lm_salad == '') {
                this.preferenceProducts = this.lm_roti + this.lm_sabji+', Dal and '+this.lm_rice;
              }
              //this.preferenceProducts = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
              if(localStorage.getItem('renewrotistringlunch')!='')
              {
                this.lm_roti = localStorage.getItem('renewrotistringlunch');
                if(this.lm_roti!=null)
                {
                  if(this.lm_rice!='')
                  {
                    this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal, '+this.lm_rice+' and Salad';
                  }
                  else{
                    this.preferenceProducts = this.lm_roti+this.lm_sabji+', Dal and Salad';
                  }
                }
                else{
                  this.lm_roti = this.lm_roti;
                }
                
              }
              else{
                this.lm_roti = this.lm_roti;
              }
              localStorage.setItem('preferenceProducts_default', this.preferenceProducts);
              localStorage.setItem('preferenceProducts', this.preferenceProducts);
              localStorage.setItem('lm_roti', this.lm_roti);
              localStorage.setItem('lm_sabji', this.lm_sabji);
              localStorage.setItem('lm_rice', this.lm_rice);
              localStorage.setItem('lm_dal', this.lm_dal);
              localStorage.setItem('lm_salad', this.lm_salad);
            }
          }
        }
      localStorage.setItem('lunch_products', JSON.stringify(this.lunch_products));
    }
    if (this.customise_lc_data) {
      localStorage.setItem('customise_lc_data', JSON.stringify(this.customise_lc_data));
    }
    if (this.dinner_products) {
      for (var i = 0; i < this.prefernceTypArr.length; i++) {
       if (this.prefernceTypArr[i].meal == 'Dinner Meal') {
          if (this.customise_dm_data == null) {
            //this.dinner_products = [];
            this.dinner_products = this.prefernceTypArr[i]['products'];

            for (var j = 0; j < this.prefernceTypArr[i]['products'].length; j++) {
              // Roti or Phulaka
              if (this.prefernceTypArr[i]['products'][j].category_id == '1') {
                if (j <= 1) {
                  if (j == 0) {
                    this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                    // this.dm_roti = (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                  }
                  //if (j == 1) {
                   // if (this.prefernceTypArr[i]['products'][j].quantity != this.prefernceTypArr[i]['products'][j - 1].quantity) {
                     // this.dm_roti = this.dm_roti + (this.prefernceTypArr[i]['products'][j].quantity + ' ' + this.prefernceTypArr[i]['products'][j].product);
                   //} else {
                    //  this.dm_roti = this.dm_roti + (this.prefernceTypArr[i]['products'][j].product);
                    //}
                  //}
                }
              }
              // Sabji
              if (this.prefernceTypArr[i]['products'][j].category_id == '5') {
                this.dm_sabji = ' ,Sabji ';
              }
              // Rice
              if (this.prefernceTypArr[i]['products'][j].category_id == '2') {
                this.dm_rice = this.prefernceTypArr[i]['products'][j - 1].product;
                this.dm_rice = this.dm_rice + ' Rice';
              }
              // Dal
              if (this.prefernceTypArr[i]['products'][j].category_id == '7') {
                this.dm_dal = '1';
              }
              // // Salad
              if (this.prefernceTypArr[i]['products'][j].category_id == '4') {
                this.dm_salad = '1';
              }
            }
            for (var din_prod = 0; din_prod < this.dinner_products.length; din_prod++) {
              this.dinner_products[din_prod]['extra_qty'] = '0';
              this.dinner_products[din_prod]['extra_amount'] = '0';
              if (this.dinner_products[din_prod]['category_id'] == '2') {
                if (this.dinner_products[din_prod]['selected'] == '1') {
                  this.dinner_products[din_prod]['selected'] = '1';
                } else {
                  this.dinner_products[din_prod]['selected'] = '0';
                }
              } else if (this.dinner_products[din_prod]['category_id'] == '1') {
                if (din_prod == 0) {
                  this.dinner_products[0]['selected'] = '1';
                } else {
                  this.dinner_products[din_prod]['selected'] = '0';
                }
              } else {
                this.dinner_products[din_prod]['selected'] = '0';
              }
            }

            if (this.dm_dal == '1' && this.dm_salad == '1') {
              this.preferenceProductsDinner = this.dm_roti + this.dm_sabji+', Dal, '+this.dm_rice+' and Salad';
            } else if (this.dm_dal == '1' && this.dm_salad == '') {
              this.preferenceProductsDinner = this.dm_roti + this.dm_sabji+', Dal and '+ this.dm_rice;
            }
            //this.preferenceProductsDinner = '2 Chapati/Roti, Sabji, Dal, Rice & Salad';
            if(localStorage.getItem('renewrotistringdinner')!='')
              {
                this.dm_roti = localStorage.getItem('renewrotistringdinner');
                if(this.dm_roti!=null)
                {
                  if(this.dm_rice!='')
                {
                  this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal, '+this.dm_rice+' and Salad';
                }
                else{
                  this.preferenceProductsDinner = this.dm_roti+this.dm_sabji+', Dal and Salad';
                }
                }
                else{
                  this.dm_roti = this.dm_roti;
                }                
              }
              else{
                this.dm_roti = this.dm_roti;
              }
            localStorage.setItem('preferenceProductsDinner_default', this.preferenceProductsDinner);
            localStorage.setItem('preferenceProductsDinner', this.preferenceProductsDinner);

            localStorage.setItem('dm_roti', this.dm_roti);
            localStorage.setItem('dm_sabji', this.dm_sabji);
            localStorage.setItem('dm_rice', this.dm_rice);
            localStorage.setItem('dm_dal', this.dm_dal);
            localStorage.setItem('dm_salad', this.dm_salad);
          }
        }
      }
      localStorage.setItem('dinner_products', JSON.stringify(this.dinner_products));
    }
    if (this.customise_dm_data) {
      localStorage.setItem('customise_dm_data', JSON.stringify(this.customise_dm_data));
    }
    localStorage.setItem('extraRoti_Lunch', this.extraRoti_Lunch.toString());
    localStorage.setItem('extraRoti_Dinner', this.extraRoti_Dinner.toString());

    localStorage.setItem('selectprefrence', '1');
    this.nav.setRoot('ChoosedeliverytimePage');
  }

  Back() {
    if (this.customise == true) {     
      this.model.dismiss();
    } else {
      var mealId = localStorage.getItem('mealId')
      localStorage.removeItem('mealId');
      localStorage.removeItem('preferenceType');
      localStorage.removeItem('preferenceType1');
      localStorage.removeItem('lunch_products');
      localStorage.removeItem('dinner_products');
      localStorage.removeItem('customise_lc_data');
      localStorage.removeItem('customise_dm_data');

      localStorage.removeItem('lm_roti');
      localStorage.removeItem('extraRoti_Dinner');
      localStorage.removeItem('extraRoti_Lunch');
      localStorage.removeItem('lm_roti');
      localStorage.removeItem('lm_sabji');
      localStorage.removeItem('lm_rice');
      localStorage.removeItem('lm_dal');
      localStorage.removeItem('lm_salad');
      localStorage.removeItem('dm_roti');
      localStorage.removeItem('dm_sabji');
      localStorage.removeItem('dm_rice');
      localStorage.removeItem('dm_dal');
      localStorage.removeItem('dm_salad');
      localStorage.removeItem('extra_roti');
      this.nav.setRoot('MealtypePage', {
        mealId: mealId
      });
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
				this.nav.setRoot('ChoosePreferencePage');
			  }
			  
			}
		  ]
		});
		(await alertConfirm).present();
  }
}
