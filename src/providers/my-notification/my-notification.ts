import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import {Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform} from 'ionic-angular';


/*
  Generated class for the MyNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyNotificationProvider {
data;
rootUrl;
userData;
headers;
token;
loginStatus$;
custid;
  constructor(public http: HttpClient,
    private storage: Storage,
    private localNotifications: LocalNotifications,
    public platform: Platform
    //private backgroundMode: BackgroundMode
    ) {
    console.log('Hello MyNotificationProvider Provider');
    this.http = http;
    this.data = null;
    // this.load();
    //this.backgroundMode.enable();
  }

//   load() {
//     this.localNotifications.schedule({
//       id: 6,
//       title: "Your food is delivered",
//       text: 'Please let us know how your meal was.',
//       foreground: true
//     });
//     console.log('Error in Friends Provider!');
//     this.platform.pause.subscribe(() => {
//       this.localNotifications.schedule({
//         id: 6,
//         title: "Your food is delivered",
//         text: 'Please let us know how your meal was.',
//         foreground: true
//       });
//   });
// //Subscribe on pause i.e. background or unlock phone
//   this.platform.resume.subscribe(() => {
//     this.localNotifications.schedule({
//       id: 6,
//       title: "Your food is delivered",
//       text: 'Please let us know how your meal was.',
//       foreground: true
//     });
// });
//     if (this.data) {
//       // already loaded data
//       return Promise.resolve(this.data);
//     }
//     this.custid = localStorage.getItem('id');
//     console.log(this.custid);
//     // don't have the data yet
//     return new Promise(resolve => {
//         var headers = new Headers();
//         let options = new RequestOptions({ headers: headers });
//         var data = {
//           customer_id: this.custid
//         }
//           headers.append('Content-Type', 'application/json');
//          // headers.append('Content-Type', 'application/x-www-form-urlencoded');
//           this.http.post(
//               'http://103.79.100.31:9007/api/notificationdata',
//               {headers: headers,customer_id:this.custid}
//           ).subscribe((res) => {
//             this.data = res;
//             console.log('Friends Provider was a success!');
//             console.log(JSON.stringify(res));
//             resolve(this.data);
//           },
//       (err)=>{
//         console.log('Error in Friends Provider!');
//       },
//       ()=>{
//           console.log('Friends Provider network call has ended!');
//       });
//     });
//   }

}