import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/user.interface';
import { GenericMessage, LoginResponse } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authURL = `http://localhost:5000/v1/auth`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  register(
    name: string,
    surname: string,
    email: string,
    password: string
  ): Observable<GenericMessage> {
    return this.http.post<GenericMessage>(
      `${this.authURL}/register`,
      {
        name,
        surname,
        email,
        password,
      },
      this.httpOptions
    );
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.authURL}/login`,
      { email, password },
      this.httpOptions
    );
  }

  validate(token: string): Observable<GenericMessage> {
    return this.http.get<GenericMessage>(
      `${this.authURL}/validate/${token}`,
      this.httpOptions
    );
  }

  logout(fullname: string, token: string) {
    localStorage.removeItem(fullname);
    localStorage.removeItem(token);
  }
}
