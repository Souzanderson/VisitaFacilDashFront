import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import * as moment from 'moment';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { UteisService } from 'src/app/services/uteis.service';
import { VisitadetailComponent } from 'src/app/details/visitadetail/visitadetail.component';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss'],
})
export class VisitsComponent implements OnInit {
  public dtini = moment().subtract(30, 'days').format('YYYY/MM/DD');
  public dtfim = moment().format('YYYY/MM/DD');
  public loading: boolean = false;
  public showmap: boolean = false;
  public visitas: any = [];
  public marks: any = [];
  public colors: any = [];
  public center: any;
  public groups: any = [];
  public aux: any = [];
  public filterselects = {};
  public selected;
  public realdistance = 0;
  public criterios = [
    { id: 'nmvendedor', label: 'Vendedor' },
    { id: 'nmcliente', label: 'Cliente' },
    { id: 'objetivo', label: 'Objetivo' },
    { id: 'dscultura', label: 'Cultura' },
  ];

  @ViewChild('dti') dti: DatepickerComponent;
  @ViewChild('dtf') dtf: DatepickerComponent;
  @ViewChild('table') table: ElementRef;

  public idx = 1;
  public legends;

  public filters = [{ idx: 1, search: '', criter: 'nmvendedor' }];
  constructor(private conn: ConnectionService, private util: UteisService) {}

  ngOnInit(): void {
    this.dtini = moment().subtract(30, 'days').format('YYYY/MM/DD');
    this.dtfim = moment().format('YYYY/MM/DD');
    setTimeout(() => {
      this.init();
    }, 30);
  }

  addFilter() {
    if (this.filters.length < this.criterios.length) {
      this.idx++;
      this.filters.push({ idx: this.idx, search: '', criter: '' });
    }
  }

  rmFilter(idx) {
    console.log(idx);
    this.filters = this.filters.filter((item) => item.idx != idx);
  }

  search() {
    console.log(this.filters);

    this.visitas = this.aux.filter((item) => {
      let flag = [];
      for (let f of this.filters) {
        flag.push(
          String(item[f['criter']])
            .toUpperCase()
            .indexOf(String(f['search']).toUpperCase()) > -1
        );
      }
      console.log(flag.every((el) => el));

      return flag.every((el) => el);
    });
  }

  getDistances() {
    let values = [];
    if (this.visitas.length > 0) {
      let dados = [];
      let visitas = [];
      visitas.push({
        lat: Number(this.selected.lat),
        lng: Number(this.selected.lng),
        label: 'A',
      });
      let l = 1;
      for (let v of this.visitas) {
        visitas.push({
          lat: Number(v.latitudeoriginal),
          lng: Number(v.longitudeoriginal),
          label: String(l++),
        });
      }
      visitas.push({
        lat: Number(this.selected.latfechamento),
        lng: Number(this.selected.lngfechamento),
        label: 'F',
      });

      this.marks = visitas;
      this.center = this.marks[0];
      for (let i = 1; i < visitas.length; i++) {
        let v = this.util.getDistance(visitas[i - 1], visitas[i]);
        let ant = 0;
        if (dados.length > 0) {
          ant = dados[dados.length - 1];
        }
        dados.push(ant + v);
      }

      values.push(0);
      for (let d of dados) {
        values.push(Math.ceil((d * 100) / dados[dados.length - 1]));
      }
    }
    return values;
  }

  getKM(item) {
    try {
      return Number(item.kmfim) - Number(item.km);
    } catch (error) {
      return 0;
    }
  }

  clear() {
    this.visitas = [];
    this.selected = null;
  }

  async open(item) {
    this.selected = item;
    this.loading = true;
    console.log(this.selected);

    try {
      this.visitas = await this.conn
        .getVisitas(this.dtini, this.dtfim, item.hascode)
        .toPromise();
      console.log(this.visitas);
      console.log(this.getDistances());
    } catch (error) {}
    this.loading = false;
  }

  async getVisitas() {
    this.groups = await this.conn
      .getGrupoVisitas(this.dtini, this.dtfim)
      .toPromise();
    console.log(this.groups);
    this.groups = this.groups.map((item) => {
      item['kmtotal'] = this.getKM(item);
      return item;
    });
    this.aux = this.groups;
  }

  createLegend(evt) {
    console.log(evt);
    this.legends = evt;
    for (let l of this.legends) {
      this.colors.push(l.color);
    }
    this.showmap = true;
  }

  kmByPercent(percent) {
    try {
      return (
        ((Number(percent) / 100) * this.getKM(this.selected)).toFixed(1) + ' km'
      );
    } catch (error) {
      return '0 km';
    }
  }

  async pesquisar() {
    this.dtini = moment(this.dti.value, 'DD/MM/YYYY').format('YYYY/MM/DD');
    this.dtfim = moment(this.dtf.value, 'DD/MM/YYYY').format('YYYY/MM/DD');
    this.loading = true;
    try {
      await this.getVisitas();
      // this.search();
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dti.setValue(moment(this.dtini, 'YYYY/MM/DD').format('DD/MM/YYYY'));
      this.dtf.setValue(moment(this.dtfim, 'YYYY/MM/DD').format('DD/MM/YYYY'));
    }, 300);
  }

  async init() {
    this.loading = true;
    try {
      await this.getVisitas();
      console.log(this.visitas);
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dti.setValue(moment().subtract(30, 'days').format('DD/MM/YYYY'));
      this.dtf.setValue(moment().format('DD/MM/YYYY'));
    }, 300);
  }

  isDemarcado(demarcacao) {
    try {
      let res = JSON.parse(demarcacao);
      return 'position' in res;
    } catch (error) {
      return false;
    }
  }

  async openVisit(item) {
    this.util.modal(VisitadetailComponent, { data: item });
  }

  isFiltro(key) {
    return key in this.filterselects;
  }

  filter() {
    this.groups = this.aux.filter((item) => {
      let cond = [];
      for (let key in this.filterselects) {
        if (key=="dtfechamento" || key=="dtgrupo" ) {
          const dt = moment(item[key]).format('DD/MM/YYYY');
          cond.push(this.filterselects[key].indexOf(dt) > -1);
        } else cond.push(this.filterselects[key].indexOf(item[key]) > -1);
      }
      return cond.every((el) => el);
    });
  }

  floatMenu(key, evt, mask = null) {
    console.log(evt);
    let items = [];
    if (mask == 'date') {
      items = Array.from(
        new Set(
          this.groups.map((item) => moment(item[key]).format('DD/MM/YYYY'))
        )
      );
    } else {
      items = Array.from(new Set(this.groups.map((item) => item[key])));
    }
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
        if (res && res.length>0) {
          this.filterselects[key] = res;
        } else delete this.filterselects[key];
        this.filter();
      });
  }
}
