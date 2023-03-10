import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage="Invalid User!!"
  username = 'user'
  password=''
  invalidUser=false
  
constructor(private router: Router,
  public basicAuthenticationService: BasicAuthenticationService
  ){}

  handleLogin(){
    if(this.username==='user' && this.password==='pass'){
        this.invalidUser=false
        this.router.navigate(['home'])
      }
      else{
      this.invalidUser=true
      }
    }

    handleBasicAuthLogin(){

      this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.invalidUser=false
          this.router.navigate(['home'])
        },
        error => {
          console.log(error)
          this.invalidUser=true
        }
      )
    }
}
