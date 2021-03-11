import { DonneesServices } from './services/donnees-services';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


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
import { PagePanierComponent } from './page-panier/page-panier.component';
import { HeaderMeteoComponent } from './header-meteo/header-meteo.component';

const appRoutes: Routes = [
  //{ path: 'appareil', canActivate: [AuthGuard], component: AppareilViewComponent }, 
  { path: 'accueil', component: BandeDessineComponent }, 
  //{ path: 'detailLivre', component: AuthComponent }, //a creer
  //{ path: 'afficherlogin', component: AuthComponent }, //a creer
  //{ path: 'affichercompte', component: AuthComponent }, //a creer
  { path: 'afficherpanier', component: PagePanierComponent }, 
  { path: '', component: BandeDessineComponent }, 
  { path: 'not-found', component: BandeDessineComponent }, 
  { path: '**', redirectTo: '/not-found' } /* celle la toujours en dernier */
];


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
    PagePanierComponent,
    HeaderMeteoComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DonneesServices, 
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
