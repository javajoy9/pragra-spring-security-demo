import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BasicIntercepterService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let authenticatedToken = this.basicAuthenticationService.getAuthenticatedToken();
    let authenticatedUser = this.basicAuthenticationService.getAuthenticatedUser();
    if(authenticatedToken && authenticatedUser){
      req = req.clone({
        setHeaders : {
          Authorization: authenticatedToken
        }
      })
    }    

    return next.handle(req);
  }
}
