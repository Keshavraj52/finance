import { Component } from '@angular/core';
import { login, signUp } from 'datatype';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-login-bank',
  templateUrl: './login-bank.component.html',
  styleUrls: ['./login-bank.component.css']
})
export class LoginBankComponent {
  showLogin = false
  authError: string = "";
  constructor(private banker:BankService) { }
  signUp(data: signUp) {
    this.banker.userSignUp(data)
  }
  ngOnInit(): void {
    this.banker.userAuthReload();
  }
  login(data: login) {
    this.banker.userLogin(data)
    this.banker.invalidUserAuth.subscribe((result: any) => {
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
