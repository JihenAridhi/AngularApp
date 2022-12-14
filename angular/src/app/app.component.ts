import { Component } from '@angular/core';
import {UtilisateurService} from "./Services/utilisateur.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataArray: any
  constructor(private us:UtilisateurService) {this.us.getAll().subscribe(data=>this.dataArray=data)}
}
