import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShikiGardenScriptComponent } from './shiki-garden-script.component';
import { ShikiGardenMapComponent } from './shiki-garden-map.component';
import { ShikiGardenCharacterComponent } from './shiki-garden-character.component';
import { routes } from './shiki-garden.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShikiGardenScriptComponent,
    ShikiGardenMapComponent,
    ShikiGardenCharacterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  providers: [],
})
export class ShikiGardenModule {
}
