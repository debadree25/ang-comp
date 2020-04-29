import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-comp';
  result;
  displayResult(event) {
    alert('result received');
    // this might need to change, refer to console log to find out
    console.log(event);
    this.result = event;
  }
}
