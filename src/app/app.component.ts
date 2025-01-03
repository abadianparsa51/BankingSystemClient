import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { login } from 'src/app/model/loginModel';
import { Register } from 'src/app/model/registerModel';
import { JwtAuth } from 'src/app/model/jwtAuthModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserClient';

  loginDto = new login;
  registerDto = new Register;
  JwtDto = new JwtAuth;
  constructor(private authService: AuthenticationService) { }

  weather() {
    this.authService.getWeather().subscribe((weather) => {
      console.log(weather);


    })
  }
}
