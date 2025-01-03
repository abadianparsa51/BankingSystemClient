import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../model/loginModel';
import { Register } from '../model/registerModel';
import { Observable, finalize, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../model/jwtAuthModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  registerUrl = "AuthManagement/Register"
  loginUrl = "AuthManagement/Login"
  weatherUrl = "WeatherForecast"
  constructor(protected http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiBaseUrl}/${this.registerUrl}`, user)
  }
  public login(user: login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiBaseUrl}/${this.loginUrl}`, user)
  }
  getWeather(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/${this.weatherUrl}`);
  }
}
