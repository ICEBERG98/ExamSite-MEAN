import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if(localStorage.getItem("status") == "0"){
      return 0;
    }
    let token = sessionStorage.getItem("token");
    if(token == null){
      sessionStorage.setItem("token", "0");
      localStorage.setItem("status", "0");
      localStorage.setItem("user_type", "0");
      window.location.reload();
      return 0;
    }
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : token
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:1337/check", {}, options).subscribe((res) => {
        console.log(res);
        if(res["status"] == "expired"){
          sessionStorage.setItem("token", "0");
          localStorage.setItem("status", "0");
          localStorage.setItem("user_type", "0");
          window.location.reload();
        }
        else{
          this.router.navigateByUrl("/" + res["user_type"]);
        }
    });
  }

  login(data){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:1337/login", data, options).subscribe((res)=> {
      if(res['status'] == "Logged In"){
        sessionStorage.setItem("token", res["token"]);
        localStorage.setItem('status', "1");
        localStorage.setItem('user_type', data["user_type"]);
        this.router.navigateByUrl('/' + res['redirect']);
      }
      else{
        this.snackBar.open("Invalid Credentials", "Ok", {
          duration: 2000,
        });
      }
  });
  }

  redirectReg(){
    this.router.navigateByUrl("/register");
  }

  onClick(form) {
    let email = form.value["email"];
    let pass = sha512.sha512(form.value["pass"]);
    let user_type = form.value["user_type"]
    let data = {
      "email" : email,
      "pass" : pass,
      "user_type" : user_type
    }
    console.log(pass)
    this.login(data);
  }
}