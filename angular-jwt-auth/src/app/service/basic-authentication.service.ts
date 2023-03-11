import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


export class AuthenticationBean{
  constructor(public message: String){}
}

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeBasicAuthenticationService(username: any, password: any){

    let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);
    let header = new HttpHeaders({
      Authorization: basicAuthHeader
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers : header} ).pipe(
      map(
        data => { sessionStorage.setItem('authenticaterUser', username);
        sessionStorage.setItem('token', basicAuthHeader);
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
