import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedIn!: boolean;
  constructor(private _as: AuthService) {
    this.loggedIn = this._as.isAuthenticated();
  }
  ngOnInit() {
    this._as.verify();
  }
}
