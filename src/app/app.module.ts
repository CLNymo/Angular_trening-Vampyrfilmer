import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmvisningComponent } from './filmvisning/filmvisning.component';
import { FilmStemmerComponent } from './film-stemmer/film-stemmer.component';
import { OenskelisteComponent } from './oenskeliste/oenskeliste.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmvisningComponent,
    FilmStemmerComponent,
    OenskelisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
