import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() height = "50px"
  @Input() width = "50px"
  @Input() icon = ""
  @Input() margin="4px"

  constructor() { }

  ngOnInit(): void {
  }

}
