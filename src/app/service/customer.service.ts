import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 
export class CustomerService {
 
  // Node/Express API
  REST_API: string = 'http://localhost:8080';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
 
  // Add
  addCustomer(data: Customer): Observable<any> {
    let API_URL = `${this.REST_API}/customer/create`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Get all objects
  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.REST_API}`);
  }
 
  // Get single object
  getCustomer(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/customer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
 
  // Update
  updateCustomer(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/customer/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Delete
  deleteCustomer(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/customer/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
 
 
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}
