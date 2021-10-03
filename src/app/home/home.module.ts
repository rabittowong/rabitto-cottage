import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeContentComponent } from './home-content.component';
import { routes } from './home.routes';
import { CustomPipeModule } from '../pipe/custom-pipe.module';

@NgModule({
  declarations: [
    HomeContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CustomPipeModule,
  ],
  providers: [],
})
export class HomeModule {
}
