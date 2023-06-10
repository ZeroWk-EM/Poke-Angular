import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe({next: (username) => {
      this.username = username;
    }})
  }

  getStatus(): boolean {
    return Boolean(localStorage.getItem("token"));
  }

  exit() {
    this.authService.logout();
    this.authService.user.next("GUEST")
  }
}
