import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { NavbarComponent } from './navbar/navbar.component';
import { EsportesComponent } from './pages/esportes/esportes.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { AtletaPerfilComponent } from './pages/atleta-perfil/atleta-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EsportesComponent,
    AtletasComponent,
    PaisesComponent,
    EventosComponent,
    HomeComponent,
    AtletaPerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
