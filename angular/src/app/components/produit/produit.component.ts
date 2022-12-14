import {Router} from "@angular/router";
import {interval, Subscription} from "rxjs";
import {Produit} from "../../Interfaces/Produit";
import {Component, OnInit} from "@angular/core";
import {UtilisateurService} from "../../Services/utilisateur.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModifierComponent} from "../modifier/modifier.component";
import {AjoutComponent} from "../ajout/ajout.component";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  private updateSubscription!: Subscription;

  constructor(private us: UtilisateurService, private router: Router, private dialog: NgbModal) { }

  prdList: Array<Produit> = new Array<Produit>()



  ngOnInit(): void
  {
    this.fillList()
    this.updateSubscription = interval(1000).subscribe(()=>this.prdList);
  }


  fillList(){this.us.findAllProduit().subscribe(data=> { console.log(data)
    this.prdList = data
  })}

  delete(p: Produit) {this.us.deleteProduit(p.id).subscribe(()=>this.fillList())}


  chercher(motCle: string)
  {
    console.log("mot cle : " + motCle)
    if(motCle!="")
    this.us.searchProduit(motCle).subscribe(data=>{this.prdList=data})
    else this.fillList()
  }

  modifier(p: Produit): void
  {
    var ref = this.dialog.open(ModifierComponent)
    ref.componentInstance.p=p
    ref.result.then(()=>{},()=>this.fillList())
  }

  ajout() {this.dialog.open(AjoutComponent).result.then(()=>{},()=>this.fillList())}

  desc(p: Produit) {alert(p.description)}
}
