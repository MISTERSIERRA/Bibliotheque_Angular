import { Component, Input, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {

  constructor(private donneesServices: DonneesServices) { }

  ngOnInit(): void {
  }

  @Input() valeur_entree = "test entree";

  name: string = "";

  //avec touche entrer
  onNameSubmitted(name: string) {
    console.log(this.name = name);
    this.donneesServices.input_recherche = name;
    console.log("variable service : " + this.donneesServices.input_recherche);
  }

  //avec touches
  onInstantSubmitted(name: string) {
    console.log("touche : " + name);
    if (name.length < 2) {//recuperer uniquement les touches à un caractère
      this.name += name;//pour éliminer les touches système
      console.log("retenu : " + name);
    }
  }
  //avec bouton entrer
  onButtonSubmitted() {
    console.log("bouton entrer");
    this.donneesServices.input_recherche = this.name;
    console.log(this.donneesServices.input_recherche);
  }

}
