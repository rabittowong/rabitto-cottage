import { Routes } from '@angular/router';

import { ShikiGardenScriptComponent } from './shiki-garden-script.component';
import { ShikiGardenMapComponent } from './shiki-garden-map.component';
import { ShikiGardenCharacterComponent } from './shiki-garden-character.component';

export const routes: Routes = [
  { path: 'script', component: ShikiGardenScriptComponent },
  { path: 'map', component: ShikiGardenMapComponent },
  { path: 'character', component: ShikiGardenCharacterComponent },
];
