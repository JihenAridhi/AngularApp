import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UtilisateurService} from "../../../Services/utilisateur.service";

@Component({
  selector: 'app-ajout-four',
  templateUrl: './ajout-four.component.html',
  styleUrls: ['./ajout-four.component.css']
})
export class AjoutFourComponent implements OnInit {

  constructor(private us: UtilisateurService) { }

  ngOnInit(): void {
  }

  add(FournisseurF: NgForm) {this.us.addFournisseur(FournisseurF); }

}
