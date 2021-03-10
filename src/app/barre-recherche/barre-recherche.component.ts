import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {

  name: string;
  onNameSubmitted(name: string) {
    this.name = name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
