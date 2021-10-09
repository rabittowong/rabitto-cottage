import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'shiki-garden', loadChildren: () => import('./shiki-garden/shiki-garden.module').then(m => m.ShikiGardenModule) },
  { path: 'drawing', loadChildren: () => import('./drawing/drawing.module').then(m => m.DrawingModule) },
  { path: 'ingredient', loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
