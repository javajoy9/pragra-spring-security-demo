import { Component } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthService } from '../service/jwt-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isUserLoggedIn: boolean =false;
  constructor(public jwtAuthService
    : JwtAuthService) { }

    ngOnInit() {
      this.isUserLoggedIn = this.jwtAuthService.isUserLoggedIn();
    }
}
