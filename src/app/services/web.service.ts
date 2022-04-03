import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

export const API_URL = 'https://api.covid19api.com/summary';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(API_URL, { headers });
  }

}
