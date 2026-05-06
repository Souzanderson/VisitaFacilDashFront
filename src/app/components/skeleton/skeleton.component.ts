import { Component, Input } from '@angular/core';

@Component({
  selector: 'skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() type: 'table' | 'cards' | 'chart' = 'table';
  @Input() rows = 6;
  @Input() cols = 4;
  @Input() count = 3;

  get rowsArr() { return Array(this.rows); }
  get colsArr() { return Array(this.cols); }
  get countArr() { return Array(this.count); }
}
