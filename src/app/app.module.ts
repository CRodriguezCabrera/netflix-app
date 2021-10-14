import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './Pages/global/global.component';
import { HeroComponent } from './Pages/global/hero/hero.component';
import { NavComponent } from './Pages/global/nav/nav.component';
import { FilmComponent } from './Pages/global/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    HeroComponent,
    NavComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
