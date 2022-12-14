import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../Interfaces/Produit";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  findById(id: number) {return this.http.get("http://localhost:8081/produits/findById"+id)}

  add(produit: NgForm)
  {
    let p: Produit = produit.value
    p.dateAjout = new Date()
    return this.http.post<Produit>("http://localhost:8081/produits/add",p).subscribe()
  }

  delete(id: any) { return this.http.delete("http://localhost:8081/produits/deleteById/"+id).subscribe()}

  modifierProduit(id: any ,p: Produit)
  {
    return this.http.put("http://localhost:8081/produits/update/"+id,p).subscribe(()=>alert("modification effectuée"))
  }
}
