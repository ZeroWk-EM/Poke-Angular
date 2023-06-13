import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericMessage } from 'src/models/user';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css'],
})
export class ValidateFormComponent implements OnInit {
  idValue: string | null;
  validateForm!: FormGroup;

  constructor(private authService: AuthService, private route: ActivatedRoute, private navRoute:Router) {
    this.idValue = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.validateForm = new FormGroup({
      token: new FormControl([this.idValue], Validators.required),
    });
  }
  onSubmit() {
    this.authService.validate(String(this.idValue)).subscribe({
      next: ({ message }) => {
        window.alert(message);
        this.navRoute.navigate(["login"]);
      },
      error: (error) => {
        window.alert(error.error.message);
      },
    });
  }
}
