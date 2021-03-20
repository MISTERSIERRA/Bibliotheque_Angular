import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonneesServices } from '../services/donnees-services';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private donneesServices: DonneesServices) { }

  surveillance_TotalNotification: Subscription;

  nombreTotalNotification = 0;

  ngOnInit(): void {
    this.surveillance_TotalNotification = this.donneesServices.etatPanier$.
    subscribe(

      (nouveau_guide) => {
        this.nombreTotalNotification = this.donneesServices.nombreTotalNotification;
      }, //pour chaque next 

      () => {console.log("erreur de subscribe");}, //en cas d'erreur
      () => {console.log("subscribe terminé");} //en cas de complet
    );
  }

  onCategorieSubmitted() {
    console.log("accueil fonctionne");
    this.donneesServices.input_recherche = "";
    this.donneesServices.mise_a_jour_du_guide();
  }

}
