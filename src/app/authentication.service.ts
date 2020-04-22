import { Injectable } from '@angular/core';
import { LogoutComponent } from './logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
 authenticate(username,password)
  {
    if(username === "admin" && password==="1234")
    {
      sessionStorage.setItem('username',username)
      return true;
     }
    else
    {
      return false;
    }
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

    logout()
    {
      sessionStorage.removeItem('username')
    }
     
    constructor() {}
  }

