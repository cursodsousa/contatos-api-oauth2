import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './home/contato';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  apiUrl:string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getContatos() : Observable<Contato[]>{
    const token = JSON.parse(sessionStorage.getItem('token'))
    const headers = {
      'Authorization': 'Bearer '+ token.access_token,
    }
    const url = this.apiUrl + '/api/contatos'
    return this.http.get<any>(url, {headers });
  }
}
