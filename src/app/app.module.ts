
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { CategoriePcComponent } from './categorie-pc/categorie-pc.component';
import { CategorieMobileComponent } from './categorie-mobile/categorie-mobile.component';
import { BandeDessineComponent } from './bande-dessine/bande-dessine.component';
import { BlocPageComponent } from './bloc-page/bloc-page.component';
import { LayoutModule } from '@angular/cdk/layout';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarreRechercheComponent,
    CategoriePcComponent,
    CategorieMobileComponent,
    BandeDessineComponent,
    BlocPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: []

  
  
  
})
export class AppModule { }
