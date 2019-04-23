import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login(data){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    }); 
    let options = {
      headers: httpHeaders
    };    
   // console.log(data);
    return this.http.post("http://localhost:1337/login", data, options).subscribe((res)=> {
 //     console.log(res["status"]);
      if(res['status'] == "Logged In"){
   //     console.log(res['redirect']);
        localStorage.setItem('status', "1");
        localStorage.setItem('user_type', data["user_type"]);
       // console.log(localStorage.getItem("user_type"));
        this.router.navigateByUrl('/' + res['redirect']);
      }
      else{
        alert("Invalid Credentials");
      }
  });
  }

  onClick(form) {
    this.login(form.value);
  }

}
