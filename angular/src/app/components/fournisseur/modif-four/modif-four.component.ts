import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../../../Interfaces/Fournisseur";
import {FournisseurService} from "../../../Services/fournisseur.service";

@Component({
  selector: 'app-modif-four',
  templateUrl: './modif-four.component.html',
  styleUrls: ['./modif-four.component.css']
})
export class ModifFourComponent implements OnInit {

  @Input() f: Fournisseur = new Fournisseur()


  constructor(private fs: FournisseurService) { }

  ngOnInit(): void {
  }

  modifier(FournisseurF: NgForm) { this.fs.modifierFournisseur(this.f.id, FournisseurF.value) }
}
