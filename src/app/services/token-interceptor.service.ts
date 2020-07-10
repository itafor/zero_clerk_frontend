import { Injectable, Injector} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>,next: HttpHandler){
    let authService = this.injector.get(UsersService).getToken();
    //let jwt = localStorage.getItem('usertoken');
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.slice(1, -1)}`,
      }
    })
    return next.handle(tokenizedRequest);
  
  }

  
}
