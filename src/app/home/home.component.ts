import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLoginModalOpen = false;
  user: any;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((user) => (this.user = user));
  }

  logout() {
    this.authService.logout();
  }

  async login() {
    await this.authService.loginWithGoogle();
  }
}
