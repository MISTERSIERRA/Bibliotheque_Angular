import { Component, OnInit } from '@angular/core';
import { DonneesServices } from '../services/donnees-services';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-meteo',
  templateUrl: './detail-meteo.component.html',
  styleUrls: ['./detail-meteo.component.scss']
})
export class DetailMeteoComponent implements OnInit {

  constructor(private donneesServices: DonneesServices) { }

  ngOnInit() {
    console.log("recommencer la meteo");
    this.nom_ville = this.donneesServices.nom_ville;
    this.date_de_la_requete = this.donneesServices.date_de_la_requete;
    this.cle_description = this.donneesServices.cle_description;
    this.cle_temp_actuel = this.donneesServices.cle_temp_actuel;
    this.cle_temp_max = this.donneesServices.cle_temp_max;
    this.cle_temp_min = this.donneesServices.cle_temp_min;
    this.cle_icone = this.donneesServices.cle_icone;
    this.cle_url_icone = this.donneesServices.cle_url_icone;
  }

  nom_ville = "ville";
  date_de_la_requete = "";
  cle_description = "-";
  cle_temp_actuel = "Act : -";
  cle_temp_max = "Max : -";
  cle_temp_min = "Min : -";
  cle_icone = "";
  cle_url_icone = "assets/all-content/icons/meteoNuage.png";
  //afficheur_requete = $name_ville + " " + date_de_la_requete;
  //request = new XMLHttpRequest();

  //*************************************************************************
  demandeMeteo(saisie) {
  let request = new XMLHttpRequest();
  const that = this;
    /* préchargement de la récupération de réponse */
    request.onreadystatechange = function() {
    
      /* convertir la réponse de json vers objet dès que le status de requête est terminé */
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var response = JSON.parse(this.responseText);
             
            console.log(response); /* voir l'objet réponse en console */
  
  let reference_date = response.dt * 1000;
  let nouvelle_date = new Date(reference_date);
  let jour = nouvelle_date.getDate().toString();
  let mois = ("0" + ( 1 + nouvelle_date.getMonth()).toString().substr(-2));
  let annee = nouvelle_date.getFullYear().toString();
  let heure = nouvelle_date.getHours().toString();
  let minutes = ("0" + nouvelle_date.getMinutes().toString()).substr(-2);
  let date_de_la_requete = jour + "/" + mois + "/" + annee + " " + heure + ":" + minutes;
  
  console.log("Date calculée " + date_de_la_requete);
  
  
  that.nom_ville = response.name + " " + date_de_la_requete; /* charger le nom de ville */
  
  that.cle_description = response.weather[0].description; /* isoler la valeur du jour, en parcourant l'objet */
  
  that.cle_temp_actuel = "Act : " + response.main.temp + "°"; /* isoler la valeur temp max, en parcourant l'objet */
  that.cle_temp_max = "Max : " + response.main.temp_max + "°"; /* isoler la valeur temp max, en parcourant l'objet */
  that.cle_temp_min = "Min : " + response.main.temp_min + "°"; /* isoler la valeur temp min, en parcourant l'objet */
  
  that.cle_icone = response.weather[0].icon; /* isoler les url des icones, en parcourant l'objet */
  that.cle_url_icone = "https://openweathermap.org/img/wn/" + 
  that.cle_icone + ".png"; /* afficher liens url des icones dans les img de la ligne 0 du tableau */
  //envoyer url icone dans service, et lancer un next pour la prise en compte
  that.donneesServices.url_icone_venant_de_la_requete = that.cle_url_icone;
  that.donneesServices.lancerChangementIcone();

  that.donneesServices.nom_ville = that.nom_ville;
  that.donneesServices.date_de_la_requete = that.date_de_la_requete;
  that.donneesServices.cle_description = that.cle_description;
  that.donneesServices.cle_temp_actuel = that.cle_temp_actuel;
  that.donneesServices.cle_temp_max = that.cle_temp_max;
  that.donneesServices.cle_temp_min = that.cle_temp_min;
  that.donneesServices.cle_icone = that.cle_icone;
  that.donneesServices.cle_url_icone = that.cle_url_icone;
      }
    }
    /* ouvrir requête avec url destination terminée par la valeur de l'input en minuscule */
    request.open("POST", "https://api.openweathermap.org/data/2.5/weather?q=" + 
    saisie.toLowerCase() + 
      "&units=metric&lang=fr&appid=9156f45bc40b02a51755857c7b4cb780", true);
    
    request.send(); /* envoi requête */
    return false; /* fermer la requête pour éviter la répétition de la même requête */
  }

  fonction_recup_ville() {
    let valeur_selection = (<HTMLInputElement>document.getElementById('selection')).value;
    return valeur_selection;
  }

  lancerMeteo() {
    let saisie = this.fonction_recup_ville();
    this.demandeMeteo(saisie);
  }
  //*************************************************************************


}
