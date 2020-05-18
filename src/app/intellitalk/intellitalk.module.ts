import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingCalendarComponent } from './meeting-calendar/meeting-calendar.component';
import { RouterModule } from '@angular/router';
import { intellitalkRoutes } from './intellitalk.routes';
import { IntellitalkComponent } from './intellitalk.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailableResponsesComponent } from './available-responses/available-responses.component';



@NgModule({
  declarations: [MeetingCalendarComponent, IntellitalkComponent, AvailableResponsesComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(intellitalkRoutes)
  ]
})
export class IntellitalkModule { }
