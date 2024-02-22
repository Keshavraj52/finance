import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from 'datatype';
import { VerifyService } from '../verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLogin = false
  authError: string = "";
  constructor(private user: VerifyService) { }
  signUp(data: signUp) {
    this.user.userSignUp(data)
  }
  ngOnInit(): void {
    this.user.userAuthReload();
  }
  login(data: login) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result: any) => {
      if (result) {
        this.authError = "please enter valid email or password";
      } else {
        
      }
    })
  }
  openLogin() {
    this.showLogin = true

  }
  openSignUp() {
    this.showLogin = false

  }
 

}
