import { TmplAstDeferredBlockError } from '@angular/compiler';
import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  ViewChild,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // private form = viewChild('form');

  @ViewChild('form') form: NgForm | undefined;
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      if (savedForm) {
        //control object is not initialized yet so we gave 1 ms timeout
        setTimeout(
          () =>
            this.form?.setValue({
              email: JSON.parse(savedForm).email,
              password: '',
            }),
          1
        );

        // this.form?.controls['email'].setValue(JSON.parse(savedForm).email);
      }
      const subscription = this.form?.valueChanges
        ?.pipe(debounceTime(500))
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({ email: value.email })
            ),
        });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }
  onSubmit(formData: NgForm) {
    console.log(formData);
  }
}
