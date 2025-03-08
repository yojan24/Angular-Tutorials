import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { NewLoginComponent } from './components/new-login/new-login.component';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [SignupComponent],
})
export class AppComponent {}
