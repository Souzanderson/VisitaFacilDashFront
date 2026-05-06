import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() height = 'auto';
  @Input() title;
  @Input() overflow = 'hidden';
  @Input() minwidth = 'auto';
  @Input() maxwidth = '100%';
  @Input() width = 'auto';
  @Input() margin = 'unset';
  @Input() background = 'var(--color-primary-contrast)';
  @Input() color = 'var(--color-text)';
  @Input() iscollapse = false;
  @Input() collapsed = false;
  @ViewChild('card') card: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  collapse(){
    let el: HTMLElement = this.card.nativeElement;
    if(!this.collapsed){
      el.style.overflow = "hidden";
      el.style.height = "12px";
    }
    else{
      el.style.overflow = this.overflow;
      el.style.height = this.height;
    }
    this.collapsed = !this.collapsed;
  }
}
