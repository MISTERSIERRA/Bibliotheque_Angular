import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniature-mini',
  templateUrl: './miniature-mini.component.html',
  styleUrls: ['./miniature-mini.component.scss']
})
export class MiniatureMiniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() livreNumeroGuide = "reçu par le template html bande-dessine"; 
  @Input() recuplivreTitre = "généré à la création";
  @Input() recuplivreSerie = "inconnu";
  @Input() recuplivreAuteur = "inconnu";
  @Input() recuplivreNumeroVolume = "inconnu";
  @Input() recuplivreSRC = "inconnu";
  

}
