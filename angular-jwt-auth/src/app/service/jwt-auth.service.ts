import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthenticationBean } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor(private http: HttpClient) { }


  executeJwtAuthenticationService(username: any, password: any){

    return this.http.post<any>(`http://localhost:8080/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => { 
          console.log(data.token)
        sessionStorage.setItem('authenticaterUser', username);
        sessionStorage.setItem('token', `Bearer ${data.token}`);
        return data;
      }
      )
    );
           
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
     return sessionStorage.getItem('token');
    return null;
  }
  
  // createBasicAuthenticationHttpHeader(){
  //   let username = 'user';
  //   let password = 'pass';
  //   let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeader;
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }
}
