import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../Interfaces/Categorie";
import {Laboratoire} from "../Interfaces/Laboratoire";

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {

  constructor(private http: HttpClient) { }

  findAll() {return this.http.get<Array<Laboratoire>>("http://localhost:8081/laboratoires/findAll")}

  findByLib(lib: string) {return this.http.get("http://localhost:8081/laboratoires/findByLib/"+lib)}

}
