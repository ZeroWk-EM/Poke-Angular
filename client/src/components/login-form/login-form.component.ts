import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GenericMessage } from 'src/models/user';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit() {
    this.authService
      .login(
        String(this.loginForm.value.email),
        String(this.loginForm.value.password)
      )
      .subscribe({
        next: ({ data, token }) => {
          localStorage.setItem('email', data.email);
          localStorage.setItem('fullname', data.fullname);
          localStorage.setItem('token', token);
          this.authService.user.next(data.fullname);
          this.route.navigate([""])
        },
        error: (error) => {
          window.alert(`${String(error.error.message)} or Invalid credentials`);
        },
      });
  }
}
