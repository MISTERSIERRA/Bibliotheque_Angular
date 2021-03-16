import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {

  constructor(private donneesServices: DonneesServices, private router: Router) { }

  ngOnInit() {
  }

  @Input() valeur_entree = "test entree";

  name: string = "";

  //avec touche entrer
  onNameSubmitted(name: string) {
    this.name = name;
    console.log(this.name);
    this.donneesServices.input_recherche = this.name;
    console.log("fonction 1 : " + this.donneesServices.input_recherche);
    this.donneesServices.mise_a_jour_du_guide();
    this.router.navigate(['/accueil']);//retour accueil (import router,et router => constructeur)
    this.name = "";
  }

  //avec touches NE PAS PRENDRE EN COMPTE
  //onInstantSubmitted(name: string) {
    //console.log("touche : " + name);
    //if (name.length < 2) {//recuperer uniquement les touches à un caractère
      //this.name += name;//pour éliminer les touches système
    //}
    //console.log("retenu : " + this.name);
  //}

  //avec bouton entrer
  onButtonSubmitted() {
    console.log("appui bouton");
    /***********************************************************/
    this.name = (<HTMLInputElement>document.getElementById('recupValeurBtn')).value;
    /***********************************************************/
    this.donneesServices.input_recherche = this.name;
    console.log("fonction 3 : " + this.donneesServices.input_recherche);
    this.donneesServices.mise_a_jour_du_guide();
    this.router.navigate(['/accueil']);//retour accueil (import router,et router => constructeur)
    this.name = "";
  }

}
