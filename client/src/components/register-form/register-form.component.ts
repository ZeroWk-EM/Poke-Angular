import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit() {
    this.authservice
      .register(
        String(this.registerForm.value.name),
        String(this.registerForm.value.surname),
        String(this.registerForm.value.email),
        String(this.registerForm.value.password)
      )
      .subscribe({
        next: (response) => {
          window.alert(`${String(response.message)}, check your email for validate your account`)
        },
        error: (error) => {
          window.alert(String(error.error.message))
        },
      });
  }
}
