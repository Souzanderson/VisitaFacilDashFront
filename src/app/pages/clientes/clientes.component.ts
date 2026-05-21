import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public loading = false;
  public list: any = [];
  public aux: any = [];
  public ordered: any = {};
  public criterios = [
    { id: 'nmcliente', label: 'Cliente' },
    { id: 'vendedor', label: 'Vendedor' },
  ];
  public term = '';
  public criter = 'nmcliente';
  public filtertimer;

  @ViewChild('dti') dti: DatepickerComponent;
  @ViewChild('dtf') dtf: DatepickerComponent;

  constructor(
    private conn: ConnectionService,
    private util: UteisService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    
    this.filtertimer = setInterval(() => {
      this.instant();
    }, 100);
  }

  ngOnDestroy() {
    console.log("Limpou intervalo do instant!");
    clearInterval(this.filtertimer);
  }

  filterDate() {
    try {
      if (this.dti.value.length == 10 && this.dtf.value.length == 10) {
        this.list = this.list.filter((item) => {
          return this.util.dateInRange(
            this.dti.value,
            this.dtf.value,
            moment(item.dtultima, 'YYYY/MM/DD').format('DD/MM/YYYY')
          );
        });
      }
    } catch (error) {
      console.log('wait date...');
    }
  }

  getPer(item) {
    return Number(item.success) / Number(item.visitas);
  }

  orderBy(column, tp = null) {
    this.ordered[column] = this.ordered[column] == 1 ? -1 : 1;
    this.list = this.list.sort((a, b) => {
      let ri = a[column];
      let rx = b[column];
      if (tp == 'number') {
        ri = tp ? Number(a[column]) : a[column];
        rx = tp ? Number(b[column]) : b[column];
      } else if (tp == 'date') {
        ri = tp ? moment(a[column], 'YYYY/MM/DD').valueOf() : a[column];
        rx = tp ? moment(b[column], 'YYYY/MM/DD').valueOf() : b[column];
      }
      if (ri > rx) return -1 * this.ordered[column];
      else if (ri < rx) return 1 * this.ordered[column];
      else return 0;
    });
  }

  open(idcliente) {
    this.route.navigate(['/visitacliente', idcliente]);
  }

  checkDate(date) {
    let mnow = moment().get('months');
    let mdate = moment(date, 'YYYY/MM/DD').get('months');
    if (mnow - mdate <= 1) return '#51ef51';
    else if (mnow - mdate < 3) return '#f2ff6b';
    else return '#ff6959';
  }

  instant() {
    if (this.term) {
      this.list = this.aux.filter((item) => {
        return (
          String(item[this.criter])
            .toUpperCase()
            .indexOf(String(this.term).toUpperCase()) > -1
        );
      });
    } else {
      this.list = this.aux;
    }
    try{
    if (this.dti.value.length == 10 && this.dtf.value.length == 10)
      this.list = this.list.filter((item) => {
        try {
          let dt = moment(item.dtultima, 'YYYY/MM/DD').format('DD/MM/YYYY');
          return this.util.dateInRange(
            this.dti.value,
            this.dtf.value,
            dt
          );
        } catch (_) {
          return true;
        }
      });}
      catch(e){

      }
  }

  async getData() {
    this.loading = true;
    try {
      this.list = await this.conn.getVisitasByClient().toPromise();
      this.aux = this.list;
      console.log(this.list);
      this.orderBy('dtultima', 'date');
      
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dti.value = moment().subtract(30,'days').format("DD/MM/YYYY");
      this.dtf.value = moment().format("DD/MM/YYYY");
    }, 300);
  }
}
