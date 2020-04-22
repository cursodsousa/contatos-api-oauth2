import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: string;
  contatos: Contato[];

  constructor(
    private service: ContatoService
  ) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token')
    if(token){
      token = JSON.parse(token)
    }
    this.service
    .getContatos()
    .subscribe(result => this.contatos = result)
  }

}
