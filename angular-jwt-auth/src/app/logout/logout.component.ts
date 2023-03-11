import { Component } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthService } from '../service/jwt-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(public jwtAuthService : JwtAuthService) { }


    ngOnInit(){
      this.jwtAuthService.logout();
    }
}
