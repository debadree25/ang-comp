import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {
  showLabel: boolean;
  @Input() value: string;
  @Output() onComplete = new EventEmitter();
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
    this.onComplete.emit(this.value);
  }
}
