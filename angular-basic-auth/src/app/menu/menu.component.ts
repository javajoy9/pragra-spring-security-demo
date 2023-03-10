import { Component } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isUserLoggedIn: boolean =false;
  constructor(public basicAuthenticationService
    : BasicAuthenticationService) { }

    ngOnInit() {
      this.isUserLoggedIn = this.basicAuthenticationService.isUserLoggedIn();
    }
}
