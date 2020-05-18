import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-intellitalk',
  templateUrl: './intellitalk.component.html',
  styleUrls: ['./intellitalk.component.css'],
})
export class IntellitalkComponent implements OnInit {
  tab = 'meet';
  unviewedCount;
  constructor(public rest: RestService) {
  }

  ngOnInit() {
    this.getCount();
  }

  async getCount() {
    const res = await this.rest.getUnreadResponseCount();
    console.log(res);
    this.unviewedCount = res.UnviewedkMeetingAvailabilityResponseCount;
    console.log(this.unviewedCount);
  }

  changeTab() {
    this.tab = this.tab === 'meet' ? 'avail' : 'meet';
  }
}

interface Attendee {
  reqType: string;
  name: string;
  requestMsg: string;
  meetTopic: string;
  timeChange: string;
  date: string;
  pop_on: boolean;
}
