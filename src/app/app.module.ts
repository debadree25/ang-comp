import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextCompComponent } from './text-comp/text-comp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextareaCompComponent } from './textarea-comp/textarea-comp.component';
import { DropdownCompComponent } from './dropdown-comp/dropdown-comp.component';
import { DateCompComponent } from './date-comp/date-comp.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    TextCompComponent,
    TextareaCompComponent,
    DropdownCompComponent,
    DateCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
