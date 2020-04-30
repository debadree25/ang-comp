import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-comp',
  templateUrl: './dropdown-comp.component.html',
  styleUrls: ['./dropdown-comp.component.css']
})
export class DropdownCompComponent implements OnInit {
  showLabel:boolean;
  label:string;
  focusableElement: ElementRef;
  @Input() options:string[];
  @Output() onComplete = new EventEmitter();
  constructor() {
    this.showLabel=true;
  }
  ngOnInit() {
    this.label=this.options[0];
  }
  hideLabel() {
    this.showLabel = false;
  }
  optionClick(val) {
    this.label=val;
    this.showLabel=true;
  }
  triggerParent($event?: any) {
    if (this.showLabel) {
      return;
    }
    console.log($event);
    // since we are about to go back to parent component flow, we will set label to visible
    this.showLabel = true;
    this.onComplete.emit(this.label);
    console.log(this.showLabel);
  }
}
