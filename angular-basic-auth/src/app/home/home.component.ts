import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { GreetingService } from '../service/greeting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Greetings';
   greetingMessage =''
  // constructor(private http: HttpClient) {
  //   http.get('greeting').subscribe(data => this.data = data);
  // }

  constructor(private greetingService: GreetingService){}

  getEnglishGreeting(){
      console.log( this.greetingService.getGreeting('english'));
      this.greetingService.getGreeting('english').subscribe(
        response => this.handleGreetingResponse(response)        
        );
  }

  getFrenchGreeting() {
    this.greetingService.getGreeting('french').subscribe(
      response => this.handleGreetingResponse(response)
      );
  }

  handleGreetingResponse(response:any){
    console.log(response.message)
    this.greetingMessage=response.message
  }



}
