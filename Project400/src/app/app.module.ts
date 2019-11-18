import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StrokeReliefApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BluetoothConnectPage } from '../pages/bluetooth-connect/bluetooth-connect';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { ExercisePage } from '../pages/exercise/exercise';
import { ExerciseListPage } from '../pages/exercise-list/exercise-list';
import { ExerciseResultsPage } from '../pages/exercise-results/exercise-results';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar'

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { StorageProvider } from '../providers/storage/storage';
import { DatePipe } from '@angular/common';
import { BluetoothDataProvider } from '../providers/bluetooth-data/bluetooth-data';

@NgModule({
  declarations: [
    StrokeReliefApp,
    HomePage,
    BluetoothConnectPage,
    SettingsPage,
    TabsPage,
    HelpPage,
    ExercisePage,
    ExerciseListPage,
    ExerciseResultsPage,
    LoginPage,
    ProgressBarComponent,
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
    ExerciseListPage,
    ExerciseResultsPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    IonicStorageModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    SettingsProvider,
    AngularFirestoreModule,
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFireAuthModule,
    StorageProvider,
    BLE,
    DatePipe,
    BluetoothDataProvider,
  ]
})
export class AppModule { }
