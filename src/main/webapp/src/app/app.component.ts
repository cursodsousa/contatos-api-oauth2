import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
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
        .subscribe(response => console.log(response))
  }
}
