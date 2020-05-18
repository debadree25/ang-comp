import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MeetingAvailabilityResponse } from '../models/MeetingAvailabilityResponse';

@Component({
  selector: 'app-available-responses',
  templateUrl: './available-responses.component.html',
  styleUrls: ['./available-responses.component.css']
})
export class AvailableResponsesComponent implements OnInit {
  tab = 'meet';
  attendees: Attendee[];
earliestFetchedResponseTime: string;
classMap = {
  RequestedReschedule: 'badge-warning',
  Rejected: 'badge-danger',
  Accepted: 'badge-primary'
};

messageMap = {
  RequestedReschedule: 'has requested to reschedule the meeting',
  Rejected: 'has rejected the meeting',
  Accepted: 'has accepted the meeting'
};

responseTextMap = {
  RequestedReschedule: 'Req. Reschedule',
  Rejected: 'Rejected',
  Accepted: 'Accepted'
};

responses: MeetingAvailabilityResponse[];
  constructor(private rest: RestService) {
    this.attendees = [];
    // this.attendees = [
    //   {
    //     reqType: 'change',
    //     name: 'Debadree Chatterjee',
    //     requestMsg: 'has requested to reschedule the meenting,',
    //     meetTopic: 'Diet Review',
    //     timeChange:
    //       'from current 9:00 PM, 20th May 2020 to 10:30 PM, 20th May 2020',
    //     date: '18 May 2020, 8:00 PM',
    //     pop_on: false,
    //   },
    //   {
    //     reqType: 'cancel',
    //     name: 'Krishna Bose',
    //     requestMsg: 'has rejected the meeting request on',
    //     meetTopic: 'Blood report review',
    //     timeChange: 'on 9:00 PM, 20th May 2020',
    //     date: '19 May 2020, 8:00 PM',
    //     pop_on: false,
    //   },
    //   {
    //     reqType: 'accept',
    //     name: 'Albert Jones',
    //     requestMsg: 'has requested to reschedule the meenting,',
    //     meetTopic: 'Neural review',
    //     timeChange:
    //       'from current 9:00 PM, 20th May 2020 to 10:30 PM, 20th May 2020',
    //     date: '20 May 2020, 8:00 PM',
    //     pop_on: false,
    //   },
    // ];
    console.log('constructor');
  }

  ngOnInit() {
    this.earliestFetchedResponseTime = new Date().toUTCString();
    this.fetchData();
    console.log('available response component onInit');
  }

  async fetchData() {
    this.getResponses();
    // this.getUnreadCount();
  }

  async getUnreadCount() {
    const res2 = await this.rest.getUnreadResponseCount();
    console.log(res2);
  }

  async getResponses(lastTime?: string) {
    if (!lastTime) {
      lastTime = this.earliestFetchedResponseTime;
    }
    const res = await this.rest.getAvailabilityResponse({EarlierThanTime: lastTime, NumOfRecords: 10});
    res.forEach(element => {
      element.Meeting.NonOrganizers.forEach(ele => {
        ele.ProfilePic = this.rest.imageUrl + ele.ProfilePic;
        ele.class = this.classMap[ele.ResponseType];
        ele.ResponseText = this.responseTextMap[ele.ResponseType];
        if (!ele.ResponseType) {
          ele.class = 'badge-warning pending';
          ele.ResponseText = 'Not responded';
        }

        ele.RespondedOnFormatted = this.getFormattedDate(ele.RespondedOn);
      });

      this.earliestFetchedResponseTime = element.RespondedOn;
      element.Meeting.Organizer.ProfilePic = this.rest.imageUrl + element.Meeting.Organizer.ProfilePic;
      element.RespondedByProfilePic = this.rest.imageUrl + element.RespondedByProfilePic;
      element.extras = { class: this.classMap[element.ResponseType] };
      element.extras.message = this.messageMap[element.ResponseType];

      if (element.SuggestedTime) {
        element.SuggestedTimeFormatted =
        this.getFormattedDate(element.SuggestedTime)
        + ', ' + this.getFormattedTime(element.SuggestedTime);
      }
      element.RespondedOnFormatted =
      this.getFormattedDate(element.RespondedOn)
      + ', ' + this.getFormattedTime(element.RespondedOn);
      element.Meeting.DateFormatted =
      this.getFormattedDate(element.Meeting.StartTime)
      + ', ' + this.getFormattedTime(element.Meeting.StartTime)
      + ' - ' + this.getFormattedTime(element.Meeting.EndTime);
    });

    this.responses = res;
    console.log(res);
  }

  async showEarlierResponses() {
    const res = await this.rest.getAvailabilityResponse({EarlierThanTime: this.earliestFetchedResponseTime, NumOfRecords: 3});
    console.log(res);
  }

  getFormattedTime(d: string): string {
    const date = new Date(d);
    return this.padNumber(date.getHours() % 12) + ':' + this.padNumber(date.getMinutes()) + ' ' + ((date.getHours() / 12) ? 'PM' : 'AM');
  }

  padNumber(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return n + '';
  }
  getFormattedDate(d: string) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(d);
    return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
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
