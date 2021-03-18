import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.scss']
})
export class PagePanierComponent implements OnInit {
   
  ajout_panier = new Map();
  constructor() { 
    this.ajout_panier.set("140", {titre: "string", prix: "14.23", quantite: 1});
    this.ajout_panier.set("230", {titre: "string", prix: "2", quantite: 1});
    this.ajout_panier.set("80", {titre: "string", prix: "99", quantite: 1});
  }

  ngOnInit(): void {
   
  }

  imageBlanche = "assets/all-content/albumsMini/marlysa-04-bragal.jpg";
  
  tableauArticleAjouter = ["140", "230"];

  varQuantiteArticle() {
      return 2;
  }
  varQuantiteAlbums() {
      return "Bragal";
  }
  varQuantiteSeries() {
      return "Marlysa";
  }
  varQuantiteAuteurs() {
      return "Gaudin, Danard";
  }
  varQuantitePrix() {
      return 12.23;
  }
  
  afficherElementImage;
  afficherElementNomAlbums;
  afficherElementNomSeries;
  afficherElementNomAuteurs;
  afficherElementValeurPrix;
  afficherElementQuantite;

}
