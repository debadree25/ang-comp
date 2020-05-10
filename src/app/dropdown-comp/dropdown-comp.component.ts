import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-comp',
  templateUrl: './dropdown-comp.component.html',
  styleUrls: ['./dropdown-comp.component.css']
})
export class DropdownCompComponent implements OnInit {
  showLabel: boolean;
  valueMap;
  value: number;
  @Input() options: {label: string, value: number}[];
  @Input() selectedIndex: number;
  @Input() selected: {label: string, value: number};
  @Output() onComplete = new EventEmitter();
  focusableElement: ElementRef;
  @ViewChild('focusableElement', { static: false }) set content(content: ElementRef) {
    if (content) {
      this.focusableElement = content;
    }
  }
  constructor() {
    this.showLabel = true;
  }

  ngOnInit() {
    this.valueMap = {};
    this.options.forEach(element => {
      this.valueMap[element.value] = element.label;
    });

    if (this.selectedIndex) {
      if (this.selectedIndex >= 0 && this.selectedIndex < this.options.length) {
        this.selected = this.options[this.selectedIndex];
      }
    }
    if (!this.selected) {
      this.selected = this.options[0];
    }
    this.value = this.selected.value;
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

