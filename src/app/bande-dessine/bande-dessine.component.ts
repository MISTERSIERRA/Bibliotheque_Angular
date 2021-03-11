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
    console.log("recuperer_albums_un_titre");
    return this.donneesServices.recuperer_albums_un_titre(guide);
  }
  appeller_recuperer_series_un_nom(guide) {
    console.log("recuperer_series_un_nom");
    return this.donneesServices.recuperer_series_un_nom(guide);
  }
  appeller_recuperer_auteurs_un_nom(guide) {
    console.log("recuperer_auteurs_un_nom");
    return this.donneesServices.recuperer_auteurs_un_nom(guide);
  }
  appeller_recuperer_albums_un_numero(guide) {
    console.log("recuperer_albums_un_numero");
    return this.donneesServices.recuperer_albums_un_numero(guide);
  }
  appeller_generer_url_mini(guide) {
    console.log("generer_url_mini");
    return this.donneesServices.generer_url_mini(guide);
  }

  ngOnInit() {
    console.log("debut");
    console.log(this.recup_guide_index_for);
    console.log("fin");
  }

}
