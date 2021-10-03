import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutUsContentComponent } from './about-us-content.component';
import { routes } from './about-us.routes';

@NgModule({
  declarations: [
    AboutUsContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
})
export class AboutUsModule {
}
