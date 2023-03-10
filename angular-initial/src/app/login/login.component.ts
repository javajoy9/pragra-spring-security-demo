import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  
constructor(private router: Router){}

  handleLogin(){
    if(this.username==='user' && this.password==='pass'){
        this.invalidUser=false
        this.router.navigate(['home'])
      }
      else{
      this.invalidUser=true
      }
    }
}
