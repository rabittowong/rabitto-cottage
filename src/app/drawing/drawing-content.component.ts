import { Component } from '@angular/core';

@Component({
  templateUrl: './drawing-content.component.html',
  styleUrls: ['./drawing-content.component.scss'],
})
export class DrawingContentComponent {
  filenames: string[] = [
    '304.jpg',
    '303.jpg',
    '312.jpg',
    '314.jpg',
    '406.jpg',
  ];
  selectedIndex: number = 0;

  constructor() {
  }

  onChangeSelectedIndex(index: number): void {
    this.selectedIndex = index;
  }
}
