import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from 'datatype';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  invalidUserAuth: any;
  userAuthReload() {
    throw new Error('Method not implemented.');
  }
  isSellerloggedIn = new BehaviorSubject<boolean>(false)
  isloginError= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp) {
    this.http
      .post('http://localhost:3000/banker', data, { observe: 'response' })
      .subscribe((result) => {

        console.warn('result', result);
        if (result) {
          localStorage.setItem('banker', JSON.stringify(result.body))
          this.router.navigate(['bank-dash'])
        }

      });

  }
  reloadseller() {
    if (localStorage.getItem('user')) {
      this.isSellerloggedIn.next(true);
      this.router.navigate(['bank-dash'])

    }
  }
  userLogin(data:login){
    console.warn(data)
    this.http.get<signUp[]>(`http://localhost:3000/banker?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body?.length){
        this.isloginError.emit(false)
        localStorage.setItem('banker', JSON.stringify(result.body))
          this.router.navigate(['bank-dash'])
      }else{
        this.isloginError.emit(true)
      }
    })
  }
}
