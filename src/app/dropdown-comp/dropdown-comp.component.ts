import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-comp',
  templateUrl: './dropdown-comp.component.html',
  styleUrls: ['./dropdown-comp.component.css']
})
export class DropdownCompComponent implements OnInit {
  showLabel: boolean;
  @Input() options: {label: string, value: any}[];
  @Input() selectedIndex: number;
  @Input() selected: {label: string, value: any};
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
    if (this.selectedIndex) {
      if (this.selectedIndex < 0 && this.selectedIndex >= this.options.length) {
        this.selectedIndex = 0;
      }
    } else {
      this.selectedIndex = 0;
    }
    if (this.selected) {
      let count = 0;
      this.options.forEach(element => {
        if (element.value === this.selected.value) {
          this.selectedIndex = count;
        }
        count++;
      });
    }
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
    this.onComplete.emit(this.options[this.selectedIndex]);
  }
}

