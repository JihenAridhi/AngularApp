import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import * as http from "http";
import {Categorie} from "../Interfaces/Categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient, private router: Router) { }

  findAll() {return this.http.get<Array<Categorie>>("http://localhost:8081/categories/findAll")}

  findByLib(lib: string) {return this.http.get("http://localhost:8081/categories/findByLib/"+lib)}
}
