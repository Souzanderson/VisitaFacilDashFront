import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inlinespin',
  templateUrl: './inlinespin.component.html',
  styleUrls: ['./inlinespin.component.scss']
})
export class InlinespinComponent implements OnInit {
  @Input() size = "56px";

  constructor() { }

  ngOnInit(): void {
  }

}
