import { Component, Input, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bande-dessine',
  templateUrl: './bande-dessine.component.html',
  styleUrls: ['./bande-dessine.component.scss']
})
export class BandeDessineComponent implements OnInit {

  recup_guide_index_for = [""];

  surveillance_du_guide_Subscription: Subscription;

  constructor(private donneesServices: DonneesServices) {
    this.recup_guide_index_for = this.donneesServices.guide_index_for;
   }

  appeller_recuperer_albums_un_titre(guide) {
    //console.log("guide album titre : " + guide);
    return this.donneesServices.recuperer_albums_un_titre(guide);
  }
  appeller_generer_nom_series(guide) {
    //console.log("guide series nom : " + guide);
    return this.donneesServices.generer_nom_series(guide);
  }
  appeller_generer_nom_auteurs(guide) {
    //console.log("guide auteurs nom : " + guide);
    return this.donneesServices.generer_nom_auteurs(guide);
  }
  appeller_recuperer_albums_un_numero(guide) {
    //console.log("guide album numero : " + guide);
    return this.donneesServices.recuperer_albums_un_numero(guide);
  }
  appeller_generer_url_mini(guide) {
    //console.log("guide url mini : " + guide);
    return this.donneesServices.generer_url_mini(guide);
  }

  ngOnInit() {
    this.surveillance_du_guide_Subscription = this.donneesServices.guideIndexSubject.
    subscribe(

      (nouveau_guide) => {
        console.log("compteur : " + nouveau_guide);
        //console.log(typeof(nouveau_guide.slice()));
        //console.log(typeof(this.recup_guide_index_for.slice()));
        this.recup_guide_index_for = this.donneesServices.guide_index_for;
        console.log(this.recup_guide_index_for);
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("subscribe terminé");}, //en cas de complet
    );
  }

}
