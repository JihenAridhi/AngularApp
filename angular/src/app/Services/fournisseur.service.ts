import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../Interfaces/Fournisseur";
import {HttpClient} from "@angular/common/http";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }

  findById(id: number) {return this.http.get("http://localhost:8081/Fournisseurs/findBId/"+id)}

  add(Fournisseur: NgForm)
  {
    let f: Fournisseur = Fournisseur.value
    return this.http.post<Fournisseur>("http://localhost:8081/Fournisseurs/add",f).subscribe()
  }

  delete(id: any) { return this.http.delete("http://localhost:8081/Fournisseurs/deleteById/"+id).subscribe()}

  modifierFournisseur(id: any ,p: Fournisseur)
  {
    return this.http.put("http://localhost:8081/Fournisseurs/update/"+id,p).subscribe(()=>alert("modification effectuée"))
  }
}
