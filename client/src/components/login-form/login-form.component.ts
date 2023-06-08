import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup<any>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
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
        next: (response) => {
         localStorage.setItem("fullname", response.fullname);
         localStorage.setItem("token", response.token);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
