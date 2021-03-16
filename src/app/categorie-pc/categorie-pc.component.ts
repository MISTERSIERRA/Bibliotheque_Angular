import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { DonneesServices } from '../services/donnees-services';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-categorie-pc',
  templateUrl: './categorie-pc.component.html',
  styleUrls: ['./categorie-pc.component.scss']
})
export class CategoriePcComponent implements OnInit {

  public showContainer: boolean;
  constructor(public breakpointObserver: BreakpointObserver, private donneesServices: DonneesServices,  private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }

  callCategorieAlbum() {
      this.donneesServices.categorieAlbum();
      //this.router.navigate(['/categories']);
  }

  callCategorieSerie(){
    this.donneesServices.categorieSerie();
    //this.router.navigate(['/categories']);
  }

  callCategorieAuteur() {
    this.donneesServices.categorieAuteur();
    //this.router.navigate(['/categories']);
  }

}
