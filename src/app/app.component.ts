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
    this.resultOption = event;
  }
  displayTimeOption(event) {
    this.resultTime = event;
  }
}
