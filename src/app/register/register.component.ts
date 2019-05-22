import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  register(data){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    }); 
    let options = {
      headers: httpHeaders
    };    
    console.log(data);
    return this.http.post("http://localhost:1337/register", data, options).subscribe();
  }

  onSubmit(form) {
    let pass = form.value["pass"];
    let cpass = form.value["cpass"];
    let fname = form.value["fname"];
    let lname = form.value["lname"];
    let email = form.value["email"];
    let user_type = form.value["user_type"];

    if(fname == "" || lname == "" || email == "" || user_type == "" || pass == "" || cpass == ""){
      this.snackBar.open("Required Fields are empty", "Ok", {
        duration: 2000,
      });
      return 1;
    }

    if (pass != cpass){
      this.snackBar.open("Password mismatch", "Ok", {
        duration: 2000,
      });
      return 1;
    }
      
    let regexp = new RegExp(/^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/);
    let res = regexp.test(email);
    console.log("Email " + res)
    if(res == false){
      this.snackBar.open("Email not valid", "Ok", {
        duration: 2000,
      });
      return 1;
    }

    let hashed_pass = sha512.sha512(pass)
    let data = {
        "fname" : fname,
        "lname" : lname,
        "email" : email,
        "pass" : hashed_pass,
        "user_type" : user_type
    }
    console.log(data)
    this.register(data);
    this.router.navigateByUrl("/login")
  }
}