import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { QueryServiceService } from 'src/app/query-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  problems: Array<any>;
  constructor(private queryservice: QueryServiceService, private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.router.navigate(['/login'])
    }

    this.queryservice.getUserProblems().subscribe((response: any)=>{
      if(response.success){
        this.problems = response.message;
      } else {
        alert("An Error Occured")
      }
    })
  }
 

}
