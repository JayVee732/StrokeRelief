import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.auth.loginUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }
  }
}
