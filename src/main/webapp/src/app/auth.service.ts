import { Injectable } from '@angular/core';

import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string;
  private requestTokenUrl: string;
  private clientId: string;

  constructor( private http: HttpClient ) { 
    this.apiUrl = environment.apiUrl;
    this.requestTokenUrl = environment.requestTokenUrl
  }

  attemptLogin(credentials: string) : Observable<any> {
    const headers = {
      'Authorization' : "Basic " + btoa(`${environment.clientId}:${environment.clientSecret}`),
      'Content-type' : 'application/x-www-form-urlencoded'
    }
    const url = `${this.apiUrl}${this.requestTokenUrl}`;
    return this.http.post(url, credentials, {headers})
  }
}
