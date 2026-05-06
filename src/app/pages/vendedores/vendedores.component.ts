import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { VisitadetailComponent } from 'src/app/details/visitadetail/visitadetail.component';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss'],
})
export class VendedoresComponent implements OnInit {
  public loading = false;
  public vendedores: any = [];
  public aux: any = [];
  public visitas: any = [];
  public term = '';
  public selected;
  public dtini = moment().subtract(30, 'days').format('YYYY/MM/DD');
  public dtfim = moment().format('YYYY/MM/DD');
  public notvisit;
  @ViewChild('dti') dti: DatepickerComponent;
  @ViewChild('dtf') dtf: DatepickerComponent;
  @ViewChild('shc') shc: SearchbarComponent;

  constructor(
    private conn: ConnectionService,
    private util: UteisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    let di = this.route.snapshot.paramMap.get('dtini');
    let df = this.route.snapshot.paramMap.get('dtfim');
    let dtini = moment().subtract(30, 'days');
    let dtfim = moment();
    if (di && df) {
      dtini = moment(di, "DD-MM-YYYY");
      dtfim = moment(df, "DD-MM-YYYY");
    } 
    this.loading = true;
    try {
      this.vendedores = await this.conn
        .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
        .toPromise();
      this.aux = this.vendedores;
      console.log(this.vendedores);
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dtini = dtini.format("YYYY/MM/DD")
      this.dtfim = dtfim.format("YYYY/MM/DD")
      this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
      this.dti.setValue(dtini.format('DD/MM/YYYY'));
      this.shc.value = this.term;
      this.search();
      this.getParams();
    }, 50);
  }

  getParams() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    try {
      let item = this.vendedores.find((item) => item.id == id);
      this.open(item);
    } catch (error) {}
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
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dtini = dtini.format('YYYY/MM/DD');
      this.dtfim = dtfim.format('YYYY/MM/DD');
      this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
      this.dti.setValue(dtini.format('DD/MM/YYYY'));
      this.shc.value = this.term;
      this.search();
    }, 300);
  }

  async getVendedores() {
    this.vendedores = await this.conn
      .getVendedores(this.dtini, this.dtfim)
      .toPromise();
    this.aux = this.vendedores;
    console.log(this.vendedores);
  }

  getKM(item) {
    try {
      return Number(item.kmfim) - Number(item.km);
    } catch (error) {
      return 0;
    }
  }

  async openVisit(item) {
    this.util.modal(VisitadetailComponent, { data: item });
  }

  clear() {
    this.visitas = [];
    this.selected = null;
    this.util.go('vendedores');
  }

  isDemarcado(demarcacao) {
    try {
      let res = JSON.parse(demarcacao);
      return 'position' in res;
    } catch (error) {
      return false;
    }
  }

  async open(item) {
    this.selected = item;
    this.loading = true;
    console.log(item);

    try {
      this.visitas = await this.conn
        .getVisitas(this.dtini, this.dtfim, null, item.idusuario)
        .toPromise();
      console.log(this.visitas);
    } catch (error) {}
    this.loading = false;
  }

  kmCalc(item) {
    try {
      return Number(item.kmfechamento) - Number(item.kmabertura);
    } catch (error) {
      return 0;
    }
  }

  instant() {}

  checkDate(date) {
    let mnow = moment().get('months');
    let mdate = moment(date, 'YYYY/MM/DD').get('months');
    if (mnow - mdate <= 1) return '#51ef51';
    else if (mnow - mdate < 3) return '#f2ff6b';
    else return '#ff6959';
  }

  getPercent(a, b) {
    if (Number(b) > 0) return Number(Number(a) / Number(b));
    else return 0;
  }
}
