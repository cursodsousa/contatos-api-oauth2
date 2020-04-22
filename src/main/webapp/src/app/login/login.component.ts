import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ){

  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    const httpParams = new HttpParams()
      .set('username', this.form.controls.username.value)
      .set('password', this.form.controls.password.value)
      .set('grant_type', 'password')

      this.authService
        .attemptLogin(httpParams.toString())
        .subscribe(response => {
          sessionStorage.setItem('token', JSON.stringify(response))
          this.router.navigate(['/home'])
        })
  }

}
