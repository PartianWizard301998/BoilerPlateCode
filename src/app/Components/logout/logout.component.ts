import { Component, inject } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export default class LogoutComponent {

  authService = inject(AuthService);
  router = inject(Router);
  isLoggedIn : boolean = false;

  


}
