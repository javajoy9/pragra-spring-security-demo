import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Greeting{
  constructor(public message: String){}
}


@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  url = ''

  constructor(private http: HttpClient) { }

  getGreeting(language: String){
    this.url = 'http://localhost:8080/'+language
     return this.http.get<Greeting>(this.url)
  }
}
