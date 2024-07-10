
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { apiUrls } from '../validators/api_URL';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
   http = inject(HttpClient);

  /* Using the below behaviour we are setting the isLoggedIn value to True and when log off to False. */
  isLoggedIn$ = new BehaviorSubject<boolean>(false);


  registerService(registerObj : any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`, registerObj);
  }

  loginService(loginObj : any){
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
  }

  isLoggedIn(){
    return !!localStorage.getItem("user_id");
   }

  logOffConfirmation(message : string) : boolean{
    return window.confirm(message);
  }
}
