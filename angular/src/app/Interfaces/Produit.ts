import {Categorie} from "./Categorie";
import {Laboratoire} from "./Laboratoire";

export class Produit
{
  id?:number
  lib?:string
  description?:string
  categorie?:Categorie
  laboratoire?:Laboratoire
  dateAjout?:Date
  prix?:number
  prixLiv?:number
}
