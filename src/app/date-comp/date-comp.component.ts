import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NgbInputDatepicker, NgbDate, NgbTypeaheadConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-comp',
  templateUrl: './date-comp.component.html',
  styleUrls: ['./date-comp.component.css']
})
export class DateCompComponent implements OnInit {
  showLabel: boolean;
  label: string;
  ngbdata: NgbDate;
  focuscount: number;
  lastTriggerTime: number;
  @Input() value: string;
  @Output() onComplete = new EventEmitter();
  focusableElement: ElementRef;
  ngbReference: NgbInputDatepicker;
  constructor() {
    this.showLabel = true;
  }

  @ViewChild('focusableElement', { static: false }) set content(content: ElementRef) {
    if (content) {
      this.focusableElement = content;
    }
  }
  ngOnInit() {
    if (!this.value || this.value === '') {
      return;
    }
    const dt = new Date(this.value);
    this.value = this.value.substr(0, 10);
    this.label = this.formatLabelFromDate(dt);
    this.focuscount = 0;
    this.lastTriggerTime = 0;
  }

  formatLabelFromDate(d: Date) {
    this.ngbdata = new NgbDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
    return this.formatLabel();
  }
  formatLabel() {
    return this.formatNumber(this.ngbdata.month) + '/' + this.formatNumber(this.ngbdata.day) + '/' + this.ngbdata.year;
  }

  formatNumber(num): string {
    if (num >= 10) {
      return '' + num;
    }
    return 0 + '' + num;
  }

  hideLabel() {
    if (!this.showLabel) {
      return;
    }

    this.showLabel = false;
    setTimeout(() => {
      if (this.focusableElement) {
        this.focusableElement.nativeElement.focus();
      }
    }, 10);
  }

  triggerParent($event?: any) {
    if (this.showLabel) {
      return;
    }
    this.label = this.formatLabel();
    this.showLabel = true;
    this.onComplete.emit(this.label);
  }
  closeNgbPicker(event, ngbDatePicker) {
    if (event.target.id === 'datepickerroot') {
      return;
    }
    if (event.target.offsetParent == null || event.target.offsetParent.nodeName !== 'NGB-DATEPICKER') {
      if (this.ngbReference) {
        this.lastTriggerTime = new Date().getTime();
        this.ngbReference.close();
      }
    }
  }

  storeReference(ds: NgbInputDatepicker) {
    this.ngbReference = ds;
    const diff = new Date().getTime() - this.lastTriggerTime;
    if (diff > 200) {
      ds.open();
    } else {
      this.triggerParent();
    }
    this.lastTriggerTime = new Date().getTime();
    this.focuscount++;
  }

  doSomethingNew(ds: NgbInputDatepicker) {
    // selected just now
    ds.close();
    this.triggerParent();
  }
  doSomethingFocus(ds: NgbInputDatepicker) {
    if (ds.isOpen()) {
      return;
    }
  }

  handleInputClick(ds: NgbInputDatepicker, $event) {
    ds.open();
    $event.stopPropagation();
  }
}
