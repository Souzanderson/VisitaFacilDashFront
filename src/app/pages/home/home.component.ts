import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private conn: ConnectionService, private util: UteisService) {}

  public vendedores: any = [];
  public notvisit: boolean = false;
  public aux: any = [];
  public statistics: any = [];
  public visitsbyper: any = [];
  public loading: boolean = false;
  public term: string = '';
  public days = 1;
  @ViewChild('dti') dti: DatepickerComponent;
  @ViewChild('dtf') dtf: DatepickerComponent;
  @ViewChild('shc') shc: SearchbarComponent;

  ngOnInit(): void {
    this.init();
  }

  getDays() {
    let dtini = moment(this.dti.value, 'DD/MM/YYYY');
    let dtfim = moment(this.dtf.value, 'DD/MM/YYYY');
    return dtfim.diff(dtini) / (1000 * 60 * 60 * 24);
  }

  goVendedor(id) {
    let dti = moment(this.dti.value, 'DD/MM/YYYY').format('DD-MM-YYYY');
    let dtf = moment(this.dtf.value, 'DD/MM/YYYY').format('DD-MM-YYYY');
    this.util.go(`vendedores/${id}/${dti}/${dtf}`);
  }

  getAverage(value) {
    return (Number(value) / (this.days > 0 ? this.days : 1)).toFixed(2);
  }

  kmCalc(item) {
    try {
      return Number(item.kmfechamento) - Number(item.kmabertura);
    } catch (error) {
      return 0;
    }
  }

  async init() {
    let dtini = moment().subtract(30, 'days');
    let dtfim = moment();
    this.loading = true;
    try {
      this.vendedores = await this.conn
        .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
        .toPromise();
      this.aux = this.vendedores;
      console.log(this.vendedores);
      this.statistics = await this.conn.getStatistic().toPromise();
      console.log(this.statistics);
      this.formatBarchart();
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
      this.dti.setValue(dtini.format('DD/MM/YYYY'));
      this.days = this.getDays();
      this.shc.value = this.term;
      this.search();
    }, 300);
  }

  async searchWs() {
    let dtini = moment(this.dti.value, 'DD/MM/YYYY');
    let dtfim = moment(this.dtf.value, 'DD/MM/YYYY');
    this.loading = true;
    try {
      this.vendedores = await this.conn
        .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
        .toPromise();
      this.aux = this.vendedores;
      console.log(this.vendedores);
      this.formatBarchart();
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
      this.dti.setValue(dtini.format('DD/MM/YYYY'));
      this.shc.value = this.term;
      this.days = this.getDays();
      this.search();
    }, 300);
  }

  formatBarchart() {
    let data = {};
    for (let s of this.statistics.reverse()) {
      let d = String(s['dtvisita']).slice(0, 7);
      if (!data[d]) data[d] = Number(s['visitas']);
      else data[d] += Number(s['visitas']);
    }
    let res = [];
    for (let k in data) {
      res.push({
        periodo: moment(k, 'YYYY/MM').format('MM/YYYY'),
        visitas: data[k],
      });
    }
    this.visitsbyper = res;
  }

  search() {
    if (this.term) {
      this.vendedores = this.aux.filter((item) => {
        return (
          String(item.nmvendedor)
            .toUpperCase()
            .indexOf(String(this.term).toUpperCase()) > -1
        );
      });
    } else {
      this.vendedores = this.aux;
    }
    if (!this.notvisit)
      this.vendedores = this.vendedores.filter(
        (item) => Number(item.visitas) > 0
      );
  }
}
