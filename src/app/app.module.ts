import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TextCompComponent } from './text-comp/text-comp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextareaCompComponent } from './textarea-comp/textarea-comp.component';
import { DropdownCompComponent } from './dropdown-comp/dropdown-comp.component';
import { DateCompComponent } from './date-comp/date-comp.component';

import { TimepickerComponent } from './timepicker/timepicker.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MeetingsComponent } from './meetings/meetings.component';

import { NgbDateCustomParserFormatter } from './date-comp/custom-date-formatter';
@NgModule({
  declarations: [
    AppComponent,
    TextCompComponent,
    TextareaCompComponent,
    DropdownCompComponent,
    DateCompComponent,
    TimepickerComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule,
    TimepickerModule.forRoot(),
  ],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
