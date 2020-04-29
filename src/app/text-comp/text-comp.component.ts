import { Component, OnInit, Input, Output, ViewChild, ElementRef,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-comp',
  templateUrl: './text-comp.component.html',
  styleUrls: ['./text-comp.component.css']
})
export class TextCompComponent implements OnInit {
  showInp:boolean;
  @Input() value:string;
  @Output() emitter = new EventEmitter();
  @ViewChild('inp',{static:false}) inp: ElementRef;
  constructor() {
    this.showInp=false;
   }

  ngOnInit() {
  }
  trigger() {
    this.showInp=!this.showInp;
    if(this.showInp) {
      setTimeout(()=>{
        this.inp.nativeElement.focus();
      },0);
    }
    else {
      this.emitter.emit(this.value);
    }
  }
}
