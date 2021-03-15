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

  ngOnInit(): void {
  }

  onCategorieSubmitted() {
    console.log("accueil fonctionne");
    this.donneesServices.input_recherche = "";
    this.donneesServices.mise_a_jour_du_guide();
  }

}
