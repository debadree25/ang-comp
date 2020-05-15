import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {
  showLabel: boolean;
  @Input() value: string;
  @Output() onComplete = new EventEmitter();
  hh: number;
  mm: number;
  timing = 'AM';
  focusableElement: ElementRef;
  count;
  constructor() {
    this.showLabel = true;
  }

  @ViewChild('focusableElement', { static: false }) set contentFocusable(content: ElementRef) {
    if (content) {
      this.focusableElement = content;
    }
  }
  ngOnInit() {
    this.hh = 12;
    this.mm = 0;
    this.count = 0;
    if (this.value) {
      const parts = this.value.split(' ');
      const times = parts[0].split(':');
      this.hh = parseInt(this.validateHour(parseInt(times[0], 10)), 10);
      this.mm = parseInt(this.validateMinute(parseInt(times[1], 10)), 10);

      if (parts[1].toLowerCase().indexOf('a') !== -1) {
        this.timing = 'AM';
      } else {
        this.timing = 'PM';
      }

      this.value = this.getLabel();
    }
  }

  fliptime() {
    this.timing = (this.timing === 'AM') ? 'PM' : 'AM';
  }

  hideLabel() {
    this.showLabel = false;
    setTimeout(() => {
      if (this.focusableElement) {
        this.focusableElement.nativeElement.focus();
      }
    }, 10);
  }
  changeCount(change: number) {
    this.count += change;
  }
  triggerParent() {
    setTimeout(() => {
      this.tryToComplete();
    }, 20);
  }

  tryToComplete() {
    if (this.showLabel) {
      return;
    }
    if (this.count > 0) {
      return;
    }
    this.count = 0;
    this.showLabel = true;
    this.value = this.getLabel();
    this.onComplete.emit(this.value);
  }

  getLabel() {
    return this.validateHour() + ':' + this.validateMinute() + ' ' + this.timing;
  }

  validateHour(hour?: number): string {
    if (hour) {
      this.hh = hour;
    }
    if (this.hh < 10) {
      return '0' + this.hh;
    } else if (this.hh < 13) {
      return this.hh + '';
    }
    this.hh = 12;
    return this.hh + '';
  }

  validateMinute(minute?: number): string {
    if (minute) {
      this.mm = minute;
    }
    if (this.mm < 10) {
      return '0' + this.mm;
    } else if (this.mm < 60) {
      return this.mm + '';
    }
    this.mm = 59;
    return this.mm + '';
  }
}
