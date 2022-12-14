import {Component, Input, OnInit} from '@angular/core';
import {UtilisateurService} from "../../Services/utilisateur.service";
import {Utilisateur} from "../../Interfaces/Utilisateur";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  u: Utilisateur = new Utilisateur()

  constructor(private us: UtilisateurService) { }

  ngOnInit(): void {
    this.us.source.asObservable().subscribe(util=>this.u=util)
  }

}
