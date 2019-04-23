import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private router: Router) { }

  loggedin(){
    if(localStorage.getItem("status") == "1"){
      return 1;
    }
    return 0;
  }

  logout(){
    localStorage.setItem("status", "0");
    localStorage.setItem("user_type", "0");
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
