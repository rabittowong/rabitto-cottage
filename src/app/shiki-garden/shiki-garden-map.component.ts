import { Component } from '@angular/core';

@Component({
  templateUrl: './shiki-garden-map.component.html',
  styleUrls: ['./shiki-garden-map.component.scss'],
})
export class ShikiGardenMapComponent {
  mapIndex: number = 1;
  cursorOffsetX: number = 0;
  cursorOffsetY: number = 0;

  constructor() {
  }

  onCursorMove(event: any): void {
    this.cursorOffsetX = event.offsetX - 3;
    this.cursorOffsetY = event.offsetY - 2;
  }

  onCursorOut(): void {
    this.cursorOffsetX = 0;
    this.cursorOffsetY = 0;
  }

  onChangeMap(index: number) {
    this.mapIndex = index;
  }
}
