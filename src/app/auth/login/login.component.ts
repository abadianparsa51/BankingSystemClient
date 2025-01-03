import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { login } from 'src/app/model/loginModel';
import { Register } from 'src/app/model/registerModel';
import { JwtAuth } from 'src/app/model/jwtAuthModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginDto = new login;
  registerDto = new Register;
  JwtDto = new JwtAuth;
  constructor(private authService: AuthenticationService,
    private router: Router
  ) { }
  formData: FormGroup = new FormGroup({
    id: new FormControl(),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  login() {

    if (this.formData.valid) {
      const loginDto: login = {
        Email: this.formData.get('Email')?.value,
        Password: this.formData.get('Password')?.value,
      };
      this.authService.login(loginDto).subscribe(
        (response: JwtAuth) => {
          // Handle successful login response, e.g., store token
          localStorage.setItem('jwtToken', response.token);
          localStorage.setItem('userName', response.email);;
          console.log('Login successful:', response);

          // Redirect to a different page after successful login
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
    }
  }
}
