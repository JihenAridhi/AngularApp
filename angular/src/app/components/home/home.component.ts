import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../Services/utilisateur.service";
import {Utilisateur} from "../../Interfaces/Utilisateur";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private us: UtilisateurService) {}

  ngOnInit(): void {
  }

  login(loginF: NgForm) {this.us.getByEmailMdp(loginF.value.email, loginF.value.motDePasse)}

  add(addF: NgForm) {this.us.add(addF.value)}

}
