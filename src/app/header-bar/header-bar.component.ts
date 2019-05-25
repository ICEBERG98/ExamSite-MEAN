import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  whoami:number = 1;
  // Can use the local storage here since these functions are only used for display manipulation
  // and database is not manipulated on basis of these

  home(){
    this.router.navigateByUrl("/" + localStorage.getItem("user_type"));
  }

  is_teacher(){
    if(this.loggedin() && localStorage.getItem("user_type") == "teacher"){
      return 1;
    }
    return 0;
  }

  is_student(){
    if(this.loggedin() && localStorage.getItem("user_type") == "student"){
      return 1;
    }
    return 0;
}

  loggedin(){
    if(localStorage.getItem("status") == "1"){
      return 1;
    }
    return 0;
  }

  logout(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:1337/logout", {"user_type" : localStorage.getItem("user_type")}, options).subscribe((res) => {
      console.log(res);
      sessionStorage.setItem("token", "0");
      localStorage.setItem("status", "0");
      localStorage.setItem("user_type", "0");
      this.router.navigateByUrl("/login");
    });
  }

  mytests(){
    this.router.navigateByUrl("/mytests");
  }

  ngOnInit() {
  }
}
