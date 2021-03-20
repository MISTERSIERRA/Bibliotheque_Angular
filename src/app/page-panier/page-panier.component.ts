import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';
import { DonneesServices } from '../services/donnees-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-panier',
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.scss']
})
export class PagePanierComponent implements OnInit {
   
  surveillance_ajout_panier: Subscription;

  ajout_panier = new Map();

  existencePanier: boolean = false;

  nombreTotalNotification = 0;

  //imageBlanche = "assets/all-content/albumsMini/marlysa-04-bragal.jpg";
  
  tableauArticleAjouter = [];

  constructor(private donneesServices: DonneesServices) { 
    this.ajout_panier = this.donneesServices.ajout_panier;
    this.tableauArticleAjouter = this.donneesServices.tableauArticleAjouter;
  }

  ngOnInit(): void {
    this.ajout_panier = this.donneesServices.ajout_panier;
    this.tableauArticleAjouter = this.donneesServices.tableauArticleAjouter;
    //this.existencePanier = this.donneesServices.existencePanier;
    this.surveillance_ajout_panier = this.donneesServices.etatPanier$.
    subscribe(

      (nouveau_guide) => {
        this.ajout_panier = this.donneesServices.ajout_panier;
        this.existencePanier = this.donneesServices.existencePanier;
        this.tableauArticleAjouter = this.donneesServices.tableauArticleAjouter;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("subscribe terminé");} //en cas de complet
    );
  }


  varQuantiteAlbums(guide: any) {//
      return this.ajout_panier.get(guide).titre;
  }
  varQuantiteSeries(guide: any) {
      return this.ajout_panier.get(guide).serie;
  }
  varQuantiteAuteurs(guide: any) {
      return this.ajout_panier.get(guide).auteur;
  }
  varUnitePrix(guide: any) {
      return this.ajout_panier.get(guide).prixUnitaire;
  }
  varQuantiteArticle(guide: any) {
    return this.ajout_panier.get(guide).quantite;
  }
  varSommeArticle(guide: any) {
    return this.ajout_panier.get(guide).prixSomme;
  }
  varImageURL(guide: any) {
    return this.ajout_panier.get(guide).url;
  }

  appelerSupprimerPanier(guide: any) {
    this.donneesServices.supprimer_article(guide);
  }
  appelerAjoutPanier(guide: any) {
    this.donneesServices.ajouter_article(guide);
  }
  appelerReduirePanier(guide: any) {
    this.donneesServices.reduire_panier(guide);
  }

  recuperer_nombre_articles() {
    let nombreTotal = 0;
    if (this.ajout_panier.size < 1) {
      nombreTotal = 0;
    }
    else {
      for (let indexMap of this.ajout_panier) {
        nombreTotal += indexMap[1].quantite;
      }
    }
    return nombreTotal;
  }
  recuperer_total_a_payer() {
    let prixTotal = 0;
    if (this.ajout_panier.size < 1) {
      prixTotal = 0;
    }
    else {
      for (let indexMap of this.ajout_panier) {
        prixTotal += parseFloat(indexMap[1].prixSomme);
      }
    }
    return prixTotal.toFixed(2).toString();
  }

  lancer_la_commande() {
    this.donneesServices.vider_panier();
    console.log("commande envoyée");
    alert("commande envoyée");
  }

}
