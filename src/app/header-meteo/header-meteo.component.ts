import { Component, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-meteo',
  templateUrl: './header-meteo.component.html',
  styleUrls: ['./header-meteo.component.scss']
})
export class HeaderMeteoComponent implements OnInit {

  surveillance_icone_meteo: Subscription;

  icone_meteo_header_url = "assets/all-content/icons/meteoNuage.png";

  constructor(private donneesServices: DonneesServices) { }

  ngOnInit() {
    this.surveillance_icone_meteo = this.donneesServices.etatMeteo$.
    subscribe(

      () => {this.icone_meteo_header_url = this.donneesServices.url_icone_venant_de_la_requete;}, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("subscribe terminé");} //en cas de complet
    );
  }

}
