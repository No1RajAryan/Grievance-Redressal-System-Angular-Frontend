import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')){
      if (JSON.parse(localStorage.getItem('user')).role != 'Admin') {
        this.router.navigate(['/login'])
      }
    }
     else {
       this.router.navigate(['/login'])
    }

  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
