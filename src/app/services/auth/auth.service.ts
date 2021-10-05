import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  loggedIn = false;
  isAuthenticated() {
    return this.loggedIn;
  }
  login(email: String, password: String) {
    let loginData = { email, password };
    this.http
      .post('https://thawing-thicket-32621.herokuapp.com/api/v1/login', loginData)
      .subscribe((response: any) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.loggedIn = true;
          this.router.navigate(['/home']);
        }
      });
  }
  logout() {
    this.loggedIn = false;
  }
  async verify() {
    const token = localStorage.getItem('token');
    this.http
      .post('https://thawing-thicket-32621.herokuapp.com/api/v1/login/verify', { token })
      .subscribe((response: any) => {
        if (!response.isAuthorised) {
          this.loggedIn = false;
          this.router.navigate(['/']);
        } else {
          this.loggedIn = true;
          this.router.navigate(['/home']);
        }
      });
  }
}
