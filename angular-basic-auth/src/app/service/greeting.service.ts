import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Greeting{
  constructor(public message: String){}
}


@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http: HttpClient) { }

  getGreeting(language: String){
    let basicAuthString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthString
    })

    return this.http.get<Greeting>(`http://localhost:8080/${language}`, {headers : header} )
  }
  
  createBasicAuthenticationHttpHeader(){
    let username = 'user';
    let password = 'pass';
    let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeader;
  }
}
