import { Component, Input, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';

@Component({
  selector: 'app-bande-dessine',
  templateUrl: './bande-dessine.component.html',
  styleUrls: ['./bande-dessine.component.scss']
})
export class BandeDessineComponent implements OnInit {

  recup_guide_index_for = [];

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
  }

}
