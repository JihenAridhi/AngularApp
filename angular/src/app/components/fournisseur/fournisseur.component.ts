import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {UtilisateurService} from "../../Services/utilisateur.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Fournisseur} from "../../Interfaces/Fournisseur";
import {ModifFourComponent} from "./modif-four/modif-four.component";
import {AjoutFourComponent} from "./ajout-four/ajout-four.component";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  private updateSubscription!: Subscription;

  constructor(private us: UtilisateurService, private router: Router, private dialog: NgbModal) { }

  frsList: Array<Fournisseur> = new Array<Fournisseur>()



  ngOnInit(): void
  {
    this.fillList()
    this.updateSubscription = interval(1000).subscribe(()=>this.frsList);
  }


  fillList(){this.us.findAllFournisseur().subscribe(data=>this.frsList=data)}

  delete(f: Fournisseur) {this.us.deleteFournisseur(f.id).subscribe(()=>this.fillList())}


  chercher(motCle: string)
  {
    console.log("mot cle : " + motCle)
    if(motCle!="")
      this.us.searchFounisseur(motCle).subscribe(data=>{this.frsList=data})
    else this.fillList()
  }

  modifier(f: Fournisseur): void
  {
    var ref = this.dialog.open(ModifFourComponent)
    ref.componentInstance.f=f
    ref.result.then(()=>{},()=>this.fillList())
  }

  ajout() {this.dialog.open(AjoutFourComponent).result.then(()=>{},()=>this.fillList())}

}
