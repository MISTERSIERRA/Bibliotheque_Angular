import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {

  @Input() valeur_entree = "test entree";

  name: string;
  onNameSubmitted(name: string) {
    console.log(this.name = name);
  }

  onButtonSubmitted() {
    console.log("valeur_entree");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
