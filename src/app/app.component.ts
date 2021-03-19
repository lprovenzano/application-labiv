import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstAge = 0;
  secondAge = 0;
  addition = 0;

  calculateAddition() {
    this.addition = this.firstAge + this.secondAge;
    return this.addition;
  }

  calculateAverage() {
    return this.addition / (this.addition === this.firstAge || this.addition === this.secondAge ? 1 : 2);
  }

  clean() {
    this.firstAge = 0;
    this.secondAge = 0;
    this.addition = 0;
  }
}
