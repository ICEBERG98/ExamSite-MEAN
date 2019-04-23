import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

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
    this.register(form.value);
    this.router.navigateByUrl("/login")
  }
}
