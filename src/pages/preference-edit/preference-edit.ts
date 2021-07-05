import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { APIService } from '../../services/api_service';

/**
 * Generated class for the PreferenceEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preference-edit',
  templateUrl: 'preference-edit.html',
})
export class PreferenceEditPage {
  public preferenceEditForm: FormGroup;
  // showFirstDiv: boolean = false
  // showSecondDiv: boolean = false

  myNumber;
  myNumber1;
  //myNumber2: number = 3;  myNumber3: number = 3;
  // passingData: any;
  // preferenceProducts: string;  preferenceProducts1: string;
  mealType: string;
  // disableButton: boolean = false;
  buttonColorplus;
  maxQuantity1: any;
  buttonColorplus1;
  maxQuantity: any;
  // radio1: boolean = false
  // mealset1;
  // riceMealActive;  riceMealActive1;

  displayProductChoice
  displayquantityChoice
  displayProductChoice1
  displayquantityChoice1
  displayPrizeChoice
  displayPrizeChoice1
  displayProductChoice2
  displayquantityChoice2
  displayProductChoice3
  displayquantityChoice3
  category
  category1
  // preferenceProductsRice
  // preferenceProductsRoti
  buttonColor
  buttonColor1
  data = []
  // data1 = []
  product_id
  product_id1
  product_id2
  product_id3
  currentprod_qty
  currentprod1_qty
  currentprod2_qty
  currentprod3_qty
  customise_data
  rdDefaultRoti
  rdDefaultRoti1
  // rdDefault1
  // rdDefault2
  // rdDefault4
  passingData
  preferenceString
  chkRemoveRice
  selected
  selected1
  disablePlusButton: boolean = false
  disablePlusButton1: boolean = false
  disableMinusButton1: boolean = false;
  disableMinusButton: boolean = false
  choiceset1
  constructor(public nav: NavController, public navParams: NavParams,
    private builder: FormBuilder, private apiService: APIService,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public platform: Platform,
    public app: App) {
    const fields = {
      radio1: [''],
      radio2: [''],
      radio3: [''],
      radio4: ['']
    };
    this.preferenceEditForm = this.builder.group(fields);

    // let backAction = platform.registerBackButtonAction(() => {
    //   this.viewCtrl.dismiss();
    //   backAction();
    // }, 2)
  }

  ngOnInit() {
    this.ricelabelcolor = '#000000';
    this.mealType = this.navParams.get('type');

    this.onLoadDisplayrData();
    if (this.customise_data) {
      if (this.customise_data.ricechek == false) {
        this.chkRemoveRice = false;
        this.rdDefaultRice = true;
        this.rdDefaultRice1 = false;
      } else {
        this.chkRemoveRice = true;
      }
    } else {
      this.chkRemoveRice = true;
    }
  }
  ricelabelcolor
  onLoadDisplayrData() {
    this.passingData = this.navParams.get('myValue');
    this.customise_data = this.navParams.get('customise_data');

    if (this.mealType == "Lunch Meal") {
      this.preferenceString = localStorage.getItem('preferenceProducts');
    } else if (this.mealType == "Dinner Meal") {
      this.preferenceString = localStorage.getItem('preferenceProductsDinner');
    }
    for (var i = 0; i < this.passingData.length; i++) {
      if (this.mealType == this.passingData[i].meal) {
        for (var j = 0; j < this.passingData[i]['products'].length; j++) {
          this.passingData[i]['products'][j]['product'];
          if ("Bread" == this.passingData[i]['products'][j]['category']) {
            this.data.push(this.passingData[i]['products'][j])
          }
          if ("Rice" == this.passingData[i]['products'][j]['category']) {
            this.data.push(this.passingData[i]['products'][j])
          }
        }//end of j
      }//end of if      
    }//end of i
    for (var k = 0; k < this.data.length; k++) {
      if (k == 0) {
        if (this.customise_data) {

          if (this.customise_data.product1 == this.data[k].product_id) {
            this.rdDefaultRoti = true;
            this.displayquantityChoice = parseFloat(this.data[k].quantity) + parseFloat(this.customise_data.quantity);
            this.selected = 'choice1';

            this.disablePlusButton = true;
            this.disableMinusButton = true;

            this.buttonColorplus = '#5C829D';

            this.buttonColor1 = '#D1D1D1';
            this.disableMinusButton1 = false;
            this.buttonColorplus1 = '#D1D1D1';
            this.disablePlusButton1 = false;
            if (this.displayquantityChoice == this.data[k].quantity) {
              this.buttonColor = '#D1D1D1';
            } else {
              this.buttonColor = '#5C829D';
            }
            localStorage.setItem('choice_Bread', this.selected);
            this.choiceset1 = localStorage.getItem('choice_Bread')
            if (this.displayquantityChoice == this.data[k].max_quantity) {
              this.buttonColorplus = '#D1D1D1';
            }
            // if (this.displayquantityChoice != this.myNumber) {
            //   this.displayquantityChoice = this.myNumber;
            //   this.buttonColor = '#D1D1D1';
            // }
          } else {
            this.displayquantityChoice = this.data[k].quantity;
          }
        }
        else {
          this.rdDefaultRoti = true;
          this.selected = 'choice1';
          localStorage.setItem('choice_Bread', this.selected);
          this.choiceset1 = localStorage.getItem('choice_Bread')
          this.displayquantityChoice = this.data[k].quantity;
          this.disableMinusButton = true;
          this.buttonColor = '#D1D1D1';
          this.buttonColorplus = '#5C829D';
          this.disablePlusButton = true;
        }
        this.currentprod_qty = this.data[k].quantity
        this.myNumber = this.data[k].quantity;
        localStorage.setItem('category', this.data[k]['category'])
        this.category = localStorage.getItem('category');
        this.product_id = this.data[k].product_id;
        this.displayProductChoice = this.data[k].product
        this.displayPrizeChoice = this.data[k].price
        this.maxQuantity = this.data[k].max_quantity
        localStorage.setItem('defaultprice',this.displayPrizeChoice);
      }
      if (k == 1) {
        localStorage.setItem('category', this.data[k]['category'])
        this.category = localStorage.getItem('category');
        this.product_id1 = this.data[k].product_id;
        this.displayProductChoice1 = this.data[k].product
        if (this.customise_data) {
          if (this.customise_data.product1 == this.data[k].product_id) {
            this.rdDefaultRoti1 = true;
            this.displayquantityChoice1 = parseFloat(this.data[k].quantity) + parseFloat(this.customise_data.quantity);
            this.selected = 'choice2';
            this.disablePlusButton1 = true;
            this.disableMinusButton1 = true;
            if (this.displayquantityChoice1 == this.data[k].quantity) {
              this.buttonColor1 = '#D1D1D1';
            } else {
              this.buttonColor1 = '#5C829D';
            }
            this.buttonColorplus1 = '#5C829D';

            this.buttonColor = '#D1D1D1';
            this.disableMinusButton = false;
            this.buttonColorplus = '#D1D1D1';
            this.disablePlusButton = false;

            localStorage.setItem('choice_Bread', this.selected);
            this.choiceset1 = localStorage.getItem('choice_Bread')
            if (this.displayquantityChoice1 == this.data[k].max_quantity) {
              this.buttonColorplus1 = '#D1D1D1';
            }
            // if (this.displayquantityChoice1 != this.myNumber1) {
            //   this.displayquantityChoice1 = this.myNumber1;
            //   this.buttonColor1 = '#D1D1D1';
            // }
          } else {
            this.displayquantityChoice1 = this.data[k].quantity
          }
        } else {
          this.displayquantityChoice1 = this.data[k].quantity;

          this.buttonColor1 = '#D1D1D1';
          this.disableMinusButton1 = false;

          this.buttonColorplus1 = '#D1D1D1';
          this.disablePlusButton1 = false;
        }
        this.currentprod1_qty = this.data[k].quantity
        this.myNumber1 = this.data[k].quantity;
        this.displayPrizeChoice1 = this.data[k].price
        this.maxQuantity1 = this.data[k].max_quantity
      }
      if (k == 2) {
        if (this.customise_data) {
          if (this.customise_data.product2 == this.data[k].product_id) {
            this.rdDefaultRice = true;
            this.rdDefaultRice1 = false;
            this.selected1 = 'rice1';
          } else if (this.customise_data.product2 == null) {
            this.rdDefaultRice = true;
            this.rdDefaultRice1 = false;
            this.selected1 = 'rice1';
            localStorage.setItem('choice_Rice', this.selected1);
            this.choiceset2 = localStorage.getItem('choice_Rice');
          }
        } else {
          this.rdDefaultRice = true;
          this.rdDefaultRice1 = false;
          this.selected1 = 'rice1';
          localStorage.setItem('choice_Rice', this.selected1);
          this.choiceset2 = localStorage.getItem('choice_Rice');
        }
        localStorage.setItem('category1', this.data[k]['category'])
        this.category1 = localStorage.getItem('category1');
        this.product_id2 = this.data[k].product_id;
        this.displayProductChoice2 = this.data[k].product
        this.displayquantityChoice2 = this.data[k].quantity
        this.currentprod2_qty = this.data[k].quantity
      }
      if (k == 3) {
        if (this.customise_data) {
          if (this.customise_data.product2 == this.data[k].product_id) {
            this.rdDefaultRice1 = true;
            this.rdDefaultRice = false;
            this.selected1 = 'rice2';

            localStorage.setItem('choice_Rice', this.selected1);
            this.choiceset2 = localStorage.getItem('choice_Rice');
          } else if (this.customise_data.product2 == null) {
            this.rdDefaultRice1 = true;
            this.rdDefaultRice = false;

            this.selected1 = 'rice1';
            localStorage.setItem('choice_Rice', this.selected1);
            this.choiceset2 = localStorage.getItem('choice_Rice');
          }
        }
        localStorage.setItem('category1', this.data[k]['category'])
        this.category1 = localStorage.getItem('category1');
        this.product_id3 = this.data[k].product_id;
        this.displayProductChoice3 = this.data[k].product
        this.displayquantityChoice3 = this.data[k].quantity
        this.currentprod3_qty = this.data[k].quantity
      }
    }
  }

  ionViewDidLoad() {
  }

  removeRice() {
    if (this.chkRemoveRice) {
      this.ricelabelcolor = '#000000';
      if (this.choiceset1 == 'choice1') {
        if (this.displayquantityChoice != this.myNumber) {
          this.displayquantityChoice -= 1;
          if (this.displayquantityChoice != this.myNumber) {
            this.buttonColorplus = '#5C829D';
          }
        }
        if (this.displayquantityChoice == this.myNumber) {
          this.buttonColor = '#D1D1D1'   //disable color
        }else{
        }
      } else if (this.choiceset1 == 'choice2') {
        if (this.displayquantityChoice1 != this.myNumber1) {
          this.displayquantityChoice1 -= 1;
          if (this.displayquantityChoice1 != this.myNumber1) {
            this.buttonColorplus1 = '#5C829D';
          }
        }
        if (this.displayquantityChoice1 == this.myNumber1) {
          this.buttonColor1 = '#D1D1D1'   //disable color
        }
      }
    } else {
      localStorage.removeItem('choice_Rice');
      this.ricelabelcolor = '#D1D1D1';
      if (this.choiceset1 == 'choice1') {
        if (this.displayquantityChoice == this.maxQuantity) {
          this.buttonColorplus = '#D1D1D1';
        } else {
          this.displayquantityChoice += 1;
          this.buttonColor = '#5C829D';
          if (this.displayquantityChoice == this.maxQuantity) {
            this.buttonColorplus = '#D1D1D1';
          }
        }
      } else if (this.choiceset1 == 'choice2') {
        if (this.displayquantityChoice1 == this.maxQuantity1) {
          this.buttonColorplus1 = '#D1D1D1';
        } else {
          this.displayquantityChoice1 += 1;
          this.buttonColor1 = '#5C829D';
          if (this.displayquantityChoice1 == this.maxQuantity1) {
            this.buttonColorplus1 = '#D1D1D1';
          }
        }
      }
    }
  }

  radioGroupChange(event) {
    if (event == 'choice1') {
      this.rdDefaultRoti1=false;
      this.rdDefaultRoti=true;
      this.disablePlusButton = true;
      this.disablePlusButton1 = false;
      this.disableMinusButton1 = false;
      this.disableMinusButton = true;
      this.selected = event;
      this.buttonColorplus = '#5C829D';
      this.buttonColorplus1 = '#D1D1D1'
      localStorage.setItem('choice_Bread', this.selected);
      this.choiceset1 = localStorage.getItem('choice_Bread')
      if (this.chkRemoveRice == false) {
        this.displayquantityChoice += 1;
        this.buttonColor = '#5C829D';
      }
      if (this.displayquantityChoice1 != this.myNumber1) {
        this.displayquantityChoice1 = this.myNumber1;
        this.buttonColor1 = '#D1D1D1';
      }
    }
    if (event == 'choice2') {
     this.rdDefaultRoti1=true;
      this.rdDefaultRoti=false;
      this.disableMinusButton1 = true;
      this.disableMinusButton = false;
      this.disablePlusButton1 = true
      this.disablePlusButton = false;
      this.selected = event;
      this.buttonColorplus1 = '#5C829D';
      this.buttonColorplus = '#D1D1D1'
      localStorage.setItem('choice_Bread', this.selected);
      this.choiceset1 = localStorage.getItem('choice_Bread')
      if (this.chkRemoveRice == false) {
        this.displayquantityChoice1 += 1;
        this.buttonColor1 = '#5C829D';
      }
      if (this.displayquantityChoice != this.myNumber) {
        this.displayquantityChoice = this.myNumber;
        this.buttonColor = '#D1D1D1';
      }
    }
  }

  choiceset2
  radioGroupChange1(event) {
    if (event == 'rice1') {
    this.rdDefaultRice = true;
    this.rdDefaultRice1 = false;
      this.selected1 = event
      localStorage.setItem('choice_Rice', this.selected1);
      this.choiceset2 = localStorage.getItem('choice_Rice');
    }
    if (event == 'rice2') {
      this.rdDefaultRice = false;
      this.rdDefaultRice1 = true;
      this.selected1 = event
      localStorage.setItem('choice_Rice', this.selected1);
      this.choiceset2 = localStorage.getItem('choice_Rice');
    }
  }

  rdDefaultRice = false;
  rdDefaultRice1 = false;
  ricelabelclick(type) {
    if (this.chkRemoveRice) {
      if (type == 0) {
        this.rdDefaultRice = true;
        this.rdDefaultRice1 = false;
        this.selected1 = event
        localStorage.setItem('choice_Rice', this.selected1);
        this.choiceset2 = localStorage.getItem('choice_Rice');
      } else if (type == 1) {
        this.rdDefaultRice1 = true;
        this.rdDefaultRice = false;
        this.selected1 = event
        localStorage.setItem('choice_Rice', this.selected1);
        this.choiceset2 = localStorage.getItem('choice_Rice');
      }
    }
  }

  //-----------// 
  onclickaddChapati() {
    this.displayquantityChoice += 1;
    this.disableMinusButton = true;
    this.buttonColor = '#5C829D';
    if (this.displayquantityChoice == this.maxQuantity) {
      this.buttonColorplus = '#D1D1D1';
    }
  }
  onclickMinusChapati() {
    this.displayquantityChoice -= 1;
    this.buttonColorplus = '#5C829D';
    if (this.displayquantityChoice == this.myNumber) {
      this.buttonColor = '#D1D1D1'   //disable color
    }
  }
  // --------------//
  onclickaddPhulka() {
    this.displayquantityChoice1 += 1;
    this.disableMinusButton1 = true;
    this.buttonColor1 = '#5C829D'   //navy blue color
    if (this.displayquantityChoice1 == this.maxQuantity1) {
      this.buttonColorplus1 = '#D1D1D1'
    }
  }

  onclickMinusPhulka() {
    this.displayquantityChoice1 -= 1;
    this.buttonColorplus1 = '#5C829D';
    if (this.displayquantityChoice1 == this.myNumber1) {
      this.buttonColor1 = '#D1D1D1'
    }
  }

  quantity
  quantity1
  selected_roti_product
  selected_rice_product
  onSubmit() {
    localStorage.removeItem('renewrotistringlunch');
    localStorage.removeItem('renewrotistringdinner');
    if (localStorage.getItem('choice_Bread') == 'choice1') {

      this.selected_roti_product = this.product_id;
      this.quantity = parseFloat(this.displayquantityChoice) - parseFloat(this.currentprod_qty);

    } else if (localStorage.getItem('choice_Bread') == 'choice2') {

      this.selected_roti_product = this.product_id1;
      this.quantity = parseFloat(this.displayquantityChoice1) - parseFloat(this.currentprod1_qty);

    }
    if (localStorage.getItem('choice_Rice') == 'rice1') {

      this.selected_rice_product = this.product_id2;
      this.quantity1 = '1';

    } else if (localStorage.getItem('choice_Rice') == 'rice2') {

      this.selected_rice_product = this.product_id3;
      this.quantity1 = '1';

    }
    localStorage.setItem('defaultquantity',this.quantity);
    this.viewCtrl.dismiss({
      ricechek: this.chkRemoveRice,
      product1: this.selected_roti_product,
      quantity: this.quantity,
      product2: this.selected_rice_product,
      quantity1: this.quantity1
    });
  }

  close()
  {
    this.viewCtrl.dismiss();
  }
}
