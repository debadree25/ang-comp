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
  hh;
  mm;
  timing = "AM";
  focusableElement: ElementRef;
  constructor() {
    this.showLabel = true;
  }

  @ViewChild('focusableElement', { static: false }) set content(content: ElementRef) {
    if (content) {
      this.focusableElement = content;
    }
  }
  ngOnInit() {
  }

  fliptime() {
    this.timing = (this.timing === 'AM') ? 'PM' : 'AM';
  }

  checkEvent(event) {
    console.log(event);
  }
  hideLabel() {
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
    this.showLabel = true;
    this.value = ((this.hh >= 10) ? '' + this.hh : '0' + this.hh) + ' : ' + ((this.mm >= 10) ? '' + this.mm : '0' + this.mm)
      + ' ' + this.timing;
    this.onComplete.emit(this.value);
  }
}
