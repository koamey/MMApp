import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Pro } from '@ionic/pro';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { Loading } from '../pages/loading/loading';
import { Welcome } from '../pages/welcome/welcome';


import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { APIService } from "../services/api_service";
import { CartService } from "../services/cart_service";
import { PushService } from "../services/push_service";
import { UtilService } from "../services/util_service";
import { OrderHistoryService } from "../services/order_history_service";

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EcurrencyPipeModule } from '../pipes/ecurrency.module';

import { Geolocation } from '@ionic-native/geolocation';

import { OnboardingPageModule } from '../pages/onboarding/onboarding.module';
import { OnboardingPage } from '../pages/onboarding/onboarding';
//import { Facebook } from '@ionic-native/facebook';
import { DatePipe } from '@angular/common';
//import {CalendarModule} from 'ionic3-calendar';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { NetworkProvider } from '../providers/network/network';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { AboutusPageModule } from '../pages/aboutus/aboutus.module';
import { TermsAndPrivacyPage } from '../pages/terms-and-privacy/terms-and-privacy';
import { TermsAndPrivacyPageModule } from '../pages/terms-and-privacy/terms-and-privacy.module';
import {AccountPage} from '../pages/account/account';
import {AccountPageModule} from '../pages/account/account.module';
import {LoginPage} from '../pages/personal/login/login';
import {LoginPageModule} from '../pages/personal/login/login.module';
import {OrderhistoryPage} from '../pages/orderhistory/orderhistory';
import {OrderhistoryPageModule} from '../pages/orderhistory/orderhistory.module';
import {PaymentfailedPage} from '../pages/paymentfailed/paymentfailed';
import {PaymentfailedPageModule} from '../pages/paymentfailed/paymentfailed.module';
import { LocalNotifications } from '@ionic-native/local-notifications';
// Pro.init('5d523476', {
//   appVersion: '1.2.1'
// });
import { Camera } from '@ionic-native/camera';
import { DirectivesPhonenumberDirective } from '../directives/directives-phonenumber/directives-phonenumber';
import { DatePickerModule } from 'ion-datepicker';

import { SocialSharing } from '@ionic-native/social-sharing';
import { MyNotificationProvider } from '../providers/my-notification/my-notification';
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(
    injector: Injector,
    private platform: Platform
  ) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
    }
  }

  handleError(err: any): void {
    if (this.platform.is('browser')) {
      return;
    }
    Pro.monitoring.handleNewError(err);
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Welcome,
    Loading,
    DirectivesPhonenumberDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    EcurrencyPipeModule,
    OnboardingPageModule,
    DashboardPageModule,
    AboutusPageModule,
    TermsAndPrivacyPageModule,
    AccountPageModule,
    LoginPageModule,
    OrderhistoryPageModule,
    PaymentfailedPageModule,
    DatePickerModule
    //CalendarModule 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Welcome,
    OnboardingPage,
    Loading,
    DashboardPage,
    AboutusPage,
    TermsAndPrivacyPage,
    AccountPage,
    LoginPage,
    OrderhistoryPage,
    PaymentfailedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    APIService,
    CartService,
    PushService,
    UtilService,
    OrderHistoryService,
    //Facebook,
    DatePipe,
    UniqueDeviceID,
    Uid,
    AndroidPermissions,
    Geolocation,
    Camera,
    SocialSharing,
    //Network
    //Device,
    //AndroidPermissions,
    // Comment these lines to disable ionic monitoring
    // IonicErrorHandler,
    // {provide: ErrorHandler, useClass: MyErrorHandler}
    // Uncomment this line to disable ionic monitoring
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NetworkProvider,
    LocalNotifications,
    MyNotificationProvider
  ]
})
export class AppModule {
 
}
