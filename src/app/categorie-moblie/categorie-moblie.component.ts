import { Component, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-categorie-moblie',
  templateUrl: './categorie-moblie.component.html',
  styleUrls: ['./categorie-moblie.component.scss']
})
export class CategorieMoblieComponent implements OnInit {

  constructor(private donneesServices: DonneesServices, private router: Router) { }

  ngOnInit() {
  }

  callCategorieAlbum() {
    console.log("catégorie album");
    this.donneesServices.categorieAlbum();
    //this.router.navigate(['/categories']);
}

callCategorieSerie() {
  this.donneesServices.categorieSerie();
  console.log("catégorie serie");
  //this.router.navigate(['/categories']);
}

callCategorieAuteur() {
  this.donneesServices.categorieAuteur();
  console.log("catégorie auteur");
  //this.router.navigate(['/categories']);
}

}
