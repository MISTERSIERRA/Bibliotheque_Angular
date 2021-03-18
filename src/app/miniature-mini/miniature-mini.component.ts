import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonneesServices } from '../services/donnees-services';

@Component({
  selector: 'app-miniature-mini',
  templateUrl: './miniature-mini.component.html',
  styleUrls: ['./miniature-mini.component.scss'],
})
export class MiniatureMiniComponent implements OnInit {
  constructor(private donneesServices: DonneesServices) {}



  ngOnInit(): void {}

  @Input() livreNumeroGuide = 'reçu par le template html bande-dessine';
  @Input() recuplivreTitre = 'généré à la création';
  @Input() recuplivreSerie = 'inconnu';
  @Input() recuplivreAuteur = 'inconnu';
  @Input() recuplivreNumeroVolume = 'inconnu';
  @Input() recuplivreSRC = 'inconnu';
  @Input() prix = '1';
  @Input() recuplivreSRCgrandeImages = 'inconnu';

  detectionClick() {
    console.log('Miniature cliqué');
    this.donneesServices.nom_auteur = this.recuplivreAuteur;
    this.donneesServices.titre_bd = this.recuplivreTitre;
    this.donneesServices.numero_bd = this.recuplivreNumeroVolume;
    this.donneesServices.numero_serie = this.recuplivreSerie;
    this.donneesServices.prix_bd = this.prix;
    this.donneesServices.url_grande_image = this.recuplivreSRCgrandeImages; 
    this.donneesServices.livreNumeroGuide = this.livreNumeroGuide;
  }
}
