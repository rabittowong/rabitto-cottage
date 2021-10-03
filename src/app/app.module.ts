import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ShikiGardenModule } from './shiki-garden/shiki-garden.module';
import { DrawingModule } from './drawing/drawing.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    HomeModule,
    AboutUsModule,
    ShikiGardenModule,
    DrawingModule,
    IngredientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
