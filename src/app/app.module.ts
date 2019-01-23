import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] }, //Needs Authentication
  { path: 'client/:id', component: ClientComponent, canActivate: [AuthService] },
  { path: 'clientlist', component: ClientlistComponent, canActivate: [AuthService] },
  { path: '**', redirectTo: 'login' }
];

export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent,
    ClientComponent,
    ClientlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [{
    provide: FirestoreSettingsToken, useValue: {}}, // Currently to avoid error in console, will be removed when Firestore is updated
    AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
