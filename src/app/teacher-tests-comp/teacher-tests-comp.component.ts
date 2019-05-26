import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-tests-comp',
  templateUrl: './teacher-tests-comp.component.html',
  styleUrls: ['./teacher-tests-comp.component.css']
})

export class TeacherTestsCompComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  url = "";
  test_names = [];

  edit(str){
    this.router.navigateByUrl("/edit/" + this.test_names[str]);
  }

  results(str){
    this.router.navigateByUrl("/results/" + this.test_names[str]);
  }

  delete(str){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    });
    let options = {
      headers: httpHeaders
    };

    return this.http.post("http://localhost:1337/tests/delete", {"name" : this.test_names[str]}, options).subscribe(res => {
      this.redirectTo("/mytests")
    });
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  ngOnInit() {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    });
    let options = {
      headers: httpHeaders
    };    
    return this.http.get("http://localhost:1337/gettests", options).subscribe((res) => {
        let json = JSON.parse(JSON.stringify(res));
        for(var i =0; i < json.length; i++){
          this.test_names.push(json[i]["name"]);
        }
    });
  }
}
