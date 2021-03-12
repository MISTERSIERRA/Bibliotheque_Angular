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
  }

  onButtonSubmitted() {
    console.log("bouton entrer");
    this.donneesServices.guide_index_for = ["1", "2", "3", "4"];
  }

}
