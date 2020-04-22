import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseurl="http://localhost:8080/api/customers/";

  constructor(private http:HttpClient) { }

  getCustomerList():Observable<any>{
    return this.http.get(`${this.baseurl}`);
  }
  deleteCustomer(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`,{responseType:'text'});
  }
  getCustomer(id:number):Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`,{responseType:'text'});
  }
}
