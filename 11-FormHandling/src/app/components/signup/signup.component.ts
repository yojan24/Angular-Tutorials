import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// function passwordCompare(control: AbstractControl) {
//   const password = control.get('password')?.value;
//   const confirmPassword = control.get('confirm.password')?.value;

//   if (password === confirmPassword) {
//     return null;
//   }
//   return { Comparasion: false };
// }

//another way
function passwordCompare(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const password = control.get(controlName1)?.value;
    const confirmPassword = control.get(controlName2)?.value;

    if (password === confirmPassword) {
      return null;
    }
    return { Comparasion: true };
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  form = new FormGroup({
    Email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),

        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      {
        validators: [passwordCompare('password', 'confirmPassword')],
      }
    ),

    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),

    address: new FormGroup({
      street: new FormControl('', { validators: [Validators.required] }),
      number: new FormControl('', { validators: [Validators.required] }),
      postalCode: new FormControl('', { validators: [Validators.required] }),
      city: new FormControl('', { validators: [Validators.required] }),
    }),
    role: new FormControl('student', { validators: [Validators.required] }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false, { validators: [Validators.requiredTrue] }),
  });

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid form');
      return;
    }
    console.log(this.form);
  }
}
