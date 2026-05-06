import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsgoogleComponent } from './components/mapsgoogle/mapsgoogle.component';
import { VisitasclienteComponent } from './details/visitascliente/visitascliente.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { VisitsComponent } from './pages/visits/visits.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'vendedores', component: VendedoresComponent },
  { path: 'vendedores/:id/:dtini/:dtfim', component: VendedoresComponent },
  { path: 'vendedores/:id', component: VendedoresComponent },
  { path: 'visitacliente/:idcliente', component: VisitasclienteComponent },
  { path: 'mapa', component: MapsgoogleComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
