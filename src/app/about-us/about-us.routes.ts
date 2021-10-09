import { Routes } from '@angular/router';

import { AboutUsContentComponent } from './about-us-content.component';
import { ResolveShikiAll } from '../resolve/shiki.resolve';

export const routes: Routes = [
  { path: '', component: AboutUsContentComponent, resolve: { shikis: ResolveShikiAll } },
];
