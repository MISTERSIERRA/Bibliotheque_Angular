import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

interface ISerie {
    nom: string;
}
  
interface IAuteur {
    nom: string;
}
  
interface IAlbum {
    titre: string;
    numero: string;
    idSerie: string;
    idAuteur: string;
    prix: string;
}

export class DonneesServices {

/***************************COMPONENT**********************************/ 

constructor() {
    this.setInitialData();
    this.guide_index_for = this.recuperer_toutes_les_cles(this.albums);
  }
  
  
  /************************************************************************************************/
  //npx ts-node service.simulation.ts
  //node service.simulation.ts
  
  //liste series
  public series: Map<string, ISerie> = new Map();
  public auteurs: Map<string, IAuteur> = new Map();
  public albums: Map<string, IAlbum> = new Map();
  
  private setInitialData(){
    this.series.set("2", {nom: "Spirou et Fantasio"});
    this.series.set("3", {nom: "Peter Pan"});
    this.series.set("5", {nom: "Le petit Spirou"});
    this.series.set("6", {nom: "Marsupilami"});
    this.series.set("9", {nom: "Lanfeust de Troy"});
    this.series.set("10", {nom: "XIII"});
    this.series.set("12", {nom: "Largo Winch"});
    this.series.set("13", {nom: "Marlysa"});
    this.series.set("16", {nom: "Trolls de Troy"});
    this.series.set("17", {nom: "Le chant d'excalibur"});
    this.series.set("18", {nom: "Lanfeust des étoiles"});
    this.series.set("22", {nom: "La quête de l'oiseau du temps"});
    this.series.set("23", {nom: "Titeuf"});
    this.series.set("24", {nom: "Kran"});
    this.series.set("25", {nom: "Les informaticiens"});
    this.series.set("26", {nom: "C.R.S = Détresse"});
    this.series.set("27", {nom: "Pacush blues"});
    this.series.set("28", {nom: "Les aventures de Tintin"});
    this.series.set("29", {nom: "Spirou"});
    this.series.set("30", {nom: "Yakari"});
    this.series.set("31", {nom: "Testar le robot"});
    this.series.set("32", {nom: "Astérix"});
    this.series.set("33", {nom: "Les aventures de Bédé"});
    this.series.set("34", {nom: "Les femmes en blanc"});
    this.series.set("35", {nom: "Kwaïdan"});
    this.series.set("36", {nom: "Rahan fils des âges farouches"});
    this.series.set("37", {nom: "Histoires de Schtroumpfs"});
    this.series.set("38", {nom: "Lucky Luke"});
    this.series.set("39", {nom: "Blacksad"});
    this.series.set("40", {nom: "Gnomes de Troy"});
    this.series.set("41", {nom: "Le petit Rahan"});
    this.series.set("42", {nom: "Finn"});
    this.series.set("43", {nom: "Le vagabond des limbes"});
    this.series.set("44", {nom: "Le fléau des dieux"});
    this.series.set("45", {nom: "Marsu kids"});
    this.series.set("46", {nom: "Le chat"});
    this.series.set("47", {nom: "Kaamelott"});
    this.series.set("48", {nom: "Le grand pouvoir du Chninkel"});
    this.series.set("49", {nom: "Litteul Kévin"});
    this.series.set("50", {nom: "Joe bar team"});
    this.series.set("51", {nom: "Les conquérants de Troy"});
    this.series.set("52", {nom: "Cristal"});
    this.series.set("53", {nom: "Pierre tombal"});
    this.series.set("54", {nom: "Thorgal"});
    this.series.set("55", {nom: "Léonard"});
    this.series.set("56", {nom: "Les écluses du ciel"});
    this.series.set("57", {nom: "Divers"});
    this.series.set("58", {nom: "Métropoles"});
    this.series.set("59", {nom: "Soda"});
    this.series.set("60", {nom: "Lanfeust odyssey"});
    this.series.set("61", {nom: "Le triangle secret I.N.R.I."});
    this.series.set("62", {nom: "Elle s'appelle Taxi"});
    this.series.set("63", {nom: "Blueberry"});
    this.series.set("64", {nom: "Luuna"});
    this.series.set("65", {nom: "Les naufragés d'Ythaq"});
    this.series.set("66", {nom: "Arkezone"});
    this.series.set("67", {nom: "Gaston"});
    this.series.set("68", {nom: "Le chant des Stryges"});
    this.series.set("70", {nom: "Blake et Mortimer"});
    this.series.set("75", {nom: "Goblin's"});
    this.series.set("74", {nom: "Les nombrils"});
    this.series.set("76", {nom: "Cédric"});
    this.series.set("77", {nom: "Les simpson"});
    this.series.set("78", {nom: "Kidpaddle"});
    this.series.set("79", {nom: "Les rugbymen"});
    this.series.set("80", {nom: "L'élève ducobu"});
    this.series.set("81", {nom: "Garfield"});
    this.series.set("82", {nom: "Boule et bill"});
    this.series.set("83", {nom: "Le triangle secret Les gardiens du sang"});
    this.series.set("84", {nom: "Les quatre de baker street"});
    this.series.set("85", {nom: "Le triangle secret"});
    this.series.set("86", {nom: "Le triangle secret hertz"});
    this.series.set("87", {nom: "Les légendaires"});
    this.series.set("88", {nom: "Les blondes"});
    this.series.set("89", {nom: "Les fondus"});
    this.series.set("90", {nom: "Mélusine"});
    this.series.set("91", {nom: "Koh-Lanta"});
    this.series.set("92", {nom: "Les foot furieux"});
    this.series.set("94", {nom: "Les grandes enquêtes des p'tits philous"});
    this.series.set("95", {nom: "Les blagues de Toto"});
    this.series.set("96", {nom: "Le fayot"});
    this.series.set("97", {nom: "toto"});
    this.series.set("98", {nom: "Game over"});
    this.series.set("101", {nom: "I.R.$."});
    this.series.set("102", {nom: "La légende du changeling"});
    this.series.set("103", {nom: "Le donjon de Naheulbeuk"});
    this.series.set("105", {nom: "Kid Lucky"});
    this.series.set("112", {nom: "Le rédempteur"});
    this.series.set("107", {nom: "Elfes"});
    this.series.set("108", {nom: "Harald le viking"});
    this.series.set("110", {nom: "Le triangle secret lacrima christi"});
    this.series.set("111", {nom: "Private liberty"});
    this.series.set("113", {nom: "Dad"});
    this.series.set("114", {nom: "Universal war one"});
  
  
  
    //liste this.auteurs
    this.auteurs.set("8", {nom: "Gaudin, Danard"});
    this.auteurs.set("9", {nom: "Arleston, Hubsch"});
    this.auteurs.set("10", {nom: "Arleston, Tarquin"});
    this.auteurs.set("11", {nom: "Arleston, Mourier"});
    this.auteurs.set("13", {nom: "Franquin, Batem, Colman"});
    this.auteurs.set("14", {nom: "Tome, Janry"});
    this.auteurs.set("16", {nom: "Jigounov, Sente"});
    this.auteurs.set("18", {nom: "Le Tendre, Loisel, Lidwine"});
    this.auteurs.set("19", {nom: "Zep"});
    this.auteurs.set("20", {nom: "Herenguel Eric"});
    this.auteurs.set("21", {nom: "Franquin, Batem, Yann"});
    this.auteurs.set("22", {nom: "Franquin, Batem, Greg"});
    this.auteurs.set("23", {nom: "Franquin"});
    this.auteurs.set("24", {nom: "Reynès, Brémaud, Krings"});
    this.auteurs.set("25", {nom: "Fournier"});
    this.auteurs.set("26", {nom: "Franquin, Roba, Greg"});
    this.auteurs.set("27", {nom: "Franquin, Greg"});
    this.auteurs.set("28", {nom: "Franquin, Roba"});
    this.auteurs.set("29", {nom: "Achdé, Erroc"});
    this.auteurs.set("30", {nom: "Ptiluc"});
    this.auteurs.set("31", {nom: "Hergé"});
    this.auteurs.set("32", {nom: "Watch, J.C De la royère"});
    this.auteurs.set("33", {nom: "Derib, Job"});
    this.auteurs.set("34", {nom: "Bercovici, Corteggiani"});
    this.auteurs.set("35", {nom: "Goscinny, Uderzo"});
    this.auteurs.set("36", {nom: "Rocher, Dufranne"});
    this.auteurs.set("37", {nom: "Bercovici, Cauvin"});
    this.auteurs.set("38", {nom: "Jung"});
    this.auteurs.set("39", {nom: "Loisel"});
    this.auteurs.set("40", {nom: "Lecureux, Cheret"});
    this.auteurs.set("41", {nom: "Peyo"});
    this.auteurs.set("42", {nom: "Morris"});
    this.auteurs.set("43", {nom: "Morris, Goscinny"});
    this.auteurs.set("44", {nom: "Morris, Fauche, Léturgie"});
    this.auteurs.set("45", {nom: "Morris, Achdé, Gerra"});
    this.auteurs.set("46", {nom: "Diaz canales, Guarnido"});
    this.auteurs.set("47", {nom: "Franquin, Batem, Dugomier"});
    this.auteurs.set("48", {nom: "Franquin, Batem, Bourcquardez"});
    this.auteurs.set("49", {nom: "Franquin, Batem, Kaminka"});
    this.auteurs.set("50", {nom: "Franquin, Batem"});
    this.auteurs.set("51", {nom: "Franquin, Batem, Fauche"});
    this.auteurs.set("52", {nom: "Franquin, Jidéhem, Greg"});
    this.auteurs.set("53", {nom: "Franquin, Jijé"});
    this.auteurs.set("54", {nom: "Le Tendre, Loisel, Mallié"});
    this.auteurs.set("55", {nom: "Le Tendre, Loisel, Aouamri"});
    this.auteurs.set("56", {nom: "Le Tendre, Loisel"});
    this.auteurs.set("57", {nom: "Arleston, Dav, Tarquin, Lyse"});
    this.auteurs.set("58", {nom: "Arnaud, Stambecco"});
    this.auteurs.set("59", {nom: "Godard, Bollée, Al Coutelis"});
    this.auteurs.set("60", {nom: "Mangin, Gajic"});
    this.auteurs.set("61", {nom: "Morvan, Munuera"});
    this.auteurs.set("62", {nom: "Nic, Cauvin"});
    this.auteurs.set("63", {nom: "Yoann, Vehlmann"});
    this.auteurs.set("64", {nom: "Morvan, Yann, Munuera"});
    this.auteurs.set("65", {nom: "Franquin, Wilbur, Conrad"});
    this.auteurs.set("66", {nom: "Geluck"});
    this.auteurs.set("67", {nom: "Astier, Dupré"});
    this.auteurs.set("68", {nom: "Rosinski, Van Hamme"});
    this.auteurs.set("69", {nom: "Coyote"});
    this.auteurs.set("70", {nom: "Bar2"});
    this.auteurs.set("71", {nom: "Fane"});
    this.auteurs.set("72", {nom: "Jenfèvre, Perna"});
    this.auteurs.set("74", {nom: "Arleston, Hubsch, Lebreton"});
    this.auteurs.set("75", {nom: "Gaudin, Danard, Fuentes"});
    this.auteurs.set("76", {nom: "Arleston, Tota"});
    this.auteurs.set("77", {nom: "Francq, Van Hamme"});
    this.auteurs.set("78", {nom: "Marcello, Maric"});
    this.auteurs.set("79", {nom: "Cauvin, Hardy"});
    this.auteurs.set("80", {nom: "De Groot, Turk"});
    this.auteurs.set("81", {nom: "Rodolphe, Rouge"});
    this.auteurs.set("82", {nom: "Rodolphe, Allot"});
    this.auteurs.set("83", {nom: "Tybo, Goupil"});
    this.auteurs.set("84", {nom: "Tolkien"});
    this.auteurs.set("85", {nom: "Li, Danverre"});
    this.auteurs.set("86", {nom: "Kubert"});
    this.auteurs.set("87", {nom: "Warnant"});
    this.auteurs.set("88", {nom: "Gazzotti"});
    this.auteurs.set("89", {nom: "Reynès, Brrémaud, Toulon"});
    this.auteurs.set("91", {nom: "Servais"});
    this.auteurs.set("92", {nom: "Font"});
    this.auteurs.set("93", {nom: "Charlier, Giraud"});
    this.auteurs.set("94", {nom: "Crisse, Keramidas"});
    this.auteurs.set("95", {nom: "Arleston, Floch"});
    this.auteurs.set("96", {nom: "Bourjac, Gadioux"});
    this.auteurs.set("97", {nom: "Franquin, Jidéhem"});
    this.auteurs.set("98", {nom: "Franquin, Jidéhem, Delporte"});
    this.auteurs.set("99", {nom: "Chaland"});
    this.auteurs.set("100", {nom: "Corbeyran, Guerineau, Merlet"});
    this.auteurs.set("101", {nom: "Corbeyran, Guerineau"});
    this.auteurs.set("102", {nom: "Jacobs"});
    this.auteurs.set("103", {nom: "Vance, Van Hamme"});
    this.auteurs.set("104", {nom: "Giraud, Van Hamme"});
    this.auteurs.set("109", {nom: "Aleston, Tota, Lamirand"});
    this.auteurs.set("108", {nom: "Arleston, Hubsch, MelanÃ¿n"});
    this.auteurs.set("110", {nom: "Gaudin, Danard, Guillo"});
    this.auteurs.set("111", {nom: "Delaf, Dubuc"});
    this.auteurs.set("112", {nom: "Roulot, Martinage"});
    this.auteurs.set("113", {nom: "Laudec, Cauvin"});
    this.auteurs.set("114", {nom: "Matt, Groening"});
    this.auteurs.set("115", {nom: "Midam"});
    this.auteurs.set("116", {nom: "Beka, Poupard"});
    this.auteurs.set("117", {nom: "Godi, Fidrou"});
    this.auteurs.set("118", {nom: "Davis"});
    this.auteurs.set("122", {nom: "Djian, Legrand, Etien"});
    this.auteurs.set("127", {nom: "Convard, Falque"});
    this.auteurs.set("129", {nom: "Sobral"});
    this.auteurs.set("130", {nom: "Gaby, Dzack"});
    this.auteurs.set("131", {nom: "Richez, Cazenove, Bloz"});
    this.auteurs.set("132", {nom: "Clarke, Gilson"});
    this.auteurs.set("133", {nom: "Roba"});
    this.auteurs.set("134", {nom: "Roba"});
    this.auteurs.set("135", {nom: "Domon"});
    this.auteurs.set("136", {nom: "Gursel"});
    this.auteurs.set("137", {nom: "Djian, Corbet"});
    this.auteurs.set("138", {nom: "Miniac"});
    this.auteurs.set("139", {nom: "Coppée"});
    this.auteurs.set("140", {nom: "Veys, Toulon, Guenard"});
    this.auteurs.set("141", {nom: "Midam, Adam"});
    this.auteurs.set("142", {nom: "Achdé, Pennac"});
    this.auteurs.set("143", {nom: "Vrancken, Desberg"});
    this.auteurs.set("144", {nom: "Dubois, Fourquemin"});
    this.auteurs.set("145", {nom: "Lang, Poinsot"});
    this.auteurs.set("146", {nom: "Dufaux, Aubin, Schréder"});
    this.auteurs.set("147", {nom: "Achdé"});
    this.auteurs.set("148", {nom: "Istin, Duarte, Saito"});
    this.auteurs.set("149", {nom: "Bar2, Fane"});
    this.auteurs.set("150", {nom: "Funcken"});
    this.auteurs.set("151", {nom: "Luz"});
    this.auteurs.set("153", {nom: "Nerac, Djian, Teron, Kangaro"});
    this.auteurs.set("154", {nom: "Desberg, Lalor"});
    this.auteurs.set("155", {nom: "Nob"});
    this.auteurs.set("156", {nom: "Barjam"});
    this.auteurs.set("157", {nom: "Francq, Giaconetti"});
    this.auteurs.set("158", {nom: "Le Tendre, Loisel, Etien"});
    this.auteurs.set("159", {nom: "60 this.auteurs"});
  
  
  
    //liste this.albums
   
    this.albums.set("1", {titre: "Croc vert", numero: "23", idSerie: "6", idAuteur: "13", prix: "24.50"});
    this.albums.set("2", {titre: "Machine qui rêve", numero: "46", idSerie: "2", idAuteur: "14", prix: "23.50"});
    this.albums.set("3", {titre: "La guerre des gloutons (II)", numero: "13", idSerie: "16", idAuteur: "11", prix: "14.50"});
    this.albums.set("4", {titre: "Le jour du Mayflower", numero: "20", idSerie: "10", idAuteur: "16", prix: "12"});
    this.albums.set("6", {titre: "La griffe de Rome", numero: "03", idSerie: "17", idAuteur: "9", prix: "14.50"});
    this.albums.set("7", {titre: "Le Waltras", numero: "07", idSerie: "13", idAuteur: "8", prix: "15.20"});
    this.albums.set("8", {titre: "Le sang des comètes", numero: "08", idSerie: "18", idAuteur: "10", prix: "14.50"});
    this.albums.set("9", {titre: "La bête fabuleuse", numero: "08", idSerie: "9", idAuteur: "10", prix: "14.50"});
    this.albums.set("10", {titre: "(Avant la quête) L'ami Javin", numero: "A01", idSerie: "22", idAuteur: "18", prix: "14.10"});
    this.albums.set("11", {titre: "Le sens de la vie", numero: "12", idSerie: "23", idAuteur: "19", prix: "10.50"});
    this.albums.set("13", {titre: "Mes meilleurs copains", numero: "11", idSerie: "23", idAuteur: "19", prix: "11"});
    this.albums.set("15", {titre: "Nadia se marie", numero: "10", idSerie: "23", idAuteur: "19", prix: "12.50"});
    this.albums.set("18", {titre: "La loi du préau", numero: "09", idSerie: "23", idAuteur: "19", prix: "10.50"});
    this.albums.set("19", {titre: "Gare aux garous", numero: "03", idSerie: "24", idAuteur: "20", prix: "11.40"});
    this.albums.set("20", {titre: "Le Walou Walou ancestral", numero: "02", idSerie: "24", idAuteur: "20", prix: "13.90"});
    this.albums.set("21", {titre: "Les runes de Gartagueul", numero: "01", idSerie: "24", idAuteur: "20", prix: "14.20"});
    this.albums.set("22", {titre: "Le temple de Boavista", numero: "08", idSerie: "6", idAuteur: "21", prix: "10.95"});
    this.albums.set("23", {titre: "L'or de Boavista", numero: "07", idSerie: "6", idAuteur: "21", prix: "12"});
    this.albums.set("24", {titre: "Fordlandia", numero: "06", idSerie: "6", idAuteur: "21", prix: "9.98"});
    this.albums.set("25", {titre: "Baby Prinz", numero: "05", idSerie: "6", idAuteur: "21", prix: "11"});
    this.albums.set("26", {titre: "Le pollen du monte Urticando", numero: "04", idSerie: "6", idAuteur: "21", prix: "10.25"});
    this.albums.set("27", {titre: "Mars le noir", numero: "03", idSerie: "6", idAuteur: "21", prix: "12.20"});
    this.albums.set("28", {titre: "Le bébé du bout du monde", numero: "02", idSerie: "6", idAuteur: "22", prix: "11.33"});
    this.albums.set("29", {titre: "La queue du Marsupilami", numero: "01", idSerie: "6", idAuteur: "22", prix: "10.47"});
    this.albums.set("30", {titre: "Capturez un Marsupilami !", numero: "00", idSerie: "6", idAuteur: "23", prix: "10.54"});
    this.albums.set("31", {titre: "Le rayon noir", numero: "44", idSerie: "2", idAuteur: "14", prix: "9.98"});
    this.albums.set("32", {titre: "Luna fatale", numero: "45", idSerie: "2", idAuteur: "14", prix: "10.00"});
    this.albums.set("33", {titre: "A Moscou", numero: "42", idSerie: "2", idAuteur: "14", prix: "10.95"});
    this.albums.set("34", {titre: "Vito la déveine", numero: "43", idSerie: "2", idAuteur: "14", prix: "10.42"});
    this.albums.set("35", {titre: "La vallée des bannis", numero: "41", idSerie: "2", idAuteur: "14", prix: "11.50"});
    this.albums.set("36", {titre: "La frousse aux trousses", numero: "40", idSerie: "2", idAuteur: "14", prix: "12.50"});
    this.albums.set("37", {titre: "A New York", numero: "39", idSerie: "2", idAuteur: "14", prix: "10.50"});
    this.albums.set("38", {titre: "Le réveil du Z", numero: "37", idSerie: "2", idAuteur: "14", prix: "10.45"});
    this.albums.set("39", {titre: "L'horloger de la comète", numero: "36", idSerie: "2", idAuteur: "14", prix: "10.26"});
    this.albums.set("40", {titre: "Mise à jour", numero: "03", idSerie: "25", idAuteur: "24", prix: "10"});
    this.albums.set("41", {titre: "Qui arrêtera Cyanure ?", numero: "35", idSerie: "2", idAuteur: "14", prix: "11.23"});
    this.albums.set("42", {titre: "Aventure en Australie", numero: "34", idSerie: "2", idAuteur: "14", prix: "12.60"});
    this.albums.set("43", {titre: "Virus", numero: "33", idSerie: "2", idAuteur: "14", prix: "14.20"});
    this.albums.set("44", {titre: "Des haricots partout", numero: "29", idSerie: "2", idAuteur: "25", prix: "14.50"});
    this.albums.set("45", {titre: "Kodo le tyran", numero: "28", idSerie: "2", idAuteur: "25", prix: "14.50"});
    this.albums.set("46", {titre: "L'Ankou", numero: "27", idSerie: "2", idAuteur: "25", prix: "13.50"});
    this.albums.set("47", {titre: "Du cidre pour les étoiles", numero: "26", idSerie: "2", idAuteur: "25", prix: "10.50"});
    this.albums.set("48", {titre: "Le gri-gri du Niokolo-Koba", numero: "25", idSerie: "2", idAuteur: "25", prix: "11.80"});
    this.albums.set("49", {titre: "Tembo tabou", numero: "24", idSerie: "2", idAuteur: "26", prix: "14.50"});
    this.albums.set("50", {titre: "Tora torapa", numero: "23", idSerie: "2", idAuteur: "25", prix: "12.50"});
    this.albums.set("51", {titre: "L'abbaye truquée", numero: "22", idSerie: "2", idAuteur: "25", prix: "13.50"});
    this.albums.set("52", {titre: "Du glucose pour Noémie", numero: "21", idSerie: "2", idAuteur: "25", prix: "14.00"});
    this.albums.set("53", {titre: "Le faiseur d'or", numero: "20", idSerie: "2", idAuteur: "25", prix: "11.50"});
    this.albums.set("54", {titre: "Panade à Champignac", numero: "19", idSerie: "2", idAuteur: "23", prix: "12.50"});
    this.albums.set("55", {titre: "QRN sur Bretzelburg", numero: "18", idSerie: "2", idAuteur: "27", prix: "12.50"});
    this.albums.set("56", {titre: "Spirou et les hommes-bulles", numero: "17", idSerie: "2", idAuteur: "28", prix: "11.50"});
    this.albums.set("57", {titre: "3615 code bavure", numero: "02", idSerie: "26", idAuteur: "29", prix: "12.50"});
    this.albums.set("58", {titre: "Premières mesures", numero: "01", idSerie: "27", idAuteur: "30", prix: "10.50"});
    this.albums.set("59", {titre: "L'affaire tournesol", numero: "18", idSerie: "28", idAuteur: "31", prix: "11.60"});
    this.albums.set("60", {titre: "Connection", numero: "00", idSerie: "29", idAuteur: "32", prix: "15.42"});
    this.albums.set("61", {titre: "Chez les castors", numero: "03", idSerie: "30", idAuteur: "33", prix: "9.80"});
    this.albums.set("62", {titre: "Destination Duralex", numero: "01", idSerie: "31", idAuteur: "34", prix: "10.56"});
    this.albums.set("63", {titre: "Le ciel lui tombe sur la tête", numero: "33", idSerie: "32", idAuteur: "35", prix: "10.50"});
    this.albums.set("64", {titre: "Astérix chez les belges", numero: "24", idSerie: "32", idAuteur: "35", prix: "12.50"});
    this.albums.set("65", {titre: "Astérix aux jeux olympiques", numero: "12", idSerie: "32", idAuteur: "35", prix: "12.55"});
    this.albums.set("66", {titre: "Obélix et compagnie", numero: "23", idSerie: "32", idAuteur: "35", prix: "11.80"});
    this.albums.set("67", {titre: "Astérix et Latraviata", numero: "31", idSerie: "32", idAuteur: "35", prix: "13.50"});
    this.albums.set("68", {titre: "Le cadeau de César", numero: "21", idSerie: "32", idAuteur: "35", prix: "10.50"});
    this.albums.set("70", {titre: "Astérix chez les Bretons", numero: "08", idSerie: "32", idAuteur: "35", prix: "11.50"});
    this.albums.set("71", {titre: "Astérix et les Goths", numero: "03", idSerie: "32", idAuteur: "35", prix: "12.00"});
    this.albums.set("72", {titre: "L'échelle de la terre", numero: "00", idSerie: "33", idAuteur: "36", prix: "11.50"});
    this.albums.set("73", {titre: "La zizanie", numero: "15", idSerie: "32", idAuteur: "35", prix: "12.60"});
    this.albums.set("74", {titre: "Six foies neufs", numero: "08", idSerie: "34", idAuteur: "37", prix: "14.50"});
    this.albums.set("75", {titre: "L'esprit du lac", numero: "01", idSerie: "35", idAuteur: "38", prix: "13.10"});
    this.albums.set("76", {titre: "Destins", numero: "06", idSerie: "3", idAuteur: "39", prix: "12.50"});
    this.albums.set("77", {titre: "Lâchez-moi le slip", numero: "08", idSerie: "23", idAuteur: "19", prix: "10.40"});
    this.albums.set("78", {titre: "Le miracle de la vie", numero: "07", idSerie: "23", idAuteur: "19", prix: "11.50"});
    this.albums.set("80", {titre: "Tchô, monde cruel", numero: "06", idSerie: "23", idAuteur: "19", prix: "12.30"});
    this.albums.set("81", {titre: "Et le derrière des choses", numero: "05", idSerie: "23", idAuteur: "19", prix: "11.50"});
    this.albums.set("82", {titre: "C'est pô juste ...", numero: "04", idSerie: "23", idAuteur: "19", prix: "10.50"});
    this.albums.set("83", {titre: "Ca épate les filles ...", numero: "03", idSerie: "23", idAuteur: "19", prix: "14.50"});
    this.albums.set("84", {titre: "L'Amour, c'est pô propre ...", numero: "02", idSerie: "23", idAuteur: "19", prix: "13.80"});
    this.albums.set("85", {titre: "L'intégrale", numero: "14", idSerie: "36", idAuteur: "40", prix: "12.60"});
    this.albums.set("86", {titre: "L'étrange réveil du schtroumpf paresseux", numero: "15", idSerie: "37", idAuteur: "41", prix: "10.50"});
    this.albums.set("87", {titre: "Le bandit manchot", numero: "78", idSerie: "38", idAuteur: "42", prix: "9.98"});
    this.albums.set("88", {titre: "Le fil qui chante", numero: "46", idSerie: "38", idAuteur: "43", prix: "10.50"});
    this.albums.set("89", {titre: "L'amnésie des Dalton", numero: "98", idSerie: "38", idAuteur: "44", prix: "10.50"});
    this.albums.set("90", {titre: "Dalton city", numero: "49", idSerie: "38", idAuteur: "43", prix: "10.60"});
    this.albums.set("91", {titre: "La belle province", numero: "110", idSerie: "38", idAuteur: "45", prix: "10.80"});
    this.albums.set("92", {titre: "Ame rouge", numero: "03", idSerie: "39", idAuteur: "46", prix: "11.50"});
    this.albums.set("93", {titre: "Arctic-Nation", numero: "02", idSerie: "39", idAuteur: "46", prix: "11.00"});
    this.albums.set("94", {titre: "Quelque part entre les ombres", numero: "01", idSerie: "39", idAuteur: "46", prix: "10.50"});
    this.albums.set("95", {titre: "L'invasion des envahisseurs", numero: "05", idSerie: "24", idAuteur: "20", prix: "12.50"});
    this.albums.set("96", {titre: "Le grand tournoi", numero: "04", idSerie: "24", idAuteur: "20", prix: "13.50"});
    this.albums.set("97", {titre: "Red monster", numero: "21", idSerie: "6", idAuteur: "13", prix: "10.55"});
    this.albums.set("98", {titre: "Viva Palombia !", numero: "20", idSerie: "6", idAuteur: "13", prix: "11.50"});
    this.albums.set("99", {titre: "Magie blanche", numero: "19", idSerie: "6", idAuteur: "13", prix: "14.50"});
    this.albums.set("100", {titre: "Robinson académy", numero: "18", idSerie: "6", idAuteur: "47", prix: "13.80"});
    this.albums.set("101", {titre: "L'orchidée des Chahutas", numero: "17", idSerie: "6", idAuteur: "47", prix: "12.10"});
    this.albums.set("102", {titre: "Tous en piste", numero: "16", idSerie: "6", idAuteur: "47", prix: "11.50"});
    this.albums.set("103", {titre: "C'est quoi ce cirque !?", numero: "15", idSerie: "6", idAuteur: "47", prix: "9.50"});
    this.albums.set("104", {titre: "Un fils en or", numero: "14", idSerie: "6", idAuteur: "48", prix: "11.50"});
    this.albums.set("105", {titre: "Le défilé du jaguar", numero: "13", idSerie: "6", idAuteur: "49", prix: "10.50"});
    this.albums.set("106", {titre: "Trafic à Jollywood", numero: "12", idSerie: "6", idAuteur: "50", prix: "14.30"});
    this.albums.set("107", {titre: "Houba banana", numero: "11", idSerie: "6", idAuteur: "51", prix: "10.50"});
    this.albums.set("108", {titre: "Rififi en Palombie", numero: "10", idSerie: "6", idAuteur: "51", prix: "11.70"});
    this.albums.set("109", {titre: "Le papillon des cimes", numero: "09", idSerie: "6", idAuteur: "21", prix: "10.90"});
    this.albums.set("110", {titre: "L'ombre du Z", numero: "16", idSerie: "2", idAuteur: "52", prix: "11.99"});
    this.albums.set("111", {titre: "Z comme Zorglub", numero: "15", idSerie: "2", idAuteur: "52", prix: "12.70"});
    this.albums.set("112", {titre: "Le voyageur du mésozoïque", numero: "13", idSerie: "2", idAuteur: "23", prix: "11.50"});
    this.albums.set("113", {titre: "Le nid des marsupilamis", numero: "12", idSerie: "2", idAuteur: "23", prix: "12.50"});
    this.albums.set("115", {titre: "Le gorille à bonne mine", numero: "11", idSerie: "2", idAuteur: "23", prix: "11.70"});
    this.albums.set("116", {titre: "Les pirates du silence", numero: "10", idSerie: "2", idAuteur: "23", prix: "10.90"});
    this.albums.set("117", {titre: "Le repaire de la murène", numero: "09", idSerie: "2", idAuteur: "23", prix: "10.50"});
    this.albums.set("118", {titre: "La mauvaise tête", numero: "08", idSerie: "2", idAuteur: "23", prix: "11"});
    this.albums.set("119", {titre: "La corne de rhinocéros", numero: "06", idSerie: "2", idAuteur: "23", prix: "12.50"});
    this.albums.set("120", {titre: "Les voleurs du marsupilami", numero: "05", idSerie: "2", idAuteur: "23", prix: "11.50"});
    this.albums.set("121", {titre: "Spirou et les héritiers", numero: "04", idSerie: "2", idAuteur: "23", prix: "120.50"});
    this.albums.set("122", {titre: "Les chapeaux noirs", numero: "03", idSerie: "2", idAuteur: "53", prix: "130"});
    this.albums.set("125", {titre: "Il y a un sorcier à Champignac", numero: "02", idSerie: "2", idAuteur: "23", prix: "160"});
    this.albums.set("124", {titre: "4 aventures de Spirou et Fantasio", numero: "01", idSerie: "2", idAuteur: "23", prix: "210"});
    this.albums.set("126", {titre: "Radar le robot", numero: "HS2", idSerie: "2", idAuteur: "23", prix: "12.50"});
    this.albums.set("127", {titre: "L'héritage", numero: "HS1", idSerie: "2", idAuteur: "23", prix: "11.50"});
    this.albums.set("128", {titre: "La jeunesse de Spirou", numero: "38", idSerie: "2", idAuteur: "14", prix: "12.50"});
    this.albums.set("129", {titre: "Fais de beaux rêves !", numero: "13", idSerie: "5", idAuteur: "14", prix: "11.00"});
    this.albums.set("130", {titre: "C'est du joli !", numero: "12", idSerie: "5", idAuteur: "14", prix: "15.50"});
    this.albums.set("131", {titre: "Tu ne s'ras jamais grand !", numero: "11", idSerie: "5", idAuteur: "14", prix: "14.50"});
    this.albums.set("132", {titre: "Tu comprendras quand tu s'ras grand !", numero: "10", idSerie: "5", idAuteur: "14", prix: "11.50"});
    this.albums.set("133", {titre: "T'as qu'à t'retenir !", numero: "08", idSerie: "5", idAuteur: "14", prix: "16.50"});
    this.albums.set("134", {titre: "Demande à ton père !", numero: "07", idSerie: "5", idAuteur: "14", prix: "17.50"});
    this.albums.set("135", {titre: "N'oublie pas ta capuche !", numero: "06", idSerie: "5", idAuteur: "14", prix: "12.50"});
    this.albums.set("136", {titre: "C'est pas de ton âge !", numero: "09", idSerie: "5", idAuteur: "14", prix: "11.50"});
    this.albums.set("137", {titre: "Mais ! Quest-ce que tu fabriques ?", numero: "03", idSerie: "5", idAuteur: "14", prix: "12.50"});
    this.albums.set("138", {titre: "\"Merci\" qui ?", numero: "05", idSerie: "5", idAuteur: "14", prix: "12.90"});
    this.albums.set("139", {titre: "C'est pour ton bien !", numero: "04", idSerie: "5", idAuteur: "14", prix: "12.60"});
    this.albums.set("140", {titre: "Tu veux mon doigt ?", numero: "02", idSerie: "5", idAuteur: "14", prix: "13.50"});
    this.albums.set("141", {titre: "Dis bonjour à la dame !", numero: "01", idSerie: "5", idAuteur: "14", prix: "11.50"});
    this.albums.set("142", {titre: "Crochet", numero: "05", idSerie: "3", idAuteur: "39", prix: "10.50"});
    this.albums.set("143", {titre: "Mains rouges", numero: "04", idSerie: "3", idAuteur: "39", prix: "14.56"});
    this.albums.set("144", {titre: "Tempête", numero: "03", idSerie: "3", idAuteur: "39", prix: "12.50"});
    this.albums.set("145", {titre: "Opikanoba", numero: "02", idSerie: "3", idAuteur: "39", prix: "14.50"});
    this.albums.set("146", {titre: "Londres", numero: "01", idSerie: "3", idAuteur: "39", prix: "12.50"});
    this.albums.set("149", {titre: "L'oeuf des ténèbres", numero: "04", idSerie: "22", idAuteur: "56", prix: "13.50"});
    this.albums.set("150", {titre: "Le Rige", numero: "03", idSerie: "22", idAuteur: "56", prix: "10.50"});
    this.albums.set("151", {titre: "Le temple de l'oubli", numero: "02", idSerie: "22", idAuteur: "56", prix: "11.50"});
    this.albums.set("152", {titre: "La conque de Ramor", numero: "01", idSerie: "22", idAuteur: "56", prix: "14.50"});
    this.albums.set("153", {titre: "(Avant la quête) Le grimoire des dieux", numero: "A02", idSerie: "22", idAuteur: "55", prix: "12.50"});
    this.albums.set("154", {titre: "(Avant la quête) La voie du Rige", numero: "A03", idSerie: "22", idAuteur: "54", prix: "10.50"});
    this.albums.set("155", {titre: "Gnomes de Troy", numero: "00", idSerie: "40", idAuteur: "57", prix: "11.60"});
    this.albums.set("156", {titre: "t.2", numero: "02", idSerie: "41", idAuteur: "40", prix: "12.45"});
    this.albums.set("157", {titre: "t.1", numero: "01", idSerie: "41", idAuteur: "40", prix: "12.50"});
    this.albums.set("159", {titre: "Reporter du \"petit vingtième\" au pays des soviets", numero: "01", idSerie: "28", idAuteur: "31", prix: "45.50"});
    this.albums.set("160", {titre: "La forêt suspendue", numero: "01", idSerie: "42", idAuteur: "58", prix: "15.50"});
    this.albums.set("161", {titre: "Les 13 transgressions", numero: "21", idSerie: "43", idAuteur: "59", prix: "14.50"});
    this.albums.set("162", {titre: "Le prisonnier du Bouddha", numero: "14", idSerie: "2", idAuteur: "52", prix: "13.50"});
    this.albums.set("163", {titre: "Dieu, le sexe et les bretelles", numero: "01", idSerie: "23", idAuteur: "19", prix: "15.50"});
    this.albums.set("164", {titre: "t.4", numero: "04", idSerie: "41", idAuteur: "40", prix: "14.90"});
    this.albums.set("165", {titre: "Morituri te salutant", numero: "01", idSerie: "44", idAuteur: "60", prix: "11.20"});
    this.albums.set("166", {titre: "Le mariage de Rahan", numero: "00", idSerie: "36", idAuteur: "40", prix: "10.50"});
    this.albums.set("167", {titre: "Le maître des fauves", numero: "06", idSerie: "36", idAuteur: "40", prix: "9.50"});
    this.albums.set("168", {titre: "Les hommes sans cheveux", numero: "05", idSerie: "36", idAuteur: "40", prix: "9"});
    this.albums.set("169", {titre: "Les chasseurs de foudre", numero: "04", idSerie: "36", idAuteur: "40", prix: "10.50"});
    this.albums.set("170", {titre: "t.3", numero: "03", idSerie: "41", idAuteur: "40", prix: "11"});
    this.albums.set("171", {titre: "Paris sous-Seine", numero: "47", idSerie: "2", idAuteur: "61", prix: "10.50"});
    this.albums.set("172", {titre: "L'homme qui ne voulait pas mourrir", numero: "48", idSerie: "2", idAuteur: "61", prix: "9.50"});
    this.albums.set("173", {titre: "La ceinture du grand froid", numero: "30", idSerie: "2", idAuteur: "62", prix: "12.60"});
    this.albums.set("174", {titre: "Alerte aux zorkons", numero: "51", idSerie: "2", idAuteur: "63", prix: "14.70"});
    this.albums.set("175", {titre: "La face cachée du Z", numero: "52", idSerie: "2", idAuteur: "63", prix: "13.50"});
    this.albums.set("176", {titre: "Les faiseurs de silence", numero: "32", idSerie: "2", idAuteur: "62", prix: "12.80"});
    this.albums.set("177", {titre: "La boîte noire", numero: "31", idSerie: "2", idAuteur: "62", prix: "10.50"});
    this.albums.set("178", {titre: "Aux sources du Z", numero: "50", idSerie: "2", idAuteur: "64", prix: "11.50"});
    this.albums.set("179", {titre: "Le dictateur et le champignon", numero: "07", idSerie: "2", idAuteur: "23", prix: "12.50"});
    this.albums.set("180", {titre: "Sortie de l'oeuf", numero: "01", idSerie: "45", idAuteur: "65", prix: "12.60"});
    this.albums.set("181", {titre: "Le chat", numero: "01", idSerie: "46", idAuteur: "66", prix: "12.70"});
    this.albums.set("182", {titre: "L'affaire le chat", numero: "11", idSerie: "46", idAuteur: "66", prix: "12.80"});
    this.albums.set("183", {titre: "Perceval et le dragon d'Airain", numero: "04", idSerie: "47", idAuteur: "67", prix: "12.90"});
    this.albums.set("184", {titre: "L'armée du Nécromant", numero: "01", idSerie: "47", idAuteur: "67", prix: "10.90"});
    this.albums.set("185", {titre: "L'énigme du coffre", numero: "03", idSerie: "47", idAuteur: "67", prix: "9.98"});
    this.albums.set("186", {titre: "Les sièges de transport", numero: "02", idSerie: "47", idAuteur: "67", prix: "11.46"});
    this.albums.set("187", {titre: "Le jugement", numero: "03", idSerie: "48", idAuteur: "68", prix: "12.58"});
    this.albums.set("188", {titre: "Le choisi", numero: "02", idSerie: "48", idAuteur: "68", prix: "14.67"});
    this.albums.set("189", {titre: "Le commandement", numero: "01", idSerie: "48", idAuteur: "68", prix: "17.52"});
    this.albums.set("199", {titre: "Histoire trolles", numero: "01", idSerie: "16", idAuteur: "11", prix: "16.95"});
    this.albums.set("191", {titre: "Litteul Kévin T2", numero: "02", idSerie: "49", idAuteur: "69", prix: "10.54"});
    this.albums.set("193", {titre: "Litteul Kévin T3", numero: "03", idSerie: "49", idAuteur: "69", prix: "14.37"});
    this.albums.set("194", {titre: "Litteul Kévin T4", numero: "04", idSerie: "49", idAuteur: "69", prix: "10.62"});
    this.albums.set("195", {titre: "Litteul Kévin T5", numero: "05", idSerie: "49", idAuteur: "69", prix: "10.50"});
    this.albums.set("196", {titre: "Litteul Kévin T6", numero: "06", idSerie: "49", idAuteur: "69", prix: "10.50"});
    this.albums.set("197", {titre: "Litteul Kévin T7", numero: "07", idSerie: "49", idAuteur: "69", prix: "15.50"});
    this.albums.set("198", {titre: "Litteul Kévin T1", numero: "01", idSerie: "49", idAuteur: "69", prix: "12.50"});
    this.albums.set("200", {titre: "Le scalp du vénérable", numero: "02", idSerie: "16", idAuteur: "11", prix: "11.50"});
    this.albums.set("201", {titre: "Comme un vol de pétaures", numero: "03", idSerie: "16", idAuteur: "11", prix: "10.50"});
    this.albums.set("202", {titre: "Les maléfices de la thaumaturge", numero: "05", idSerie: "16", idAuteur: "11", prix: "10.50"});
    this.albums.set("203", {titre: "Trolls dans la brume", numero: "06", idSerie: "16", idAuteur: "11", prix: "12.50"});
    this.albums.set("204", {titre: "Plume de sage", numero: "07", idSerie: "16", idAuteur: "11", prix: "12.50"});
    this.albums.set("205", {titre: "Rock'n Troll attitude", numero: "08", idSerie: "16", idAuteur: "11", prix: "14.50"});
    this.albums.set("206", {titre: "Les prisonniers du Darshan (I)", numero: "09", idSerie: "16", idAuteur: "11", prix: "11.50"});
    this.albums.set("207", {titre: "Les prisonniers du Darshan (II)", numero: "10", idSerie: "16", idAuteur: "11", prix: "12.50"});
    this.albums.set("208", {titre: "Trollympiades", numero: "11", idSerie: "16", idAuteur: "11", prix: "10.50"});
    this.albums.set("209", {titre: "Sang famille (I)", numero: "12", idSerie: "16", idAuteur: "11", prix: "16.50"});
    this.albums.set("210", {titre: "Joe bar team Tome 1", numero: "01", idSerie: "50", idAuteur: "70", prix: "14.50"});
    this.albums.set("211", {titre: "Joe bar team Tome 2", numero: "02", idSerie: "50", idAuteur: "71", prix: "12.50"});
    this.albums.set("212", {titre: "Joe bar team Tome 3", numero: "03", idSerie: "50", idAuteur: "71", prix: "13.65"});
    this.albums.set("213", {titre: "Joe bar team Tome 4", numero: "04", idSerie: "50", idAuteur: "71", prix: "12.54"});
    this.albums.set("214", {titre: "Joe bar team Tome 5", numero: "05", idSerie: "50", idAuteur: "70", prix: "11.98"});
    this.albums.set("215", {titre: "Joe bar team Tome 6", numero: "06", idSerie: "50", idAuteur: "71", prix: "10.65"});
    this.albums.set("216", {titre: "Joe bar team Tome 7", numero: "07", idSerie: "50", idAuteur: "72", prix: "11.78"});
    this.albums.set("218", {titre: "Le réveil de Merlin", numero: "01", idSerie: "17", idAuteur: "9", prix: "11.65"});
    this.albums.set("219", {titre: "Le Sidhe aux mille charmes", numero: "02", idSerie: "17", idAuteur: "9", prix: "10.50"});
    this.albums.set("220", {titre: "La colère de Merlin", numero: "04", idSerie: "17", idAuteur: "74", prix: "11.50"});
    this.albums.set("221", {titre: "Le masque", numero: "01", idSerie: "13", idAuteur: "8", prix: "10.65"});
    this.albums.set("222", {titre: "L'ombre de Dompour", numero: "02", idSerie: "13", idAuteur: "8", prix: "10.50"});
    this.albums.set("223", {titre: "L'autre côté", numero: "03", idSerie: "13", idAuteur: "75", prix: "11.50"});
    this.albums.set("224", {titre: "Bragal", numero: "04", idSerie: "13", idAuteur: "8", prix: "12.23"});
    this.albums.set("225", {titre: "Le thaumaturge", numero: "05", idSerie: "13", idAuteur: "8", prix: "1064"});
    this.albums.set("226", {titre: "La femme-vie", numero: "06", idSerie: "13", idAuteur: "8", prix: "11.65"});
    this.albums.set("227", {titre: "Exil à port-fleury", numero: "01", idSerie: "51", idAuteur: "76", prix: "12.54"});
    this.albums.set("228", {titre: "Un, deux... Troy", numero: "01", idSerie: "18", idAuteur: "10", prix: "10.50"});
    this.albums.set("229", {titre: "Les tours de Meirrion", numero: "02", idSerie: "18", idAuteur: "10", prix: "11.50"});
    this.albums.set("230", {titre: "Les sables d'Abraxar", numero: "03", idSerie: "18", idAuteur: "10", prix: "11.50"});
    this.albums.set("231", {titre: "Les buveurs de mondes", numero: "04", idSerie: "18", idAuteur: "10", prix: "11.50"});
    this.albums.set("232", {titre: "La chevauchée des bactéries", numero: "05", idSerie: "18", idAuteur: "10", prix: "11.50"});
    this.albums.set("233", {titre: "Le râle du flibustier", numero: "06", idSerie: "18", idAuteur: "10", prix: "12.65"});
    this.albums.set("234", {titre: "Le secret des Dolphantes", numero: "07", idSerie: "18", idAuteur: "10", prix: "12.65"});
    this.albums.set("235", {titre: "Les pétaures se cachent pour mourir", numero: "07", idSerie: "9", idAuteur: "10", prix: "12.65"});
    this.albums.set("236", {titre: "L'ivoire du Magohamoth", numero: "01", idSerie: "9", idAuteur: "10", prix: "12.65"});
    this.albums.set("237", {titre: "Thanos l'incongru", numero: "02", idSerie: "9", idAuteur: "10", prix: "10.65"});
    this.albums.set("238", {titre: "Castel or-azur", numero: "03", idSerie: "9", idAuteur: "10", prix: "10.65"});
    this.albums.set("239", {titre: "Le paladin d'Eckmül", numero: "04", idSerie: "9", idAuteur: "10", prix: "10.65"});
    this.albums.set("240", {titre: "Le frisson de l'haruspice", numero: "05", idSerie: "9", idAuteur: "10", prix: "11.24"});
    this.albums.set("241", {titre: "Cixi Impératrice", numero: "06", idSerie: "9", idAuteur: "10", prix: "11.24"});
    this.albums.set("242", {titre: "L'héritier", numero: "01", idSerie: "12", idAuteur: "77", prix: "11.24"});
    this.albums.set("243", {titre: "Le groupe W", numero: "02", idSerie: "12", idAuteur: "77", prix: "10.67"});
    this.albums.set("244", {titre: "O.P.A.", numero: "03", idSerie: "12", idAuteur: "77", prix: "10.67"});
    this.albums.set("245", {titre: "Business blues", numero: "04", idSerie: "12", idAuteur: "77", prix: "10.67"});
    this.albums.set("246", {titre: "H", numero: "05", idSerie: "12", idAuteur: "77", prix: "10.67"});
    this.albums.set("247", {titre: "Dutch Connection", numero: "06", idSerie: "12", idAuteur: "77", prix: "10.67"});
    this.albums.set("248", {titre: "La forteresse de Makiling", numero: "07", idSerie: "12", idAuteur: "77", prix: "12.65"});
    this.albums.set("249", {titre: "L'heure du tigre", numero: "08", idSerie: "12", idAuteur: "77", prix: "12.65"});
    this.albums.set("250", {titre: "Voir Venise ...", numero: "09", idSerie: "12", idAuteur: "77", prix: "12.65"});
    this.albums.set("251", {titre: "... et mourir", numero: "10", idSerie: "12", idAuteur: "77", prix: "12.65"});
    this.albums.set("252", {titre: "Golden gate", numero: "11", idSerie: "12", idAuteur: "77", prix: "11.45"});
    this.albums.set("253", {titre: "Shadow", numero: "12", idSerie: "12", idAuteur: "77", prix: "11.45"});
    this.albums.set("254", {titre: "Le prix de l'argent", numero: "13", idSerie: "12", idAuteur: "77", prix: "10.26"});
    this.albums.set("255", {titre: "La loi du dollar", numero: "14", idSerie: "12", idAuteur: "77", prix: "10.26"});
    this.albums.set("256", {titre: "Les trois yeux des gardiens du Tao", numero: "15", idSerie: "12", idAuteur: "77", prix: "10.26"});
    this.albums.set("257", {titre: "La voie et la vertu", numero: "16", idSerie: "12", idAuteur: "77", prix: "11.28"});
    this.albums.set("258", {titre: "Venu d'ailleurs", numero: "01", idSerie: "52", idAuteur: "78", prix: "11.28"});
    this.albums.set("259", {titre: "Les tueurs d'un autre monde", numero: "02", idSerie: "52", idAuteur: "78", prix: "11.28"});
    this.albums.set("260", {titre: "Passeport pour l'angoisse", numero: "03", idSerie: "52", idAuteur: "78", prix: "11.28"});
    this.albums.set("261", {titre: "Sortilèges à Bahia", numero: "04", idSerie: "52", idAuteur: "78", prix: "14"});
    this.albums.set("262", {titre: "Le cobaye", numero: "05", idSerie: "52", idAuteur: "78", prix: "14"});
    this.albums.set("263", {titre: "Des os pilants", numero: "04", idSerie: "53", idAuteur: "79", prix: "9.58"});
    this.albums.set("264", {titre: "Voyage de n'os", numero: "09", idSerie: "53", idAuteur: "79", prix: "10.65"});
    this.albums.set("265", {titre: "L'enfant des étoiles", numero: "07", idSerie: "54", idAuteur: "68", prix: "10.65"});
    this.albums.set("266", {titre: "Les archers", numero: "09", idSerie: "54", idAuteur: "68", prix: "11.45"});
    this.albums.set("268", {titre: "La gardienne des clés", numero: "17", idSerie: "54", idAuteur: "68", prix: "11.45"});
    this.albums.set("269", {titre: "L'épée-soleil", numero: "18", idSerie: "54", idAuteur: "68", prix: "11.28"});
    this.albums.set("270", {titre: "Compile de génie", numero: "00", idSerie: "55", idAuteur: "80", prix: "11.24"});
    this.albums.set("271", {titre: "La marque de Morgane", numero: "01", idSerie: "56", idAuteur: "81", prix: "11.24"});
    this.albums.set("272", {titre: "Les chevaux de la nuit", numero: "02", idSerie: "56", idAuteur: "81", prix: "10.65"});
    this.albums.set("273", {titre: "Gwen d'Armor", numero: "03", idSerie: "56", idAuteur: "81", prix: "11.28"});
    this.albums.set("274", {titre: "Avalon", numero: "04", idSerie: "56", idAuteur: "82", prix: "11.28"});
    this.albums.set("275", {titre: "Le pays blanc", numero: "05", idSerie: "56", idAuteur: "82", prix: "10.46"});
    this.albums.set("276", {titre: "Tombelaine", numero: "06", idSerie: "56", idAuteur: "82", prix: "10.46"});
    this.albums.set("277", {titre: "Tiffen", numero: "07", idSerie: "56", idAuteur: "82", prix: "10.46"});
    this.albums.set("278", {titre: "Le guide du jeune père", numero: "00a", idSerie: "57", idAuteur: "83", prix: "9.99"});
    this.albums.set("279", {titre: "Bilbo le Hobbit", numero: "00b", idSerie: "57", idAuteur: "84", prix: "9.99"});
    this.albums.set("280", {titre: "Les pierres de Rome", numero: "01", idSerie: "58", idAuteur: "85", prix: "14.23"});
    this.albums.set("281", {titre: "Berets verts - Vietnam Forces spéciales", numero: "01a", idSerie: "57", idAuteur: "86", prix: "15.20"});
    this.albums.set("282", {titre: "Un ange trépasse", numero: "01", idSerie: "59", idAuteur: "87", prix: "9.99"});
    this.albums.set("283", {titre: "Dieu est mort ce soir", numero: "04", idSerie: "59", idAuteur: "88", prix: "9.99"});
    this.albums.set("284", {titre: "Et délivre-nous du mal", numero: "09", idSerie: "59", idAuteur: "88", prix: "11.45"});
    this.albums.set("285", {titre: "L'énigme or-azur", numero: "01", idSerie: "60", idAuteur: "10", prix: "11.45"});
    this.albums.set("287", {titre: "Le suaire", numero: "01", idSerie: "61", idAuteur: "127", prix: "11.45"});
    this.albums.set("288", {titre: "La liste rouge", numero: "02", idSerie: "61", idAuteur: "127", prix: "11.45"});
    this.albums.set("289", {titre: "Le tombeau d'orient", numero: "03", idSerie: "61", idAuteur: "127", prix: "11.45"});
    this.albums.set("290", {titre: "Résurrection", numero: "04", idSerie: "61", idAuteur: "127", prix: "11.45"});
    this.albums.set("291", {titre: "Déesse blanche, déesse noire Tome 1", numero: "01b", idSerie: "57", idAuteur: "91", prix: "14.23"});
    this.albums.set("292", {titre: "Déesse blanche, déesse noire Tome 2", numero: "02a", idSerie: "57", idAuteur: "91", prix: "14.23"});
    this.albums.set("293", {titre: "Les jeunes filles opérent", numero: "04", idSerie: "34", idAuteur: "37", prix: "14.23"});
    this.albums.set("294", {titre: "J'étais infirme hier", numero: "05", idSerie: "34", idAuteur: "37", prix: "9.58"});
    this.albums.set("295", {titre: "Gai rire à tout prix", numero: "06", idSerie: "34", idAuteur: "37", prix: "10.65"});
    this.albums.set("296", {titre: "Une croisière en enfer", numero: "01", idSerie: "62", idAuteur: "92", prix: "10.65"});
    this.albums.set("297", {titre: "Les dents du requin", numero: "02", idSerie: "62", idAuteur: "92", prix: "10.65"});
    this.albums.set("298", {titre: "L'homme à l'étoile d'argent", numero: "02", idSerie: "63", idAuteur: "93", prix: "9.99"});
    this.albums.set("299", {titre: "La nuit des totems", numero: "01", idSerie: "64", idAuteur: "94", prix: "9.99"});
    this.albums.set("300", {titre: "Terra incognita", numero: "01", idSerie: "65", idAuteur: "95", prix: "9.99"});
    this.albums.set("301", {titre: "Ophyde la déminée", numero: "02", idSerie: "65", idAuteur: "95", prix: "11.45"});
    this.albums.set("302", {titre: "Le dôme", numero: "01", idSerie: "66", idAuteur: "96", prix: "11.45"});
    this.albums.set("303", {titre: "Poil au génie", numero: "23", idSerie: "55", idAuteur: "80", prix: "11.45"});
    this.albums.set("304", {titre: "La mine de l'allemand perdu", numero: "04", idSerie: "63", idAuteur: "93", prix: "11.45"});
    this.albums.set("305", {titre: "Fort Navajo", numero: "01", idSerie: "63", idAuteur: "93", prix: "11.45"});
    this.albums.set("306", {titre: "Le cheval de fer", numero: "03", idSerie: "63", idAuteur: "93", prix: "11.45"});
    this.albums.set("307", {titre: "Le spectre aux balles d'or", numero: "05", idSerie: "63", idAuteur: "93", prix: "11.24"});
    this.albums.set("308", {titre: "Le guide du jeune couple", numero: "00c", idSerie: "57", idAuteur: "83", prix: "11.24"});
    this.albums.set("309", {titre: "Comme aurait fait Craô", numero: "01", idSerie: "36", idAuteur: "40", prix: "11.24"});
    this.albums.set("310", {titre: "Les longues crinières", numero: "02", idSerie: "36", idAuteur: "40", prix: "11.24"});
    this.albums.set("311", {titre: "Le clan sauvage", numero: "03", idSerie: "36", idAuteur: "40", prix: "10.67"});
    this.albums.set("312", {titre: "La saga des gaffes", numero: "14", idSerie: "67", idAuteur: "23", prix: "10.67"});
    this.albums.set("313", {titre: "Gaffe à Lagaffe", numero: "15", idSerie: "67", idAuteur: "23", prix: "10.67"});
    this.albums.set("314", {titre: "Lagaffe mérite des baffes", numero: "13", idSerie: "67", idAuteur: "23", prix: "10.67"});
    this.albums.set("315", {titre: "Des gaffes et des dégats", numero: "06", idSerie: "67", idAuteur: "23", prix: "12.65"});
    this.albums.set("316", {titre: "Le gang des gaffeurs", numero: "12", idSerie: "67", idAuteur: "23", prix: "12.65"});
    this.albums.set("317", {titre: "Le géant de la gaffe", numero: "10", idSerie: "67", idAuteur: "23", prix: "12.65"});
    this.albums.set("318", {titre: "Le lourd passé de Lagaffe", numero: "R5", idSerie: "67", idAuteur: "97", prix: "12.65"});
    this.albums.set("319", {titre: "Un gaffeur sachant gaffer", numero: "07", idSerie: "67", idAuteur: "23", prix: "12.65"});
    this.albums.set("321", {titre: "Edition spéciale 40e anniversaire 04", numero: "04es", idSerie: "67", idAuteur: "97", prix: "12.65"});
    this.albums.set("322", {titre: "Edition spéciale 40e anniversaire 03", numero: "03es", idSerie: "67", idAuteur: "97", prix: "12.65"});
    this.albums.set("323", {titre: "Edition spéciale 40e anniversaire 06", numero: "06es", idSerie: "67", idAuteur: "98", prix: "14.23"});
    this.albums.set("324", {titre: "Edition spéciale 40e anniversaire 08", numero: "08es", idSerie: "67", idAuteur: "23", prix: "14.23"});
    this.albums.set("325", {titre: "Edition spéciale 40e anniversaire 10", numero: "10es", idSerie: "67", idAuteur: "23", prix: "14.23"});
    this.albums.set("326", {titre: "Astérix et Cléopatre", numero: "06", idSerie: "32", idAuteur: "35", prix: "14.23"});
    this.albums.set("327", {titre: "Les bijoux de la Castafiore", numero: "21", idSerie: "28", idAuteur: "31", prix: "11.50"});
    this.albums.set("328", {titre: "Coeurs d'acier", numero: "00", idSerie: "2", idAuteur: "99", prix: "11.50"});
    this.albums.set("329", {titre: "Ombres", numero: "01", idSerie: "68", idAuteur: "100", prix: "11.50"});
    this.albums.set("330", {titre: "Pièges", numero: "02", idSerie: "68", idAuteur: "101", prix: "9.99"});
    this.albums.set("331", {titre: "Saison 1 emprises", numero: "03", idSerie: "68", idAuteur: "100", prix: "9.99"});
    this.albums.set("332", {titre: "Le secret de l'espadon Tome 1", numero: "01", idSerie: "70", idAuteur: "102", prix: "11.28"});
    this.albums.set("333", {titre: "Le secret de l'espadon Tome 2", numero: "02", idSerie: "70", idAuteur: "102", prix: "11.28"});
    this.albums.set("334", {titre: "Le secret de l'espadon Tome 3", numero: "03", idSerie: "70", idAuteur: "102", prix: "11.28"});
    this.albums.set("335", {titre: "La marque jaune", numero: "06", idSerie: "70", idAuteur: "102", prix: "11.28"});
    this.albums.set("336", {titre: "Le jour du soleil noir", numero: "01", idSerie: "10", idAuteur: "103", prix: "10.26"});
    this.albums.set("337", {titre: "Là où va l'indien", numero: "02", idSerie: "10", idAuteur: "103", prix: "10.26"});
    this.albums.set("338", {titre: "Toutes les larmes de l'enfer", numero: "03", idSerie: "10", idAuteur: "103", prix: "10.26"});
    this.albums.set("339", {titre: "Spads", numero: "04", idSerie: "10", idAuteur: "103", prix: "10.46"});
    this.albums.set("340", {titre: "Rouge total", numero: "05", idSerie: "10", idAuteur: "103", prix: "10.46"});
    this.albums.set("341", {titre: "Le dossier Jason Fly", numero: "06", idSerie: "10", idAuteur: "103", prix: "10.65"});
    this.albums.set("342", {titre: "La nuit du 3 août", numero: "07", idSerie: "10", idAuteur: "103", prix: "10.65"});
    this.albums.set("343", {titre: "Treize contre un", numero: "08", idSerie: "10", idAuteur: "103", prix: "10.65"});
    this.albums.set("344", {titre: "Pour Maria", numero: "09", idSerie: "10", idAuteur: "103", prix: "10.65"});
    this.albums.set("345", {titre: "El Cascador", numero: "10", idSerie: "10", idAuteur: "103", prix: "10.65"});
    this.albums.set("346", {titre: "Trois montres d'argent", numero: "11", idSerie: "10", idAuteur: "103", prix: "9.58"});
    this.albums.set("347", {titre: "The XIII mystery - l'enquête", numero: "13", idSerie: "10", idAuteur: "103", prix: "15.20"});
    this.albums.set("348", {titre: "Secret défense", numero: "14", idSerie: "10", idAuteur: "103", prix: "15.20"});
    this.albums.set("349", {titre: "Lachez les chiens !", numero: "15", idSerie: "10", idAuteur: "103", prix: "15.20"});
    this.albums.set("350", {titre: "Opération Montecristo", numero: "16", idSerie: "10", idAuteur: "103", prix: "10.46"});
    this.albums.set("351", {titre: "L'or de Maximilien", numero: "17", idSerie: "10", idAuteur: "103", prix: "14"});
    this.albums.set("352", {titre: "La version irlandaise", numero: "18", idSerie: "10", idAuteur: "104", prix: "11.45"});
    this.albums.set("353", {titre: "Le dernier round", numero: "19", idSerie: "10", idAuteur: "103", prix: "11.45"});
    this.albums.set("354", {titre: "Le jugement", numero: "12", idSerie: "10", idAuteur: "103", prix: "11.45"});
    this.albums.set("355", {titre: "Le feu occulte", numero: "04", idSerie: "16", idAuteur: "11", prix: "11.24"});
    this.albums.set("356", {titre: "Au boulot et que ca saute", numero: "02", idSerie: "25", idAuteur: "89", prix: "11.24"});
    this.albums.set("370", {titre: "Le serpent géant du lac de l'ombre", numero: "05", idSerie: "47", idAuteur: "67", prix: "11.24"});
    this.albums.set("371", {titre: "Ys la magnifique", numero: "05", idSerie: "17", idAuteur: "74", prix: "10.67"});
    this.albums.set("372", {titre: "Les gardiennes de Brocéliande", numero: "06", idSerie: "17", idAuteur: "108", prix: "10.67"});
    this.albums.set("373", {titre: "Bien fait pour toi !", numero: "14", idSerie: "5", idAuteur: "14", prix: "10.67"});
    this.albums.set("374", {titre: "Tiens-toi droit !", numero: "15", idSerie: "5", idAuteur: "14", prix: "10.67"});
    this.albums.set("377", {titre: "Litteul Kévin T8", numero: "08", idSerie: "49", idAuteur: "69", prix: "10.67"});
    this.albums.set("378", {titre: "Litteul Kévin T9", numero: "09", idSerie: "49", idAuteur: "69", prix: "10.67"});
    this.albums.set("381", {titre: "La métamorphose", numero: "11", idSerie: "13", idAuteur: "110", prix: "10.67"});
    this.albums.set("382", {titre: "Tatrin de Tolden", numero: "10", idSerie: "13", idAuteur: "110", prix: "12.65"});
    this.albums.set("383", {titre: "Retour à Tolden", numero: "09", idSerie: "13", idAuteur: "110", prix: "12.65"});
    this.albums.set("384", {titre: "Le Waltras - Episode 2", numero: "08", idSerie: "13", idAuteur: "8", prix: "12.65"});
    this.albums.set("385", {titre: "Opération Attila", numero: "24", idSerie: "6", idAuteur: "13", prix: "12.65"});
    this.albums.set("386", {titre: "Chiquito paradiso", numero: "22", idSerie: "6", idAuteur: "13", prix: "14.23"});
    this.albums.set("387", {titre: "A Tokyo", numero: "49", idSerie: "2", idAuteur: "61", prix: "14.23"});
    this.albums.set("391", {titre: "L'histoire de Waha", numero: "14", idSerie: "16", idAuteur: "11", prix: "14.23"});
    this.albums.set("392", {titre: "Boules de poils", numero: "15", idSerie: "16", idAuteur: "11", prix: "11.50"});
    this.albums.set("393", {titre: "L'énigme Or-Azur Tome 2", numero: "02", idSerie: "60", idAuteur: "10", prix: "11.50"});
    this.albums.set("394", {titre: "Le banni d'Eckmul", numero: "03", idSerie: "60", idAuteur: "10", prix: "11.50"});
    this.albums.set("395", {titre: "Sale temps pour les moches", numero: "02", idSerie: "74", idAuteur: "111", prix: "11.50"});
    this.albums.set("396", {titre: "Pour qui tu te prends ?", numero: "01", idSerie: "74", idAuteur: "111", prix: "11.50"});
    this.albums.set("397", {titre: "La fleur au canon", numero: "05", idSerie: "75", idAuteur: "112", prix: "11.50"});
    this.albums.set("398", {titre: "La quête de la terre promise", numero: "04", idSerie: "75", idAuteur: "112", prix: "9.99"});
    this.albums.set("399", {titre: "Sur la terre comme au ciel", numero: "03", idSerie: "75", idAuteur: "112", prix: "9.99"});
    this.albums.set("400", {titre: "En vert et contre tous", numero: "02", idSerie: "75", idAuteur: "112", prix: "11.28"});
    this.albums.set("401", {titre: "Bêtes et méchants", numero: "01", idSerie: "75", idAuteur: "112", prix: "11.28"});
    this.albums.set("402", {titre: "Morceaux choisis !", numero: "HS1", idSerie: "75", idAuteur: "112", prix: "11.28"});
    this.albums.set("404", {titre: "J'ai gagné !", numero: "24", idSerie: "76", idAuteur: "113", prix: "10.26"});
    this.albums.set("405", {titre: "Je veux l'épouser !", numero: "23", idSerie: "76", idAuteur: "113", prix: "10.26"});
    this.albums.set("406", {titre: "J'ai fini !", numero: "20", idSerie: "76", idAuteur: "113", prix: "10.26"});
    this.albums.set("407", {titre: "Enfin seuls !", numero: "18", idSerie: "76", idAuteur: "113", prix: "10.26"});
    this.albums.set("408", {titre: "Qui a éteint la lumière", numero: "17", idSerie: "76", idAuteur: "113", prix: "10.26"});
    this.albums.set("409", {titre: "Cygne d'étang", numero: "11", idSerie: "76", idAuteur: "113", prix: "10.65"});
    this.albums.set("410", {titre: "Docteur génie et mister \"aie\"", numero: "34", idSerie: "55", idAuteur: "80", prix: "10.65"});
    this.albums.set("411", {titre: "Cadeau de génie", numero: "22", idSerie: "55", idAuteur: "80", prix: "10.65"});
    this.albums.set("412", {titre: "Contre attaque", numero: "12", idSerie: "77", idAuteur: "114", prix: "10.65"});
    this.albums.set("413", {titre: "Boing Boing bart !", numero: "05", idSerie: "77", idAuteur: "114", prix: "15.20"});
    this.albums.set("414", {titre: "Panik room", numero: "12", idSerie: "78", idAuteur: "115", prix: "15.20"});
    this.albums.set("415", {titre: "On n'est pas venus pour être là !", numero: "03", idSerie: "79", idAuteur: "116", prix: "10.46"});
    this.albums.set("416", {titre: "Premier de la classe (en commençant par la fin )", numero: "14", idSerie: "80", idAuteur: "117", prix: "10.46"});
    this.albums.set("417", {titre: "Chat déchire !", numero: "53", idSerie: "81", idAuteur: "118", prix: "10.46"});
    this.albums.set("419", {titre: "Les liens de l'amitié", numero: "03", idSerie: "74", idAuteur: "111", prix: "9.58"});
    this.albums.set("420", {titre: "Duel de belles", numero: "04", idSerie: "74", idAuteur: "111", prix: "9.58"});
    this.albums.set("421", {titre: "Le repos du gaffeur", numero: "11", idSerie: "67", idAuteur: "23", prix: "11.45"});
    this.albums.set("422", {titre: "Les archives de la gaffe (vOnd)", numero: "01", idSerie: "67", idAuteur: "23", prix: "11.45"});
    this.albums.set("424", {titre: "Gaffes à gogo", numero: "02", idSerie: "67", idAuteur: "23", prix: "11.45"});
    this.albums.set("425", {titre: "Le crâne de Cagliostro", numero: "01", idSerie: "83", idAuteur: "127", prix: "11.45"});
    this.albums.set("426", {titre: "Deir el medineh", numero: "02", idSerie: "83", idAuteur: "127", prix: "11.24"});
    this.albums.set("427", {titre: "L'affaire du rideau bleu", numero: "01", idSerie: "84", idAuteur: "122", prix: "11.24"});
    this.albums.set("428", {titre: "Le dossier raboukine", numero: "02", idSerie: "84", idAuteur: "122", prix: "11.24"});
    this.albums.set("429", {titre: "Le carnet de Cagliostro", numero: "03", idSerie: "83", idAuteur: "127", prix: "14"});
    this.albums.set("430", {titre: "Le testament du fou", numero: "01", idSerie: "85", idAuteur: "127", prix: "10.67"});
    this.albums.set("431", {titre: "Le jeune homme au suaire", numero: "02", idSerie: "85", idAuteur: "127", prix: "10.67"});
    this.albums.set("432", {titre: "De cendre et d'or", numero: "03", idSerie: "85", idAuteur: "127", prix: "10.67"});
    this.albums.set("433", {titre: "L'évangile oublié", numero: "04", idSerie: "85", idAuteur: "127", prix: "10.67"});
    this.albums.set("434", {titre: "Ordo ab chao", numero: "04", idSerie: "83", idAuteur: "127", prix: "11.48"});
    this.albums.set("435", {titre: "L'imposteur", numero: "07", idSerie: "85", idAuteur: "127", prix: "11.48"});
    this.albums.set("436", {titre: "La parole perdue", numero: "06", idSerie: "85", idAuteur: "127", prix: "12.64"});
    this.albums.set("437", {titre: "L'infame mensonge", numero: "05", idSerie: "85", idAuteur: "127", prix: "12.64"});
    this.albums.set("438", {titre: "Nuit et brouillard", numero: "01", idSerie: "86", idAuteur: "127", prix: "12.64"});
    this.albums.set("439", {titre: "Montespa", numero: "02", idSerie: "86", idAuteur: "127", prix: "13"});
    this.albums.set("440", {titre: "Un couple d'enfer", numero: "05", idSerie: "74", idAuteur: "111", prix: "14.52"});
    this.albums.set("441", {titre: "La pierre de Jovénia", numero: "01", idSerie: "87", idAuteur: "129", prix: "14.52"});
    this.albums.set("442", {titre: "Le gardien", numero: "02", idSerie: "87", idAuteur: "129", prix: "14.52"});
    this.albums.set("443", {titre: "Frères ennemis", numero: "03", idSerie: "87", idAuteur: "129", prix: "12.65"});
    this.albums.set("444", {titre: "Le réveil du Kréa-Kaos", numero: "04", idSerie: "87", idAuteur: "129", prix: "12.65"});
    this.albums.set("445", {titre: "Coeur du passé", numero: "05", idSerie: "87", idAuteur: "129", prix: "11.50"});
    this.albums.set("446", {titre: "Main du futur", numero: "06", idSerie: "87", idAuteur: "129", prix: "10.65"});
    this.albums.set("447", {titre: "Aube et futur", numero: "07", idSerie: "87", idAuteur: "129", prix: "11.24"});
    this.albums.set("448", {titre: "Griffes et plumes", numero: "08", idSerie: "87", idAuteur: "129", prix: "11.24"});
    this.albums.set("449", {titre: "L'alystory", numero: "09", idSerie: "87", idAuteur: "129", prix: "11.24"});
    this.albums.set("450", {titre: "Le cycle d'Anathos : La marque du destin", numero: "10", idSerie: "87", idAuteur: "129", prix: "9.58"});
    this.albums.set("451", {titre: "Versus inferno", numero: "11", idSerie: "87", idAuteur: "129", prix: "14"});
    this.albums.set("452", {titre: "Le cycle d'Anathos : Renaissance", numero: "12", idSerie: "87", idAuteur: "129", prix: "10.67"});
    this.albums.set("453", {titre: "Sang royal", numero: "13", idSerie: "87", idAuteur: "129", prix: "10.67"});
    this.albums.set("454", {titre: "L'héritage du mal", numero: "14", idSerie: "87", idAuteur: "129", prix: "10.46"});
    this.albums.set("455", {titre: "Plus blondes que blondes !", numero: "11", idSerie: "88", idAuteur: "130", prix: "10.46"});
    this.albums.set("456", {titre: "Ca se fête !", numero: "10", idSerie: "88", idAuteur: "130", prix: "10.26"});
    this.albums.set("457", {titre: "Coucou qui c'est ?", numero: "12", idSerie: "88", idAuteur: "130", prix: "15.20"});
    this.albums.set("458", {titre: "Tome 2", numero: "02", idSerie: "88", idAuteur: "130", prix: "12.64"});
    this.albums.set("459", {titre: "Tome 9", numero: "09", idSerie: "88", idAuteur: "130", prix: "12.64"});
    this.albums.set("460", {titre: "Morceaux choisis !", numero: "HS3", idSerie: "88", idAuteur: "130", prix: "12.64"});
    this.albums.set("461", {titre: "Est un génie", numero: "01", idSerie: "55", idAuteur: "80", prix: "9.99"});
    this.albums.set("462", {titre: "Génie du stop", numero: "41", idSerie: "55", idAuteur: "80", prix: "9.99"});
    this.albums.set("463", {titre: "Génie à la page", numero: "HS", idSerie: "55", idAuteur: "80", prix: "10.46"});
    this.albums.set("464", {titre: "Jeux de vilains", numero: "01", idSerie: "78", idAuteur: "115", prix: "10.46"});
    this.albums.set("465", {titre: "Paddle... my name is kid paddle", numero: "08", idSerie: "78", idAuteur: "115", prix: "10.46"});
    this.albums.set("466", {titre: "Dark, j'adore !", numero: "10", idSerie: "78", idAuteur: "115", prix: "10.46"});
    this.albums.set("467", {titre: "De la brocante", numero: "02", idSerie: "89", idAuteur: "131", prix: "14.52"});
    this.albums.set("468", {titre: "Farfadets et korrigans", numero: "06", idSerie: "90", idAuteur: "132", prix: "14.52"});
    this.albums.set("470", {titre: "Moi, gourmand ?", numero: "46", idSerie: "81", idAuteur: "118", prix: "11.24"});
    this.albums.set("471", {titre: "Bwouf allo bill ?", numero: "27", idSerie: "82", idAuteur: "133", prix: "13"});
    this.albums.set("473", {titre: "Album 07", numero: "07", idSerie: "82", idAuteur: "133", prix: "12.65"});
    this.albums.set("474", {titre: "Album 13", numero: "13", idSerie: "82", idAuteur: "133", prix: "12.65"});
    this.albums.set("475", {titre: "Faut rigoler !", numero: "26", idSerie: "82", idAuteur: "133", prix: "12.65"});
    this.albums.set("476", {titre: "22! v'là", numero: "25", idSerie: "82", idAuteur: "133", prix: "12.65"});
    this.albums.set("477", {titre: "Tropico fun paradise", numero: "02", idSerie: "91", idAuteur: "135", prix: "10.67"});
    this.albums.set("478", {titre: "Le résultat, on s'en fout ! il faut gagner !", numero: "07", idSerie: "79", idAuteur: "116", prix: "10.67"});
    this.albums.set("479", {titre: "Album 03", numero: "03", idSerie: "92", idAuteur: "136", prix: "10.67"});
    this.albums.set("480", {titre: "Bessin et compagnie", numero: "01", idSerie: "94", idAuteur: "137", prix: "11.45"});
    this.albums.set("481", {titre: "Graine de star", numero: "26", idSerie: "76", idAuteur: "113", prix: "11.45"});
    this.albums.set("483", {titre: "L'élève dépasse le mètre", numero: "08", idSerie: "95", idAuteur: "139", prix: "11.45"});
    this.albums.set("484", {titre: "L'école des vannes", numero: "01", idSerie: "95", idAuteur: "139", prix: "11.45"});
    this.albums.set("485", {titre: "Le maître blagueur", numero: "05", idSerie: "95", idAuteur: "139", prix: "12.64"});
    this.albums.set("486", {titre: "Moi m'sieur ! Moi m'sieur !", numero: "01", idSerie: "96", idAuteur: "140", prix: "12.64"});
    this.albums.set("487", {titre: "Le duel des mages", numero: "06", idSerie: "47", idAuteur: "67", prix: "12.64"});
    this.albums.set("488", {titre: "Le rossignol de Stepney", numero: "03", idSerie: "84", idAuteur: "122", prix: "12.64"});
    this.albums.set("491", {titre: "Amour mortel", numero: "15", idSerie: "87", idAuteur: "129", prix: "12.64"});
    this.albums.set("492", {titre: "Le frère qui n'existait pas", numero: "03", idSerie: "86", idAuteur: "127", prix: "12.64"});
    this.albums.set("493", {titre: "L'ordre noir", numero: "12", idSerie: "13", idAuteur: "110", prix: "14"});
    this.albums.set("494", {titre: "Cold case affaires glacées", numero: "08", idSerie: "98", idAuteur: "141", prix: "11.48"});
    this.albums.set("495", {titre: "Cavalier seul", numero: "05", idSerie: "38", idAuteur: "142", prix: "11.48"});
    this.albums.set("496", {titre: "Qu'est-ce qu'il a ?", numero: "25", idSerie: "76", idAuteur: "113", prix: "11.48"});
    this.albums.set("497", {titre: "Elle est moche !", numero: "22", idSerie: "76", idAuteur: "113", prix: "11.48"});
    this.albums.set("498", {titre: "On rêvasse ?", numero: "21", idSerie: "76", idAuteur: "113", prix: "10.65"});
    this.albums.set("499", {titre: "On se calme !", numero: "19", idSerie: "76", idAuteur: "113", prix: "10.65"});
    this.albums.set("500", {titre: "Où sont les freins ?", numero: "16", idSerie: "76", idAuteur: "113", prix: "10.65"});
    this.albums.set("501", {titre: "Avis de tempête", numero: "15", idSerie: "76", idAuteur: "113", prix: "10.67"});
    this.albums.set("502", {titre: "Au pied, j'ai dit !", numero: "14", idSerie: "76", idAuteur: "113", prix: "12.65"});
    this.albums.set("503", {titre: "Terrain minets", numero: "12", idSerie: "76", idAuteur: "113", prix: "12.65"});
    this.albums.set("504", {titre: "Les imparfaits du passé", numero: "06", idSerie: "75", idAuteur: "112", prix: "10.50"});
    this.albums.set("506", {titre: "L'appat", numero: "21", idSerie: "10", idAuteur: "16", prix: "11.50"});
    this.albums.set("507", {titre: "Super-génie", numero: "43", idSerie: "55", idAuteur: "80", prix: "12.50"});
    this.albums.set("508", {titre: "Mer noire", numero: "17", idSerie: "12", idAuteur: "77", prix: "10.50"});
    this.albums.set("509", {titre: "Colère rouge", numero: "18", idSerie: "12", idAuteur: "77", prix: "11.50"});
    this.albums.set("510", {titre: "A la folie", numero: "13", idSerie: "23", idAuteur: "19", prix: "10.50"});
    this.albums.set("511", {titre: "Dans les griffes de la vipère", numero: "53", idSerie: "2", idAuteur: "63", prix: "13.50"});
    this.albums.set("512", {titre: "Poils de trolls (II)", numero: "16", idSerie: "16", idAuteur: "11", prix: "11.50"});
    this.albums.set("513", {titre: "T'es gonflé !", numero: "16", idSerie: "5", idAuteur: "14", prix: "14.50"});
    this.albums.set("514", {titre: "Acta est fabula", numero: "05", idSerie: "83", idAuteur: "127", prix: "10.50"});
    this.albums.set("515", {titre: "La voie fiscale", numero: "01", idSerie: "101", idAuteur: "143", prix: "11.50"});
    this.albums.set("516", {titre: "La stratégie Hagen", numero: "02", idSerie: "101", idAuteur: "143", prix: "12.50"});
    this.albums.set("517", {titre: "La grande traque", numero: "04", idSerie: "60", idAuteur: "10", prix: "10.50"});
    this.albums.set("518", {titre: "Le mal-venu", numero: "01", idSerie: "102", idAuteur: "144", prix: "14.50"});
    this.albums.set("519", {titre: "Astérix chez les Pictes", numero: "35", idSerie: "32", idAuteur: "35", prix: "13.50"});
    this.albums.set("520", {titre: "Première saison", numero: "01", idSerie: "103", idAuteur: "145", prix: "10.50"});
    this.albums.set("538", {titre: "Majesté", numero: "13", idSerie: "13", idAuteur: "8", prix: "12.64"});
    this.albums.set("537", {titre: "Retour à Greenfalls", numero: "22", idSerie: "10", idAuteur: "16", prix: "12.64"});
    this.albums.set("536", {titre: "(Avant la quête) Le chevalier Bragon", numero: "A04", idSerie: "22", idAuteur: "54", prix: "12.84"});
    this.albums.set("539", {titre: "La Trolle impromptue", numero: "17", idSerie: "16", idAuteur: "11", prix: "11.45"});
    this.albums.set("542", {titre: "L'éternité ne dure qu'un temps", numero: "16", idSerie: "87", idAuteur: "129", prix: "11.65"});
    this.albums.set("551", {titre: "Contre attaque en Carmélie", numero: "07", idSerie: "47", idAuteur: "67", prix: "11.45"});
    this.albums.set("552", {titre: "un été trop mortel", numero: "06", idSerie: "74", idAuteur: "111", prix: "11.45"});
    this.albums.set("553", {titre: "L'Histoire drôle", numero: "10", idSerie: "95", idAuteur: "139", prix: "14.52"});
    this.albums.set("554", {titre: "l'onde septimus", numero: "22", idSerie: "70", idAuteur: "146", prix: "14.52"});
    this.albums.set("555", {titre: "Litteul Kévin T10", numero: "10", idSerie: "49", idAuteur: "69", prix: "13"});
    this.albums.set("556", {titre: "L'apprenti cow-boy", numero: "01", idSerie: "105", idAuteur: "147", prix: "11.45"});
    this.albums.set("557", {titre: "Lasso périlleux", numero: "02", idSerie: "105", idAuteur: "147", prix: "11.45"});
    this.albums.set("558", {titre: "l'ombre de l'aigle", numero: "04", idSerie: "86", idAuteur: "127", prix: "11.45"});
    this.albums.set("559", {titre: "Mort et vif", numero: "07", idSerie: "75", idAuteur: "112", prix: "11.45"});
    this.albums.set("560", {titre: "Le crystal des Elfes bleus", numero: "01", idSerie: "107", idAuteur: "148", prix: "11.45"});
    this.albums.set("561", {titre: "Trop meugnon", numero: "04", idSerie: "40", idAuteur: "10", prix: "14.23"});
    this.albums.set("565", {titre: "Joe bar Team tome 8", numero: "08", idSerie: "50", idAuteur: "149", prix: "10.50"});
    this.albums.set("566", {titre: "Chassé-croisé", numero: "19", idSerie: "12", idAuteur: "77", prix: "15.20"});
    this.albums.set("569", {titre: "Le message du martyr", numero: "23", idSerie: "10", idAuteur: "16", prix: "15.20"});
    this.albums.set("570", {titre: "Pröfy blues", numero: "18", idSerie: "16", idAuteur: "11", prix: "15.20"});
    this.albums.set("571", {titre: "Pas de nöl pour le père grommël", numero: "19", idSerie: "16", idAuteur: "11", prix: "11.24"});
    this.albums.set("572", {titre: "Cthulhu, ça tangue", numero: "08", idSerie: "75", idAuteur: "112", prix: "11.24"});
    this.albums.set("576", {titre: "Aujourd'hui, on laisse le cerveau au vestiaire !", numero: "12", idSerie: "79", idAuteur: "116", prix: "11.24"});
    this.albums.set("577", {titre: "L'exode de kalandre", numero: "17", idSerie: "87", idAuteur: "129", prix: "11.24"});
    this.albums.set("578", {titre: "L'intégrale", numero: "00", idSerie: "108", idAuteur: "150", prix: "12.65"});
    this.albums.set("579", {titre: "Catharsis", numero: "01", idSerie: "57", idAuteur: "151", prix: "12.65"});
    this.albums.set("580", {titre: "Bienvenue en adolescence", numero: "14", idSerie: "23", idAuteur: "19", prix: "12.65"});
    this.albums.set("581", {titre: "Astérix, le papyrus de César", numero: "36", idSerie: "32", idAuteur: "35", prix: "12.65"});
    this.albums.set("582", {titre: "Tout le monde te regarde", numero: "17", idSerie: "5", idAuteur: "14", prix: "12.64"});
    this.albums.set("583", {titre: "La troisième mort de l'empereur", numero: "05", idSerie: "86", idAuteur: "127", prix: "12.64"});
    this.albums.set("584", {titre: "Soeurs de sang", numero: "14", idSerie: "13", idAuteur: "8", prix: "12.64"});
    this.albums.set("585", {titre: "Le groom de Sniper Alley", numero: "54", idSerie: "2", idAuteur: "63", prix: "12.64"});
    this.albums.set("586", {titre: "L'héritage de Waha", numero: "20", idSerie: "16", idAuteur: "11", prix: "12.64"});
    this.albums.set("587", {titre: "L'alchimiste", numero: "01", idSerie: "110", idAuteur: "127", prix: "14.52"});
    this.albums.set("588", {titre: "L'échelle de kent", numero: "01", idSerie: "111", idAuteur: "153", prix: "14.52"});
    this.albums.set("589", {titre: "La serrure et la clenche", numero: "02", idSerie: "111", idAuteur: "153", prix: "10.26"});
    this.albums.set("590", {titre: "La fin de l'histoire", numero: "18", idSerie: "87", idAuteur: "129", prix: "10.26"});
    this.albums.set("591", {titre: "20 secondes", numero: "20", idSerie: "12", idAuteur: "77", prix: "10.26"});
    this.albums.set("592", {titre: "L'or des trolls", numero: "21", idSerie: "16", idAuteur: "11", prix: "13"});
    this.albums.set("593", {titre: "La colère du Marsupilami", numero: "55", idSerie: "2", idAuteur: "63", prix: "13"});
    this.albums.set("594", {titre: "Le piège des sables", numero: "05", idSerie: "60", idAuteur: "10", prix: "10.67"});
    this.albums.set("595", {titre: "Le delta bilieux", numero: "06", idSerie: "60", idAuteur: "10", prix: "10.67"});
    this.albums.set("596", {titre: "La méphitique armada", numero: "07", idSerie: "60", idAuteur: "10", prix: "10.67"});
    this.albums.set("597", {titre: "Blue ice", numero: "03", idSerie: "101", idAuteur: "143", prix: "10.67"});
    this.albums.set("598", {titre: "Narcocratie", numero: "04", idSerie: "101", idAuteur: "143", prix: "11.24"});
    this.albums.set("599", {titre: "Silicia Inc.", numero: "05", idSerie: "101", idAuteur: "143", prix: "11.24"});
    this.albums.set("600", {titre: "Le corrupteur", numero: "06", idSerie: "101", idAuteur: "143", prix: "11.24"});
    this.albums.set("601", {titre: "tome 1", numero: "01", idSerie: "112", idAuteur: "154", prix: "11.48"});
    this.albums.set("602", {titre: "Filles à papa", numero: "01", idSerie: "113", idAuteur: "155", prix: "11.48"});
    this.albums.set("603", {titre: "La cité des Rinults", numero: "15", idSerie: "13", idAuteur: "8", prix: "15.20"});
    this.albums.set("610", {titre: "La genèse", numero: "01", idSerie: "114", idAuteur: "156", prix: "12.65"});
    this.albums.set("611", {titre: "Le fruit de la connaissance", numero: "02", idSerie: "114", idAuteur: "156", prix: "12.65"});
    this.albums.set("625", {titre: "(Avant la quête) L'emprise", numero: "A05", idSerie: "22", idAuteur: "158", prix: "12.64"});
    this.albums.set("626", {titre: "L'héritage de Jason Mac Lane", numero: "24", idSerie: "10", idAuteur: "16", prix: "14.23"});
    this.albums.set("627", {titre: "La galerie des gaffes", numero: "ES01", idSerie: "67", idAuteur: "159", prix: "14.52"});
    this.albums.set("628", {titre: "L'étoile du matin", numero: "21", idSerie: "12", idAuteur: "157", prix: "10.26"});
    this.albums.set("629", {titre: "Tintin en amérique(édition originale 1932)", numero: "03", idSerie: "28", idAuteur: "31", prix: "1338509.20"});
  }
  
  //liste nouveaux_this.albums pour avoir une liste en ordre 
  nouveaux_albums: Map<string, IAlbum> = new Map(); // pas utilisé
  
  //declaration variables
  guide_index_for = [];
  input_recherche = ""; // variable pour récupérer la valeur de input
  guideIndexSubject$ = new Subject<any>();//observable 1 pour déclencher rafraichissement d'affichage selon le nouveau guide
  categoriesBouton$ = new Subject<any>();//observable 2 pour déclencher rafraichissement page catégorie
  tableauCategorie = ["Morceaux choisis !", "Contre attaque en Carmélie", "L'or des trolls"];
  //compteur_nombre_recherche = 0;

  
  
  //declaration fonctions degre 1
  
  //*************************************************************************
  //fonction récupérer les clés Map vers un tableau
  recuperer_toutes_les_cles(conteneur_en_map) {
      //console.log(conteneur_en_map.size);
      const conteneur_numerique = [];
      for (let indexMap of conteneur_en_map) {
          conteneur_numerique.push(indexMap[0]);}
          return conteneur_numerique;
  }
  //*************************************************************************
  //fonction récupérer les noms Map vers un tableau
  afficher_tous_les_noms(conteneur_en_map) {
      console.log(conteneur_en_map.size);
      let conteneur_numerique = [];
      for (let indexMap of conteneur_en_map) {
          conteneur_numerique.push(indexMap[1].nom);}
      conteneur_numerique.sort();
      return conteneur_numerique;
  }
  //*************************************************************************
  //fonction récupérer les noms Map vers un tableau
  afficher_tous_les_titres(conteneur_en_map) {
      console.log(conteneur_en_map.size);
      let conteneur_numerique = [];
      for (let indexMap of conteneur_en_map) {
          conteneur_numerique.push(indexMap[1].titre);}
      conteneur_numerique.sort();
      return conteneur_numerique;
  }
  //*************************************************************************
  //fonction convertir texte avant comparaison => enlever des caractères, => mettre en minuscule
  conversion_texte(texte) {
      return texte.
      replace(/ |,|\(|\)|\.|\'/g, "").replace(/à|â|ä/g, "a").replace(/é|è|ê|ë/g, "e").
      replace(/î|ï/g, "i").replace(/ô|ö/g, "o").replace(/ù|û|ü/g, "u").replace(/ç/g, "c").
      replace(/ÿ/g, "y").toLowerCase();
  }
  //*************************************************************************
  //conversion du collecteur => suppr doublons, => ordre croissant
  // enlever les doublons avec nouveau tableau
  // remettre le meme tableau en ordre croissant
  creer_nouveau_collecteur(ancienCollecteur) {
      const nouveauCollecteur = Array.from(new Set(ancienCollecteur));
      nouveauCollecteur.sort(function comparaisonNombres(a, b) {return <any>a - <any>b;});
      return nouveauCollecteur;
  }
  //*************************************************************************
  //fonction verifier la presence lettres dans un string => return true / false
  comparateur_de_match(recherche, lecture) {
      const valeur_resultat = lecture.search(recherche);
      return valeur_resultat > -1;
  }
  //*************************************************************************
  recuperer_series_un_nom(guide_index) {
      return this.series.get(guide_index).nom;
  }
  //*************************************************************************
  recuperer_auteurs_un_nom(guide_index) {
      return this.auteurs.get(guide_index).nom;
  }
  //*************************************************************************
  recuperer_albums_un_titre(guide_index) {
      return this.albums.get(guide_index).titre;
  }
  //*************************************************************************
  recuperer_albums_un_numero(guide_index) {
      return this.albums.get(guide_index).numero;
  }
  //*************************************************************************
  recuperer_albums_un_prix(guide_index) {
      return this.albums.get(guide_index).prix;
  }
  //*************************************************************************
  recuperer_albums_un_idSerie(guide_index) {
      return this.albums.get(guide_index).idSerie;
  }
  //*************************************************************************
  recuperer_albums_un_idAuteur(guide_index) {
      return this.albums.get(guide_index).idAuteur;
  }
  //*************************************************************************
  
  
  
  //declaration fonctions degre 2
  
  //*************************************************************************
  rechercher_un_mot(recherche) {
      const input_corrige = this.conversion_texte(recherche);
      let tableau_des_match = [];
      let tableau_des_series = [];
      let tableau_des_auteurs = [];
      let texte_temporaire = "";
      let resultat_de_la_comparaison = false;
      for (let indexMapSeries of this.series) {
          texte_temporaire = this.conversion_texte(this.recuperer_series_un_nom(indexMapSeries[0]));
          resultat_de_la_comparaison = this.comparateur_de_match(input_corrige, texte_temporaire)
          if (resultat_de_la_comparaison === true) {tableau_des_series.push(indexMapSeries[0]);}}
      for (let indexMapauteurs of this.auteurs) {
          texte_temporaire = this.conversion_texte(this.recuperer_auteurs_un_nom(indexMapauteurs[0]));
          resultat_de_la_comparaison = this.comparateur_de_match(input_corrige, texte_temporaire)
          if (resultat_de_la_comparaison === true) {tableau_des_auteurs.push(indexMapauteurs[0]);}}
      for (let indexMapalbums of this.albums) {
          texte_temporaire = this.conversion_texte(this.recuperer_albums_un_titre(indexMapalbums[0]));
          resultat_de_la_comparaison = this.comparateur_de_match(input_corrige, texte_temporaire)
          if (resultat_de_la_comparaison === true) {tableau_des_match.push(indexMapalbums[0]);}
          texte_temporaire = this.conversion_texte(this.recuperer_albums_un_numero(indexMapalbums[0]));
          resultat_de_la_comparaison = this.comparateur_de_match(input_corrige, texte_temporaire)
          if (resultat_de_la_comparaison === true) {tableau_des_match.push(indexMapalbums[0]);}
          texte_temporaire = this.recuperer_albums_un_idSerie(indexMapalbums[0]);
          if (tableau_des_series.find(element => element == texte_temporaire) != undefined) {
              tableau_des_match.push(indexMapalbums[0]);}
          texte_temporaire = this.recuperer_albums_un_idAuteur(indexMapalbums[0]);
          if (tableau_des_auteurs.find(element => element == texte_temporaire) != undefined) {
              tableau_des_match.push(indexMapalbums[0]);}}
      const tableau_des_match_corrige = this.creer_nouveau_collecteur(tableau_des_match);
      return tableau_des_match_corrige;
  }
  //*************************************************************************
  generer_url_mini(guide_index) {
      const url_mini = "assets/all-content/albumsMini/" + 
      this.recuperer_series_un_nom(this.recuperer_albums_un_idSerie(guide_index)) + "-" + 
      this.recuperer_albums_un_numero(guide_index) + "-" + 
      this.recuperer_albums_un_titre(guide_index) + ".jpg";
      const url_mini_corrige = url_mini.replace(/\'/g, "").replace(/\!/g, "").
      replace(/\?/g, "").replace("...", "").replace("C.R.S", "CRS").
      replace("t.1", "t1").replace("t.2", "t2").replace("t.3", "t3").replace("t.4", "t4").
      replace(/"/g, "").replace("Jason Mac", "jason Mac").replace("tome", "Tome").
      replace("I.R.$.", "IR").replace("Inc.", "Inc").replace(":", "").
      replace("Le rédempteur-01-Tome 1.jpg", "Le rédempteur-01-tome 1.jpg").
      replace("O.P.A.", "OPA").replace("I.N.R.I.", "INRI");
      return url_mini_corrige;
  }
  //*************************************************************************
    generer_nom_auteurs(guide_index) {
    return this.recuperer_auteurs_un_nom(this.recuperer_albums_un_idAuteur(guide_index));
    }
    generer_nom_series(guide_index) {
    return this.recuperer_series_un_nom(this.recuperer_albums_un_idSerie(guide_index));
    }
  //*************************************************************************
  generer_url_grand(guide_index) {
      const url_grand = "assets/all-content/albums/" + 
      this.recuperer_series_un_nom(this.recuperer_albums_un_idSerie(guide_index)) + "-" + 
      this.recuperer_albums_un_numero(guide_index) + "-" + 
      this.recuperer_albums_un_titre(guide_index) + ".jpg";
      const url_grand_corrige = url_grand.replace(/\'/g, "").replace(/\!/g, "").
      replace(/\?/g, "").replace("...", "").replace("C.R.S", "CRS").
      replace("t.1", "t1").replace("t.2", "t2").replace("t.3", "t3").replace("t.4", "t4").
      replace(/"/g, "").replace("Jason Mac", "jason Mac").replace("tome", "Tome").
      replace("I.R.$.", "IR").replace("Inc.", "Inc").replace(":", "").
      replace("Le rédempteur-01-Tome 1.jpg", "Le rédempteur-01-tome 1.jpg").
      replace("O.P.A.", "OPA").replace("I.N.R.I.", "INRI");
      return url_grand_corrige;
  }

  //fonction pour observable
  mise_a_jour_du_guide() {
    console.log("maj du guide");
    //this.compteur_nombre_recherche += 1;
    this.guide_index_for = this.rechercher_un_mot(this.input_recherche);
    this.guideIndexSubject$.next(); //(this.compteur_nombre_recherche)
    //la ligne next à la fin pour prendre tous les changements en compte
  }


  //*************************************************************************
  
  
  //test des fonctions
  //console.log(recuperer_series_un_nom("2"));
  //console.log(recuperer_auteurs_un_nom("8"));
  //console.log(recuperer_albums_un_titre("1"));
  //console.log(recuperer_albums_un_numero("1"));
  //console.log(recuperer_albums_un_prix("1"));
  //console.log(recuperer_albums_un_idSerie("1"));
  //console.log(recuperer_albums_un_idAuteur("1"));
  
  //console.log(rechercher_un_mot("Livoire"));
  //console.log(generer_url_mini("236"));
  //console.log(generer_url_grand("236"));
  
  //console.log(recuperer_toutes_les_cles(this.albums));
  //console.log(afficher_tous_les_titres(this.albums));
  //console.log(afficher_tous_les_noms(series));
  //console.log(afficher_tous_les_noms(this.auteurs));
  
  //console.log(guide_index_for);
  /***************************COMPONENT**********************************/


}