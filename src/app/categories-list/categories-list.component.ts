import { Component, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  surveillance_bouton_Subscription: Subscription;
  leTableauTest = [];

  constructor(private donneesServices: DonneesServices) {
    this.leTableauTest = this.donneesServices.tableauCategorie;
  }

  ngOnInit() {
    this.surveillance_bouton_Subscription = this.donneesServices.categoriesBouton$.subscribe(
        () => {
          this.leTableauTest = this.donneesServices.tableauCategorie;
          console.log("test");
          console.log(this.donneesServices.tableauCategorie);
        },
        () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("subscribe terminé");} //en cas de complet
    );
  }

 rechercheRedirection(jeClique) {
  this.donneesServices.input_recherche = jeClique;
  this.donneesServices.mise_a_jour_du_guide();
    console.log("Je suis innocent") 
 } 


}
