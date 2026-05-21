import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  public URL_PY = environment.URL_SERVER_PY;
  // public user: any = null;
  public user: any = {
    hascode: "",
    idsistema: environment.user_test,
    iderp: "",
    iderpvendedor: "",
    isativo: "",
    master: "",
  };
  constructor(private http: HttpClient) {}

  async login(user, pass) {
    let body = {};

    body["origem"] = "mobile";
    body["usuario"] = {};
    body["usuario"]["dsLogin"] = user;
    body["usuario"]["dsSenha"] = pass;

    this.user = await this.http.post(this.URL_PY + "login", body).toPromise();
    console.log(this.user);
  }

  getAllVendedores() {
    return this.http.get(this.URL_PY + `vendedor?hash=${this.user.hascode}`);
  }

  getClientes(iderpvendedor) {
    return this.http.get(
      this.URL_PY +
        `cliente?hash=${this.user.hascode}&iderpvendedor=${iderpvendedor}`,
    );
  }

  getClientePropriedade(idcliente) {
    return this.http.get(
      this.URL_PY +
        `cliente/propriedade?hash=${this.user.hascode}&idcliente=${idcliente}`,
    );
  }

  sendAgendamento(agendamento) {
    return this.http.post(
      this.URL_PY + `visitas/agenda?hash=${this.user.hascode}`,
      agendamento,
    );
  }

  getVendedores(dtini: any = null, dtfim: any = null, idvendedor: any = null) {
    if (dtini && dtfim && idvendedor) {
      return this.http.get(
        this.URL_PY +
          "vendedor/details?idsistema=" +
          this.user.idsistema +
          "&hash=" +
          this.user.hascode +
          "&dtini=" +
          dtini +
          "&dtfim=" +
          dtfim +
          "&idvendedor=" +
          idvendedor,
      );
    } else if (dtini && dtfim) {
      return this.http.get(
        this.URL_PY +
          "vendedor/details?idsistema=" +
          this.user.idsistema +
          "&hash=" +
          this.user.hascode +
          "&dtini=" +
          dtini +
          "&dtfim=" +
          dtfim,
      );
    } else {
      return this.http.get(
        this.URL_PY +
          "vendedor/details?idsistema=" +
          this.user.idsistema +
          "&hash=" +
          this.user.hascode,
      );
    }
  }

  getStatistic() {
    return this.http.get(
      this.URL_PY +
        "visitas/statistics?idsistema=" +
        this.user.idsistema +
        "&hash=" +
        this.user.hascode,
    );
  }

  getByClient(idcliente, dtini, dtfim) {
    let body = {
      idsistema: this.user.idsistema,
      idcliente: idcliente,
      dtinicio: dtini,
      dtfim: dtfim,
    };
    return this.http.post(
      this.URL_PY + "visitas/doc?hash=" + this.user.hascode,
      body,
    );
  }

  getObjetivos() {
    return this.http.get(
      this.URL_PY +
        "visitas/objetivos?idsistema=" +
        this.user.idsistema +
        "&hash=" +
        this.user.hascode,
    );
  }

  getEventos() {
    return this.http.get(
      this.URL_PY +
        "eventos?idsistema=" +
        this.user.idsistema +
        "&hash=" +
        this.user.hascode,
    );
  }

  getCliente(idcliente) {
    return this.http.get(
      this.URL_PY +
        "cliente/byid?idsistema=" +
        this.user.idsistema +
        "&hash=" +
        this.user.hascode +
        "&idcliente=" +
        idcliente,
    );
  }

  getContato() {
    return this.http.get(
      this.URL_PY +
        "visitas/contato?idsistema=" +
        this.user.idsistema +
        "&hash=" +
        this.user.hascode,
    );
  }

  getVisitasByClient() {
    return this.http.get(
      `${this.URL_PY}visitas/byclient?idsistema=${this.user.idsistema}&hash=${this.user.hascode}`,
    );
  }

  getVisitas(dtini, dtfim, hashgrupo = null, idvendedor = null) {
    let body = {
      data: {
        idSistema: this.user.idsistema,
        dtinicio: dtini,
        dtfim: dtfim,
        hashgrupo: hashgrupo,
        idvendedor: idvendedor,
      },
    };
    return this.http.post(
      this.URL_PY + "visitas/bydata?hash=" + this.user.hascode,
      body,
    );
  }

  getGrupoVisitas(dtini, dtfim) {
    return this.http.get(
      this.URL_PY +
        `visitagrupos?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&dtini=${dtini}&dtfim=${dtfim}`,
    );
  }

  getImagensVisitas(idvisita) {
    return this.http.get(
      this.URL_PY +
        `visitas/visitaimagem?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&idvisita=${idvisita}`,
    );
  }

  getAudiosVisitas(idvisita) {
    return this.http.get(
      this.URL_PY +
        `visitas/visitaaudios?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&idvisita=${idvisita}`,
    );
  }

  getVideosVisitas(idvisita) {
    return this.http.get(
      this.URL_PY +
        `visitas/visitavideos?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&idvisita=${idvisita}`,
    );
  }

  getAgendamentos(dtini, dtfim) {
    return this.http.get(
      this.URL_PY +
        `visitas/agenda?hash=${this.user.hascode}&dtini=${dtini}&dtfim=${dtfim}`,
    );
  }
}
