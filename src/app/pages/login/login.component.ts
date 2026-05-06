import { Component, OnInit } from '@angular/core';
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
  constructor(
    private conn: ConnectionService,
    private route: Router,
    private util: UteisService
  ) {}

  ngOnInit(): void {
    this.conn.user = null;
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
