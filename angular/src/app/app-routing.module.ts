import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProduitComponent} from "./components/produit/produit.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ErrorComponent} from "./components/error/error.component";
import {FournisseurComponent} from "./components/fournisseur/fournisseur.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'navbar', component: NavbarComponent, children:
      [
        {path: 'profile', component:ProfileComponent},
        {path: 'produit', component: ProduitComponent},
        {path: 'fournisseur', component: FournisseurComponent},
      ]
  },
  {path: '**', component: ErrorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
