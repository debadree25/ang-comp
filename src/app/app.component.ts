import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-comp';
  result;
  resultTextArea;
  resultDate;
  resultOption;
  resultTime;
  dropdownOptions = [{
    label: 'a',
    value: 11
  },
  {
    label: 'b',
    value: 2
  },
  {
    label: 'c',
    value: 34
  }];
  // dropdownOptions = ['a', 'b', 'c'];
  displayResult(event) {
    // this might need to change, refer to console log to find out
    this.result = event;
  }
  displayResultTextArea(event) {
    this.resultTextArea = event;
  }
  displayResultDate(event) {
    this.resultDate = event;
  }
  displayResultOption(event) {
    console.log(event);
    this.resultOption = event;
  }

  displayTimeOption(event) {
    this.resultTime = event;
  }
}
