import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileName: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.profileName = params.get('name-profile');
      if (!this.profileName) {
        // Si no hay perfil, redirigir a la Home
        this.router.navigate(['/']);
      }
    });
  }
}
