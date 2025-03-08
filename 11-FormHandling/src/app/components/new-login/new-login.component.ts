import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounce, debounceTime, of } from 'rxjs';

function customValidator(control: AbstractControl) {
  if (control.value.includes('1')) {
    return null;
  }
  return { Invalid: true };
}

function isEmailUnique(control: AbstractControl) {
  if (control.value === 'test@example.com') {
    return of({ notUnique: true });
  }
  return of(null);
}
@Component({
  selector: 'app-new-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-login.component.html',
  styleUrl: './new-login.component.css',
})
export class NewLoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    Email: new FormControl('', {
      validators: [
        Validators.email,
        Validators.required,
        // ,(control)=>{return null}
      ],
      // updateOn: 'submit',
    }),

    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        customValidator,
      ],
      asyncValidators: [isEmailUnique],
    }),
  });

  ngOnInit(): void {
    const savedCredentials = window.localStorage.getItem('saved-login');
    if (savedCredentials) {
      this.form.patchValue({
        Email: JSON.parse(savedCredentials).Email,
      });
    }
    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (vlaue) =>
          window.localStorage.setItem(
            'saved-login',
            JSON.stringify({
              email: vlaue.Email,
            })
          ),
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  get isEmailValid() {
    return (
      this.form.controls.Email.touched &&
      this.form.controls.Email.invalid &&
      this.form.controls['Email'].errors?.['required']
    );
  }
  get isPasswordValid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.invalid &&
      this.form.controls['password'].errors?.['required']
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
