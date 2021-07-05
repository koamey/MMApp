import {Injectable} from '@angular/core';
import { APIService } from "./api_service";

/**
 * Service to init device to receive push notifications
 */
@Injectable()
export class PushService {

  constructor(
    private apiService: APIService
  ) {
  }

  init(id) {
    let notificationOpenedCallback = (jsonData) => {
    };
    if (window['plugins'] && window['plugins'].OneSignal) {
      window['plugins'].OneSignal.startInit(id)
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
      let me = this;
      window['plugins'].OneSignal.getIds(function (ids) {
        me.apiService.savePushToken(ids.userId);
      });
    }
  }

}
