import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DonneesServices } from './services/donnees-services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { CategoriePcComponent } from './categorie-pc/categorie-pc.component';
import { CategorieMoblieComponent } from './categorie-moblie/categorie-moblie.component';
import { BandeDessineComponent } from './bande-dessine/bande-dessine.component';
import { BlocPageComponent } from './bloc-page/bloc-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MiniatureMiniComponent } from './miniature-mini/miniature-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarreRechercheComponent,
    CategoriePcComponent,
    CategorieMoblieComponent,
    BandeDessineComponent,
    BlocPageComponent,
    MiniatureMiniComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [
    DonneesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
