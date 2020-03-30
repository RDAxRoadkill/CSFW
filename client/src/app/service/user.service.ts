import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


//This service only handles the user data. Not login / logout logic.
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUri:string = environment.serverurl + "/api/user";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  //Create logic is in login controller

  //Get all
  getUsers() {
    return this.http.get(`${this.baseUri}`);
  }

  //Get one
  getUser(id): Observable<any> {
    console.log("Get user called");
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  //Update
  updateUser(id, data): Observable<any> {
    console.log("Updoot user called")
    const url = `${this.baseUri}/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //Delete
  deleteUser(id): Observable<any> {
    console.log("Delete user called")
    let url = `${this.baseUri}/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
    //TODO: Clean this up, make this a service
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
