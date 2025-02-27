import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'confirmToLeave($event)',
  },
})
export class SafeLinkDirective {
  //   queryParam = input('myapp');
  queryParam = input('myapp', { alias: 'appSafeLink' });

  hostElemnt = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  confirmToLeave(event: MouseEvent) {
    const isTrue = window.confirm('wants to Leave??');
    console.log(this.queryParam());
    // const address = (event.target as HTMLAnchorElement).href;
    // (event.target as HTMLAnchorElement).href =
    //   address + '?from=' + this.queryParam();

    const address = this.hostElemnt.nativeElement.href;
    this.hostElemnt.nativeElement.href = address + '?from=' + this.queryParam();
    if (isTrue) {
      return;
    }
    event.preventDefault();
  }
}
