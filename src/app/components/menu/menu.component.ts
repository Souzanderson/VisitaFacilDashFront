import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items = [
    {
      id: 1,
      label: 'Início',
      route: '/dashboard',
      icon: '/assets/icons/dash.svg',
      isselected: true,
    },
    {
      id: 2,
      label: 'Agendamento de Visitas',
      route: '/agendamentos',
      icon: '/assets/icons/agendamento.svg',
      isselected: false,
    },
    {
      id: 3,
      label: 'Diário de Visitas',
      route: '/visits',
      icon: '/assets/icons/book.svg',
      isselected: false,
    },
    {
      id: 4,
      label: 'Visitas por Cliente',
      route: '/clientes',
      icon: '/assets/icons/user.svg',
      isselected: false,
    },
    {
      id: 5,
      label: 'Visitas por Vendedor',
      route: '/vendedores',
      icon: '/assets/icons/vendedor.svg',
      isselected: false,
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log(this.route.url);
  }

  getroute() {
    return this.route.url;
  }

  go(id) {
    for (let item of this.items) {
      item.isselected = item.id == id;
      if (item.id == id) {
        this.route.navigate([item.route]);
      }
    }
  }

  close(){
    this.route.navigate(["/"])
  }
}
