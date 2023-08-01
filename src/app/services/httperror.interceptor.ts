import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class HttperrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        const errorMessage = this.setError(error);
        alert(error.message);
        this.router.navigate(['auth/login'])
        return throwError(errorMessage)
      })
    );
  }

  setError(error: HttpErrorResponse):string {
    debugger;
    var errorMessage = 'Unknown error occoured';
    if(error.error instanceof ErrorEvent){
      //Client Side Error
      errorMessage = error.message;
    }
    else {
      //Server side error
      if(error.status !== 0){
        errorMessage = error.message
        
      }
    }
    return errorMessage
  }
}
