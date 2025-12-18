import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe(res => {
      if (res.status) {
        this.auth.saveToken(res.token);
        this.router.navigate(['/home']);
      } else {
        alert('Login failed');
      }
    });
  }
}
