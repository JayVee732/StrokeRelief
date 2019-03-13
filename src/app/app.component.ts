import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './login/login.page';
import { TabsPage } from './tabs/tabs.page';
import { AuthProvider } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage: any = LoginPage;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Double check that this will work with Ionic 4
      // this.auth.afAuth.authState
      //   .subscribe(
      //     user => {
      //       if (user) {
      //         this.rootPage = TabsPage;
      //       } else {
      //         this.rootPage = LoginPage;
      //       }
      //     },
      //     () => {
      //       this.rootPage = LoginPage;
      //     }
      //   );
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }  

  public setTabs() {
    this.rootPage = TabsPage;
  }
}
