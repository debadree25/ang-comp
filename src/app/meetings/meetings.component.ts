import { Component, OnInit } from '@angular/core';

interface Attendee {
  reqType: string;
  name: string;
  requestMsg: string;
  meetTopic: string;
  timeChange: string;
  date: string;
  pop_on: boolean;
}

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  tab = 'meet';
  attendees: Attendee[];
  constructor() {
    this.attendees = [
      {
        reqType: 'change',
        name: 'Debadree Chatterjee',
        requestMsg: 'has requested to reschedule the meenting,',
        meetTopic: 'Diet Review',
        timeChange: 'from current 9:00 PM, 20th May 2020 to 10:30 PM, 20th May 2020',
        date: '18 May 2020, 8:00 PM',
        pop_on: false
      },
      {
        reqType: 'cancel',
        name: 'Krishna Bose',
        requestMsg: 'has rejected the meeting request on',
        meetTopic: 'Blood report review',
        timeChange: 'on 9:00 PM, 20th May 2020',
        date: '19 May 2020, 8:00 PM',
        pop_on: false
      },
      {
        reqType: 'accept',
        name: 'Albert Jones',
        requestMsg: 'has requested to reschedule the meenting,',
        meetTopic: 'Neural review',
        timeChange: 'from current 9:00 PM, 20th May 2020 to 10:30 PM, 20th May 2020',
        date: '20 May 2020, 8:00 PM',
        pop_on: false
      }
    ];
  }

  ngOnInit() {
  }

  changeTab() {
    this.tab = (this.tab === 'meet') ? 'avail' : 'meet';
  }
}
