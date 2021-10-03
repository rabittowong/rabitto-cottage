import { Component } from '@angular/core';

@Component({
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
})
export class HomeContentComponent{
  currentTime: Date = new Date();

  constructor() {
    setInterval(() => this.currentTime = new Date(), 1000);
  }
}
