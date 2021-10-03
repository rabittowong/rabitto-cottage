import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContentComponent } from './home/home-content.component';
import { AboutUsContentComponent } from './about-us/about-us-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'about-us', component: AboutUsContentComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
