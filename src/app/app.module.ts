import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ShikiGardenModule } from './shiki-garden/shiki-garden.module';
import { DrawingModule } from './drawing/drawing.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './service/service.module';
import { ResolveModule } from './resolve/resolve.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ServiceModule,
    ResolveModule,
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
