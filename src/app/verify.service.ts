import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from 'datatype';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  invalidUserAuth: any;
  userAuthReload() {
    throw new Error('Method not implemented.');
  }
  isSellerloggedIn = new BehaviorSubject<boolean>(false)
  isloginError= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp) {
    this.http
      .post('http://localhost:3000/user', data, { observe: 'response' })
      .subscribe((result) => {

        console.warn('result', result);
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body))
          this.router.navigate(['kyc'])
        }

      });

  }
  reloadseller() {
    if (localStorage.getItem('user')) {
      this.isSellerloggedIn.next(true);
      this.router.navigate(['kyc'])

    }
  }
  userLogin(data:login){
    console.warn(data)
    this.http.get<signUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body?.length){
        this.isloginError.emit(false)
        localStorage.setItem('user', JSON.stringify(result.body))
          this.router.navigate(['kyc'])
      }else{
        this.isloginError.emit(true)
      }
    })
  }
}
