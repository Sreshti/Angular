import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'http://localhost:8080/api/movies';

  constructor(private http:HttpClient) { }
  getMoviesList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  newMovie(movie:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, movie);
  }
  getMovie(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateMovie(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deleteMovie(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

}
