import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';
import { VersionRepository } from 'src/app/services/version.repository';

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
    private versionRepo: VersionRepository
  ) {}

  ngOnInit(): void {
    this.conn.user = null;
    this.versionRepo.getVersion().then(v => this.version = v.versionNumber);
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
