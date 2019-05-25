import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Result } from './res.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private http: HttpClient, private acroute: ActivatedRoute) { }
  test_name :string;
  results: Result[] = [];

  ngOnInit() {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    });
    let options = {
      headers: httpHeaders
    };
    this.test_name = this.acroute.snapshot.paramMap.get("name");
    console.log(this.test_name);
    this.http.get("http://localhost:1337/results/" + this.test_name, options).subscribe((res) => {
          for(var i = 0; i < res["length"]; i++){
            this.results.push(res[i]);
          }
          console.log(this.results);
    });
  }

}
