import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class StrokeReliefApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  selectedTheme: String;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private settings: SettingsProvider, private auth: AuthProvider) {
    platform.ready().then(() => {
      this.auth.afAuth.authState
        .subscribe(
          user => {
            if (user) {
              this.rootPage = TabsPage;
            } else {
              this.rootPage = LoginPage;
            }
          },
          () => {
            this.rootPage = LoginPage;
          }
        );

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    });
  }

  public setTabs() {
    this.rootPage = TabsPage;
  }
}
