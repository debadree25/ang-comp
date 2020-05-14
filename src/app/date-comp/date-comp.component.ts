import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-date-comp',
  templateUrl: './date-comp.component.html',
  styleUrls: ['./date-comp.component.css']
})
export class DateCompComponent implements OnInit {
  showLabel: boolean;
  label: string;
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
    if (!this.value || this.value === '') {
      return;
    }
    const dt = new Date(this.value);
    this.value = this.value.substr(0, 10);
    this.label = this.formatLabel(this.value);
  }

  formatLabel(val: string) {
    const d = new Date(val);
    return this.formatNumber(d.getMonth() + 1) + '/' + this.formatNumber(d.getDate()) + '/' + d.getFullYear();
  }
  formatNumber(num): string {
    if (num >= 10) {
      return '' + num;
    }
    return 0 + '' + num;
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
    console.log(this.value);
    this.label = this.formatLabel(this.value);
    this.showLabel = true;
    this.onComplete.emit(this.label);
  }
}
