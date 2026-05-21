import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';
import { DropsearchComponent } from 'src/app/components/dropsearch/dropsearch.component';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

interface Agendamento {
  id?: string;
  cduser?: string;
  iderpvendedor?: string;
  idsistema?: string;
  cdcliente?: string;
  dscliente?: string;
  idcliente?: string;
  cdpropriedade?: string;
  dspropriedade?: string;
  data?: string;
  dtatualizacao?: string;
  isrealizada?: string;
  observacoes?: string;
}

@Component({
  selector: 'app-addagendamento',
  templateUrl: './addagendamento.component.html',
  styleUrls: ['./addagendamento.component.scss'],
})
export class AddagendamentoComponent implements OnInit {
  public loading: boolean;
  public vendedores: any = [];
  public clientes: any = [];
  public propriedades: any = [];

  public agendamento: Agendamento = {};

  @ViewChild('dropvendedor') dropvendedor: DropsearchComponent;
  @ViewChild('dropcliente') dropcliente: DropsearchComponent;
  @ViewChild('droppropriedade') droppropriedade: DropsearchComponent;
  @ViewChild('dtagendamento') dtagendamento: DatepickerComponent;

  constructor(
    @Optional() public dialogRef: MatDialogRef<AddagendamentoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private conn: ConnectionService,
    private util: UteisService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  ngAfterViewInit() {
    this.getVendedores();
  }

  async getVendedores() {
    
    this.loading = true;
    try {
      this.vendedores = await this.conn.getAllVendedores().toPromise();
      console.log(this.vendedores);
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dropvendedor.values = this.vendedores;
    }, 300);
  }

  async getClientes(iderpvendedor) {
    try {
      this.droppropriedade.value = null;
      this.dropcliente.value = null;
    } catch (error) {}
    this.loading = true;
    try {
      console.log(iderpvendedor);
      this.agendamento.iderpvendedor = null;
      this.agendamento.iderpvendedor = iderpvendedor;
      this.agendamento.cdpropriedade = null;
      this.agendamento.idcliente = null;
      this.clientes = await this.conn.getClientes(iderpvendedor).toPromise();
      console.log(this.clientes);
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.dropcliente.value = null;
      this.dropcliente.values = this.clientes;
    }, 300);
  }

  async getPropriedades(idcliente) {
    try {
      this.droppropriedade.value = null;
    } catch (error) {}
    this.loading = true;
    try {
      console.log(idcliente);
      this.agendamento.idcliente = idcliente;
      this.agendamento.cdpropriedade = null;
      this.propriedades = await this.conn
        .getClientePropriedade(idcliente)
        .toPromise();
      console.log(this.propriedades);
    } catch (error) {}
    this.loading = false;
    setTimeout(() => {
      this.droppropriedade.values = this.propriedades;
    }, 300);
  }

  setPropriedade(iderp) {
    this.agendamento.cdpropriedade = iderp;
  }

  async sendAgendamento() {
    this.agendamento.data = null;
    this.loading = true;
    try {
      try {
        if (
          moment(this.dtagendamento.value, 'DD/MM/YYYY').isValid() &&
          this.dtagendamento.value.length == 10
        ) {
          console.log(this.dtagendamento.value);
          console.log(this.dtagendamento.value.length);

          this.agendamento.data = this.dtagendamento.value;
        }
      } catch (error) {}
      if (!this.agendamento.data) {
        this.util.alert('Data é campo obrigatório!');
        this.dtagendamento.setFocus();
      } else if (!this.agendamento.iderpvendedor) {
        this.util.alert('Vendedor é campo obrigatório!');
        this.dropvendedor.setFocus();
      } else if (!this.agendamento.idcliente) {
        this.util.alert('Cliente é campo obrigatório!');
        this.dropcliente.setFocus();
      } else if (!this.agendamento.cdpropriedade) {
        this.util.alert('Propriedade é campo obrigatório!');
        this.droppropriedade.setFocus();
      } else {
        this.clientes.forEach((item) => {
          if (item.id == this.agendamento.idcliente) {
            this.agendamento.cdcliente = item.iderp;
            this.agendamento.dscliente = item.nmcliente;
          }
        });

        this.propriedades.forEach((item) => {
          if (item.iderp == this.agendamento.cdpropriedade) {
            this.agendamento.dspropriedade = item.nmendereco;
          }
        });
        this.agendamento.cduser = this.conn.user.id;
        this.agendamento.idsistema = this.conn.user.idsistema;
        this.agendamento.isrealizada = '0';
        let res = await this.conn.sendAgendamento(this.agendamento).toPromise();
        console.log(res);
        this.dialogRef.close();
      }
    } catch (e) {
      this.util.alert('Erro ao enviar agendamento!');
    }
    this.loading = false;
  }
}
