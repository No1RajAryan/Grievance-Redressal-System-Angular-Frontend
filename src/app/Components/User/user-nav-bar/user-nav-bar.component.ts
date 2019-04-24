import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user'))._id)
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
