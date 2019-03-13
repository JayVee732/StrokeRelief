import { Component } from '@angular/core';
import { AuthProvider } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(private auth: AuthProvider, private router: Router) { }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl("/login");
  }
}
