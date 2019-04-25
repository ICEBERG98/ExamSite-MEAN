import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if(localStorage.getItem("status") == "1"){
      this.router.navigateByUrl("/" + localStorage.getItem("user_type"));
    }
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

  onClick(form) {
    this.login(form.value);
  }

}
