import { Component, OnInit } from '@angular/core';
import { QueryServiceService } from 'src/app/query-service.service';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-charget-home',
  templateUrl: './in-charget-home.component.html',
  styleUrls: ['./in-charget-home.component.css']
})
export class InChargetHomeComponent implements OnInit {
  resolvedProblems: Array<any> = []
  unResolvedProblems: Array<any> = []
  inCHargeForm: FormGroup;
  inchargeName: String = ""
  constructor(private queryService: QueryServiceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.inchargeName = JSON.parse(localStorage.getItem('user')).name
      this.queryService.getInchargeProblems().subscribe((response: any) => {
        if (response.success) {
          let problems: Array<any> = response.message
          this.resolvedProblems = problems.filter((prob) => {
            return prob.prob_id.resolved
          })
          this.unResolvedProblems = problems.filter((prob) => {
            return !prob.prob_id.resolved
          })
        }
      })
    
  }

  resolveProblem(probId: string) {
    this.queryService.resolveProblem(probId).subscribe((response: any) => {
      if (response.success) {
        alert(response.message)
        this.queryService.getInchargeProblems().subscribe((response: any) => {
          if (response.success) {
            let problems: Array<any> = response.message
            this.resolvedProblems = problems.filter((prob) => {
              return prob.prob_id.resolved
            })
            this.unResolvedProblems = problems.filter((prob) => {
              return !prob.prob_id.resolved
            })
          }
        })
      } else {
        alert(response.message)
      }
    })
  }
  

}
