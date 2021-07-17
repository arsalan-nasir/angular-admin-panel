import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  username!: string;
  password!: string;
  title = 'Admin Panel';
  isDrawerOpen = false;
  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };
  logIn() {
    localStorage.setItem(
      'user',
      JSON.stringify({ username: this.username, password: this.password })
    );

    this.router.navigate(['/']);
  }
}
