import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { login } from 'src/app/model/loginModel';
import { Register } from 'src/app/model/registerModel';
import { JwtAuth } from 'src/app/model/jwtAuthModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent {

  loginDto = new login;
  registerDto = new Register;
  JwtDto = new JwtAuth;
  constructor(private authService: AuthenticationService,
    private router: Router
  ) { }
  formData: FormGroup = new FormGroup({
    id: new FormControl(),
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  register() {
    // Check if the form is valid before submitting
    if (this.formData.valid) {
      const registerDto: Register = this.formData.value;

      // Call the register method from your AuthService
      this.authService.register(registerDto).subscribe(
        (response) => {
          // Handle successful registration response
          console.log('Registration successful:', response);

          this.formData.reset();
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle registration error
          console.error('Registration failed:', error);
        }
      );
    } else {
      // Form is not valid, mark all controls as touched to display validation errors
      this.formData.markAllAsTouched();
    }
  }
}
