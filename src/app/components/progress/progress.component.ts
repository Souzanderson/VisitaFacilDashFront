import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progressbar',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  @Input() width = '125px';
  @Input() value = 0;
  widthinterno = '0px';

  constructor() {
  }

  ngOnInit(): void {
    this.widthinterno = 'calc(' + this.value + '*' + this.width + ')';
  }

  getPercent(){
    return (this.value * 100).toFixed(2) + '%'
  }
}
