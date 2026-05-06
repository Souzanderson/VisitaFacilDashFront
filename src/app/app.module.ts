import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { IconComponent } from './components/icon/icon.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { VisitsComponent } from './pages/visits/visits.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LoginComponent } from './pages/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressComponent } from './components/progress/progress.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { VisitasclienteComponent } from './details/visitascliente/visitascliente.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { MapsgoogleComponent } from './components/mapsgoogle/mapsgoogle.component';
import { DropsearchComponent } from './components/dropsearch/dropsearch.component';
import {MatDialogModule} from '@angular/material/dialog';
import { VisitadetailComponent } from './details/visitadetail/visitadetail.component';
import {MatIconModule} from '@angular/material/icon';
import { InlinespinComponent } from './components/inlinespin/inlinespin.component';
import { ChartdistanceComponent } from './components/chartdistance/chartdistance.component';
import { FixedPipe } from './pipes/fixed.pipe';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { AddagendamentoComponent } from './registers/addagendamento/addagendamento.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    IconComponent,
    LinechartComponent,
    CardComponent,
    SearchbarComponent,
    VisitsComponent,
    SpinnerComponent,
    DatepickerComponent,
    BarchartComponent,
    LoginComponent,
    ClientesComponent,
    ProgressComponent,
    VendedoresComponent,
    VisitasclienteComponent,
    PiechartComponent,
    MapsgoogleComponent,
    DropsearchComponent,
    VisitadetailComponent,
    InlinespinComponent,
    ChartdistanceComponent,
    FixedPipe,
    AgendamentosComponent,
    AddagendamentoComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSelectModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
