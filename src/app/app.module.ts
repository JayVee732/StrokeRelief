import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StrokeReliefApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BluetoothConnectPage } from '../pages/bluetooth-connect/bluetooth-connect';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { ExercisePage } from '../pages/exercise/exercise';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicStorageModule } from '@ionic/storage';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    StrokeReliefApp,
    HomePage,
    BluetoothConnectPage,
    SettingsPage,
    TabsPage,
    HelpPage,
    ExercisePage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(StrokeReliefApp),
    AngularFireModule.initializeApp(environment.firebase),
    NgxErrorsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StrokeReliefApp,
    HomePage,
    BluetoothConnectPage,
    SettingsPage,
    TabsPage,
    HelpPage,
    ExercisePage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    SettingsProvider,
    AngularFirestoreModule,
    AngularFireAuthModule,
    StorageProvider,
  ]
})
export class AppModule {}
