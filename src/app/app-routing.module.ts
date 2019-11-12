import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportesComponent } from './pages/esportes/esportes.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'esportes', component: EsportesComponent },
  { path: 'atletas', component: AtletasComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }