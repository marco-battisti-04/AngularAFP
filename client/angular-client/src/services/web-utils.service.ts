import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebUtilsService {
  private api_url = "127.0.0.1:5000/api/v1/"

  constructor(private http: HttpClient) { }

}
