import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';

/**
 * Service for API access
 */
@Injectable()
export class APIService {
  rootUrl;

  private categories;
  private restaurants;
  private settings;
  private delivery_areas;
  private cities;
  private token;
  private userData;
  private headers = null;
  days
  rootUrls
  coundays = 1;
  total_total
  firstDay
  lastDay
  currentdate
  setdatecurrentdate
  selecteddate_start
  private loginStatus$ = new Subject<boolean>();

  constructor(private http: Http,
    private storage: Storage
  ) {
    //this.rootUrl = 'http://68.183.87.209/public/api/v3/';  // Production
    this.rootUrl = 'http://103.79.100.31:9007/api/v3/';  // Test
    //this.rootUrl = 'http://103.79.100.31:9006/api/v3/'; // Development
     //this.rootUrl = 'http://159.89.167.186/public/api/v3/';  // Test

    this.categories = [];
    this.restaurants = [];
    this.delivery_areas = [];
    this.token = null;
    this.userData = {
      id: null,
      city_id: null,
      name: '',
      phone: ''
    };
  }

  getLoginStatus() {
    return this.loginStatus$;
  }

  reloadCategories(restaurant_id): any {
    let url = `${this.rootUrl}categories`;
    if (restaurant_id) {
      url = `${url}?restaurant_id=${restaurant_id}`;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.categories = response.json();
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  deliveryaddress(token, id, lunchadd, dinneradd, Lsat, Lsun, Dsat, Dsun): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {

      token: token,
      subscription_customer_id: id,
      delivery_lunch_address: lunchadd,
      delivery_dinner_address: dinneradd,
      weekend_lunch_saturday: Lsat,
      weekend_lunch_sunday: Lsun,
      weekend_dinner_saturday: Dsat,
      weekend_dinner_sunday: Dsun,
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}addDeliveryAddress`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }

  reloadRestaurants(city_id): any {
    let url = `${this.rootUrl}restaurants`;
    if (city_id) {
      url = `${url}?city_id=${city_id}`;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.restaurants = response.json();
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  loadDeliveryAreas(city_id): any {
    let url = `${this.rootUrl}delivery_areas`;
    if (city_id) {
      url = `${url}?city_id=${city_id}`;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.delivery_areas = response.json();
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  getCategories() {
    return this.categories;
  }

  getRestaurants() {
    return this.restaurants;
  }

  getSettings(): any {
    return this.settings;
  }

  getDeliveryAreas() {
    return this.delivery_areas;
  }

  getCities() {
    return this.cities;
  }

  getToken() {
    return this.token;
  }

  getUserData() {
    return this.userData;
  }

  getProducts(category_id): any {
    let url = this.rootUrl + `products?category_id=${category_id}`;
    return this.http.get(url).toPromise();
  }

  getNews(page, city_id): any {
    let url = this.rootUrl + `news?page=${page}`;
    if (city_id) {
      url = `${url}&city_id=${city_id}`;
    }
    return this.http.get(url).toPromise();
  }

  createOrder(data): any {
    return this.http.post(`${this.rootUrl}order`, data, {
      headers: this.headers
    }).toPromise();
  }

  validateDiscount(data): any {
    return this.http.post(`${this.rootUrl}promo_codes/validate`, data).map((response) => {
      return response.json();
    });
  }

  setToken(v) {
    this.token = v;
    this.headers = new Headers({
      token: this.token
    });
  }

  isLoggedIn() {
    return (this.token != null && (this.settings.signup_required == 1));
  }

  init(): any {
    let serverFetched = false;
    this.storage.get('data').then((v) => {
      if (v && !serverFetched) {
        let data = JSON.parse(v);
        this.categories = data.categories;
        this.settings = data.settings;
      }
    });
    this.storage.get('token').then((v) => {
      if (v) {
        this.setToken(v);
      }
    });
    this.storage.get('userData').then((v) => {
      if (v) {
        this.userData = JSON.parse(v);
      }
    }, (e) => {
    });
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}settings`).toPromise().then((response) => {
        serverFetched = true;
        let data = response.json();
        this.storage.set('data', JSON.stringify(data)).then(() => {
        }, () => {
        });
        this.categories = data.categories;
        this.settings = data.settings;
        if (data.delivery_areas) {
          this.delivery_areas = data.delivery_areas;
        }
        if (data.cities) {
          this.cities = data.cities;
        }
        resolve();
      }, () => {
        reject();
      });
    });
    return promise;
  }

  signup(data: any): any {
    // let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}customers`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  aboutyou(id, fname, email, lname, mobnum, token, profid): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      id: id,
      name: fname,
      email: email,
      lastname: lname,
      contactNumber: mobnum,
      token: token,
      profession: profid
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}customers`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  selectstartdate(date, id, token, enddate): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      subscription_customer_id: id,
      start_date: date,
      token: token,
      end_date: enddate
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}addStartDate`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  login(data: any): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}sendOtp2`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  Verifyotp(mobnum, otp, time, token, id, newnum): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      number: mobnum,
      otp: otp,
      time: time,
      token: token,
      id: id,
      update_number: newnum
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}validateOtp`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }




  saveUserData(data: any) {
    let promise = new Promise((resolve, reject) => {
      this.http.put(`${this.rootUrl}customers/1`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.success) {
          let reload = false;
          if (this.userData.city_id != response.customer.city_id) {
            reload = true;
          }
          this.userData = response.customer;
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
            if (reload) {
              window['location'].reload();
            }
          }, () => {
          });
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  getOrders() {
    return this.http.get(`${this.rootUrl}orders`, {
      headers: this.headers
    }).map(response => {
      return response.json();
    });
  }

  showselectarea(): any {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}getallAreaDetails`).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  displayonboarding(): any {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}getallContent`).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  loadUserData() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}me`, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe(response => {
        this.storage.set('userData', JSON.stringify(response)).then(() => { }, () => { });
        this.userData = response;
        resolve(response);
      }, () => {
        reject({});
      });
    });
  }

  orderTracker() {
    return this.http.get(`${this.rootUrl}tracker`, {
      headers: this.headers
    }).map(response => {
      return response.json();
    });
  }

  savePushToken(push_token) {
    return this.http.post(`${this.rootUrl}push_token_cust`, {
      push_token
    }, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe(() => {

      }, () => { });
  }
  showSubscription() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let promise = new Promise((resolve, reject) => {
      var tokendata = localStorage.getItem('token');
      var data = { token: tokendata }
      this.http.post(`${this.rootUrl}subscription_plan`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }

  subscription(): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      var tokendata = localStorage.getItem('token');
      var customer_id = localStorage.getItem('id');

      var subscription_id = localStorage.getItem('subscription_id');
      var data = { token: tokendata, customer_id, subscription_id }
      this.http.post(`${this.rootUrl}add_subscription_plan`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }
  showMealType(): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var tokendata = localStorage.getItem('token');
    var subscription_id = localStorage.getItem('subscription_id');
    let promise = new Promise((resolve, reject) => {
      var tokendata = localStorage.getItem('token');
      var data = { token: tokendata, subscription_id: subscription_id }
      this.http.post(`${this.rootUrl}mealType`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  mealType(): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var tokendata = localStorage.getItem('token');
    var mealId = localStorage.getItem('mealId');

    var subscription_id = localStorage.getItem('subscription_id');
    let promise = new Promise((resolve, reject) => {
      var data = { token: tokendata, subscription_id: subscription_id }
      this.http.post(`${this.rootUrl}mealMenu`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }

  deliverytime(lunch1, dinner1, token, id): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      delivery_lunch_timing: lunch1,
      delivery_dinner_timing: dinner1,
      token: token,
      subscription_customer_id: id
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}addDeliveryTime`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }

  choosepreference(id, fname, email, lname, mobnum, token): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      id: id,
      name: fname,
      email: email,
      lastname: lname,
      contactNumber: mobnum,
      token: token,
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}customers`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  preferenceType() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var tokendata = localStorage.getItem('token');
    var mealId = localStorage.getItem('mealId');
    var subscription_id = localStorage.getItem('subscription_id');
    let promise = new Promise((resolve, reject) => {

      var data = { meal_type: mealId, token: tokendata, subscription_id: subscription_id }
      this.http.post(`${this.rootUrl}mealMenu`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  preferenceupDateype() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      var tokendata = localStorage.getItem('token');
      var data = { token: tokendata }
      this.http.post(`${this.rootUrl}addCustomizeProduct`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  addAddress(data): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}addAddress`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  showDeliveryAddress() {
    var tokendata = localStorage.getItem('token');
    var customer_id = localStorage.getItem('id');
    var data = { token: tokendata, customer_id: customer_id }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getaddress`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  showsFAQ(): any {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}getfaq`).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  displayCheckoutData(tokendata, customer_subscription_id): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = { customer_subscription_id: customer_subscription_id, token: tokendata }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}checkout`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }
  displayTermsAndPolicy() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}getterms`).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
    Dashboard(id, token): any {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var data = {
        customer_id: id,
        token: token
      }
      let promise = new Promise((resolve, reject) => {
        this.http.post(`${this.rootUrl}dashboard`, data, options).map(response => {
          // headers : headers
          return response.json();
        }).subscribe(success => {
          if (success.token != '') {
            this.setToken(success.token);
            this.userData = success.customer;
            this.storage.set('token', success.token).then(() => {
            });
            this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
            });
            this.loginStatus$.next(true);
          }
          resolve(success);
        }, () => {
          reject({});
        });
      });
      return promise;
    }
  paymentDetails() {
    var tokendata = localStorage.getItem('token');
    var customer_id = localStorage.getItem('id');
    var subscription_id = localStorage.getItem('subscription_id');
    var payment_id = localStorage.getItem('payment_id');
    var customer_subscription_id = localStorage.getItem('customer_subscription_id');
    var Total = localStorage.getItem('Total');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: customer_id,
      subscription_id: subscription_id,
      customer_subscription_id: customer_subscription_id,
      payment_id: payment_id,
      amount: Total,
      payment_status: "success",
      token: tokendata
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}payementDetail`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  addsubscriptionPlan(data_product, cgst, igst, renew,reference_id) {
    var tokendata = localStorage.getItem('token');
    var customer_id = localStorage.getItem('id');
    var subscription_id = localStorage.getItem('subscription_id');
    var payment_id = localStorage.getItem('payment_id');
    var customer_subscription_id = localStorage.getItem('customer_subscription_id');
    var Total = localStorage.getItem('Total');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var weekend_lunch_saturday;
    var weekend_lunch_sunday;
    var weekend_dinner_saturday;
    var weekend_dinner_sunday;
    var dinnertime;
    var lunchtime;
    var deldinnertime;
    var dellunchtime;
    if (localStorage.getItem('l1')) {
      weekend_lunch_saturday = localStorage.getItem('l1')
    } else {
      weekend_lunch_saturday = '0'
    }
    if (localStorage.getItem('l2')) {
      weekend_lunch_sunday = localStorage.getItem('l2')
    } else {
      weekend_lunch_sunday = '0'
    }
    if (localStorage.getItem('d1')) {
      weekend_dinner_saturday = localStorage.getItem('d1')
    } else {
      weekend_dinner_saturday = '0'
    }
    if (localStorage.getItem('d2')) {
      weekend_dinner_sunday = localStorage.getItem('d2')
    } else {
      weekend_dinner_sunday = '0'
    }
    if(localStorage.getItem('dinner1')==''){
      dinnertime = "0";
    }
    else{
      dinnertime =localStorage.getItem('dinner1');
    }

    if(localStorage.getItem('lunch1')==''){
      lunchtime = "0";
    }
    else{
      lunchtime =localStorage.getItem('lunch1');
    }

    if(localStorage.getItem('lunch_add')==''){
      dellunchtime = "0";
    }
    else{
      dellunchtime =localStorage.getItem('lunch_add');
    }
    if(localStorage.getItem('dinner_add')==''){
      deldinnertime = "0";
    }
    else{
      deldinnertime =localStorage.getItem('dinner_add');
    }
    
      
    var data = {
      token: tokendata,
      customer_id: customer_id,
      reference_id: reference_id,
      subscription_id: subscription_id,
      start_date: localStorage.getItem('StartDate'),
      end_date: localStorage.getItem('endDate'),
      delivery_lunch_timing: lunchtime,
      delivery_dinner_timing: dinnertime,
      delivery_lunch_address: dellunchtime,
      delivery_dinner_address: deldinnertime,
      weekend_lunch_saturday: weekend_lunch_saturday,
      weekend_lunch_sunday: weekend_lunch_sunday,
      weekend_dinner_saturday: weekend_dinner_saturday,
      weekend_dinner_sunday: weekend_dinner_sunday,
      meal_type: localStorage.getItem('mealId'),
      payment_id: payment_id,
      amount: Total,
      payment_status: "success",
      lunch_meal_menu: localStorage.getItem('lunch_meal_menu'),
      dinner_meal_menu: localStorage.getItem('dinner_meal_menu'),
      subscription_period: localStorage.getItem('mealdays'),
      cancel_meal_count: localStorage.getItem('cancel_count'),
      monthly_cost: localStorage.getItem('price'),
      extra_roti: localStorage.getItem('extra_price'),
      extra_rice: '0',
      CGST_amount: cgst,
      IGST_amount: igst,
      renew: renew,
      data: data_product
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}addsubscriptionPlan`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  pickurvegi(id, token, cust_sub_id): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token,
      customer_subscription_id: cust_sub_id
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getmenuproduct`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }


  showGuestMeal(token) {
    var data = { token: token }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}listofmealtype`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  guestmeal(tokendata, customer_id, mynum1, mynum2, lunchmealtype, dinnermealtype, date) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: tokendata,
      customer_id: customer_id,
      lunchquantity: mynum1,
      dinnerquantity: mynum2,
      lunchmealtype: lunchmealtype,
      dinnermealtype: dinnermealtype,
      date: date
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}guestmeal`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  addCustomizeProduct(lunch_meal_menu, dinner_meal_menu, meal_type, product): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: localStorage.getItem('token'),
      customer_id: localStorage.getItem('id'),
      customer_subscription_id: localStorage.getItem('subscription_id'),
      lunch_meal_menu: lunch_meal_menu,
      dinner_meal_menu: dinner_meal_menu,
      meal_type: meal_type,
      product: product
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}addCustomizeProduct`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {


        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  //   checkoutdetail( tokendata, customer_id , date)
  // {
  // let headers = new Headers({ 'Content-Type': 'application/json' });
  // let options = new RequestOptions({ headers: headers });
  // var data={token:tokendata,
  // customer_id:customer_id,
  // date:date
  // }
  // let promise = new Promise((resolve, reject) => {
  // this.http.post(`${this.rootUrl}checkoutdetail`, data, {
  // headers: this.headers
  // }).map(response => {
  // return response.json();
  // }).subscribe((res) => {
  // if (res.success) {
  // this.setToken(res.token);
  // this.storage.set('token', res.token).then(() => {
  // }, () => {
  // });
  // this.loginStatus$.next(true);
  // }
  // resolve(res);
  // }, () => {
  // reject({});
  // });
  // });
  // return promise;
  // }
  aboutus(): any {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}getaboutus`).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  termnpri(): any {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}getterms`).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  customerdetail(id, token): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getAllCustomerDetail`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  checkoutdetail(tokendata, customer_id, date) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: tokendata,
      customer_id: customer_id,
      date: date
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}checkoutdetail`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }


  guestmeal_payment(customer_subscription_id,customer_id, payment_id, payment_status, amount, date) {
    var tokendata = localStorage.getItem('token');
    // var customer_id = localStorage.getItem('id');
    // var subscription_id = localStorage.getItem('subscription_id');
    // var payment_id = localStorage.getItem('payment_id');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: customer_id,
      payment_id: payment_id,
      payment_status: payment_status,
      amount: amount,
      token: tokendata,
      date: date,
      customer_subscription_id: customer_subscription_id

    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}guestmeal_payment`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }
  showCountMeal(tokendata, customer_id, customer_subscription_id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: customer_id,
      token: tokendata,
      customer_subscription_id: customer_subscription_id
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}meal_cancel_count`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  cancelmeal(customer_subscription_id, customer_id, meal_type, toDate, fromDate) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_subscription_id: customer_subscription_id,
      customer_id: customer_id,
      meal_type: meal_type,
      to_date: toDate,
      from_date: fromDate
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}cancelmeal`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  getexistingaddress_time(tokendata, customer_id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: tokendata,
      customer_id: customer_id,

    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getexistingaddress_time`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }
  switch_address(tokendata, address_name, customer_subscription_id, l1, l2, fromDate, toDate, meal_type, customer_id1) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: tokendata,
      address_name: address_name,
      customer_subscription_id: customer_subscription_id,
      weekend_lunch_saturday: l1,
      weekend_lunch_sunday: l2,
      weekend_dinner_saturday: l1,
      weekend_dinner_sunday: l2,
      from_date: fromDate,
      todate: toDate,
      meal_type: meal_type,
      customer_id: customer_id1
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}switch_address`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;

  }
  //   switch_time()
  //   {
  //      let headers = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: headers });
  //     var data = {
  //       token: tokendata,
  //       customer_id:
  //       address_name: address_name,
  //       customer_subscription_id: customer_subscription_id,
  //       weekend_saturday: l1,
  //       weekend_sunday: l2,
  //       from_date: fromDate,
  //       todate: toDate,
  //       meal_type: meal_type,
  //       customer_id1: customer_id1
  //  }
  //     let promise = new Promise((resolve, reject) => {
  //       this.http.post(`${this.rootUrl}switch_address`, data, {
  //         headers: this.headers
  //       }).map(response => {
  //         return response.json();
  //       }).subscribe((res) => {
  //         if (res.success) {
  //           this.setToken(res.token);
  //           this.storage.set('token', res.token).then(() => {
  //           }, () => {
  //           });
  //           this.loginStatus$.next(true);
  //         }
  //         resolve(res);
  //       }, () => {
  //         reject({});
  //       });
  //     });
  //     return promise;
  //   }

  orderhistory(id, token): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}subscriptionHistory`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }


  updatepersonalinfo(data): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}updatepersonalInfo`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  selectedlunchveggies(id, token, cust_sub_id, subid, custtype, lbid, lbqty, lsid, lsqty, mealtype, lunchorid, dinnerorid): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: token,
      subscription_id: subid,
      customer_id: id,
      customer_subscription_id: cust_sub_id,
      user_type: custtype,
      // is_guest_meal: "1",
      meal_type: mealtype,
      dinner_order_id: dinnerorid,
      lunch_order_id: lunchorid,
      data: {
        submeal_type: [{
          id: lbid,
          qty: lbqty
        },
        {
          id: lsid,
          qty: lsqty
        }
        ]
      }
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}finalorder`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  selecteddatetime(tokendata, customer_id, fromDate, toDate, mealType) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: tokendata,
      customer_id: customer_id,
      startdate: fromDate,
      enddate: toDate,
      mealtype: mealType
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}selecteddatetime`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  selectedDinnerveggies(id, token, cust_sub_id, subid, custtype, dbid, dbqty, dsid, dsqty, mealtype, lunchorid, dinnerorid): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: token,
      subscription_id: subid,
      customer_id: id,
      customer_subscription_id: cust_sub_id,
      user_type: custtype,
      // is_guest_meal: "1",
      dinner_order_id: dinnerorid,
      lunch_order_id: lunchorid,
      meal_type: mealtype,
      data: {
        submeal_type1: [{
          id: dbid,
          qty: dbqty
        },
        {
          id: dsid,
          qty: dsqty
        }
        ]
      }
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}finalorder`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  selectedveggies(id, token, cust_sub_id, subid, custtype, lbid, lbqty, lsid, lsqty, dbid, dbqty, dsid, dsqty, mealtype, lunchorid, dinnerorid, cancelmealtype): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    if(cancelmealtype =='lunch'){
      var datas = {
        token: token,
        subscription_id: subid,
        customer_id: id,
        customer_subscription_id: cust_sub_id,
        user_type: custtype,
        dinner_order_id: dinnerorid,
        lunch_order_id: lunchorid,
        meal_type: mealtype,
        data: {
          submeal_type1: [{
            id: dbid,
            qty: dbqty
          },
          {
            id: dsid,
            qty: dsqty
          }
          ]
        }
      }
      let promise = new Promise((resolve, reject) => {
        this.http.post(`${this.rootUrl}finalorder`, datas, options).map(response => {
          return response.json();
        }).subscribe(success => {
          if (success.token != '') {
            this.setToken(success.token);
            this.userData = success.customer;
            this.storage.set('token', success.token).then(() => {
            });
            this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
            });
            this.loginStatus$.next(true);
          }
          resolve(success);
        }, () => {
          reject({});
        });
      });
      return promise;
    }
    else if(cancelmealtype =='dinner'){
      var datass = {
        token: token,
        subscription_id: subid,
        customer_id: id,
        customer_subscription_id: cust_sub_id,
        user_type: custtype,
        dinner_order_id: dinnerorid,
        lunch_order_id: lunchorid,
        meal_type: mealtype,
        data: {
          submeal_type: [{
            id: lbid,
            qty: lbqty
          },
          {
            id: lsid,
            qty: lsqty
          }
          ]
        }
      }
      let promise = new Promise((resolve, reject) => {
        this.http.post(`${this.rootUrl}finalorder`, datass, options).map(response => {
          return response.json();
        }).subscribe(success => {
          if (success.token != '') {
            this.setToken(success.token);
            this.userData = success.customer;
            this.storage.set('token', success.token).then(() => {
            });
            this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
            });
            this.loginStatus$.next(true);
          }
          resolve(success);
        }, () => {
          reject({});
        });
      });
      return promise;
    }
    else{
      var data = {
        token: token,
        subscription_id: subid,
        customer_id: id,
        customer_subscription_id: cust_sub_id,
        user_type: custtype,
        // is_guest_meal: "1",
        dinner_order_id: dinnerorid,
        lunch_order_id: lunchorid,
        meal_type: mealtype,
        data: {
          submeal_type: [{
            id: lbid,
            qty: lbqty
          },
          {
            id: lsid,
            qty: lsqty
          }
          ],
          submeal_type1: [{
            id: dbid,
            qty: dbqty
          },
          {
            id: dsid,
            qty: dsqty
          }
          ]
        }
      }

      let promise = new Promise((resolve, reject) => {
        this.http.post(`${this.rootUrl}finalorder`, data, options).map(response => {
          return response.json();
        }).subscribe(success => {
          if (success.token != '') {
            this.setToken(success.token);
            this.userData = success.customer;
            this.storage.set('token', success.token).then(() => {
            });
            this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
            });
            this.loginStatus$.next(true);
          }
          resolve(success);
        }, () => {
          reject({});
        });
      });
      return promise;

    }
    
    
  }
  switch_time(tokendata, customer_id, ChooseTime1, toDate1, fromDate1, meal_type, customer_subscription_id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: tokendata,
      customer_id: customer_id,
      delivery_timing: ChooseTime1,
      todate: toDate1,
      from_date: fromDate1,
      meal_type: meal_type,
      customer_subscription_id: customer_subscription_id
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}switch_time`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  guestMealHistory(custToken, custid, history) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      token: custToken,
      customer_id: custid,
      history: history
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}guestMealHistory`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  getaContent(page_name): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      page_name: page_name
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getaContent`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
  UploadFile(customerid, custtoken, base64Image): any {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      token: custtoken,
      customer_id: customerid,
      image: base64Image
    };

    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}profileimage`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success == 'Successfully_Uploaded') {

        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  renewsubscription(data): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getsubscriptionPlan`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }
  referandearn(referCode, reference_id, tokendata) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      refer_code: referCode,
      reference_id: reference_id,
      token: tokendata,
      subscription_id: localStorage.getItem('subscription_id'),

    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}referandearn`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  referexistornot(tokendata, referCode) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      refer_code: referCode,
      token: tokendata

    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}referexistornot`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise;
  }


  showprofession(): any {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}professionlisting`).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }


  notification(id,token): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}notificationdata`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }
  notificationdata_check(id)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id:id
   }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}notificationdata_check`, data, options).map(response => {
        // headers : headers
        return response.json();
      }).subscribe(success => {
        if (success.token != '') {
          this.setToken(success.token);
          this.userData = success.customer;
          this.storage.set('token', success.token).then(() => {
          });
          this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
          });
          this.loginStatus$.next(true);
        }
        resolve(success);
      }, () => {
        reject({});
      });
    });
    return promise; 
   }

   mealhistory_check(id,token,custsubid): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token,
      customer_subscription_id:custsubid
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}mealhistory_check`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }

  getcurrentpaln(id,token,custsubid): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token,
      customer_subscription_id:custsubid
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}getcurrentpaln`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }

  payementfail(id,type,token,payment_id,amount): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      type:type,
      token: token,
      customer_subscription_id:0,
      amount:amount,
      payment_status:'success',
      payment_id:payment_id
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}payementfail`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }
  checkpayementstatus(id,type,token): any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {
      customer_id: id,
      token: token,
      type:type
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}checkpayementstatus`, data, options).map(response => {
        return response.json();
      }).subscribe(success => {
        if (success.token != '')
          this.setToken(success.token);
        this.userData = success.customer;
        this.storage.set('token', success.token).then(() => {
        });
        this.storage.set('userData', JSON.stringify(success.customer)).then(() => {
        });
        this.loginStatus$.next(true);
        resolve(success);
      });
    });
    return promise;
  }

  checkIfapifailed(lunchPreference,dinnerPreference, cgst, igst, renew,reference_id) {
    var tokendata = localStorage.getItem('token');
    var customer_id = localStorage.getItem('id');
    var subscription_id = localStorage.getItem('subscription_id');
    var payment_id = localStorage.getItem('payment_id');
    var customer_subscription_id = localStorage.getItem('customer_subscription_id');
    var Total = localStorage.getItem('Total');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var weekend_lunch_saturday;
    var weekend_lunch_sunday;
    var weekend_dinner_saturday;
    var weekend_dinner_sunday;
    var dinnertime;
    var lunchtime;
    var deldinnertime;
    var dellunchtime;
    if (localStorage.getItem('l1')) {
      weekend_lunch_saturday = localStorage.getItem('l1')
    } else {
      weekend_lunch_saturday = '0'
    }
    if (localStorage.getItem('l2')) {
      weekend_lunch_sunday = localStorage.getItem('l2')
    } else {
      weekend_lunch_sunday = '0'
    }
    if (localStorage.getItem('d1')) {
      weekend_dinner_saturday = localStorage.getItem('d1')
    } else {
      weekend_dinner_saturday = '0'
    }
    if (localStorage.getItem('d2')) {
      weekend_dinner_sunday = localStorage.getItem('d2')
    } else {
      weekend_dinner_sunday = '0'
    }
    if(localStorage.getItem('dinner1')==''){
      dinnertime = "0";
    }
    else{
      dinnertime =localStorage.getItem('dinner1');
    }

    if(localStorage.getItem('lunch1')==''){
      lunchtime = "0";
    }
    else{
      lunchtime =localStorage.getItem('lunch1');
    }

    if(localStorage.getItem('lunch_add')==''){
      dellunchtime = "0";
    }
    else{
      dellunchtime =localStorage.getItem('lunch_add');
    }
    if(localStorage.getItem('dinner_add')==''){
      deldinnertime = "0";
    }
    else{
      deldinnertime =localStorage.getItem('dinner_add');
    }
    
      
    var data = {
      token: tokendata,
      customer_id: customer_id,
      reference_id: reference_id,
      subscription_id: subscription_id,
      start_date: localStorage.getItem('StartDate'),
      end_date: localStorage.getItem('endDate'),
      delivery_lunch_timing: lunchtime,
      delivery_dinner_timing: dinnertime,
      delivery_lunch_address: dellunchtime,
      delivery_dinner_address: deldinnertime,
      weekend_lunch_saturday: weekend_lunch_saturday,
      weekend_lunch_sunday: weekend_lunch_sunday,
      weekend_dinner_saturday: weekend_dinner_saturday,
      weekend_dinner_sunday: weekend_dinner_sunday,
      meal_type: localStorage.getItem('mealId'),
      payment_id: payment_id,
      amount: Total,
      payment_status: "success",
      lunch_meal_menu: localStorage.getItem('lunch_meal_menu'),
      dinner_meal_menu: localStorage.getItem('dinner_meal_menu'),
      subscription_period: localStorage.getItem('mealdays'),
      cancel_meal_count: localStorage.getItem('cancel_count'),
      monthly_cost: localStorage.getItem('price'),
      extra_roti: localStorage.getItem('extra_price'),
      extra_rice: '0',
      CGST_amount: cgst,
      IGST_amount: igst,
      renew: renew,
      lunchPreference: lunchPreference,
      dinnerPreference: dinnerPreference
    }
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}checkIfapifailed`, data, options).map(response => {
        return response.json();
      }).subscribe((res) => {
        if (res.success) {
          this.setToken(res.token);
          this.storage.set('token', res.token).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(res);
      }, () => {
        reject({});
      });
    });
    return promise;
  }
}
