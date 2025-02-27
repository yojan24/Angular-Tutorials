import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }

  //programmatically access
  private el = inject(ElementRef);
  @Input({ required: true }) label!: string;

  @ContentChild('input') control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor() {
    // afterRender(() => {
    //   console.log('afterRender');
    // });
    // afterNextRender(() => {
    //   console.log('afterNextRender');
    // });
  }

  ngAfterContentInit(): void {
    console.log(this.control);
  }

  //private control = contenChild<ElementRef< HTMLInputElement | HTMLTextAreaElement>>('input')
  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
  }
}
