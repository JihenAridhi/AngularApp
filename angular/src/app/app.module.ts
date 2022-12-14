;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { ProduitComponent } from './components/produit/produit.component';
import { ErrorComponent } from './components/error/error.component';
import { ModifierComponent } from './components/modifier/modifier.component';
import { AjoutComponent } from './components/ajout/ajout.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { AjoutFourComponent } from './components/fournisseur/ajout-four/ajout-four.component';
import { ModifFourComponent } from './components/fournisseur/modif-four/modif-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    ProduitComponent,
    ErrorComponent,
    ModifierComponent,
    AjoutComponent,
    FournisseurComponent,
    AjoutFourComponent,
    ModifFourComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
