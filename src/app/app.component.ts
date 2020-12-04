import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counterValue = 0;
  increaseValue() {
    return this.counterValue++;
  }
}
