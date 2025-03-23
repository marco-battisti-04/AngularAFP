import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebUtilsService {
  private api_url = "127.0.0.1:5000/api/v1/"

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(`${this.api_url}/${endpoint}`, options);
  }

  post<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(`${this.api_url}/${endpoint}`, body, options);
  }

  put<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(`${this.api_url}/${endpoint}`, body, options);
  }

  delete<T>(endpoint: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(`${this.api_url}/${endpoint}`, options);
  }
}
