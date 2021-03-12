import { Component, Input, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';

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

  name: string;
  onNameSubmitted(name: string) {
    console.log(this.name = name);
    this.donneesServices.input_recherche = name;
    console.log("variable service : " + this.donneesServices.input_recherche);
  }

  onButtonSubmitted() {
    console.log("bouton entrer");
    this.donneesServices.input_recherche = this.name;
    console.log(this.donneesServices.input_recherche);
  }

  onInstantSubmitted(name: string) {
      this.name += name;
      console.log(name);

  }

}
