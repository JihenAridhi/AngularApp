import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../Interfaces/Utilisateur";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {ProduitService} from "./produit.service";
import {NgForm} from "@angular/forms";
import {Produit} from "../Interfaces/Produit";
import {CategorieService} from "./categorie.service";
import {LaboratoireService} from "./laboratoire.service";
import {Fournisseur} from "../Interfaces/Fournisseur";




@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  source = new BehaviorSubject<Utilisateur>(new Utilisateur())

  constructor(private http: HttpClient, private ps: ProduitService, private router: Router, private cs: CategorieService, private ls: LaboratoireService) { }

  getAll(){
    return this.http.get('http://localhost:8081/utilisateurs/findAll')
  }

  getByEmailMdp (email:string, mdp: string)
  {
    return this.http.get<Utilisateur>('http://localhost:8081/utilisateurs/findByEmailAndMotDePasse/'+email+'/'+mdp).subscribe(
      data=>
      {
        if(data)
        {
          this.router.navigate(['/navbar/profile'])
          this.source.next(data)
        }
        else alert('compte inexistant !!!')
      },
      error => console.log(error.toString()))
  }

  add (u: Utilisateur)
  {
    return this.http.post<Utilisateur>(('http://localhost:8081/utilisateurs/add'), u).subscribe(
      () => {alert("compte ajouté avec succes")},
      error => alert(error.toString())
    )
  }

  addProduit(produitF: NgForm)
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    var p: Produit = produitF.value
    p.dateAjout = new Date()
    this.cs.findByLib(produitF.value.categorie).subscribe(data=>p.categorie=data)
    this.ls.findByLib(produitF.value.laboratoire).subscribe(data=>p.laboratoire=data)
    return this.http.post("http://localhost:8081/utilisateurs/"+id+"/ajoutProduit", p).subscribe(()=>alert("ajouté avec succes"))
  }

  deleteProduit(produit: number | undefined)
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    return this.http.delete("http://localhost:8081/utilisateurs/"+id+"/suppProduit/"+produit)
  }

  findAllProduit()
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    return this.http.get<Array<Produit>>("http://localhost:8081/utilisateurs/"+id+"/afficherListeProduits")
  }

  searchProduit(motCle: string)
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    return this.http.get<Array<Produit>>("http://localhost:8081/utilisateurs/"+id+"/chercherProduit/"+motCle)
  }

  addFournisseur(fournisseurF: NgForm)
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    var f: Fournisseur = fournisseurF.value

    return this.http.post("http://localhost:8081/utilisateurs/"+id+"/ajoutFournisseur",f).subscribe(()=>alert("ajouté avec succes"))
  }

  deleteFournisseur(fournisseur: number | undefined)
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    return this.http.delete("http://localhost:8081/utilisateurs/"+id+"/suppFournisseur/"+fournisseur)
  }

  findAllFournisseur()
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    return this.http.get<Array<Fournisseur>>("http://localhost:8081/utilisateurs/"+id+"/afficherListeFournisseurs")
  }

  searchFounisseur(motCle: string)
  {
    var id
    this.source.asObservable().subscribe(data=>id=data.id)
    return this.http.get<Array<Fournisseur>>("http://localhost:8081/utilisateurs/"+id+"/chercherFournisseur/"+motCle)
  }
}
