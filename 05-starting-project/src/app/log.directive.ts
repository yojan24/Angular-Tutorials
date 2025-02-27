import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onClick()',
  },
})
export class LogDirective {
  private element = inject(ElementRef);
  constructor() {}
  onClick() {
    console.log(this.element.nativeElement);
  }
}
