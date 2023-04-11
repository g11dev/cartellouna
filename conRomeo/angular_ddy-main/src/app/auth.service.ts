import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor(private router: Router) {}

  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      if (this.loggedIn) {
        resolve(true);
      } else {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 2000);
      }
    });
  }

  login() {
    this.loggedIn = true;
    this.router.navigate(['/admin']);
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
