import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-comp',
  templateUrl: './text-comp.component.html',
  styleUrls: ['./text-comp.component.css']
})
export class TextCompComponent implements OnInit {
  showLabel: boolean;
  @Input() value: string;
  @Output() onComplete = new EventEmitter();
  focusableElement: ElementRef;
  constructor() {
    this.showLabel = true;
   }

  @ViewChild('focusableElement', {static: false}) set content(content: ElementRef) {
    if (content) { // initially setter gets called with undefined
        this.focusableElement = content;
    }
  }
  ngOnInit() {
  }

  hideLabel() {
    this.showLabel = false;
    setTimeout(() => {
      // Why do we need setTimeout?
      // because showLabel once becomes false, the hidden input will become visible
      // and that happens after this thread was completed.
      // since setTimeout uses a new thread to execute it, we already have the element availble
      if (this.focusableElement) {
        this.focusableElement.nativeElement.focus();
      }
    }, 10);
  }
  triggerParent($event?: any) {
    if (this.showLabel) {
      return;
    }
    console.log($event);
    // since we are about to go back to parent component flow, we will set label to visible
    this.showLabel = true;
    this.onComplete.emit(this.value);
  }
}
