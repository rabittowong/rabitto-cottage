import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContentComponent } from './home/home-content.component';
import { AboutUsContentComponent } from './about-us/about-us-content.component';
import { DrawingContentComponent } from './drawing/drawing-content.component';
import { IngredientContentComponent } from './ingredient/ingredient-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'about-us', component: AboutUsContentComponent },
  { path: 'shiki-garden', loadChildren: () => import('./shiki-garden/shiki-garden.module').then(m => m.ShikiGardenModule) },
  { path: 'drawing', component: DrawingContentComponent },
  { path: 'ingredient', component: IngredientContentComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
