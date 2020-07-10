import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loading = false;
  submitted = false;
  errors = null;
  token = '';

  constructor(
    private _fb:FormBuilder,
    private service: UsersService,) { }

  ngOnInit() {
    this.loginFormData();
    
  }

  handleError(error){
   this.errors = error.error.error;
}
  
  loginFormData(){
    this.loginForm=this._fb.group({
    email: [null, Validators.compose([Validators.required])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(10)])],
  })
}

get getLoginForm(){
  return this.loginForm.controls;
  } 

  userLogin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    const email = this.getLoginForm.email.value;
    const password = this.getLoginForm.password.value;
    console.log(email)
    this.service.login(email, password)
        .subscribe(
          data => {
            localStorage.clear();
          localStorage.setItem('usertoken',JSON.stringify(data))
          this.getProfile();
          let token = localStorage.getItem('usertoken');
         console.log(this.service.getToken())
         
          },
          error => {
            this.handleError(error);
       });
  }

   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.service.getToken()}`)
  }

  getProfile() {
    this.service.profile()
      .subscribe(
        data => {
          console.log('user profile',data);
        },
        error => {
          console.log(error);
        });
  }

}
