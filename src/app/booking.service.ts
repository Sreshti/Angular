import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseurl = "http://localhost:8080/book/booking"
  constructor(private http: HttpClient) { }
  getBookingList(): Observable<any> {
    return this.http.get(`${this.baseurl}`);
  }
  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`, { responseType: 'text' });
  }
  getBooking(id: number): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`, { responseType: 'text' });
  }
  updateBooking(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseurl}/${id}`,value);
  }
}
