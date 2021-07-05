import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { APIService } from '../services/api_service';
import { UtilService } from '../services/util_service';
import { CartService } from '../services/cart_service';
import { TranslateService } from '@ngx-translate/core';
import { App } from 'ionic-angular';
import { NetworkProvider } from '../providers/network/network';
import { MyNotificationProvider } from '../providers/my-notification/my-notification';
import { RequestOptions } from '@angular/http';
// import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('myNav') nav;
    //rootPage: any = DashboardPage;
    public counter = 0;
    loggedIn = false;
    data
    custid
    token
    dateTime
    today
    dateTime1
    deviceid

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private storage: Storage,
        private cart: CartService,
        private api: APIService,
        private translate: TranslateService,
        private util: UtilService,
        public alertCtrl: AlertController,
        public app: App,
        public events: Events,
        public networkProvider: NetworkProvider,
        // private localNotifications: LocalNotifications,
        public myNotificationprovider: MyNotificationProvider,
        public toastCtrl: ToastController
    ) {
        this.util.showLoader();
        this.initializeApp();
        this.util.hideLoader();
    }
    initializeApp() {
    
    
    
        //Subscribe on pause i.e. background or lock phone
        this.platform.pause.subscribe(() => {
            // this.load();
        });
    //Subscribe on pause i.e. background or unlock phone
        this.platform.resume.subscribe(() => {
            // this.load();
    });
        this.translate.setDefaultLang('en');
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.networkProvider.initializeNetworkEvents();

            // Offline event
            // this.events.subscribe('network:offline', () => {
            //     alert('network:offline ==> ' + this.network.type);
            // });

            // // Online event
            // this.events.subscribe('network:online', () => {
            //     alert('network:online ==> ' + this.network.type);
            // });
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.platform.is('android')) {
                //this.statusBar.backgroundColorByHexString('#fff');
            }
            this.storage.ready().then(() => {
                this.cart.init();
                this.dateTime1= new Date().toISOString();
                this.dateTime = localStorage.getItem('logintimestamp');
                console.log(this.dateTime);
                if(this.dateTime!=null)
                {
                    let difference = new Date(this.dateTime1).getTime() - new Date(this.dateTime).getTime();
                    console.log(difference);
                    let differenceInminute = difference/60000;//3600000;//
                    console.log(differenceInminute);
                    if(differenceInminute >=15)
                    {
                        this.deviceid = localStorage.getItem('deviceid',);
                        window.localStorage.clear();
                        console.log('distroyuuuuuuuuu');
                        localStorage.setItem('areacode', null);
                        localStorage.setItem('pincode', null);   
                        localStorage.setItem('areaname', null);      
                        localStorage.setItem('skipdisable', '1');
                        localStorage.setItem('onboardshows', '1'); 
                        localStorage.setItem('deviceid',this.deviceid); 
                        localStorage.setItem('module','1'); 
                        this.nav.setRoot('LoginPage');
                    }
                }
                this.api.getLoginStatus().subscribe(() => {
                    this.loggedIn = true;
                });
                this.storage.get('welcomeShown').then((v) => {
                    if (v) {
                        const settings = this.api.getSettings();
                        if (settings && settings.signup_required == 1) {
                            this.loggedIn = true;
                        }
                        this.api.init().then(() => {
                            this.loggedIn = this.api.isLoggedIn();
                            if (localStorage.getItem('onboardshows') == '1') {
                                if (localStorage.getItem('areacode')) {
                                    if (localStorage.getItem('module')) {
                                        if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                                            if (localStorage.getItem('isLogin') != null && localStorage.getItem('ShowOTP') == "1") {
                                                localStorage.removeItem('ShowOTP');
                                                localStorage.removeItem('custstatus')
                                                localStorage.removeItem('isLogin')
                                                this.nav.setRoot('LoginPage');
                                            }
                                            else {
                                                if (localStorage.getItem('customer_payement_status') == 'success') {
                                                    if (localStorage.getItem('ShowOTP') == '1') {
                                                        this.nav.setRoot('LoginotpPage');
                                                    }
                                                    else {
                                                        this.nav.setRoot('MenuPage');
                                                    }

                                                }
                                                else {
                                                    if (localStorage.getItem('ShowOTP') == '1') {
                                                        this.nav.setRoot('LoginotpPage');
                                                    } else {
                                                        if (localStorage.getItem('ShowAbout') == '1') {
                                                            this.nav.setRoot('AboutyouPage');
                                                        } else {
                                                            if (localStorage.getItem('subscription_id') != null) {
                                                                if (localStorage.getItem('mealType') != null) {
                                                                    if (localStorage.getItem('selectprefrence') == '1') {
                                                                        //if (localStorage.getItem('statdatescreen') != null) {
                                                                            if (localStorage.getItem('selectDelTime') == '1') {
                                                                                if (localStorage.getItem('selectWhereAddress') == '1') {
                                                                                    if (localStorage.getItem('selectDelAdd') == '1') {
                                                                                        if (localStorage.getItem('payment_id') != '0') {
                                                                                            this.nav.setRoot('MenuPage');
                                                                                        } else {
                                                                                            this.nav.setRoot('CheckoutPage');
                                                                                        }
                                                                                    } else {
                                                                                        this.nav.setRoot('ChoosedeliveryaddressPage');
                                                                                    }
                                                                                } else {
                                                                                    this.nav.setRoot('WhereToDeliverePage');
                                                                                }
                                                                            } else {
                                                                                this.nav.setRoot('ChoosedeliverytimePage');
                                                                            }
                                                                        // } else {
                                                                        //     this.nav.setRoot('StartdatePage');
                                                                        // }
                                                                    } else {
                                                                        this.nav.setRoot('ChoosePreferencePage');
                                                                    }
                                                                } else {
                                                                    this.nav.setRoot('MealtypePage');
                                                                }
                                                            } else {
                                                                this.nav.setRoot('ChooseplanPage');
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            this.nav.setRoot('LoginPage');
                                        }
                                    } else {
                                        this.nav.setRoot('ModulePage');
                                    }
                                } else {
                                    this.nav.setRoot('SelectAreaPage');
                                }
                            } else {
                                this.nav.setRoot('OnboardingPage');
                            }
                            this.splashScreen.hide();
                        });
                    }
                    else {
                        this.api.init().then(() => {
                            this.loggedIn = this.api.isLoggedIn();
                            if (localStorage.getItem('onboardshows') == '1') {
                                if (localStorage.getItem('areacode')) {
                                    if (localStorage.getItem('module')) {
                                        if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                                            if (localStorage.getItem('customer_payement_status') == 'success') {
                                                this.nav.setRoot('MenuPage');
                                            } else {
                                                if (localStorage.getItem('ShowOTP') == '1') {
                                                    this.nav.setRoot('LoginotpPage');
                                                } else {
                                                    if (localStorage.getItem('ShowAbout') == '1') {
                                                        this.nav.setRoot('AboutyouPage');
                                                    } else {
                                                        if (localStorage.getItem('subscription_id') != null) {
                                                            if (localStorage.getItem('mealType') != null) {
                                                                if (localStorage.getItem('selectprefrence') == '1') {
                                                                    //if (localStorage.getItem('statdatescreen') != null) {
                                                                        if (localStorage.getItem('selectDelTime') == '1') {
                                                                            if (localStorage.getItem('selectWhereAddress') == '1') {
                                                                                if (localStorage.getItem('selectDelAdd') == '1') {
                                                                                    if (localStorage.getItem('payment_id') != '0') {
                                                                                        this.nav.setRoot('MenuPage');
                                                                                    } else {
                                                                                        this.nav.setRoot('CheckoutPage');
                                                                                    }
                                                                                } else {
                                                                                    this.nav.setRoot('ChoosedeliveryaddressPage');
                                                                                }
                                                                            } else {
                                                                                this.nav.setRoot('WhereToDeliverePage');
                                                                            }
                                                                        } else {
                                                                            this.nav.setRoot('ChoosedeliverytimePage');
                                                                        }
                                                                    // } else {
                                                                    //     this.nav.setRoot('StartdatePage');
                                                                    // }
                                                                } else {
                                                                    this.nav.setRoot('ChoosePreferencePage');
                                                                }
                                                            } else {
                                                                this.nav.setRoot('MealtypePage');
                                                            }
                                                        } else {
                                                            this.nav.setRoot('ChooseplanPage');
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            this.nav.setRoot('LoginPage');
                                        }
                                    } else {
                                        this.nav.setRoot('ModulePage');
                                    }
                                } else {
                                    this.nav.setRoot('SelectAreaPage');
                                }
                            } else {
                                this.nav.setRoot('OnboardingPage');
                            }
                            this.splashScreen.hide();
                        }, () => {
                            window['location'].reload();
                        });
                    }
                }, () => {
                    this.api.init().then(() => {
                        this.loggedIn = this.api.isLoggedIn();

                        if (localStorage.getItem('onboardshows') == '1') {
                            if (localStorage.getItem('areacode')) {
                                if (localStorage.getItem('module')) {
                                    if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                                        if (localStorage.getItem('customer_payement_status') == 'success') {
                                            this.nav.setRoot('MenuPage');
                                        } else {
                                            if (localStorage.getItem('ShowOTP') == '1') {
                                                this.nav.setRoot('LoginotpPage');
                                            } else {
                                                if (localStorage.getItem('ShowAbout') == '1') {
                                                    this.nav.setRoot('AboutyouPage');
                                                } else {
                                                    if (localStorage.getItem('subscription_id') != null) {
                                                        if (localStorage.getItem('mealType') != null) {
                                                            if (localStorage.getItem('selectprefrence') == '1') {
                                                               // if (localStorage.getItem('statdatescreen') != null) {
                                                                    if (localStorage.getItem('selectDelTime') == '1') {
                                                                        if (localStorage.getItem('selectWhereAddress') == '1') {
                                                                            if (localStorage.getItem('selectDelAdd') == '1') {
                                                                                if (localStorage.getItem('payment_id') != '0') {
                                                                                    this.nav.setRoot('MenuPage');
                                                                                } else {
                                                                                    this.nav.setRoot('CheckoutPage');
                                                                                }
                                                                            } else {
                                                                                this.nav.setRoot('ChoosedeliveryaddressPage');
                                                                            }
                                                                        } else {
                                                                            this.nav.setRoot('WhereToDeliverePage');
                                                                        }
                                                                    } else {
                                                                        this.nav.setRoot('ChoosedeliverytimePage');
                                                                    }
                                                                // } else {
                                                                //     this.nav.setRoot('StartdatePage');
                                                                // }
                                                            } else {
                                                                this.nav.setRoot('ChoosePreferencePage');
                                                            }
                                                        } else {
                                                            this.nav.setRoot('MealtypePage');
                                                        }
                                                    } else {
                                                        this.nav.setRoot('ChooseplanPage');
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        this.nav.setRoot('LoginPage');
                                    }
                                } else {
                                    this.nav.setRoot('ModulePage');
                                }
                            } else {
                                this.nav.setRoot('SelectAreaPage');
                            }
                        } else {
                            this.nav.setRoot('OnboardingPage');
                        }

                        this.splashScreen.hide();
                    }, () => {
                        window['location'].reload();
                    });
                })
            });            
        });

         
    }
    openPage() {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (localStorage.getItem('onboardshows') == '1') {
            if (localStorage.getItem('areacode')) {
                if (localStorage.getItem('module')) {
                    if (localStorage.getItem('custstatus') == "registered" || localStorage.getItem('isLogin') == 'skip' || localStorage.getItem('isLogin') == 'login') {
                        if (localStorage.getItem('subscription_id') != null) {
                            if (localStorage.getItem('mealType') != null) {

                                this.nav.setRoot('ChoosePreferencePage');
                            } else {
                                this.nav.setRoot('MealtypePage');
                            }

                        } else {
                            this.nav.setRoot('ChooseplanPage');
                        }
                    } else {
                        this.nav.setRoot('LoginPage');
                    }
                } else {
                    this.nav.setRoot('ModulePage');
                }

            } else {
                this.nav.setRoot('SelectAreaPage');
            }

        } else {
            this.nav.setRoot('OnboardingPage');
        }
    }

    openProfile() {
        this.nav.setRoot('ProfilePage');
    }

    openHistory() { }

    logout() {
        this.util.showLoader();
        this.storage.clear().then(() => {
            window['location'].reload();
        });
    }

    // load() {
    //     this.token = localStorage.getItem('token');
    //     this.custid = localStorage.getItem('id');
    //     this.localNotifications.schedule({
    //         id: 5,
    //         title: "Hello",
    //         text: 'Welcome Back.',
    //         foreground: true,
    //         trigger: { every: { hour: 19,minute:20 }, count: 1 },
    //       });
    //       this.localNotifications.schedule({
    //         id: 5,
    //         title: "Hello",
    //         text: 'Welcome Back.',
    //         foreground: true,
    //         trigger: { every: { hour: 19,minute:23 }, count: 1 },
    //       });
    //       this.localNotifications.schedule({
    //         id: 5,
    //         title: "Hello",
    //         text: 'Welcome Back.',
    //         foreground: true,
    //         trigger: { every: { hour: 19,minute:28 }, count: 1 },
    //       });
    //     if(this.custid!=null && this.custid!='null' && this.custid!='0' && this.custid!="")
    //     {
    //         console.log(this.custid);
    //         this.api.notification(this.custid,this.token).then((res) => {
    //             this.util.hideLoader();
    //             if (res.success) {
    //                 console.log(res);
    //                 if(res.data.dispatched =='dispatched')
    //                 {
    //                     this.singlenotificationformealdelivered()
    //                 }
    //                 if(res.data.delivered =='delivered')
    //                 {
    //                     this.singlenotificationformealdispatch()
    //                 }
    //             }
    //         }, (data) => {
    //         });
    //     }
   
    //   }
    //   singlenotificationformealdispatch() {
    //     this.localNotifications.schedule({
    //       id: 5,
    //       title: "Your food is on the way",
    //       text: 'Our delivery agent has left our kitchen.',
    //       foreground: true,
    //       trigger: { every: { hour: 19,minute:35 }, count: 1 },
    //     });
    //   }

    //   singlenotificationformealdelivered() {
    //     this.localNotifications.schedule({
    //       id: 6,
    //       title: "Your food is delivered",
    //       text: 'Please let us know how your meal was.',
    //       foreground: true,
    //       trigger: { every: { hour: 19,minute:40 }, count: 1 },
    //     });
    //   }
}
