import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 constructor(private authService: AuthService) { }
}
