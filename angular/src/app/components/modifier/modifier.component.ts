import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../Interfaces/Categorie";
import {Laboratoire} from "../../Interfaces/Laboratoire";
import {CategorieService} from "../../Services/categorie.service";
import {LaboratoireService} from "../../Services/laboratoire.service";
import {Produit} from "../../Interfaces/Produit";
import {NgForm} from "@angular/forms";
import {ProduitService} from "../../Services/produit.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProduitComponent} from "../produit/produit.component";
import isTableElement from "@popperjs/core/lib/dom-utils/isTableElement";

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  cat: Array<Categorie> = new Array<Categorie>()
  lab: Array<Laboratoire> = new Array<Laboratoire>()
  @Input() p: Produit = new Produit()

  constructor(private cs: CategorieService, private ls: LaboratoireService, private ps: ProduitService) { }

  ngOnInit(): void
  {
    this.categorieList()
    this.laboratoireList()
    console.log(this.p)
  }

  categorieList() { return this.cs.findAll().subscribe(data=>this.cat=data) }
  laboratoireList() { return this.ls.findAll().subscribe(data=>this.lab=data) }


  modifier(ProduitF: NgForm) { this.ps.modifierProduit(this.p.id, ProduitF.value) }
}
