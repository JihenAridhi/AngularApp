import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../Services/categorie.service";
import {LaboratoireService} from "../../Services/laboratoire.service";
import {Categorie} from "../../Interfaces/Categorie";
import {Laboratoire} from "../../Interfaces/Laboratoire";
import {NgForm} from "@angular/forms";
import {UtilisateurService} from "../../Services/utilisateur.service";

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  cat: Array<Categorie> = new Array<Categorie>()
  lab: Array<Laboratoire> = new Array<Laboratoire>()

  constructor(private cs: CategorieService, private ls: LaboratoireService, private us: UtilisateurService) { }

  ngOnInit(): void
  {
    this.categorieList()
    this.laboratoireList()
  }

  categorieList() { return this.cs.findAll().subscribe(data=>this.cat=data) }
  laboratoireList() { return this.ls.findAll().subscribe(data=>this.lab=data) }

  add(produitF: NgForm) {this.us.addProduit(produitF); }

}
