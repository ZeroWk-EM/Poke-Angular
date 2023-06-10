import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GenericMessage, LoginResponse } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authURL = `http://localhost:5000/v1/auth`;

  user = new BehaviorSubject<string>('GUEST');

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.user.next(localStorage.getItem('fullname') || 'GUEST');
  }

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

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('fullname');
    localStorage.removeItem('token');
  }
}
