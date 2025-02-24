import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() data = new EventEmitter<InvestmentInput>();

  initialInvestment: string = '0';
  annualInvestment: string = '0';
  Expectedreturn = '5';
  duration = '10';
  Onsubmit() {
    this.data?.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.Expectedreturn,
      annualInvestment: +this.annualInvestment,
    });
  }
}
