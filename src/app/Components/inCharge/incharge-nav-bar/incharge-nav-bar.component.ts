import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incharge-nav-bar',
  templateUrl: './incharge-nav-bar.component.html',
  styleUrls: ['./incharge-nav-bar.component.css']
})
export class InchargeNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')){
      if (JSON.parse(localStorage.getItem('user')).role != 'InCharge') {
        this.router.navigate(['/login'])
      } else {
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
