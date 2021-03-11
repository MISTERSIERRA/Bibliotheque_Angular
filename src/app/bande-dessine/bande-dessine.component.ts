import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../services/donnees-services';

@Component({
  selector: 'app-bande-dessine',
  templateUrl: './bande-dessine.component.html',
  styleUrls: ['./bande-dessine.component.scss']
})
export class BandeDessineComponent implements OnInit {

  constructor(private donneesService: DonneesService) { }

  recuplivreNumeroGuide = "nombreGuide";
  recuplivreTitre = "inconnu";
  recuplivreSerie = "inconnu";
  recuplivreAuteur = "inconnu";
  recuplivreNumeroVolume = "inconnu";
  recuplivreSRC = "inconnu";


  ngOnInit(): void {
  }

}
