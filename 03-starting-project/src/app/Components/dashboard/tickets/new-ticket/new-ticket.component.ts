import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shares/button/button.component';
import { ControlComponent } from '../../../shares/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('Form') form?: ElementRef<HTMLFormElement>;

  add = output<{ title: string; text: string }>();

  // private form = viewChild<ElementRef<HTMLFormElement>>('Form');

  // onSubmit(title: string, request: String, form: HTMLFormElement) {
  //   console.log(title, request);
  //   form.reset();
  // }

  //this difference only for decorator with signal method we can access it in init also
  ngOnInit(): void {
    console.log('onInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, request: string) {
    // console.log(title, request);
    this.add.emit({ title: title, text: request });
    this.form?.nativeElement.reset();
  }
}
