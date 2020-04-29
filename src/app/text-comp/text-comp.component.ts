import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-comp',
  templateUrl: './text-comp.component.html',
  styleUrls: ['./text-comp.component.css']
})
export class TextCompComponent implements OnInit {
  showInp:boolean;
  text:string;
  paraText:string;
  constructor() {
    this.showInp=false;
    this.text="Some text here"
   }

  ngOnInit() {
  }
  displayInp() {
    this.showInp=!this.showInp;
  }
  onInp($event:any) {
    this.text=$event.target.value;
  }
}
