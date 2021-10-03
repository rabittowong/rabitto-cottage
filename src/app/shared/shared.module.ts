import { NgModule } from '@angular/core';

import { GistContentComponent } from './gist-content.component';

@NgModule({
  declarations: [
    GistContentComponent,
  ],
  exports: [
    GistContentComponent,
  ],
})
export class SharedModule {
}
