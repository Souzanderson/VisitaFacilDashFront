import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import moment from 'moment';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { AddagendamentoComponent } from 'src/app/registers/addagendamento/addagendamento.component';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss'],
})
export class AgendamentosComponent implements OnInit {
  public loading: boolean = false;
  public list: any = [];
  public aux: any = [];
  public filterselects: any = {};

  @ViewChild('dti') dti: DatepickerComponent;
  @ViewChild('dtf') dtf: DatepickerComponent;
  @ViewChild('table') table: ElementRef;

  constructor(private conn: ConnectionService, private util: UteisService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.init();
  }

  async init() {
    this.dti.value = moment().subtract(30, 'days').format('DD/MM/YYYY');
    this.dtf.value = moment().add(30, 'days').format('DD/MM/YYYY');
    await this.getAgendamentos();
  }

  async getAgendamentos() {
    this.loading = true;
    try {
      this.filterselects = {};
      this.list = await this.conn
        .getAgendamentos(this.dti.value, this.dtf.value)
        .toPromise();
      this.list.forEach((element) => {
        element.data = moment(element.data).format('DD/MM/YYYY');
        element.ispropria = String(element.cduser) === String(this.conn.user.id)
      });
      console.log(this.list);
      this.aux = this.list;
      
    } catch (error) {}
    this.loading = false;
  }

  count(key, label){
    return this.list.filter((item)=> item[key]==label).length
  }

  exportar() {
    const columns = {
      cdcliente: 'Cód. Cliente',
      dscliente: 'Desc. Cliente',
      iderpvendedor: 'Cód. Vendedor',
      dsvendedor: 'Desc. Vendedor',
      cdpropriedade: 'Cód. Propriedade',
      dspropriedade: 'Desc. Propriedade',
      visitas: 'Visita Realizada',
    };

    var wscols = [
      { wch: 15 },
      { wch: 50 },
      { wch: 15 },
      { wch: 50 },
      { wch: 15 },
      { wch: 50 },
      { wch: 15 },
    ];
    let js = this.list.map((item) => {
      let j = {};
      for (let c in columns) {
        if (c == 'visitas') {
          j[columns[c]] = Number(item[c]) > 0 ? 'SIM' : 'NÃO';
        } else j[columns[c]] = item[c];
      }
      return j;
    });

    console.log(js);

    this.util.toExcel(js, 'Agendamentos', wscols);
  }

  async newAgendamento() {
    this.util
      .modal(AddagendamentoComponent, {
        data: null,
        width: '580px',
        height: '650px',
      })
      .then((_) => {
        this.getAgendamentos();
      });
  }

  isFiltro(key) {
    return key in this.filterselects;
  }

  filter() {
    this.list = this.aux.filter((item) => {
      let cond = [];
      for (let key in this.filterselects) {
        cond.push(this.filterselects[key].indexOf(item[key]) > -1);
      }
      return cond.every((el) => el);
    });
  }

  floatMenu(key, evt, mask = null) {
    console.log(evt);
    let items = Array.from(new Set(this.list.map((item) => item[key])));
    this.util
      .floatingSearch(
        evt,
        this.table.nativeElement,
        items,
        this.filterselects[key],
        -60,
        0,
        mask
      )
      .then((res) => {
        if (res) this.filterselects[key] = res;
        else delete this.filterselects[key];
        this.filter();
      });
  }
}
