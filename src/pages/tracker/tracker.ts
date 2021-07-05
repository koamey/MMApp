import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'order-tracker',
  templateUrl: 'tracker.html',
})
export class Tracker {
  public tracker = {
    order: null,
    statuses: []
  };
  public curStatus = 0;

  constructor(
    private params: NavParams
  ) {
    this.tracker = params.get('tracker');

    for (let i = 0; i < this.tracker.statuses.length; i++) {
      if (this.tracker.order.order_status_id == this.tracker.statuses[i].id) {
        this.curStatus = i;
      }
    }
    
  }
}
