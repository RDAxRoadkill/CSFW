import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SubscriptionService {

  baseUri:string = environment.serverurl + "/api/subscription";
  headers = new HttpHeaders().set('Content-type', 'application/json');
  constructor(private http: HttpClient) { }

  //Create
  createSubscription(data): Observable<any> {
    const url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  //Read all
  getSubscriptions() {
    return this.http.get(`${this.baseUri}`);
  }
  //Read one
  getSubscription(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  //Update
  updateSubscription(id, data): Observable<any> {
    const url = `${this.baseUri}/${id}`;
    return this.http.put(url, data, {headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //Delete
  deleteSubscription(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //Errors go here
  //TODO: Clean this up, make this a seperate service
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
