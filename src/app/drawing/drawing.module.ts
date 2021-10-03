import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DrawingContentComponent } from './drawing-content.component';
import { routes } from './drawing.routes';

@NgModule({
  declarations: [
    DrawingContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
})
export class DrawingModule {
}
