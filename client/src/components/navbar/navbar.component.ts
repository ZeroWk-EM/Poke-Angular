import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  username: string = '';
  usernameSubscription$: Subscription | undefined;

  constructor(private authService: AuthService,private route:Router) {}

  ngOnInit(): void {
    this.usernameSubscription$ = this.authService.user.subscribe({
      next: (username) => {
        this.username = username.split(" ")[0];
      },
    });
  }

  getStatus(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  exit() {
    this.authService.logout();
    this.authService.user.next('GUEST');
    this.route.navigate([""]);
  }

  ngOnDestroy(): void {
    this.usernameSubscription$?.unsubscribe()
  }
}
