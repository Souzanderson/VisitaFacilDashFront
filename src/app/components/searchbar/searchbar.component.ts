import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() value: string;
  @Input() type: string = "text";
  @Input() placeholder: string="Digite para pesquisar...";
  @Output() onchange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public keyup() {
    this.onchange.emit(this.value);
  }
}
