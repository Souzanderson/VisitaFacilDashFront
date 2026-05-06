import { Component } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashVisitas';
  constructor(private conn: ConnectionService, private nav: Router) {
    if (!window.location.pathname.startsWith('/relatorio')) {
      this.nav.navigate(["/"]);
    }
  }
}
