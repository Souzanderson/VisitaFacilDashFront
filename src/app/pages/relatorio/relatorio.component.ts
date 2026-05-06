import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  public loading = true;
  public error = false;
  public cliente: any = null;
  public visitas: any[] = [];
  public dtini: string;
  public dtfim: string;
  private token: string;
  private sys: string;
  private idcliente: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.forEach((p) => (this.idcliente = p['idcliente']));
    this.route.queryParams.forEach((q) => {
      this.dtini = q['dtini'];
      this.dtfim = q['dtfim'];
      this.token = q['token'];
      this.sys = q['sys'];
    });
    if (this.token && this.sys) {
      this.load();
    } else {
      this.error = true;
      this.loading = false;
    }
  }

  async load() {
    const url = environment.URL_SERVER_PY;
    try {
      this.cliente = await this.http
        .get(`${url}cliente/byid?idsistema=${this.sys}&hash=${this.token}&idcliente=${this.idcliente}`)
        .toPromise();

      this.visitas = (await this.http
        .post(`${url}visitas/doc?hash=${this.token}`, {
          idsistema: this.sys,
          idcliente: this.idcliente,
          dtinicio: this.dtini,
          dtfim: this.dtfim,
        })
        .toPromise()) as any[];

      for (const v of this.visitas) {
        if (v.enderecocompleto) { try { v.enderecocompleto = JSON.parse(v.enderecocompleto); } catch (_) {} }
        if (v.imagens)          { try { v.imagens = JSON.parse(v.imagens); } catch (_) {} }
        if (v.demarcacaoprop)   { try { v.demarcacaoprop = JSON.parse(v.demarcacaoprop); } catch (_) {} }
      }
    } catch (_) {
      this.error = true;
    }
    this.loading = false;
  }

  get successCount() { return this.visitas.filter((v) => !v.idmotivo).length; }
  get failCount()    { return this.visitas.filter((v) =>  v.idmotivo).length; }

  print() { window.print(); }
}
