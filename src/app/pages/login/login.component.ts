import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user = '';
  public pass = '';
  public loading = false;
  public version = '';
  constructor(
    private conn: ConnectionService,
    private route: Router,
    private util: UteisService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.conn.user = null;
    this.http.get<{ version: number }>('assets/version.json').toPromise()
      .then(v => this.version = String(v.version));
  }



  async login() {
    this.loading = true;
    try {
      await this.conn.login(this.user, this.pass);
      if (this.conn.user) {
        if (this.conn.user.idsistema) {
          this.route.navigate(['/dashboard']);
        } else {
          this.util.alertDanger('Erro ao logar!');
        }
      } else {
        this.util.alertDanger('Erro ao logar!');
      }
    } catch (error) {}
    this.loading = false;
  }
}
