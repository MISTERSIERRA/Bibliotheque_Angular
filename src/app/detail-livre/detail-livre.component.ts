import { Component, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.scss']
})
export class DetailLivreComponent implements OnInit {

  constructor(private donneesServices: DonneesServices) { }

  nom_auteur = "";
  titre_bd = "";
  numero_bd = "";
  numero_serie = "";
  prix_bd = "";
  url_grande_image = "assets/all-content/albums/pageblanche.jpg";


  ngOnInit(): void {
    this.nom_auteur = this.donneesServices.nom_auteur;
    this.titre_bd = this.donneesServices.titre_bd;
    this.numero_bd = this.donneesServices.numero_bd;
    this.numero_serie = this.donneesServices.numero_serie;
    this.prix_bd = this.donneesServices.prix_bd;
    this.url_grande_image = this.donneesServices.url_grande_image;
  }

  ajoutAuPanier() {
    console.log('BIP-BIP');
    
  }
}
